// Load environment variables from .env file
require('dotenv').config();
const jwt = require("jsonwebtoken");
// Import OpenAI library and database configuration
const OpenAI = require("openai");
const { poolPromise, sql } = require("../../../../lib/dbConfig");
const { v4: uuidv4 } = require('uuid');

// Create a new instance of OpenAI with the API key from .env
const openai = new OpenAI({
    apiKey: process.env.OPENAI_APIKEY,
});

// Get the assistant ID from .env
const assistant_id = process.env.ASSISTANT_ID;

// Create a map to keep track of the number of requests made from each IP address
const idToRequestCount = new Map()

// Create an object to define the rate limiting parameters
const rateLimiter = {
    windowStart: Date.now(), // Start of the current rate limiting window
    windowSize: 10000, // Size of the rate limiting window in milliseconds
    maxRequests: 10, // Maximum number of requests allowed within the window
}

// Function to check if an IP address has exceeded the rate limit
const limit = (ip) => {
    const now = Date.now() // Get the current time
    const isNewWindow = now - rateLimiter.windowStart > rateLimiter.windowSize // Check if it's a new window

    if (isNewWindow) { // If it's a new window, reset the counter
        rateLimiter.windowStart = now
        idToRequestCount.set(ip, 0)
    }

    const currentRequestCount = idToRequestCount.get(ip) || 0 // Get the current request count for the IP address
    if (currentRequestCount >= rateLimiter.maxRequests) { // If the request count exceeds the limit, return true
        return true
    }

    idToRequestCount.set(ip, currentRequestCount + 1) // Increment the request count for the IP address

    return false // If the request count is within the limit, return false
}



// Export an asynchronous function to handle POST requests
export async function POST(req, res) {
    const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? 'unknown' // Get the IP address of the request
    const isRateLimited = limit(ip) // Check if the IP address has exceeded the rate limit

    if (isRateLimited) { // If the rate limit is exceeded, return a 429 status code
        return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    else {

        const authorizationHeader = req.headers.get('authorization')
        const token = authorizationHeader && authorizationHeader.split(' ')[1];
        if (!token) {
            return new Response(JSON.stringify({
                message: 'Unauthorized'
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded.role !== 'user') {
                throw new Error('Unauthorized');
            }
        }

        catch (error) {
            return new Response(JSON.stringify({
                message: 'Unauthorized'
            }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        try {
            const { prompt } = await req.json(); // Get the prompt from the request body

            // Validate that the prompt is not empty and has the correct format
            if (!prompt || typeof prompt !== 'string') {
                return new Response(JSON.stringify({ error: 'Invalid input' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // Create a new thread in OpenAI with the user's prompt
            const thread = await openai.beta.threads.create({
                messages: [
                    { role: 'user', content: prompt },
                ]
            });

            const threadId = thread.id;

            let run = await openai.beta.threads.runs.create(threadId, {
                assistant_id: assistant_id
            });

            while (run.status !== "completed") {
                run = await openai.beta.threads.runs.retrieve(threadId, run.id);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }

            const message_response = await openai.beta.threads.messages.list(threadId);

            const lastMessage = message_response.data[0]; // Get the last message from the OpenAI response

            const newEntry = {
                id: uuidv4(), // Generate a new UUID for the entry
                userMessage: prompt, // Store the user's prompt
                assistantMessage: lastMessage?.content[0]?.text?.value || "No response", // Store the assistant's response or "No response" if none is available
                createdAt: new Date(), // Store the current date and time
                origin: "website"
            };

            const pool = await poolPromise; // Get the database connection pool
            const result = await pool.request()
                .input("id", sql.VarChar, newEntry.id)
                .input("userMessage", sql.VarChar, newEntry.userMessage)
                .input("assistantMessage", sql.VarChar, newEntry.assistantMessage)
                .input("createdAt", sql.DateTime, newEntry.createdAt)
                .input("origin", sql.VarChar, newEntry.origin)
                .query("INSERT INTO [dbo].[Chatbot_Messages] ([id], [userMessage], [assistantMessage], [createdAt], [origin]) VALUES (@id, @userMessage, @assistantMessage, @createdAt, @origin)"); // Insert the new entry into the database

            return new Response(JSON.stringify({
                result: lastMessage?.content[0]?.text?.value || "No response"
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.error('Error processing request:', error); // Log any errors that occur during the request
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }


    }
}

