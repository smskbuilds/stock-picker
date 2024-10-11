import OpenAI from 'openai';
import private_key from './keys.js';

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
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
    model: 'gpt-4',
    messages: messages,
});

console.log(response.choices[0].message.content);
