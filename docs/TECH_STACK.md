# Tech Stack

## Core

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI framework (functional components + hooks) |
| React Router DOM | 6.28.0 | Client-side multi-page routing |
| React Scripts (CRA) | 5.0.1 | Build tooling, dev server, Babel/Webpack config |

---

## Animation

| Library | Version | Purpose |
|---|---|---|
| GSAP | 3.12.5 | Core animation engine |
| GSAP ScrollTrigger | (bundled) | Scroll-driven animation triggers |
| GSAP ScrollSmoother | (bundled) | Smooth scrolling on desktop |
| GSAP SplitText | (bundled) | Character/word/line text animation |

> GSAP premium plugins (ScrollSmoother, SplitText) are included locally in `src/components/gsap-premium/` as ESM and UMD builds. They are **not** installed via npm — do not remove or move these files.

---

## Data & Visualization

| Library | Version | Purpose |
|---|---|---|
| D3 | 7.9.0 | Interactive bubble chart on the Services page |
| React Google Charts | 5.2.1 | Additional charting support |

---

## UI & Styling

| Library | Version | Purpose |
|---|---|---|
| Custom CSS | — | Per-component stylesheets (no CSS framework) |
| React Helmet | 6.1.0 | `<head>` management for SEO and meta tags |
| React Swipeable | 7.0.2 | Touch swipe gestures (carousel) |
| React Scroll | 1.9.0 | Smooth in-page anchor scrolling |

---

## Forms & Communication

| Library | Version | Purpose |
|---|---|---|
| @emailjs/browser | 4.4.1 | Sends contact form submissions via EmailJS (no backend required) |

---

## Tooling & Deployment

| Tool | Purpose |
|---|---|
| Netlify | Hosting and continuous deployment |
| `netlify.toml` | Netlify build configuration |
| `sitemap-generator.cjs` | Generates `public/sitemap.xml` before each build (`prebuild` script) |
| Babel | JS transpilation (managed by CRA) |
| Jest + React Testing Library | Unit and component testing |

---

## Important Notes

- **Node/npm:** Always install with `--legacy-peer-deps`. This is required for GSAP and some older packages to coexist with React 18. It is set automatically on Netlify via `netlify.toml`.
- **Fonts:** GT Super Display and Roobert are self-hosted in `src/assets/font/`. They are not loaded from any CDN.
- **No backend:** The site is fully static. The only external service call at runtime is EmailJS for the contact form.
