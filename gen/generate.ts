import 'dotenv/config';
import { generateText } from 'ai';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';

const REPO_ROOT = join(import.meta.dirname, '..');
const SOURCE_DIR = join(REPO_ROOT, 'logos');
const OUTPUT_DIR = join(REPO_ROOT, 'sidecar-logos');
const MODEL = 'google/gemini-3.1-flash-image-preview';

function styleHint(filename: string): string {
  const stem = basename(filename, '.png');
  const parts = stem.split('_').slice(2).join(' ');
  return parts || 'modern logo';
}

function buildPrompt(filename: string): string {
  const style = styleHint(filename);
  return `Transform this castle logo into a logo for a startup called "sidecar".
Keep the EXACT same visual style, color palette, line weight, composition, lighting, and graphic treatment as the source image — only the subject changes.

Subject: completely replace the castle with a motorcycle-with-sidecar silhouette (a classic motorcycle attached to a single-wheel sidecar carriage). No castles, towers, turrets, battlements, or fortifications anywhere in the image. Render the motorcycle+sidecar in the same "${style}" style as the source.

Wordmark rule (critical): the ONLY text in the entire image is the single word "sidecar" (lowercase). Do NOT add any tagline, year, "EST", "BAR & GRILL", "LODGE", company descriptor, slogan, motto, address, or any other text or characters. Just "sidecar" alone, in a typeface that matches the source's overall design language. Place it where text would naturally sit given the source layout.

Composition rule: the logo must stand alone on the source's background treatment. Do NOT wrap it in any mockup, frame, phone screen, app grid, billboard, storefront, signage, or contextual scene unless the source itself is literally that kind of scene (e.g. a neon-sign-photo source can stay a sign photo, but a plain app-icon source must NOT be shown sitting on a fake phone home screen).

The output must read as a sibling design to the input — same family, same designer, different subject. Square 1:1 aspect ratio.`;
}

async function generateOne(sourceFilename: string): Promise<void> {
  const sourcePath = join(SOURCE_DIR, sourceFilename);
  const outputFilename = sourceFilename.replace(/^castle_/, 'sidecar_');
  const outputPath = join(OUTPUT_DIR, outputFilename);

  if (existsSync(outputPath)) {
    console.log(`[skip] ${outputFilename} already exists`);
    return;
  }

  console.log(`[gen]  ${sourceFilename} -> ${outputFilename}`);
  const imageBytes = await readFile(sourcePath);

  const result = await generateText({
    model: MODEL,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'image', image: imageBytes, mediaType: 'image/png' },
          { type: 'text', text: buildPrompt(sourceFilename) },
        ],
      },
    ],
  });

  const imageFile = result.files?.find((f) => f.mediaType?.startsWith('image/'));
  if (!imageFile) {
    console.error(`[fail] ${sourceFilename}: no image in response. Text: ${result.text?.slice(0, 200)}`);
    return;
  }

  const bytes = imageFile.uint8Array ?? Buffer.from(imageFile.base64, 'base64');
  await writeFile(outputPath, bytes);
  console.log(`[done] ${outputFilename} (${bytes.length} bytes)`);
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: tsx generate.ts <castle_filename> [...]');
    process.exit(1);
  }

  const concurrency = Number(process.env.CONCURRENCY ?? 5);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, args.length) }, async () => {
      while (cursor < args.length) {
        const arg = args[cursor++];
        try {
          await generateOne(arg);
        } catch (err) {
          console.error(`[error] ${arg}:`, err instanceof Error ? err.message : err);
        }
      }
    }),
  );
}

main();
