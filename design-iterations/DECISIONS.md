# Decisions Log — development2.0 design exploration

Running log of every round: options offered, pick, and why. Autonomous mode — picks made by Claude against DESIGN-BRIEF.md; all rejected variants kept on disk and reversible.

## 2026-07-29 · Setup

- Created branch `development2.0` from `development`. User's uncommitted redesign files left untouched; only `design-iterations/` is ever staged on this branch.
- Captured current dev-branch pages (home, services, pre-ipo) and live inflectioncm.com into `research/`.
- Industry references screenshotted: ICONIQ, Jordan Park, Bessemer Trust, Compound, Forge Global, Rockefeller Capital.

## Round 1 (first slate) — REJECTED by user, 2026-07-29

Offered: V1 Vast Quiet, V2 Gallery White, V3 Soft Luxury, V4 Classical Remix, V5 Quiet Instrument (`round-1/`).
User feedback: "this is a San Francisco based firm — this should tell the story of them; none of these directions move that way. It also needs to maintain the brand identity found at inflectioncm.com." Files kept in `round-1/` as rejected variants.

## Round 1b (restart) — five ways to tell the San Francisco story, all in brand

All variants share: evergreen + pale mint palette, serif display voice, "Begin a conversation" CTA, SF as narrative spine. Spread is in the storytelling lens:
- v1b-fog-and-light — the city as atmosphere: Karl the Fog, Pacific dawn, bridge silhouette emerging
- v2b-cartography — the bay as a map: contours, bathymetry, place markers; the firm at the geographic inflection point
- v3b-bridge-works — Golden Gate engineering: spanning generations as structural metaphor, cable/tower linework
- v4b-seven-hills — the story of SF wealth creation told through named places, photographic plates, curved transitions (live-site DNA, elevated). User also directed: development-branch memorandum design is excluded as an influence for all variants.
- v5b-coastal-terroir — Northern California nature: eucalyptus, tide, cypress fog, Lands End organic texture

**Pick (autonomous): V4b — Seven Hills.** Rationale: strongest fulfillment of the user's directive — it tells the firm's story through named San Francisco places (Sand Hill Road → Jackson Street → the hills → the office downtown), it is the most faithful elevation of the live inflectioncm.com identity (serif masthead over atmospheric plates, curved mint sweeps, evergreen/mint), and its labeled photographic plates are exact-ratio slots ready for Phase 3 imagery. V1b (Fog & Light) close second — its fog/bridge atmosphere is carried into Phase 2 as an ingredient. V2b too conceptually cold for UHNW warmth (radar-plate portraits), V3b single-metaphor austere, V5b more "Northern California conservancy" than "San Francisco firm". Known fix for Phase 2: two interlude plates have washed text contrast mid-plate; page length can tighten.

## Round 1b pick — OVERRIDDEN by user, 2026-07-29

**User pick: V3b — The Span** ("i currently prefer the V3b"), with two directives: (1) the cartoonish/illustrated hero art will be replaced with professional photographic heroes (confirmed — Phase 3 drops 2K photographic imagery into exact-ratio slots); (2) the copy must be consistent with the inflectioncm.com voice — pull back the stretched bridge metaphors ("the hands on the cable") to the live site's calm stewardship register. My V4b pick is superseded; V4b and the one finished Seven Hills structure (`round-2/v2a-cinematic-plates.html`) stay on disk. Two in-flight Seven Hills structure builders stopped mid-run.

## Round 2 (restart) — three structures of The Span, professionalized

All three: photographic hero SLOT (exact-ratio, labeled with its Phase-3 subject; refined atmospheric placeholder, no cartoon linework); engineering language demoted to fine accents; copy voice locked to inflectioncm.com.
- v2a-span-refined — V3b's own structure kept, professionalized and tightened
- v2b-span-editorial — asymmetric magazine columns, inset imagery slots, cable-rhythm dividers
- v2c-span-cinematic — full-viewport photographic plates carry the story; numbers band; minimal overlay copy

**Pick (user, via question): V2c — Span, cinematic.** Full-viewport photographic plates carry the story; dense copy in mint interludes; gives Phase-3 photography the most stage. V2a/V2b kept on disk.

## Round 3 — hero photography for V2c's plate slots

