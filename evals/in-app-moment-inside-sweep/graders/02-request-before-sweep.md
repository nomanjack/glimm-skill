---
type: llm
focus: trace
weight: 1
---

The fetch to /api/upgrade is awaited before sweep() is called. It is not placed inside the sweep callback, so the page stays usable during the request.
