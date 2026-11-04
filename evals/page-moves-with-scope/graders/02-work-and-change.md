---
type: llm
focus: trace
weight: 1
---

play() gets the fetch in work and setPlan('pro') in change. The request isn't awaited before play() and the plan isn't set outside change.
