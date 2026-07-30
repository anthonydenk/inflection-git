# Shared page spec — all pages in `final/`

Binding for every page. The design system lives in `index.html`; copy the whole `<style>` block from it and extend at the end with page-specific rules only. Do not restyle shared components.

## Copy law

**All copy comes from `../COPY-SOURCE.md`, verbatim.** Do not invent claims about the firm — no exclusivity, selectivity, client counts, AUM, performance, or awards. Connective microcopy (nav labels, button text, captions) may be written plainly but must not assert anything about the firm that isn't in COPY-SOURCE.md. Read the "Banned inventions" section at the bottom of that file before writing a word.

## Shared chrome (identical on every page)

**Nav** — copy verbatim from `index.html` (logo mark + wordmark, links, Log In, mobile Menu panel). Only change: mark the current page's link with `aria-current="page"`. Links point to real files:
`who-we-serve.html` · `services.html` · `team.html` · `index.html#story` (About Us) · `contact.html` · Log In → `#`

**Footer** — copy verbatim from `index.html`, with these real destinations (all `target="_blank" rel="noopener"` for PDFs and SEC):
- ADV Part 2A → `https://inflectioncm.com/static/media/ADVpt4.84014303f46140b743ab.pdf`
- ADV Part 2B → `https://inflectioncm.com/static/media/ADVpt2B.ed9ba8230d812079cd09.pdf`
- Form CRS → `https://inflectioncm.com/static/media/CRSForm2.9325d95b617898906a0e.pdf`
- Privacy Policy → `privacy-policy.html`
- "San Francisco, CA" stays plain text; add the real address `1 Sansome Street, Suite 1400, San Francisco, CA 94104` and phone `(415) 450-6556` as a `tel:` link
- Full disclosure block verbatim from COPY-SOURCE.md, including the SEC link

## SEO requirements (from the skill's `references/seo.md`)

- **One search intent per page**; title, H1, and body must agree.
- **Exactly one `<h1>`**, logical H2→H3, no skipped levels. Never pick a heading tag for its size.
- Semantic landmarks: `header nav main section footer`. All key copy as real HTML text — never text baked into imagery.
- **Title 50–60 chars**, value first, brand last. **Meta description 140–160 chars.**
- Self-referential `<link rel="canonical">` using `https://inflectioncm.com/<path>`.
- Open Graph + Twitter: `og:title`, `og:description`, `og:url`, `og:type`, `og:image` (absolute `https://inflectioncm.com/og-image.webp`), `twitter:card=summary_large_image`.
- **Images:** explicit `width`/`height` on every `<img>` (prevents CLS), `loading="lazy"` strictly below the fold, `fetchpriority="high"` + no lazy on the LCP image, concise descriptive alt (`alt=""` for decorative art).
- **LCP guard:** the LCP element must not start at `opacity:0` — exempt the hero headline/image from entrance animation or start it at `opacity:.1`.
- Scroll reveals may only un-hide content already in the DOM (IntersectionObserver), never inject it.
- No content hidden on mobile that isn't available on desktop.
- Descriptive anchor text — never bare "learn more".
- `prefers-reduced-motion` honored.

### Per-page titles / descriptions / intents

| File | Title | Meta description | H1 |
|---|---|---|---|
| `who-we-serve.html` | Who We Serve \| Inflection Capital Management, San Francisco | Inflection serves founders and first-generation wealth creators, multigenerational families, and single family offices from San Francisco. | Who We Serve |
| `services.html` | Multi-Family Office Services in San Francisco \| Inflection | Rising generation, philanthropy, governance, lifestyle, investments, trust and tax, and financial reporting — coordinated by one team. | Our Services |
| `team.html` | Our Team — Partner-Owned Multi-Family Office \| Inflection | Meet the partners and team of Inflection Capital Management, a partner-owned multi-family office in San Francisco, and the TOC-23 joint venture. | Our Team |
| `contact.html` | Contact Inflection Capital Management \| San Francisco | Meet with the Inflection team. A partner-owned, fee-only multi-family office at 1 Sansome Street, San Francisco. Call (415) 450-6556. | Meet with the Inflection Team |
| `privacy-policy.html` | Privacy Notice Regarding Client Privacy \| Inflection | How Inflection Capital Management collects, uses, discloses, and safeguards non-public personal client information. Updated March 2026. | Privacy Notice Regarding Client Privacy |

## Design system rules

- Brand palette only: evergreen `#0B2E20`/`#071F16`/`#0E3A28`, mint `#D6E7DD`/`#E9F2EC`, paper `#F6FAF7`. Fonts: Newsreader (display) + Archivo (text) — already loaded in the head; do not add faces.
- Reuse the homepage's components: rounded sweep transitions between dark and light sections, `.reveal` staggered scroll reveals, `.label` eyebrows, `.cta-line` / `.btn-mint` buttons, hairline rules.
- Interior pages open with a **compact banner** (not a full-viewport plate): a shorter evergreen header band, roughly 46–58vh, using one of the existing photographic plates from `../assets/plates/` (`bay-1.jpg`, `cables-1.jpg`, `dusk-2.jpg`) with the existing scrim treatment. The homepage keeps the only full-height hero.
- Rhythm must vary — density then air, dark then light. No wall of identical cards.
- Real hover, `:focus-visible`, and `:active` states on every interactive element.
- Verify with the puppeteer harness at `/private/tmp/claude-501/-Users-anthonydenkinger-Desktop-InflectionCapitalManagement/bf57e341-615e-44ad-94fa-218b55347a7f/scratchpad/snap.mjs` (`node snap.mjs "file://<abs>" out.png [width]`) at 1440 and 390, and LOOK at both before declaring done.

## Team image assets (`../assets/team/`)

| File | Intrinsic size |
|---|---|
| `justin-kunz-960.webp` | 960×804 |
| `katie-riley-mahany-960.webp` | 960×804 |
| `patrick-hayes-960.webp` | 960×719 |
| `sophia-mura-881.webp` | 881×660 |
| `yvonne-freeman-960.webp` | 960×719 |

All are landscape; frame them square or 4:3 with `object-fit:cover; object-position:center 24%`.
