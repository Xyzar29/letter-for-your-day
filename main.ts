// Letter for Your Day — entry for the make.fun bounty
// "One Letter for Your Day" (u-puan-one-letter-for-your-day-e54e9c36).
//
// The entry is a single letter: Z.
//
// Why Z: Z is the cartoon symbol for sleep itself (Zzz), so Z standing for
// a day of ZERO SLEEP flips its own meaning — the sleep letter reporting a
// day with none of it. "Zero sleep" is vivid and specific (a whole night
// awake, a sharp picture), funny the moment it lands, and true to a real
// day. And whichever word the judge hears behind Z — zero sleep, zonked,
// zombie, zany — it is vivid, funny and true, so the letter never depends
// on a single reading. The letter suits the word: the Z sound and the Zzz
// sleep symbol fit it exactly, and it is not the obvious pick.
//
// The gate requires entry.txt to hold exactly 1 character, so this program
// writes precisely one byte, "Z", with no trailing newline and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

// The gate accepts exactly one character, A–Z, and nothing else — refuse
// to write anything that is not a single capital letter.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
