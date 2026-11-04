---
type: llm
focus: trace
weight: 1
---

The busy state is set on the press, before play(), and cleared in onBurst and onFail. It isn't cleared right after play() or in a finally block.
