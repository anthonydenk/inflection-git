# Development Guide

## Prerequisites

- **Node.js** v16 or higher (v18 LTS recommended)
- **npm** v8 or higher
- A code editor (VS Code recommended)
- Git configured with your GitHub credentials

---

## Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/SirSmitty/inflection-git.git
cd inflection-git/inflection-website

# 2. Install dependencies
#    --legacy-peer-deps is required — do not omit it
npm install --legacy-peer-deps

# 3. Start the development server
npm start
```

The app opens at `http://localhost:3000` and hot-reloads on file saves.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start local dev server at `localhost:3000` |
| `npm run build` | Create an optimized production bundle in `build/` |
| `npm test` | Run tests in interactive watch mode |
| `npm run sitemap` | Manually regenerate `public/sitemap.xml` |

> `npm run build` automatically runs the sitemap generator first via the `prebuild` hook.

---

## Development Notes

### Smooth Scrolling
ScrollSmoother (GSAP) is enabled on desktop and disabled on mobile (< 768px). If scroll behavior feels broken during development, check that the `#smooth-wrapper` and `#smooth-content` DOM structure in `App.js` is intact.

### Low-Power / Safari Mode
The hero video (`src/assets/InflectionGradientBG.mp4`) has a fallback to `BG2.jpg` for Safari in low-power mode and for devices that block autoplay. This logic lives in `src/pages/App.js`.

### GSAP Premium Plugins
ScrollSmoother and SplitText are bundled locally in `src/components/gsap-premium/`. Import them from there — not from npm:

```js
import ScrollSmoother from '../components/gsap-premium/ScrollSmoother';
import SplitText from '../components/gsap-premium/SplitText';
```

### Contact Form
The contact form uses **EmailJS**. If emails stop sending, check that the EmailJS service ID, template ID, and public key in `src/components/contact/contact.jsx` are still valid in the EmailJS dashboard.

### Fonts
Fonts are self-hosted in `src/assets/font/` and loaded via `@font-face` in CSS. No external font CDN is used.

---

## Building for Production

```bash
npm run build
```

Output goes to `build/`. You can preview the production build locally using:

```bash
npx serve -s build
```

---

## Deployment

Deployment is handled automatically by **Netlify**:

1. Merge a PR into `main` on GitHub
2. Netlify detects the push and runs `npm run build` (with `--legacy-peer-deps` set in `netlify.toml`)
3. The `build/` directory is published to the live site

There is no manual deploy step required.

---

## Common Issues

**`npm install` fails with peer dependency errors**
Always use `npm install --legacy-peer-deps`.

**Blank screen or broken scroll on dev**
Ensure GSAP's `ScrollSmoother.create()` is only called once and that the `#smooth-wrapper`/`#smooth-content` wrapper divs are present.

**Build fails**
Run `npm run build` locally before pushing to catch errors before Netlify does. Check the console for specific file/line errors.
