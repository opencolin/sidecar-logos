#!/usr/bin/env python3
"""Emit LOGOS array entries for the 500 v2 logos.

IDs 1001-1500 (offset by 1000 to clearly separate from the original 472).
Each entry includes dir: "logos-v2" so the URL builder knows where to load.
"""
import json
from pathlib import Path

PROMPTS = Path(__file__).parent / "prompts-v2.json"
OUT_JS = Path(__file__).parent / "logos-v2-entries.js"
OUT_JSON = Path(__file__).parent / "logos-v2-entries.json"

prompts = json.loads(PROMPTS.read_text())

def slug_to_label(slug: str) -> str:
    # "001_bike-classic_mono-flat" -> "Bike Classic · Mono Flat"
    parts = slug.split("_")[1:]  # drop the numeric prefix
    chunks = []
    for p in parts:
        words = [w.capitalize() for w in p.split("-")]
        chunks.append(" ".join(words))
    return " · ".join(chunks)

entries = []
for p in prompts:
    entry_id = 1000 + p["id"]
    label = slug_to_label(p["slug"])
    entries.append({
        "id": entry_id,
        "file": f"{p['slug']}.png",
        "label": label,
        "dir": "logos-v2",
    })

OUT_JSON.write_text(json.dumps(entries, indent=2))

# Also emit as a JS literal for direct injection
lines = []
for e in entries:
    lines.append(
        f'  {{ id: {e["id"]}, file: "{e["file"]}", label: "{e["label"]}", dir: "logos-v2" }},'
    )
OUT_JS.write_text("\n".join(lines) + "\n")
print(f"Wrote {len(entries)} v2 LOGOS entries")
print(f"  -> {OUT_JS}")
print(f"  -> {OUT_JSON}")
print(f"First: {entries[0]}")
print(f"Last:  {entries[-1]}")
