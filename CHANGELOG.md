# Changelog

## 2026-09-25 — Current MKMSZR refresh and memory-capacity redesign

- Refreshed the Atlas source snapshot from MKMSZR commit `740496d67cb52be18969c92b25eb117609b759fb`.
- Updated the Feature Board for the 16 KiB production reservation, production donor-backed presentation/audio integration, optional MKT donor browser/CLI flow, direction-facing proof, and Sektor straight-missile research through v85 Pending.
- Expanded the MKT → MKMSZ matrix with projectile actor ownership, launch placement, 60→30 Hz cadence translation, first-visible publication ordering, and remaining palette/effects/impact gaps.
- Added current production ROM/RDRAM ownership for the conditional donor-backed module and audio sample, plus the full 15 KiB expansion-pool parent reservation.
- Refreshed production patch-site coverage for the donor-backed trigger/init/HUD/file-entry sites and indexed the v85 proof seam.
- Replaced the coarse ROM/RDRAM grid-first views with coverage/capacity dashboards:
  - classified ownership vs unknown/unclassified bytes;
  - MKMSZR production ownership/reservation;
  - confirmed reusable free space;
  - proof-only footprint totals kept separate;
  - proportional whole-space bars;
  - zoomed high-ROM and 16 KiB MKMSZR-reservation views;
  - exact interval/patch-site browsers retained for provenance.
- Explicitly separates **decompilation knowledge** from **byte ownership/capacity** so map coverage is not misread as code-understanding percentage.
- Refreshed conservative Decomp Readiness cells for production textured HUD composition, donor voice translation, current projectile cadence evidence, Runtime V2 state, and the 16 KiB arena reservation.

## 2026-09-23 — Rename to MKMSZR Project Atlas

- Renamed the web experience from **MKMSZ Research Maps** to **MKMSZR Project Atlas**.
- Updated the page title, hero branding, description, footer, and README identity.
- Prepared the documented Pages URL for the repository rename to `MKMSZR-Project-Atlas`.

## 2026-09-23 — Project atlas expansion

- Added the public-facing **Feature Board** for production, beta, proof, 1.0-needed, open, and post-1.0 research states.
- Added the eight-stage **Stage Atlas** sourced from normalized stage catalogs.
- Added the **MKT → MKMSZ Compatibility Matrix** covering host primitives, assets, animation, combat semantics, combos, and integration gaps.
- Added production/proof **Patch-site overlays** to the ROM map and to RDRAM where an established RAM/VA context exists.
- Refreshed the literal memory snapshot to current MKMSZR production, including the promoted rainbow outfit allocation/layout.
- Preserved the existing interval-to-grid selection behavior.
- Expanded CI validation to all derivative research-map datasets.

## 2026-09-23 — Current research refresh and interval selection

- Refreshed the memory snapshot from MKMSZR commit `3e1d0cae4a3a52989e8ef9b9c1290e1e01c81dfd`.
- Added the Runtime-confirmed rainbow-outfit proof footprints: one proof-only ROM interval and two overlapping proof-only RDRAM composition intervals.
- Reviewed the decomp-readiness map against the current Wiki; the 114 green / 156 yellow / 330 black totals remain conservative and unchanged.
- Added the rainbow runtime palette-rebinding result as a concrete green fighter-graphics unit.
- Updated the Toasty textured-UI unit for v15/v16 runtime findings and v17's pending corrected RGBA5551 palette validation.
- Exact ROM/RDRAM interval-list clicks now select every intersecting coarse grid bucket, highlight the interval row, and scroll the selected blocks into view.

## 2026-09-23 — ROM/RDRAM space maps

- Generalized the site into three tabs: Decomp Readiness, ROM Space, and RDRAM Space.
- Added a 16 × 16 ROM grid covering the full 16 MiB image at 64 KiB per cell.
- Added a 16 × 16 physical RDRAM grid covering 4 MiB at 16 KiB per cell.
- Added exact interval overlays, classification/search filters, click-through details, provenance, and canonical Wiki links.
- Preserved KSEG0/KSEG1 as aliases rather than duplicate allocations.
- Treats unmapped space as unknown/unclassified, never implicitly free.
- Updated stale readiness-source links to the refactored canonical Wiki owners.

## 2026-09-22 — Initial public snapshot

- Added 40 × 15 (600-unit) interactive decompilation-readiness heatmap.
- Initial rating distribution: 114 green, 156 yellow, 330 black.
- Added concrete named units for known functions, structures, codecs and research boundaries.
- Added status filter, search, per-cell details, source links and responsive layout.
- Added GitHub Pages deployment workflow.
