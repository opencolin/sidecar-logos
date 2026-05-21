#!/usr/bin/env python3
"""Emit LOGOS array entries for the 500 v3 (no-motorcycle) logos.

IDs 1501-2000 (clean separation from v1 at 1-472 and v2 at 1001-1500).
"""
import json
from pathlib import Path

PROMPTS = Path(__file__).parent / "prompts-v3.json"
OUT_JS = Path(__file__).parent / "logos-v3-entries.js"

prompts = json.loads(PROMPTS.read_text())

def slug_to_label(slug: str) -> str:
    parts = slug.split("_")[1:]
    chunks = [" ".join(w.capitalize() for w in p.split("-")) for p in parts]
    return " · ".join(chunks)

lines = []
for p in prompts:
    entry_id = 1500 + p["id"]
    label = slug_to_label(p["slug"])
    lines.append(
        f'  {{ id: {entry_id}, file: "{p["slug"]}.png", label: "{label}", dir: "logos-v3" }},'
    )

OUT_JS.write_text("\n".join(lines) + "\n")
print(f"Wrote {len(lines)} v3 LOGOS entries -> {OUT_JS}")
