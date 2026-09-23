# MKMSZ Research Maps

Interactive reverse-engineering and project-status maps for **Mortal Kombat Mythologies: Sub-Zero (N64, USA Rev. 0 / NMYE)**, derived from the ongoing [MKMSZR](https://github.com/smeagol44/MKMSZ-Randomizer) project.

Public site:

**https://smeagol44.github.io/MKMSZ-Decomp-Map/**

## Views

### Decomp Readiness

The original 40 × 15 (600-unit) qualitative heatmap remains intact.

- **Green** — sufficiently understood to reproduce with confidence in a C reimplementation.
- **Yellow** — meaningful structure/behavior is known, but important semantics or coverage are still missing.
- **Black** — substantially unmapped from a decompilation-readiness perspective.

The 600 squares are equal-sized **knowledge units**, not equal code-size buckets, literal functions, or equal numbers of ROM bytes.

### Feature Board

A public-facing feature/roadmap view showing what MKMSZR already ships, what is production beta, what exists only as a bounded proof, what 1.0 still requires, and what remains deliberately open or post-1.0 research.

This view is intentionally easier to browse than the canonical Roadmap. The Wiki remains authoritative for exact requirements and acceptance gates.

### Stage Atlas

An eight-card atlas for Temple, Wind, Water, Earth, Prison, Fire, Bridge, and Fortress, sourced from the normalized stage catalogs.

Each stage exposes:

- compact/native stage IDs;
- resource-file ROM range, size, file-table entry, and verified runtime base;
- ordinary pickup count and pickup mix;
- outer-slot shape, empty selectors, and unknown/nonstandard selectors;
- bounded evidence and important stage-local caveats.

Empty logical selectors are never presented as free storage.

### MKT → MKMSZ Compatibility

A colored source-level compatibility matrix for the donor-port effort.

It distinguishes:

- established/covered target primitives;
- runtime-proven translations;
- partial adapters;
- missing semantic translators;
- pending production composition;
- rejected direct paths such as binary/code or donor-codec reuse.

This is not a binary-compatibility claim.

### ROM Space

A literal 16 MiB cartridge-space view:

- range: `0x00000000..0x01000000`;
- 16 × 16 grid;
- 64 KiB per cell;
- exact bounded intervals overlaid proportionally inside each bucket;
- clicking an exact interval highlights every coarse grid bucket it intersects;
- optional **Patch-site overlay** sourced from the canonical patch registry;
- unmapped remainder is explicitly **unknown / unclassified**, never assumed free.

### RDRAM Space

A literal 4 MiB physical-memory view:

- physical range: `0x000000..0x400000`;
- 16 × 16 grid;
- 16 KiB per cell;
- proven KSEG0/KSEG1 aliases shown in details but never double-counted;
- exact interval-list clicks highlight every intersecting physical bucket;
- optional patch-site overlay for registry entries with an established KSEG0/RAM context;
- unknown physical space remains unknown, not free.

## Canonical authority

The visualization is a derivative snapshot. Current truth remains in the version-controlled MKMSZR Wiki.

Primary inputs include:

- `Project-Status.md`
- `1.0-Requirements-and-Roadmap.md`
- `Memory-and-Allocation-Map.md`
- `Address-and-Patch-Site-Registry.md`
- `Stage-Catalogs.md` + the eight `Stage-Catalog-*` pages
- `MKT-to-MKMSZ-Compatibility-Layer.md`
- `MKT-Adapter-Primitives.md`
- `MKT-Fighter-Asset-Translation.md`
- `Sub-Zero-to-Sektor-Animation-Mapping.md`

The snapshot data files embed the source MKMSZR commit so a displayed state can be traced back to the source revision.

Important rules:

- ROM offset is not silently treated as a runtime VA.
- KSEG0/KSEG1 aliases are not independent allocations.
- Stage-overlay ownership remains stage/source qualified.
- Zero/FF/padding or unused-looking selectors are not evidence of free space.
- Proof-only ranges do not become production-safe merely because a disposable ROM worked.
- Unknown gaps remain unknown.
- A compatibility proof does not imply arbitrary donor compatibility.

## Updating the maps

1. Read current `wiki/Project-Status.md` first.
2. Read the canonical owner for the view being changed.
3. Refresh derivative data only from current bounded Wiki facts.
4. Keep evidence scope and proof-vs-production boundaries intact.
5. Update the embedded source commit/snapshot date.
6. Run the research-map validator before deployment.

## Deployment

`.github/workflows/pages.yml` deploys this static site to GitHub Pages on every push to `main`.

No build step or external JavaScript dependency is required.
