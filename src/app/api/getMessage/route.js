require('dotenv').config()
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_APIKEY,
});

let assistant_id = process.env.ASSISTANT_ID


export async function POST(req) {

    try {

        const { prompt } = await req.json()
        const thread = await openai.beta.threads.create({
            messages: [
                { role: 'user', content: prompt },
            ]
        })

        let threadId = thread.id

        let run = await openai.beta.threads.runs.create(threadId, {
            assistant_id: assistant_id
        })

        //let run2 = await openai.beta.threads.runs.retrieve(threadId, run.id)
        while (run.status !== "completed") {
            run = await openai.beta.threads.runs.retrieve(threadId, run.id)
            await new Promise(resolve => setTimeout(resolve, 5000))
        }

        let message_response = await openai.beta.threads.messages.list(threadId)
        let lastMessage = message_response.data[0]
        return Response.json({ result: lastMessage.content[0].text.value });
    }

    catch (error) {
        console.log(error)
        return Response.json({ error: error.message });
    }
}
