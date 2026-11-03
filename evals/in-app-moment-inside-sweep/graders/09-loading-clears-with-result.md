---
type: llm
focus: trace
weight: 1
---

On success, the button's loading state is cleared inside the sweep callback, or left alone because the button goes away with the result. It is not cleared right after calling sweep(), for example in a finally block, because the old page would flip back to its idle look before the band reveals the new one.
