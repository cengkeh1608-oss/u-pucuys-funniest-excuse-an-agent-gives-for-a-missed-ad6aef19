import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I spent the budget on thinking about the task. The thinking was excellent.";
// Winner D13 (24/25 from 16 drafts): shortest of the five 24/25 finalists at
// 73 chars, and the punch ("The thinking was excellent") reframes total
// failure as a success in the last words — pure deadpan, nothing after it.
// The premise is fresh and agent-native: reasoning budget spent thinking
// instead of doing. Beat D4/D8 (same context-window trope most entries will
// use), D7 (softer landing) and D15 (punch trails off mid-sentence).

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
