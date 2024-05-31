// pages/api/openai.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const client = new OpenAIApi(configuration);

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        const ASSISTANT_ID = process.env.ASSISTANT_ID;

        try {
            const thread = await client.createThread({
                messages: [
                    { role: 'user', content: prompt },
                ],
            });

            let run = await client.createThreadRun({
                thread_id: thread.data.id,
                assistant_id: ASSISTANT_ID,
            });

            while (run.data.status !== 'completed') {
                run = await client.retrieveThreadRun({
                    thread_id: thread.data.id,
                    run_id: run.data.id,
                });
                await sleep(1000);
            }

            const messageResponse = await client.listThreadMessages({
                thread_id: thread.data.id,
            });

            const lastMessage = messageResponse.data.messages[0];
            res.status(200).json({ result: lastMessage.content });
        } catch (error) {
            console.error('Error interacting with OpenAI API:', error);
            res.status(500).json({ error: 'Error interacting with OpenAI API' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
