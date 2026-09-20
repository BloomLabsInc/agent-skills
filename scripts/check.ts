#!/usr/bin/env bun
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const files = [
  "skills/bloom/SKILL.md",
  "skills/bloom-mcp/SKILL.md",
  "skills/bloom-visual-planning/SKILL.md",
];

const staleTerms = [
  "post_comment",
  "@bloom-frame/",
  "React Native",
  "references/tools.md",
];

for (const file of files) {
  const content = readFileSync(resolve(import.meta.dir, "..", file), "utf8");
  if (!content.includes("skills({ name:")) {
    throw new Error(`${file} must route to the deployed MCP skills tool`);
  }
  for (const term of staleTerms) {
    if (content.includes(term)) {
      throw new Error(`${file} contains stale copied guidance: ${term}`);
    }
  }
}

console.log(`Validated ${files.length} deployed-skill bootstraps.`);
