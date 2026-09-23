// Curated public-facing snapshot from current canonical MKMSZR owners.
window.MKMSZ_PROJECT_DATA = {
  "snapshot": "2026-09-23",
  "sourceCommit": "7bcde1ac8d420587c109e6a7fceef6b2b4e2d97f",
  "featureBoard": [
    {
      "group": "Core",
      "name": "Guarded clean-ROM patching",
      "state": "production",
      "kind": "have",
      "detail": "Supported-ROM validation, separate output, guarded writes, and N64 checksum update are production behavior.",
      "source": "Project-Status.md"
    },
    {
      "group": "Core",
      "name": "Native Runtime V2",
      "state": "production",
      "kind": "have",
      "detail": "The 1 KiB MKMSZR RDRAM reservation and native payload load/execute path are runtime-confirmed.",
      "source": "Project-Status.md"
    },
    {
      "group": "Flow",
      "name": "Safe Stage Select",
      "state": "production",
      "kind": "have",
      "detail": "Compact eight-stage selector and bounded flow bypasses are runtime-confirmed.",
      "source": "Project-Status.md"
    },
    {
      "group": "Items",
      "name": "Ordinary pickup persistence",
      "state": "beta",
      "kind": "have",
      "detail": "Representative collect/restore coverage exists in all eight main stages; all 84 ordinary records are cataloged.",
      "source": "Project-Status.md"
    },
    {
      "group": "Items",
      "name": "Stage-local seeded shuffle",
      "state": "beta",
      "kind": "have",
      "detail": "All 84 ordinary records participate in the current deterministic interim stage-local mode.",
      "source": "Project-Status.md"
    },
    {
      "group": "Inventory",
      "name": "Four inventory boxes",
      "state": "beta",
      "kind": "have",
      "detail": "Box switching, transition preservation, and foreign-key masking are runtime-confirmed on documented routes.",
      "source": "Project-Status.md"
    },
    {
      "group": "Progression",
      "name": "Pickup-driven XP progression",
      "state": "beta",
      "kind": "have",
      "detail": "Native progression is integrated; early tiers and lifecycle routes are runtime-confirmed, full nine-tier coverage is still pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "UI",
      "name": "Native box indicator",
      "state": "production",
      "kind": "have",
      "detail": "BOX n OF 4 renders through the native text path.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Boot branding + seeded phrase",
      "state": "production",
      "kind": "have",
      "detail": "Custom legal-screen presentation and deterministic phrase namespace are runtime-confirmed.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Randomizer title branding",
      "state": "beta",
      "kind": "have",
      "detail": "Candidate-B title art and configurable <NAME> EDITION are runtime-confirmed in production composition.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Outfit recoloring",
      "state": "production",
      "kind": "have",
      "detail": "Static modes and the 64-phase rainbow mode are normal browser/CLI options; rainbow reproduces the validated proof byte-for-byte for RAINBOW64.",
      "source": "Project-Status.md"
    },
    {
      "group": "Product",
      "name": "Browser / CLI shared patch core",
      "state": "beta",
      "kind": "have",
      "detail": "Both product surfaces use the same guarded patch core.",
      "source": "Project-Status.md"
    },
    {
      "group": "1.0",
      "name": "Global cross-stage item materialization",
      "state": "needed",
      "kind": "need",
      "detail": "Cross-stage feasibility is runtime-proven, but production-safe destination resources and award semantics are still a release blocker.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Deterministic global shuffle",
      "state": "needed",
      "kind": "need",
      "detail": "Replace eight independent stage-local pools with one global logical run.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Deterministic retry attempts",
      "state": "needed",
      "kind": "need",
      "detail": "Rejected layouts must advance through an explicit deterministic attempt namespace.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Whole-run solvability solver",
      "state": "needed",
      "kind": "need",
      "detail": "Every emitted 1.0 layout must reach the finalized completion predicate under current access rules.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Seed-specific required Power Upgrades",
      "state": "needed",
      "kind": "need",
      "detail": "Required count must be deterministic, retry-independent, solver-enforced, and HUD-visible.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Full native randomizer HUD",
      "state": "needed",
      "kind": "need",
      "detail": "Checks, progression requirement/current state, box state, key progress, and pickup feedback are required.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "HP / lives / continues lifecycle",
      "state": "needed",
      "kind": "need",
      "detail": "Preserve/reset behavior must be defined and pass supported lifecycle boundaries.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Game Over / new-run reset",
      "state": "needed",
      "kind": "need",
      "detail": "All run-scoped MKMSZR state must reset cleanly without corrupting stock lifecycle.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Very Hard invariant",
      "state": "needed",
      "kind": "need",
      "detail": "Very Hard must remain enforced throughout the supported run lifecycle.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Temple Map policy",
      "state": "open",
      "kind": "unknown",
      "detail": "The Map is outside the 84 ordinary records. Its 1.0 inclusion/exclusion policy and supporting trigger/lifecycle behavior remain open.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Full nine-tier progression validation",
      "state": "needed",
      "kind": "need",
      "detail": "All nine reward thresholds must work in the final production composition.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Representative full global seed",
      "state": "needed",
      "kind": "need",
      "detail": "Final release gate after global items, solver, HUD, lifecycle, Map policy, Very Hard, and progression are composed.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "Research",
      "name": "Cross-stage item import proofs",
      "state": "proof",
      "kind": "want",
      "detail": "Prison has runtime-confirmed simultaneous imported visuals; external-to-embedded conversion is also proven. Fortress stress validation remains pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Ordinary enemy randomization",
      "state": "proof",
      "kind": "future",
      "detail": "Fire substitution and Temple-monk-in-Fire import are runtime-confirmed proofs. Arbitrary roster compatibility and product integration remain future work.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "MKT / Sektor takeover",
      "state": "proof",
      "kind": "future",
      "detail": "Broad Sektor animation and combo behavior is runtime-proven, but the takeover remains proof-only and has unresolved integration gaps.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Toasty audio",
      "state": "proof",
      "kind": "future",
      "detail": "The accepted MKT Toasty voice plays through MKMSZ's native audio path; final product trigger/composition is pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Toasty visual",
      "state": "partial",
      "kind": "future",
      "detail": "CI8 image rendering and custom palette selection are runtime-confirmed; correctly colored final palette output still needs the latest runtime gate.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Generic donor-move adapter",
      "state": "partial",
      "kind": "future",
      "detail": "Useful MKMSZ host primitives and donor semantics are mapped, but generic translation and production composition remain incomplete.",
      "source": "Project-Status.md"
    }
  ],
  "compatibility": [
    {
      "area": "Architecture",
      "capability": "Source-level adapter strategy",
      "donor": "MKT semantics and assets",
      "target": "MKMSZ-native helpers/assets",
      "status": "established",
      "detail": "Accepted architecture: translate meaning and representation; do not relocate donor code.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Process sleep / bounded yield",
      "donor": "process_sleep",
      "target": "Native process sleep",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Action lock",
      "donor": "Donor action ownership",
      "target": "Native special-action lock",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Action/context transfer",
      "donor": "body-propell action + context_jump",
      "target": "Installer + scheduler selector bridge",
      "status": "partial",
      "detail": "Host lifecycle is proven in bounded paths, but no generic donor action runner exists.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Move toward opponent",
      "donor": "towards_x_vel",
      "target": "Native player horizontal velocity",
      "status": "partial",
      "detail": "Primitive exists; donor-to-target unit calibration is still needed generically.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Stop movement",
      "donor": "stop_me",
      "target": "Native stop / clear motion",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Face opponent",
      "donor": "face_opponent",
      "target": "Find + face opponent helpers",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Select animation",
      "donor": "get_char_ani",
      "target": "Native animation selection",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Advance animation",
      "donor": "do_next_a9_frame / playback",
      "target": "Native animation advance",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Generic control-token translation",
      "donor": "Donor script callbacks/tokens",
      "target": "Equivalent MKMSZ callback/token",
      "status": "missing",
      "detail": "No generic translator yet.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Assets",
      "capability": "Frame / texture translation",
      "donor": "Heap-relative descriptors + codecs 22/24/15",
      "target": "Rebuilt descriptors + native Type-5",
      "status": "runtime",
      "detail": "Known donor formats can be decoded offline and rebuilt into runtime-proven MKMSZ-native storage.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Assets",
      "capability": "Palette translation / binding",
      "donor": "MKT palette semantics",
      "target": "MKMSZ source palette + runtime binding",
      "status": "runtime",
      "detail": "Color conversion and Sektor palette binding are runtime-proven in bounded takeover work.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Assets",
      "capability": "Direct donor codec consumption",
      "donor": "Raw MKT codec streams",
      "target": "MKMSZ renderer",
      "status": "rejected",
      "detail": "Rejected direct path: donor streams must be decoded and converted offline.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Combat",
      "capability": "Strike check",
      "donor": "Strike index + record",
      "target": "Native strike dispatch + translated meaning",
      "status": "partial",
      "detail": "Host route exists; generic semantic mapping remains incomplete.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combat",
      "capability": "Victim reactions",
      "donor": "Donor selector/function",
      "target": "Semantically equivalent MKMSZ reaction",
      "status": "missing",
      "detail": "No generic reaction map; player-victim grab/throw remains a known gap.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combat",
      "capability": "Three-tick no-repel",
      "donor": "sans_repell_3",
      "target": "Narrow target separation bypass",
      "status": "missing",
      "detail": "Donor meaning is known; generic MKMSZ shim is not implemented.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combos",
      "capability": "Normal combo graph",
      "donor": "MKT combo records",
      "target": "MKMSZ normal-combo graph",
      "status": "runtime",
      "detail": "Runtime-confirmed at Sektor v62 scope after translating game-local reaction selectors.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combos",
      "capability": "Reaction-selector translation",
      "donor": "Game-local selector byte",
      "target": "MKMSZ selector chosen by meaning",
      "status": "partial",
      "detail": "Specific Sektor v62 translations work; no universal map yet.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Fighter",
      "capability": "Common Sektor animation takeover",
      "donor": "Sektor / robot animation families",
      "target": "Sub-Zero file 0x87 animation slots",
      "status": "runtime",
      "detail": "Broad common-action coverage, Run v58, Combo v59, and v62 combo behavior are runtime-confirmed.",
      "source": "Sub-Zero-to-Sektor-Animation-Mapping.md"
    },
    {
      "area": "Fighter",
      "capability": "Rare / special presentation",
      "donor": "Victory, projectile, dizzy, later reactions",
      "target": "Mythologies-specific slot families",
      "status": "partial",
      "detail": "Several gaps remain; secondary mapping is semantic rather than positional.",
      "source": "Sub-Zero-to-Sektor-Animation-Mapping.md"
    },
    {
      "area": "Integration",
      "capability": "Arbitrary special-move integration",
      "donor": "MKT command/action behavior",
      "target": "MKMSZ input + action ABI",
      "status": "missing",
      "detail": "Not solved by animation replacement; requires the semantic adapter.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    },
    {
      "area": "Integration",
      "capability": "Production-safe fighter/move allocation",
      "donor": "Translated fighter/move payload",
      "target": "Current MKMSZR composition",
      "status": "pending",
      "detail": "Proof allocations establish feasibility only; conflict-free production composition remains pending.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Architecture",
      "capability": "Direct binary/code compatibility",
      "donor": "MKT executable / PROCESS / OBJECT ABI",
      "target": "MKMSZ executable",
      "status": "rejected",
      "detail": "Not implied and explicitly not the accepted strategy.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    }
  ]
};
