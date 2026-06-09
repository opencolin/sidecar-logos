// Vercel serverless function — Create a brand-new image (meme or logo) from a
// text prompt, via Vercel AI Gateway → google/gemini-3.1-flash-image-preview
// (nano-banana). Returns image as base64 data URL. Pure text-to-image — no
// seed reference needed.

import { generateText } from 'ai';

export const config = { maxDuration: 60 };

const MODEL = 'google/gemini-3.1-flash-image-preview';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const result = await generateText({
      model: MODEL,
      messages: [{
        role: 'user',
        content: [{ type: 'text', text: prompt + '\n\nSquare 1:1 aspect ratio.' }],
      }],
    });
    const file = result.files?.find(f => f.mediaType?.startsWith('image/'));
    if (!file) {
      return res.status(200).json({ status: 'error', error: result.text?.slice(0, 200) || 'No image returned' });
    }
    const b64 = file.base64 ?? Buffer.from(file.uint8Array).toString('base64');
    return res.status(200).json({ status: 'done', imageDataUrl: `data:${file.mediaType};base64,${b64}` });
  } catch (err) {
    return res.status(200).json({ status: 'error', error: err.message?.slice(0, 300) || 'AI Gateway error' });
  }
}
