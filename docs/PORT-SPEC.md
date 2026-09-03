# Porting the approved design into the Next.js app

Binding for every route ported from `design-iterations/final/`. The prototypes are the source of truth for markup and copy; this file says how they become App Router pages.

## Ground rules

1. **Markup and copy are already approved — transcribe, do not redesign.** Convert the prototype's HTML to JSX faithfully. Do not reword copy, retitle sections, or "improve" the layout. Copy law from `design-iterations/COPY-SOURCE.md` still applies: every claim about the firm must already exist in the prototype.
2. **CSS is already ported.** `app/globals.css` holds the shared design system plus each page's rules, scoped under a page class. Do **not** add `<style>` blocks, CSS modules, or inline style attributes beyond what the prototype already had.
3. **Scope class is mandatory.** Wrap each page's content in `<main id="main-content" className="<scope>">`. Using the wrong scope silently loses that page's styling.

| Route | Prototype | Scope class |
|---|---|---|
| `/` | `index.html` | `p-home` |
| `/who-we-serve` | `who-we-serve.html` | `p-wws` |
| `/who-we-serve/wealth-creators` | `who-we-serve/wealth-creators.html` | `p-wws-wc` |
| `/who-we-serve/next-generation-families` | `who-we-serve/next-generation-families.html` | `p-wws-ng` |
| `/who-we-serve/single-family-offices` | `who-we-serve/single-family-offices.html` | `p-wws-sfo` |
| `/services` | `services.html` | `p-services` |
| `/team` | `team.html` | `p-team` |
| `/team/[slug]` | `team/<slug>.html` | `p-member` |
| `/contact` | `contact.html` | `p-contact` |
| `/privacy-policy` | `privacy-policy.html` | `p-privacy` |
| `/documents/[slug]` | `documents/<slug>.html` | `p-doc` |

## Page shape

```tsx
import type { Metadata } from "next";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import { absoluteUrl } from "../../src/data/site";

export const metadata: Metadata = {
  title: "…",            // 50–60 chars, from the prototype's <title>
  description: "…",      // 140–160 chars, from the prototype's meta description
  alternates: { canonical: absoluteUrl("/…") },
  openGraph: { title: "…", description: "…", url: absoluteUrl("/…"), type: "website" },
};

export default function Page() {
  return (
    <>
      <HeaderComponent />
      <main id="main-content" className="p-…">
        {/* transcribed prototype body, minus its own header/footer */}
      </main>
      <FooterComponent />
    </>
  );
}
```

Take the title and description **verbatim from the prototype's `<head>`** — they were tuned to length already. Drop the prototype's own `<header class="nav">`, mobile `.menu-panel`, and `<footer>`; the components supply those.

## HTML → JSX conversion

- `class` → `className`, `for` → `htmlFor`, `tabindex` → `tabIndex`, `aria-*` and `data-*` stay as-is.
- Void elements must self-close: `<img …/>`, `<br/>`, `<path …/>`.
- `style="a:b;c:d"` → `style={{ a: "b", c: "d" }}`; custom properties keep their name: `style={{ "--d": ".15s" } as React.CSSProperties}`.
- SVG attributes camelCase: `stroke-width` → `strokeWidth`, `stroke-linecap` → `strokeLinecap`, `viewBox` stays.
- HTML entities: prefer the literal character, or keep `&ldquo;`-style entities inside JSX text (they render fine). Curly quotes and apostrophes are intentional typography — keep them.
- Inline `<script>` blocks from the prototype are **not** transcribed. Scroll reveals go through the shared `Reveal` client component (below); nav behavior lives in the header component.

## Scroll reveals

The prototypes use an IntersectionObserver to add `.in` to `.reveal` elements. Do not inline that script. Instead render `<Reveal />` once inside `<main>` (import from `../../src/components/reveal/Reveal`). Keep the `reveal` classNames and `--d` delay styles exactly as the prototype has them.

## Assets

| Prototype path | Use in app |
|---|---|
| `../assets/plates/hero-a.jpg` | `/media/plates/hero-a.jpg` |
| `../assets/plates/bay-1.jpg` | `/media/plates/bay-1.jpg` |
| `../assets/plates/cables-1.jpg` | `/media/plates/cables-1.jpg` |
| `../assets/plates/dusk-2.jpg` | `/media/plates/dusk-2.jpg` |
| `../assets/brand/logoWhite.png` | `/media/brand/logoWhite.png` |
| `../assets/team/<name>.webp` | `/images/team/<name>.webp` |

Plate backgrounds are applied by `globals.css`, so most pages need no `<img>` for them. Keep every `width`/`height`, `alt`, `loading`, and `fetchpriority` attribute the prototype set.

## Links

All internal links become `<Link href="/clean-url">` from `next/link` — never `.html`. Map: `index.html` → `/`, `who-we-serve/wealth-creators.html` → `/who-we-serve/wealth-creators`, `team/justin-kunz.html` → `/team/justin-kunz`, `documents/form-crs.html` → `/documents/form-crs`, `contact.html` → `/contact`. External links (`inflection.addepar.com`, `adviserinfo.sec.gov`) stay plain `<a>` with `target="_blank" rel="noopener noreferrer"`.

## Structured data

Keep each prototype's JSON-LD. In JSX:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

Define `schema` as a plain object above the component. Do not invent new fields.

## Team duotone

`team.html` and the member pages include an inline SVG filter (`<svg class="dt-defs">…#brand-duotone`). That filter now lives once in `app/layout.tsx`, so **do not** repeat it in a page. Keep the `filter: url(#brand-duotone)` CSS, which is already in `globals.css`.

## Verify

`npm run build` must pass. Then check your routes render with `npm run dev` and the puppeteer harness at `/private/tmp/claude-501/-Users-anthonydenkinger-Desktop-InflectionCapitalManagement/bf57e341-615e-44ad-94fa-218b55347a7f/scratchpad/snap.mjs` against `http://localhost:3457/<route>` at 1440 and 390, and compare against the prototype screenshot. Styling that looks entirely absent almost always means a missing or wrong scope class.
