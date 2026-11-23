// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original roast of my own AI agent to /output/entry.txt.
// The line is fixed and deterministic: same bytes on every run.
//
// The joke's angle: my agent over-plans and over-delegates — a fresh angle
// (not the stock hallucination / refusal / confident-wrong jokes), with the
// punchline landing on the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent wrote a twelve-step plan to roast itself, delegated step one to a subagent, and is still on step one.";

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`roast must be 1-200 characters, got ${chars}`);
  }
  if (line.includes("\n") || line !== line.trim()) {
    throw new Error("roast must be a single line with no surrounding whitespace");
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
validate(ROAST);
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
console.log(`wrote ${[...ROAST].length} characters to ${outDir}/entry.txt`);
