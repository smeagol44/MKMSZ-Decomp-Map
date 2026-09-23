# Changelog

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