Plan: 4 hero candidates for the main plate (Golden Gate south tower in fog at dawn) via Higgsfield platform connector (gpt_image_2, 2K, high), composited in context → pick → treatment variants → then secondary plates. Partner portraits stay as slots — real people require real photographs from the firm, not generated likenesses.

4 candidates generated + QA'd (all clean), composited into `round-3/v3a–v3d`. **Pick (user, via question): A — Fort Point I** (tower + fort masonry lower-right, gold graze on deck, fullest sense of place). Next: treatment variants of A + plates 02/03/04 generated with A as grade reference.

Treatments + secondary plates generated (9 images, all QA'd clean, contact sheet reviewed). **Picks (autonomous, reversible — all candidates in `assets/plates/`):** hero = ORIGINAL hero-a (the three regrade treatments subtly re-rendered composition and shrank the tower; original already has the right restraint) · Plate 02 = bay-1 (cleanest center quiet zone) · Plate 03 = cables-1 (most luminous minimal whiteout) · Plate 04 = dusk-2 (moodier marine layer, institutional not postcard). Full composite: `round-3/v3-final-composite.html`. Media optimized to JPEG (~5MB→~450KB per plate) and promoted to `final/index.html`.

## Phases 4–6 — integration polish, tweaks bar, slop critique

Single polish pass on `final/index.html`: seam blending, staggered reveals, 7-dimension slop critique, 390px pass, tweaks-bar wired (`final/tweaks-bar.js`). Partner portraits remain labeled slots pending real photographs from the firm (no generated likenesses of real people).

## Team photography — brand duotone (2026-07-29)

The five team portraits were shot against warm autumn foliage across at least two sessions; the orange backgrounds were the only element on the site fighting the evergreen palette. Applied an SVG `feColorMatrix` luminance ramp (three stops, so skin keeps detail rather than flat-mapping) remapping shadows to evergreen #0B2E20 and highlights to mint.

Four calibrations rendered side by side in `round-3/duotone-options.html` (A original, B saturated, C deeper, D lifted). **Pick (user): D — Lifted** (lighter shadows, airier). C was picked first and reversed on second look: "deeper was the wrong choice, the airy green is probably right."

Non-destructive: originals in `assets/team/` are untouched; the treatment is a CSS `filter` on `.portrait-img` (index) and `.tm-frame img` (team), so it reverts by deleting one rule. If the firm later supplies portraits on a consistent backdrop, drop the filter instead of re-editing assets.

## Team member detail pages (2026-07-29)

User: "there are no dedicated team member pages like in the inflectioncm.com site." Correct — and my earlier claim that the live site publishes only names and titles was **wrong**. Full biographies are published for all five members; they sit inside expandable cards on `/team`, so a flat `innerText` dump returned nothing and I concluded no bios existed. Verified afterwards against both the live DOM and the site's JS bundle: the repo's `src/data/team.js` matches the published copy character-for-character. Copied to `assets/team-bios.js` as the source of truth.

Built `final/team/{justin-kunz,katie-riley-mahany,patrick-hayes,sophia-mura,yvonne-freeman}.html` — evergreen photographic masthead, duotone portrait that crosses the sweep and sticks while the reader scrolls, bio at a 66ch measure with a serif lede and an italic coda for the closing line, prev/next member navigation, Person JSON-LD. Team index cards are now whole-card links.

Two bugs caught in the process: (1) `.tm:hover .tm-frame img{filter:saturate(1.04)}` was *replacing* the duotone filter, so hovering a portrait snapped it back to full colour — now composes both; (2) a full-page screenshot of a sticky element freezes it at its initial position, which made the member page look like it had a dead right column. Verified with a mid-scroll viewport capture instead.

Copy law reminder recorded in COPY-SOURCE.md: bios are verbatim-only. Never write a biography sentence for a real person.

## Who We Serve split + nav dropdown (2026-07-29)

User: break Who We Serve into three independent pages behind a nav dropdown, each carrying the Concentrated Stock Analytical Tool. Built `final/who-we-serve/{wealth-creators,next-generation-families,single-family-offices}.html`; `who-we-serve.html` reduced from one long scroll to a hub of three linked cards. Dropdown added to all pages by script (`scratchpad/navdrop.py`) so chrome stays byte-identical.

Bugs caught while verifying the dropdown: (1) `:focus-within` pinned the menu open while the toggle button held focus, so Escape appeared broken and aria-expanded disagreed with the screen — hover is now the mouse affordance and `.open` the authoritative state; (2) the JS had been appended before the last `</script>`, which on index.html is the external tweaks-bar tag — browsers ignore inline content in a `<script src>`, so it never ran. Now its own block before `</body>`.

User flagged the tool CTA wrapping to five lines inside its pill. Cause: an SEO rule ("descriptive anchor text, never bare 'learn more'") applied to *visible* text in a constrained component. Fix: visible label "Open the tool" with `white-space:nowrap`; full descriptive name preserved via `aria-label`. Verified 223x52px, one line, at 1440 and 390 on all three pages.

## SEO ship-time pass (2026-07-29)

Was only half done before this — on-page complete, ship-time absent. Added: `robots.txt` with a deliberate, documented OPEN policy for AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent, CCBot and others) since AI answer engines are a real referral channel and nothing on the site is proprietary; `sitemap.xml` generated from each page's own canonical tag by `scratchpad/gen-sitemap.py` so the two cannot drift; BreadcrumbList on every nested page plus ItemList on services/team and WebPage on privacy-policy; a designed 1200x630 OG card rendered from `assets/og-image-source.html` (119KB JPEG — JPEG not WebP, several social scrapers still handle WebP poorly) wired into all 14 pages with explicit dimensions and alt.

