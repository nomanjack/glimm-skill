---
type: llm
focus: trace
weight: 1
---

The state update that shows the Pro plan (setPlan('pro')) runs inside the callback passed to sweep(), or inside change when using GlimmScope's play(), and is not called before it. Anything that belongs to the result, such as the Active badge, depends on that same state.
