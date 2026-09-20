---
name: bloom-visual-planning
description: Bootstrap Bloom's current interactive-explanation system for complex engineering and product plans on the canvas. Fetches the deployed canonical skill and its reviewed examples.
---

# Bloom visual-planning bootstrap

The deployed Bloom MCP owns the complete, current visual-planning skill. This package only provides a stable discovery route.

1. Load `bloom-mcp` first with `skills({ name: "bloom-mcp" })` for current tool mechanics and verification rules.
2. Load the explainer workflow with `skills({ name: "bloom-visual-planning" })`.
3. Use the returned resource manifest to fetch only the pattern, implementation, research, or example resources required for the task.
4. Follow the skill's least-powerful-form ladder and runtime gates; never assume a specialist renderer is available merely because this bootstrap is installed.
5. Verify the finished canvas artifact through the workflow returned by `bloom-mcp`.

If either deployed skill is unavailable, report the missing capability instead of substituting stale copied guidance.