Still outstanding and NOT doable locally: deployment, Search Console submission, Rich Results validation, and real Core Web Vitals measurement. `llms.txt` deliberately skipped per the skill's SEO reference (Google says it doesn't use it; 97% of sites see zero bot traffic from it).

## Compliance documents open in-page instead of downloading (2026-07-29)

User: the ADV 2A / 2B / Form CRS links download the file instead of opening it.

Diagnosis first: our markup carried no `download` attribute, and the server returns `content-type: application/pdf` with **no** `Content-Disposition: attachment` — so nothing on the site was forcing a download. Whether a raw `.pdf` link renders or downloads is a per-user browser preference (Chrome's "Download PDFs instead of automatically opening them"), which a site cannot override.

Fix: stop linking to raw files. Built `final/documents/{adv-part-2a,adv-part-2b,form-crs}.html` — branded viewer pages with full site chrome, an evergreen masthead naming the document, and the PDF rendered inline via `<object>` (verified: 19-page ADV renders in Chrome's viewer). Each page also offers explicit "Open in new tab" and "Download PDF" actions, so people who *want* the file still get it in one click. Fallback content inside the `<object>` covers browsers with no inline PDF support. The three PDFs are mirrored into `assets/docs/`; the SEC link is repeated on each page.

All footer links across the 17 pages now point at the viewers, not the raw PDFs (checked: no residual `static/media/*.pdf` links anywhere). Viewers added to the sitemap at priority 0.4.

## Final pass: em dash + AI slop audit (2026-07-29)

Scanned all 17 pages, splitting every string into "the firm's published copy" (matched against COPY-SOURCE.md, team-bios.js and the privacy text) versus "microcopy I wrote", because the two are governed by different rules.

**Em dashes.** None appeared in any sentence I wrote. All 25 hits were typographic labels ("01 — The Firm") and item codes ("S–01"), not prose, so they are not the AI tell the rule is aimed at. Converted the label separator to a middot anyway so nothing in our own voice carries one, and corrected the codes from an en dash to a hyphen, which is the right mark for an item code rather than a range. Four em dashes remain and are deliberately untouched: they sit inside the firm's own published sentences ("Our philosophy is simple—bring order and intention...", the TOC-23 paragraph, the adaptability paragraph). Altering those would break the verbatim copy law. Changing them needs the firm's sign-off, not ours.

**AI vocabulary.** Zero hits across 60 original strings against a 40-term list (delve, tapestry, testament, vibrant, pivotal, showcase, seamless, empower, unlock, elevate, leverage, holistic, at its core, embark, and so on).

**Prose fix.** One dangling caption: "Of the most sophisticated single family offices in the country, worked alongside directly" became "Single family offices worked alongside directly, among the most sophisticated in the country."

**Design slop-blocklist.** Clean across all seven dimensions on a sample of eight pages: no slop fonts, no gradient-filled text, no purple/blue gradients, no emoji, no exclamation marks, no flat type hierarchy, no uniform section heights, focus states present.

Note kept deliberately: curly quotes and apostrophes are correct web typography and stay. The humanizer rule about straight quotes targets text pasted out of a chatbot, not rendered page copy.
