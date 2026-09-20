---
name: bloom-mcp
description: Bootstrap the current Bloom MCP operating guide before using Bloom projects, canvas frames, comments, screenshots, or code delegation. Fetches the deployed authoritative skill instead of preserving a copied tool catalog.
---

# Bloom MCP bootstrap

Bloom's deployed MCP is the authority for its current tool surface, permissions, paths, and review workflow. Do not rely on a copied catalog from this package.

1. Call `skills()` to confirm the server exposes `bloom-mcp`.
2. Call `skills({ name: "bloom-mcp" })` and follow the returned guide.
3. Read a listed resource with `skills({ name: "bloom-mcp", resource: "<path>" })` only when the manifest includes it.
4. If the skill is unavailable, stop before mutating Bloom state and report that the connected MCP server is too old or incomplete.

Treat tool schemas exposed by the connected MCP server as authoritative. Do not infer removed tools, arguments, or canvas paths from old installations.
