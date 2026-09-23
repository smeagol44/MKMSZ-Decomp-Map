# MKMSZ Research Maps

Interactive reverse-engineering maps for **Mortal Kombat Mythologies: Sub-Zero (N64, USA Rev. 0 / NMYE)**, derived from the ongoing [MKMSZR](https://github.com/smeagol44/MKMSZ-Randomizer) project.

Public site:

**https://smeagol44.github.io/MKMSZ-Decomp-Map/**

## Views

### Decomp Readiness

The original 40 × 15 (600-unit) qualitative heatmap remains intact.

- **Green** — sufficiently understood to reproduce with confidence in a C reimplementation.
- **Yellow** — meaningful structure/behavior is known, but important semantics or coverage are still missing.
- **Black** — substantially unmapped from a decompilation-readiness perspective.

The 600 squares are equal-sized **knowledge units**, not equal code-size buckets, literal functions, or equal numbers of ROM bytes. The percentages are therefore a qualitative research snapshot, not a literal decompilation percentage.

### ROM Space

A literal 16 MiB cartridge-space view:

- range: `0x00000000..0x01000000`;
- 16 × 16 grid;
- 64 KiB per cell;
- exact bounded intervals are overlaid proportionally inside each bucket;
- clicking an exact interval highlights every coarse grid bucket it intersects and scrolls the selection into view;
- unmapped remainder is explicitly **unknown / unclassified**, never assumed free.

### RDRAM Space

A literal 4 MiB physical-memory view:

- physical range: `0x000000..0x400000`;
- 16 × 16 grid;
- 16 KiB per cell;
- proven KSEG0/KSEG1 aliases are shown in details;
- clicking an exact interval highlights every physical grid bucket it intersects;
- aliases are views of the same physical bytes and are never double-counted.

The memory views preserve the canonical MKMSZR classifications: `stock-known`, `stock-unknown`, `production`, `confirmed-free`, `candidate-free`, `dynamic`, `proof-only`, `rejected/conflict`, and `alias/view`.

## Memory-map authority

The canonical source is:

`MKMSZ-Randomizer/wiki/Memory-and-Allocation-Map.md`

`memory-data.js` is a static site snapshot of the exact bounded interval records from that page. The embedded snapshot stores the source repository commit so the displayed data can be traced back to the Wiki state used to generate it.

Important rules:

- ROM offset is not silently treated as a runtime VA.
- KSEG0/KSEG1 aliases are not independent allocations.
- Stage-overlay ownership remains stage/source qualified.
- Zero/FF/padding or unused-looking selectors are not evidence of free space.
- Proof-only ranges do not become production-safe merely because a disposable ROM worked.
- Unknown gaps remain unknown.

## Updating the maps

For decomp-readiness changes:

1. Review current `wiki/Project-Status.md` and relevant canonical MKMSZR Wiki owners.
2. Promote/demote cells only when evidence warrants it.
3. Keep the visible readiness snapshot date current.

For memory-space changes:

1. Read the current canonical `Memory-and-Allocation-Map.md`.
2. Update `memory-data.js` only from bounded canonical interval records.
3. Preserve physical RDRAM coordinates and aliases exactly.
4. Never synthesize free/candidate-free classifications from gaps or padding.
5. Update the embedded source commit/snapshot date.

## Deployment

`.github/workflows/pages.yml` deploys this static site to GitHub Pages on every push to `main`.

No build step or external JavaScript dependency is required.
