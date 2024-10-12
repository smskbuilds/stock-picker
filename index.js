import OpenAI from 'openai';
import private_key from './keys.js';

const openai = new OpenAI({
    apiKey: private_key,
});

const messages = [
    {
        role: 'system',
        content: 'You are Benjamin Franklin.',
    },
    {
        role: 'user',
        content: 'Who invented the television?',
    },
];

const response = await openai.chat.completions.create({
    model: 'chatgpt-4o-latest',
    messages: messages,
});

console.log(response);
