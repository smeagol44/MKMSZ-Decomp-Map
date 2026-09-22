# MKMSZ Decompilation Readiness Map

Interactive decompilation-readiness heatmap for **Mortal Kombat Mythologies: Sub-Zero (N64, USA Rev. 0 / NMYE)**, derived from the ongoing [MKMSZR](https://github.com/smeagol44/MKMSZ-Randomizer) reverse-engineering effort.

Public site:

**https://smeagol44.github.io/KMSZ-Decomp-Map/**

## What the colors mean

- **Green** — sufficiently understood to reproduce with confidence in a C reimplementation.
- **Yellow** — meaningful structure/behavior is known, but important semantics or coverage are still missing.
- **Black** — substantially unmapped from a decompilation-readiness perspective.

This is deliberately stricter than a modding/patching-readiness chart. A known address, successful hook, or bounded proof does not automatically count as green.

## Important measurement caveat

The 600 squares are equal-sized **knowledge units**, not equal code-size buckets, literal functions, or equal numbers of ROM bytes. The percentages are therefore a qualitative research snapshot, not a claim that a particular percentage of the binary has been decompiled.

## Updating the map

The current ratings live in `data.js`.

Each row has:

```js
{name: "Subsystem", g: 8, y: 10, b: 22, n: [ ...named units... ]}
```

The totals must satisfy `g + y + b = 40` for every row. Named units are inserted explicitly; remaining cells are filled with generic row-level knowledge slices and deterministically shuffled so the layout remains stable between page loads.

When the research changes:

1. Review current `wiki/Project-Status.md` and the relevant owning MKMSZR Wiki pages.
2. Promote/demote cells only when the evidence warrants it.
3. Update named units when a concrete function/structure becomes understood.
4. Update `lastUpdated` in `data.js`.
5. Keep the distinction between runtime-confirmed, static-confirmed, implementation-confirmed, hypothesis, failed/rejected and pending findings.

## Deployment

`.github/workflows/pages.yml` deploys this static site to GitHub Pages on every push to `main`. GitHub Pages must be enabled once under **Settings → Pages → Source: GitHub Actions**. After that, pushes to `main` deploy automatically.

No build step or external JavaScript dependency is required.
