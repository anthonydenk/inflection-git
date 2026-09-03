# Shared brief for all Round-1 variants — Inflection Capital Management

You are building ONE full homepage variant as a single self-contained HTML file (all CSS/JS inline, no external requests except Google Fonts, which ARE allowed). Desktop-first but responsive; check the hero composition works at 390px via media queries.

## The firm (intent)

Inflection Capital Management — a partner-owned, partner-operated multi-family office in Silicon Valley (San Francisco, CA). SEC-registered investment adviser. Serves wealth creators, families navigating transition, and single family offices/foundations. Also advises pre-IPO equity holders (SpaceX etc.). Audience: UHNW families and founders. The ONLY conversion: begin a conversation / meet with the team. Tone: patient, stewardship, quiet authority. Never salesy.

## Required page structure (content order is yours to art-direct, but all must exist)

1. Nav: Inflection wordmark + Who We Serve / Services / Team / About / Contact + a quiet "Log In"
2. Hero with headline (your copy, in the firm's voice) — placeholder art must be CSS/SVG in YOUR aesthetic (no external images)
3. Story section — use this copy (may be trimmed, not rewritten):
   "Inflection Capital Management is a partner-owned and operated multi-family office based in Silicon Valley, dedicated to working with clients to preserve and grow their wealth and legacy. Our careers have been dedicated to working with wealth creators, families navigating periods of transition, and family offices, including their foundations. With a commitment to personal connection and a deep understanding of our clients' unique goals, we serve as trusted stewards for generations to come."
4. Three principles (use these titles + condensed body): "Our Clients Inspire Us" / "Our Partnership" / "Success Together" — themes: space to focus on what matters; meeting you at the inflection point of your legacy, institutional-level expertise, advocate; decades of experience with hundreds of single family offices, clarity and direction, steward across generations.
5. Approach/practice section — "25+ years advising single-family offices, foundations, and institutional allocators. Transparent fees, intuitive reporting, education tailored to your needs. Bring order and intention to the complexity that comes with meaningful wealth." Practice areas you may list: Rising Generation, Philanthropy, Family Governance & Succession, Lifecycle, Investment Process, Trust, Tax & Estate Planning, Financial Reporting, Pre-IPO & Equity Planning.
6. Partners: Justin Kunz — CEO & Founding Partner; Katie Riley Mahany — Managing Partner. Portrait placeholders in your aesthetic (CSS/SVG).
7. Selected writing (3 plausible titles, e.g. "Planning After a Liquidity Event", "What to Expect from a Multi-Family Office", "Family Governance for the Long Term")
8. CTA: "Begin a conversation" (a designed contact block, not a bare button)
9. Compliance footer: San Francisco, CA · ADV Part 2A · ADV Part 2B · Form CRS · Privacy Policy · phone (415) 450-6556 · plus a shortened disclosure line: "Inflection Capital Management, LLC is a registered investment adviser. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results. Investing involves risk, including possible loss of principal."

## Guardrails (never violate)

Never: purple/blue gradients; indigo-600; Inter/Roboto/Open Sans as the personality face; three-equal-cards-per-row defaults; centered-everything with uniform section padding; 3D blobs/glass panels; stock-photo cliché compositions; marketing-speak ("unlock", "empower", "seamlessly", "elevate"); emoji; exclamation marks; pop-in-all-at-once animation; scroll-jacking; removed focus rings; gradient-filled text.
Always: commit HARD to your assigned family — a timid variant wastes the slot; one accent color doing real work; real hover/focus-visible states; staggered scroll reveals with IntersectionObserver, once, respecting prefers-reduced-motion; section rhythm with a plot (density then air, full-bleed then contained); type scale via clamp(); the page must read as a $100M-trust institution, not a startup.

The existing designs this must CONTRAST with: (a) an editorial "private memorandum" document design in evergreen + limestone with chapter TOC and ledgers; (b) a photographic mountain-summit hero site in evergreen + pale mint. Do not reproduce either.
