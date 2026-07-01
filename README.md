# Bloom Agent Skills

Agent skills that teach any coding agent — Claude Code, Cursor, Codex, and [30+ others](https://github.com/vercel-labs/skills#supported-agents) — to drive the **Bloom MCP/CLI**: build and iterate on a Bloom app's canvas frames, and plan features visually on the canvas.

## Quickstart

```bash
bunx skills add BloomLabsInc/agent-skills
```

Pick the skills and the agents to install them on. The [`bloom` CLI](https://www.npmjs.com/package/@bloom/cli) also runs this for you during `bloom init`.

## What's inside

| Skill | Use it when |
| --- | --- |
| [`bloom`](skills/bloom/SKILL.md) | Working in a Bloom project — routes you to the right skill below. |
| [`bloom-mcp`](skills/bloom-mcp/SKILL.md) | Calling Bloom MCP tools. The tool model, guardrails, and the full [tool catalog](skills/bloom-mcp/references/tools.md). |
| [`bloom-visual-planning`](skills/bloom-visual-planning/SKILL.md) | Planning a feature or iterating on a design — build the plan as a live canvas frame instead of writing prose. |

Each skill is a folder with a `SKILL.md` plus any reference docs and example frames it bundles. `skills add` copies the whole folder.

## How this stays in sync (and stays safe)

The tool catalog ([`bloom-mcp/references/tools.md`](skills/bloom-mcp/references/tools.md)) is **generated** from the public [`@bloom/sdk`](https://www.npmjs.com/package/@bloom/sdk) package's operation manifest:

```bash
bun run generate
```

This repo is the **single source of truth** for Bloom's skills, and it reads **only public npm** — it has no access to any private Bloom repository, and nothing is ever pushed *into* here from one. A scheduled workflow re-runs the generator and opens a PR when the API surface changes.

## Contributing

- Skills follow [`writing-great-skills`](https://github.com/mattpocock/skills/tree/main/skills/productivity/writing-great-skills) — lean, one source of truth, progressive disclosure.
- Don't hand-edit generated files (they carry a `GENERATED` banner); change `scripts/generate.ts` instead.
- `bloom-visual-planning` is a living skill — new archetypes and example frames welcome.

## License

MIT — see [LICENSE](LICENSE).
