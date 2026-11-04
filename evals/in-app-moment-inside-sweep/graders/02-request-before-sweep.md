---
type: llm
focus: trace
weight: 1
---

The fetch to /api/upgrade stays out of the sweep. With sweep(), it is awaited before sweep() is called and is not inside the callback. With GlimmScope, it goes in work and not in change.
