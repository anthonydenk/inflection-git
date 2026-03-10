# Project Architecture

## Root Structure

```
inflection-website/
├── public/                  # Static files served as-is
│   ├── index.html           # HTML shell — React mounts here
│   ├── sitemap.xml          # Auto-generated before each build
│   ├── favicon.ico
│   └── manifest.json
├── src/                     # All application source code
├── docs/                    # Project documentation
├── netlify.toml             # Netlify build configuration
├── sitemap-generator.cjs    # Script to generate sitemap.xml
├── package.json
└── package-lock.json
```

---

## src/ Structure

```
src/
├── index.js                 # App entry point — sets up React Router
├── index.css                # Global base styles
├── sitemap-routes.js        # Route definitions used by sitemap generator
│
├── pages/                   # Top-level route components
│   ├── App.js               # Home page (route: /)
│   ├── App.css              # Home page styles
│   ├── logo.svg
│   ├── privacyPolicy/
│   │   └── privacy.js       # Privacy policy page (route: /privacy-policy)
│   ├── services/
│   │   ├── services.jsx     # Services page with D3 viz (route: /services)
│   │   └── services.css
│   ├── team/
│   │   ├── team.jsx         # Team page (route: /team)
│   │   └── team.css
│   └── contact/             # (deprecated — contact moved to component)
│
├── components/              # Reusable UI components
│   ├── header/
│   │   ├── header.js        # Site-wide navigation header
│   │   └── header.css
│   ├── footer/
│   │   ├── footer.js        # Site-wide footer with PDF links
│   │   ├── footer.css
│   │   └── *.pdf            # ADV forms, CRS forms served as downloads
│   ├── contact/
│   │   ├── contact.jsx      # EmailJS contact form
│   │   └── contact.css
│   ├── carosel/
│   │   └── carousel.js      # Swipeable image carousel
│   ├── profiles/
│   │   └── (portfolio/team profile display)
│   └── gsap-premium/        # Locally bundled GSAP premium plugins
│       ├── ScrollSmoother.js (ESM)
│       ├── SplitText.js (ESM)
│       └── *.min.js / *.umd.js variants
│
└── assets/                  # Static media and fonts
    ├── InflectionGradientBG.mp4   # Hero background video
    ├── BG2.jpg                    # Fallback hero image (low-power/Safari)
    ├── font/
    │   ├── GTSuperDisplay-*/      # GT Super Display (serif headlines)
    │   └── Roobert-*/             # Roobert (sans-serif body)
    ├── logos/                     # Inflection logo files
    └── mainInfo/
        ├── carousel/              # Carousel background images
        └── portfolio/             # Team member headshot photos
```

---

## Routing

Routing is defined in `src/index.js` using React Router v6:

```
/                → src/pages/App.js
/services        → src/pages/services/services.jsx
/team            → src/pages/team/team.jsx
/privacy-policy  → src/pages/privacyPolicy/privacy.js
```

---

## Component Responsibilities

### `src/pages/App.js` (Home)
The largest file (~830 lines). Contains:
- GSAP ScrollSmoother initialization
- Hero section with video background and low-power fallback
- Story / mission section
- Three-pillar (Why / What / How) content sections
- Lifestyle image carousel
- Contact form (renders `<Contact />` component)
- Mobile vs. desktop rendering logic (breakpoint: 768px)

### `src/components/header/header.js`
Site-wide navigation. Handles scroll-based show/hide behavior and mobile menu.

### `src/components/footer/footer.js`
Site-wide footer. Links to PDF documents (ADV, CRS forms) stored alongside it.

### `src/components/contact/contact.jsx`
Standalone contact form. Sends submissions via EmailJS — no backend involved.

### `src/pages/services/services.jsx`
Renders an interactive D3 bubble chart with 7 service categories. Each bubble expands on click to show detail text.

### `src/pages/team/team.jsx`
Renders 5 team member cards with headshots, titles, and full bios. Team data is defined as an array at the top of the file.

### `src/components/gsap-premium/`
GSAP club plugins (ScrollSmoother, SplitText) are **not available on npm** without a paid license. They are committed directly to the repo as local files. Do not delete them or attempt to install them via npm.
