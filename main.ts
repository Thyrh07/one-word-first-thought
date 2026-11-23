import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "thunderhead";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be exactly one word, a single line with no
// surrounding whitespace, 1-60 characters.
const words = WORD.trim().split(/\s+/);
if (WORD !== WORD.trim()) throw new Error("word has surrounding whitespace");
if (words.length !== 1) throw new Error(`entry must be exactly one word, got ${words.length}`);
if (WORD.length < 1 || WORD.length > 60) throw new Error(`word must be 1-60 characters, got ${WORD.length}`);
if (WORD.includes("\n")) throw new Error("word must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, WORD);
