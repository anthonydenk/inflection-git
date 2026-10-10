# Next.js Migration Roadmap For InflectionCM

Prepared: May 8, 2026

## Summary

Create a new migration branch from `Development` and convert the current Create React App site into a one-for-one Next.js App Router build using TypeScript. The first pass preserves the current visual design, content, routes, and interactions while changing the delivery model so every public page ships crawlable HTML, page-specific metadata, canonical URLs, sitemap, robots.txt, and real 404 behavior.

Default deployment target: static export unless a server-only requirement appears during implementation. Contact form stays client-side with EmailJS, so static export should be sufficient.

## Key Implementation Changes

- Create branch `NextJS-Migration` from the current `Development` branch.
- Replace CRA with Next.js App Router, React, TypeScript, and root-level app structure.
- Keep the public routes `/`, `/services`, `/team`, and `/privacy-policy`.
- Use static/server-rendered page components for core page content so raw HTML contains headings, copy, links, and SEO metadata.
- Use client components for browser-dependent areas: header mobile menu and scroll behavior, homepage GSAP animations, carousel, D3 services chart, contact form, and team interactions.
- Replace React Router with Next routing and `next/link`.
- Add route metadata, canonical URLs, Open Graph, Twitter cards, sitemap, robots.txt, structured data, and 404 behavior.
- Preserve the current design first; SEO/content redesign work follows after migration parity.
- Move stable public assets into `public/` where Next can serve them directly.
- Use `next/font/local` for existing local fonts.
- Use static export if build confirms compatibility.

## Test Plan

- `npm run build`
- Route checks for `/`, `/services`, `/team`, `/privacy-policy`, and unknown paths.
- Raw HTML checks with `curl` for homepage, services, team, metadata, sitemap, and robots.txt.
- Browser checks for desktop/mobile homepage, navigation, carousel, services chart, services mobile accordion, team interactions, and contact form.
- Lighthouse and structured data checks after local parity.

## Assumptions

- Use TypeScript for the Next app shell and pages.
- Preserve one-for-one design/functionality for the first pass.
- Keep EmailJS as the contact mechanism.
- Do not add new service pages, team profile pages, or article/resource pages during the first migration.
- Do not commit anything inside `internal/`.
