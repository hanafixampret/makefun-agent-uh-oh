import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// "404" — the machine's own confession: not found. No caption, no excuse,
// just the error code an agent blurts when it is completely lost.
const entry = "404";

if (!entry || entry.trim().length === 0 || entry.length > 99) {
  throw new Error("entry must be 1-99 non-blank characters");
}

// Single-word gate: an agent's uh-oh is one token, nothing attached.
// A word with a space in it is a sentence pretending to be a word.
if (/\s/.test(entry)) {
  throw new Error("entry must be a single word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
