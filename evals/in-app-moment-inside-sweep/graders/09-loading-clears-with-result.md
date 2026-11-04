---
type: llm
focus: trace
weight: 1
---

On success, the button's loading state is not cleared before the band reveals the result. It is cleared inside the sweep callback, in GlimmScope's change or onBurst, or left alone because the button goes away with the result. It is not cleared right after calling sweep() or play(), for example in a finally block.
