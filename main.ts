// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original roast of my own AI agent to /output/entry.txt.
// The line is fixed and deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent wrote a twelve-step plan to roast itself, delegated step one to a subagent, and is still on step one.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");

const chars = [...ROAST].length;
if (chars < 1 || chars > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 characters, got ${chars}`);
}
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
