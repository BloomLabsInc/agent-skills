---
name: bloom-mcp
description: Use when calling Bloom MCP tools — write_files/edit_files/read_files/code_search on canvas frames, trigger_agent for codebase work, or whoami/list_projects/list_branches/list_canvas_pages to orient. The tool model, guardrails, and catalog.
---

# Using the Bloom MCP

The Bloom MCP has one governing idea: **frames, not files.** The file-shaped tools (`write_files`, `edit_files`, `read_files`, `delete_files`) operate on **canvas frames** — React TSX at `@bloom-frame/<uuid>` — *not* on your repo and *not* on the app's sandbox source. Get this wrong and you'll write to the wrong place or have a call rejected.

Full tool catalog (generated from the API): [`references/tools.md`](references/tools.md).

## Orient before you touch anything

Run these in order; each **must** return before the next:

1. `whoami` → confirms the token and what it can reach (`accessibleProjectCount`).
2. `list_projects` → pick `projectId`.
3. `list_branches` → pick `branchId` (note `isMain`).
4. `list_canvas_pages` → pick `canvasPageId`. **Required** when a branch has more than one page — otherwise calls fail with `MCP_PAGE_AMBIGUOUS`.

Completion criterion: you hold a concrete `{ projectId, branchId, canvasPageId }` from live calls — never invented IDs.

## Frames, not files — the rules that keep you out of the ditch

- **Frame paths are `@bloom-frame/<uuid>`.** To create one, write a `@bloom-frame/_new_<localName>` placeholder; the result echoes a `placeholderMintingMap` giving you the real UUID. Use that UUID from then on.
- **`@/<path>` is the app's sandbox, not your editor's repo.** Reading it is fine (`read_files`); **writing a sandbox path is rejected** (`MCP_SANDBOX_PATH_REJECTED`).
- **`kind`**: `artboard` (default) vs `canvasComponent` (importable from other frames). Set it on *create*; on overwrite it's ignored — promote later with `edit_files`.
- **`edit_files` needs the current content** — `read_files` the frame first, then edit against what's actually there.

## Frames vs. the agent — pick the right tool for the change

- **Editing what's on the canvas** (a design, a mockup, a plan frame) → `write_files` / `edit_files`. This is direct and immediate.
- **Full-stack or codebase work** (routes, backend, sandbox source, multi-file features) → `trigger_agent` on a branch. Don't try to hand-edit sandbox source through the canvas tools — you can't (`@/` writes are rejected), and the agent is the right instrument.

## Searching

`code_search` has two targets: `target: 'canvas'` (find frames) and `target: 'codebase'` (search the sandbox source). Say which you mean; they answer different questions.

## Reviewing

`post_comment` anchors a thread to a frame; `list_comments` reads a branch's threads (optionally filtered by `frameId`). Use them to leave and pick up review feedback in place.
