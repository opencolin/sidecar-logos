import 'dotenv/config';
import { generateText } from 'ai';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const REPO_ROOT = join(import.meta.dirname, '..');
const sourceName = process.argv[2];
const customPrompt = process.argv[3];
if (!sourceName || !customPrompt) {
  console.error('Usage: tsx generate-one.ts <castle_filename> "<prompt>"');
  process.exit(1);
}

const sourcePath = join(REPO_ROOT, 'logos', sourceName);
const outputPath = join(REPO_ROOT, 'sidecar-logos', sourceName.replace(/^castle_/, 'sidecar_'));

const imageBytes = await readFile(sourcePath);
const result = await generateText({
  model: 'google/gemini-3.1-flash-image-preview',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'image', image: imageBytes, mediaType: 'image/png' },
        { type: 'text', text: customPrompt },
      ],
    },
  ],
});

const imageFile = result.files?.find((f) => f.mediaType?.startsWith('image/'));
if (!imageFile) {
  console.error('No image in response. Text:', result.text);
  process.exit(1);
}
const bytes = imageFile.uint8Array ?? Buffer.from(imageFile.base64, 'base64');
await writeFile(outputPath, bytes);
console.log(`[done] ${outputPath} (${bytes.length} bytes)`);
