---
name: bloom
description: Route work in a Bloom project to the current deployed Bloom MCP skills without copying their changing operational or visual-planning guidance.
---

# Bloom skill router

Use the connected Bloom MCP's `skills` tool as the source of truth:

- For project discovery, canvas operations, comments, screenshots, or delegation, load `skills({ name: "bloom-mcp" })`.
- For an interactive explanation, architecture diagram, migration, queue, permission flow, incident, workflow, or trade-off plan, load `bloom-mcp` and then `skills({ name: "bloom-visual-planning" })`.
- Fetch supporting files only from the resource manifest returned with a named skill.

Stop and report a version mismatch if the required deployed skill is absent. Do not reconstruct old tool catalogs or canvas conventions from this bootstrap.
