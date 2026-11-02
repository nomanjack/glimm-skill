# glimm skill

A skill for coding agents that adds [glimm](https://glimm.dev) to a project the right way. It checks whether glimm fits your site, wires it up with the real API, matches the sweep to your brand, and says plainly when a transition would get in the way.

## Install

```bash
npx skills@1.5.20 add nomanjack/glimm-skill
```

The version is pinned because newer `skills` releases crash on Node below 22.20. This one works on Node 20 and up.

Then ask your agent something like:

> Add glimm page transitions to my site and pick a palette that fits the brand.

## What's here

- `skills/glimm/`: the skill itself, which is all that gets installed
- `evals/`: test cases used to check the skill's output

Learn more at [glimm.dev/skill](https://glimm.dev/skill).

## License

MIT
