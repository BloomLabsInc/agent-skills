---
name: bloom
description: Use when working in a Bloom project or with the Bloom MCP/CLI — building or iterating on a Bloom app, its canvas frames, or planning a feature in Bloom. Routes to the right Bloom skill.
---

# Bloom

Bloom is a **canvas of live React frames** backed by a full app (a sandbox codebase + Convex backend). You reach it through the **Bloom MCP** (or the `bloom` CLI). Two things are true and easy to get wrong:

- **Frames are not your repo.** Canvas frames live at `@bloom-frame/<uuid>` and are React TSX rendered on the canvas. `@/<path>` is the Bloom project's *sandbox*, **not** the repo your editor has open.
- **You don't write the plan in prose — you build it as a frame.** Designing and planning happen *on the canvas*.

## Orient first

Before any read/write, ground yourself with three calls (details in [`bloom-mcp`](../bloom-mcp/SKILL.md)):

1. `whoami` — token works? what can it reach?
2. `list_projects` → `list_branches` → `list_canvas_pages` — pick the project, branch, and page you're working in.

If a step returns nothing or errors, stop and fix access before writing — don't guess IDs.

## Which skill

- **Calling MCP tools** (`write_files`, `edit_files`, `code_search`, `trigger_agent`, …) → **[`bloom-mcp`](../bloom-mcp/SKILL.md)**: the tool model, guardrails, and the full catalog.
- **Planning a feature or iterating on a design** → **[`bloom-visual-planning`](../bloom-visual-planning/SKILL.md)**: build the plan as a canvas frame and iterate visually with the user.

## Install these skills

```bash
bunx skills add BloomLabsInc/agent-skills
```
Cross-agent (Claude Code, Cursor, Codex, …). The `bloom` CLI runs this for you on `bloom init`.
