# Bloom Agent Skills

Agent skills that teach any coding agent — Claude Code, Cursor, Codex, and [30+ others](https://github.com/vercel-labs/skills#supported-agents) — to drive the **Bloom MCP/CLI**: build and iterate on a Bloom app's canvas frames, and plan features visually on the canvas.

## Quickstart

```bash
bunx skills add BloomLabsInc/agent-skills
```

Pick the skills and the agents to install them on. The [`bloom` CLI](https://www.npmjs.com/package/@bloom/cli) also runs this for you during `bloom init`.

## What's inside

| Skill                                                            | Use it when                                                                                                            |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [`bloom`](skills/bloom/SKILL.md)                                 | Working in a Bloom project — routes you to the right skill below.                                                      |
| [`bloom-mcp`](skills/bloom-mcp/SKILL.md)                         | Calling Bloom MCP tools. Fetches the current operating guide from the connected server.                                |
| [`bloom-visual-planning`](skills/bloom-visual-planning/SKILL.md) | Building an interactive explanation or complex plan on the canvas. Fetches the current workflow and reviewed examples. |

Each installed skill is deliberately small. It bootstraps the full, version-matched skill from Bloom's deployed MCP instead of copying guidance that can drift from the server.

## How this stays in sync

The connected Bloom MCP is the authority. Its `skills` tool returns the current guide and an allowlisted resource manifest. These public packages are stable bootstrap pointers, so updating the server does not leave installed agents with a conflicting tool catalog or visual-planning system.

Validate that the bootstraps remain thin and free of known stale conventions:

```bash
bun run check
```

The validation is local and requires no Bloom credentials or private source access.

## Contributing

- Skills follow [`writing-great-skills`](https://github.com/mattpocock/skills/tree/main/skills/productivity/writing-great-skills) — lean, one source of truth, progressive disclosure.
- Keep these skills as routing layers. New operational guidance, patterns, and examples belong in the deployed canonical bundles.
- Do not add copied tool catalogs, renderer defaults, or canvas paths here.

## License

MIT — see [LICENSE](LICENSE).
