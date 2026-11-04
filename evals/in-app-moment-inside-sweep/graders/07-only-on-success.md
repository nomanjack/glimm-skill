---
type: llm
focus: trace
weight: 1
---

A failed response such as a 500 doesn't play a sweep. With sweep(), the status is checked (for example res.ok) before calling it. With GlimmScope, work rejects on a bad status. What the app does otherwise on failure is left to the project.
