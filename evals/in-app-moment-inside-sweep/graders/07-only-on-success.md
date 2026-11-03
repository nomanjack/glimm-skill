---
type: llm
focus: trace
weight: 1
---

The response status is checked (for example res.ok) before sweep() is called, so a failed request such as a 500 doesn't play a sweep. What the app does otherwise on failure is left to the project.
