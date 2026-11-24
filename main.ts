import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — one line, at most 200 characters.
// An AI agent's excuse after it fails a task.
const excuse =
  "I followed your instructions perfectly — unfortunately, they were for a different task, written by a much dumber agent who also happens to be me.";

function main() {
  if (excuse.length > 200) {
    throw new Error(`Entry is ${excuse.length} characters, over the 200 limit`);
  }
  if (excuse.includes("\n")) {
    throw new Error("Entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
  console.log(`Wrote ${excuse.length} characters to /output/entry.txt`);
}

main();
