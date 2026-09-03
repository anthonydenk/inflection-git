# Design Brief — Inflection Capital Management, development2.0 exploration

Date: 2026-07-29 · Branch: `development2.0` · Mode: autonomous (user away; picks made by Claude, all variants kept, every pick logged in DECISIONS.md)

## The brief

- **What:** Marketing site redesign exploration for Inflection Capital Management, a partner-owned multi-family office in Silicon Valley (SEC-registered RIA). This branch is a *parallel design direction* to be compared against the `development` branch's "Private Memorandum" design.
- **Who it's for:** Wealth creators, families in transition, single family offices and their foundations — UHNW audience. Secondary: pre-IPO / SpaceX equity holders (compliance-sensitive pages).
- **Visitor action:** "Begin a conversation" — book an intro meeting with the team. Trust is the conversion currency; there is no self-serve product.
- **Hard guardrails from the repo:** `scripts/copy-lock-check.mjs` pins 27 strings verbatim; `scripts/seo-smoke-check.mjs` requires homepage H1 exactly "Inflection Capital Management". These apply if/when a direction is ported into the Next.js app — the HTML iteration variants are exploration artifacts and don't run those gates.

## User direction (2026-07-29, supersedes assumptions 1–2)

- **The site must tell the story of a San Francisco-based firm.** Place is the narrative spine — the city, the bay, the fog, the light, Silicon Valley wealth creation. Directions that don't move that way are out.
- **Brand identity is FIXED to inflectioncm.com:** deep evergreen + pale mint/seafoam palette, elegant serif wordmark voice, atmospheric photographic temperature, soft curved section transitions. Variant spread comes from *how the San Francisco story is told*, not from palette or brand divergence.
- **The development-branch memorandum design is excluded as an influence.** Only inflectioncm.com and the Phase-0 research sites may be used for inspiration. No memorandum moves (chapter TOCs, dot leaders, ledger-document framing).
- Round 1 (first slate: Vast Quiet / Gallery White / Soft Luxury / Classical Remix / Quiet Instrument) rejected wholesale on these grounds — kept in `round-1/` for the record. Restarted slate lives in `round-1b/`.

## Assumptions (autonomous mode — correct me and I'll re-run the affected round)
3. **Scope of iteration = the homepage** as a full self-contained page (hero + story + approach + practice + partners + CTA + compliance footer), since that's where the two branches' designs are most comparable. Porting to Next.js pages is a follow-up once a winner exists.
4. **Copy:** I reuse the live site's real copy (stewardship voice, disclosure block) and write new headline/section copy in that voice per variant. Locked-string compliance applies only at port time.
5. Research menu (`research/index.html`) not yet reviewed by user.

## Industry brief — multi-family office / private wealth (researched 2026-07-29)

**Conventions to respect (trust furniture):** restrained palette with at most one accent; serif presence somewhere (wordmark or headlines); real disclosure block, ADV links, SEC references in the footer; no hype copy, no exclamation marks; named partners with photographs; city/place grounding (San Francisco / Silicon Valley). Log In affordance signals real clients exist.

**Patterns that perform:** a single manifesto statement given an entire viewport (ICONIQ); art-directed texture instead of stock photography (Jordan Park's wood-grain); place-based photography as identity (the firm's geography as brand); education-first section structure (philosophy → approach → practice → people); early display of "25+ years / hundreds of family offices" style proof numbers.

**Design language observed:** ICONIQ — gallery-white, film loop hero, centered serif manifesto, office cards, extremely quiet. Jordan Park — full-bleed tactile texture, italic serif single-line promise, gated "enter" storytelling, taupe/stone. Bessemer/Rockefeller — old-guard navy/heritage, dense institutional. Compound/Forge — fintech-modern, data-forward, for a younger tech-wealth audience. Current dev branch — Print-Tech Paper memorandum: TOC with dot leaders, chapters, ledgers, signed letter.

**Saturation map:** Saturated: navy + gold "heritage" template; full-width mountain/ocean stock hero with white serif overlay (the *live* site is in this bucket); generic fintech gradient. Open space: tactile texture-as-brand, gallery-white restraint (rare among MFOs), instrument/data quietness (no MFO does "private prospectus terminal" well), true cinematic place-light imagery.

**Implications for Phase 1:** slate should span gallery-white minimalism, textural soft luxury, classical gravitas, cinematic vast-quiet, and one risky technical/instrument direction. Avoid: navy+gold heritage, stock-photo summit heroes, fintech gradients. The memorandum direction itself is *excluded* from the slate — it already exists on `development`.

## Taste brief

References: live inflectioncm.com (evergreen #0a2b1e-ish + pale mint, serif "Inflection", summit photography, curved section transitions) and the dev-branch memorandum (evergreen cover + limestone paper, dot-leader TOC, ledger tables, Plate film stills of bay light). Cluster: **quiet institutional luxury with a sense of place (Northern California light)**. Recurring moves: serif display + restrained supporting face, one deep green anchor color, long-form patient copy, compliance formality worn as a design feature. Feeling shared: "a private document / private room, not a marketing page." We match this feel — never copy layouts or content from reference sites.

## Standing guardrails (every generation round)

Never: purple/blue SaaS gradients; indigo-600; Inter/Roboto as voice; 3-equal-cards default; centered-everything monotone rhythm; 3D blobs/glass panels; stock-photo cliché (handshakes, summits at sunset with white overlay); marketing-speak ("unlock", "empower", "seamlessly"); emoji; pop-in animation; scroll-jacking; removed focus rings. Always: one CTA verb ("Begin a conversation"); real disclosure footer with ADV/SEC lines; `prefers-reduced-motion` respected; mobile checked at 390px; straight apostrophes in any copy destined for locked strings.
