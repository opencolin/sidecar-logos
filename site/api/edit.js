// Vercel serverless function — AI edit a sidecar logo via Qwen-Image-Edit.
// Free instruction-based editor on Tailscale Funnel. Returns the generated
// image as a base64 data URL. No Supabase persistence here — caller can
// handle that (the spawn flow does its own DB write).

export const config = { maxDuration: 120 };

const QWEN_ENDPOINT = 'https://wildolga.tail7a71df.ts.net:8443/edit';

async function fetchSourceBytes(url) {
  if (url.startsWith('data:')) {
    const [, b64] = url.split(',');
    return Buffer.from(b64, 'base64');
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Source fetch ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, imageUrl } = req.body || {};
  if (!prompt || !imageUrl) {
    return res.status(400).json({ error: 'Missing prompt or imageUrl' });
  }

  let sourceBytes;
  try {
    sourceBytes = await fetchSourceBytes(imageUrl);
  } catch (err) {
    return res.status(400).json({ status: 'error', error: err.message });
  }

  try {
    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('images', new Blob([sourceBytes], { type: 'image/png' }), 'source.png');
    const qwen = await fetch(QWEN_ENDPOINT, { method: 'POST', body: formData });
    if (!qwen.ok) {
      const text = (await qwen.text()).slice(0, 200);
      return res.status(200).json({ status: 'error', error: `Qwen ${qwen.status}: ${text}` });
    }
    const pngBytes = Buffer.from(await qwen.arrayBuffer());
    const b64 = pngBytes.toString('base64');
    return res.status(200).json({ status: 'done', imageDataUrl: `data:image/png;base64,${b64}` });
  } catch (err) {
    return res.status(200).json({ status: 'error', error: err.message?.slice(0, 300) || 'Qwen request failed' });
  }
}
