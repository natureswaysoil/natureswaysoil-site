// Simple OpenAI chat API route for Next.js
// Add your OpenAI API key to an environment variable

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not set' });
  }
  const { messages } = req.body;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 150,
    }),
  });
  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || 'No response.';
  res.status(200).json({ reply });
}
