# Inflection Capital Management — Website

Marketing and informational website for **Inflection Capital Management**, a Silicon Valley-based wealth management and family office firm serving ultra-high-net-worth families.

The site is a React single-page application with multi-page routing, GSAP scroll animations, a video hero, D3 service visualization, and EmailJS contact integration. It is deployed on Netlify via the `main` branch.

---

## Documentation

| Document | Description |
|---|---|
| [Tech Stack](docs/TECH_STACK.md) | Frameworks, libraries, and tooling |
| [Architecture](docs/ARCHITECTURE.md) | Folder structure and component overview |
| [Development Guide](docs/DEVELOPMENT.md) | Local setup, scripts, and git workflow |
| [Branch Guide](docs/BRANCHES.md) | Branch structure and contribution conventions |

---

## Quick Start

```bash
cd inflection-website
npm install --legacy-peer-deps
npm start
```

App runs at `http://localhost:3000`.

> `--legacy-peer-deps` is required due to dependency conflicts between GSAP, React 18, and certain older packages. Always use this flag when installing.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/App.js` | Home — hero video, mission, pillars, carousel, contact |
| `/services` | `src/pages/services/services.jsx` | Interactive D3 service category visualization |
| `/team` | `src/pages/team/team.jsx` | Team member bios and headshots |
| `/privacy-policy` | `src/pages/privacyPolicy/privacy.js` | Privacy policy |

---

## Deployment

Hosted on **Netlify**. Every merge to `main` triggers an automatic production build.

- Build command: `npm run build`
- Publish directory: `build/`
- Config: `netlify.toml`
