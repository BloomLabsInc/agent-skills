# Visual planning patterns

Archetypes for a plan frame. Pick by the *shape of the decision*, not by taste. Each is plain React TSX (a canvas frame), so anything React can do is on the table — charts, animation, 3D, live Convex queries via the Bloom SDK.

## Decision matrix — comparing discrete options

**When:** you're choosing between a small set of named options (A / B / C) across a few axes (cost, latency, effort, risk).

**What makes it a frame, not a table:** the axes have *weights the reader can change*, and the options *re-rank live* as weights move. The reader discovers which axis actually drives the choice by turning the knobs — that exploration is the point, and their final weighting is the record of *why* they chose.

**Example:** [`assets/examples/decision-matrix-frame.tsx`](../assets/examples/decision-matrix-frame.tsx) — options × weighted axes, drag a weight, rows reorder, the winner is highlighted.

## Concept explainer — how something works / a sequence

**When:** the plan hinges on the reader understanding a flow or mechanism (a request path, a state machine, a migration's stages) before they can judge it.

**What makes it a frame:** it's *steppable* — the reader advances through stages and sees state change, rather than reading a static diagram. Reveal one idea at a time; don't dump the whole system at once.

**Example:** [`assets/examples/concept-explainer-frame.tsx`](../assets/examples/concept-explainer-frame.tsx) — a stepper that walks a flow, one stage highlighted at a time with its explanation.

## Trade-off space — exploring a design with knobs

**When:** the decision isn't "pick an option" but "find a point in a continuous space" — e.g. how much to cache, how many workers, where to draw a boundary.

**What makes it a frame:** input knobs (sliders/toggles) feed a small model that recomputes *consequences* (cost, latency, complexity) live in a sidebar. The agent seeds a starting point; the reader moves the knobs; the resting position and its computed consequences are the canonical decision.

**Build note:** keep the consequence model simple and legible (a few arithmetic relationships shown near the knobs), so the reader trusts what they're seeing. A black-box number is worse than no number.

---

**Shared rules (all archetypes):**
- Populate with the *real* options/axes/stages, never placeholders.
- Prefer live data (a Convex query) over hardcoded numbers that will silently rot.
- The test for every element: does rearranging an input visibly change an output? If not, it's decoration — cut it.
