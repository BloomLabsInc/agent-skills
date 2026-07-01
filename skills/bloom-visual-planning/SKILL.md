---
name: bloom-visual-planning
description: Use when planning a feature, comparing options, or iterating on a design in Bloom — instead of writing a prose plan, build the plan as a live canvas frame the user can see and manipulate. Visual planning, decision matrices, design iteration on the canvas.
---

# Visual planning — a plan is a frame

The move: **don't hand the user a wall of prose — build the plan as a frame.** A plan is a TSX live fragment on the Bloom canvas — the same React the app runs — so it can hold a decision matrix with live axes, an animated concept explainer, or a draggable trade-off space. The canvas **is** the plan editor; there is no second tool and no plan DSL. The user reads by looking, and edits by direct manipulation.

This is a **living skill** — the archetypes and examples will grow. Treat the examples as starting points, not a fixed menu.

## Steps

1. **Align before you draw.** Get the decision sharp enough to be worth a frame: what is being chosen, what the options are, what axes actually decide it. If it's fuzzy, interview first (a grilling pass) — a plan frame built on a vague question just renders the vagueness prettily.
   *Done when:* you can name the options and the 2–4 axes that separate them.
2. **Pick the archetype** that fits the decision, then read its pattern + example in [`references/visual-planning-patterns.md`](references/visual-planning-patterns.md):
   - comparing discrete options → **decision matrix** ([`assets/examples/decision-matrix-frame.tsx`](assets/examples/decision-matrix-frame.tsx))
   - explaining how something works / a sequence → **concept explainer** ([`assets/examples/concept-explainer-frame.tsx`](assets/examples/concept-explainer-frame.tsx))
   - exploring a design space with knobs → **trade-off space** (pattern doc)
3. **Seed the frame.** Adapt an example into a new canvas frame with `write_files` (a `@bloom-frame/_new_<name>` placeholder — see [`bloom-mcp`](../bloom-mcp/SKILL.md)). Populate it with the *real* options and axes, not lorem. Prefer live data (a Convex query via the Bloom SDK) over numbers you typed once and will forget to update.
   *Done when:* the frame renders the actual decision, and every option/axis is real.
4. **Iterate visually with the user.** Hand them the frame, not a paragraph. Let them re-rank, drag a slider, swap a variant — the frame recomputes, and those edits are the canonical record of the decision. Adjust the frame with `edit_files` as the conversation moves.
   *Done when:* the user has converged on the frame, and it reflects the choice they made.

## Make it good, not slop

The frame is the deliverable — treat it like design, not a dump.

- **Earn every element.** A matrix with one axis is a list; if the frame isn't showing a *relationship* (option × axis, cause → effect, knob → consequence), it shouldn't be a frame.
- **Show consequence, not decoration.** The value is that rearranging inputs visibly changes outputs. Wire that, or it's a static picture with extra steps.
- **Avoid the tells of generated UI:** centered-everything, purple gradients, uniform rounded cards, Inter-for-everything. Match the app's own visual language.

## Reference

- Archetypes + when each applies → [`references/visual-planning-patterns.md`](references/visual-planning-patterns.md)
- Runnable starting points → [`assets/examples/`](assets/examples/)
