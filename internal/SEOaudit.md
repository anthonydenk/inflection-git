# Inflection Capital Management SEO Audit

Prepared: May 8, 2026  
Site reviewed: https://inflectioncm.com  
Codebase branch reviewed: `Development`  
Primary objective: improve organic discoverability, crawlability, search result quality, and bot/scraper access after removing the full-screen video entry gate.

## Executive Summary

The entry gate removal was the right first move. The old "Enter Now" experience blocked users, bots, scrapers, and social preview systems from reaching the real homepage content quickly. That change directly improves crawl access and user experience.

The next major SEO issue is structural: the site is still a client-rendered React app whose initial HTML response contains almost no page content. Google can render JavaScript, but rendering can be delayed, and many crawlers, social unfurlers, AI scrapers, compliance archivers, backlink tools, and lightweight bots do not execute JavaScript reliably. Today, a raw fetch of the homepage and subpages mostly sees the same generic app shell, the same title, and the same meta description.

The highest-return SEO path is:

1. Serve real page content, metadata, canonical tags, and structured data in the initial HTML for every public route.
2. Add unique page titles, descriptions, Open Graph data, and canonical URLs per route.
3. Make the navigation crawlable with real `<a href="">` links.
4. Fix sitemap, robots.txt, and unknown-route status behavior.
5. Improve performance by compressing oversized imagery and removing broken preloads.
6. Build more explicit, compliance-reviewed service and expertise content around the terms clients actually search for.

This audit is written as a customer-facing checklist. It includes findings, priorities, evidence, and acceptance criteria.

## Priority Key

- P0 Critical: directly affects whether bots can discover, render, index, or correctly classify pages.
- P1 High: likely to affect rankings, click-through rate, crawl efficiency, or trust.
- P2 Medium: improves performance, clarity, authority, or conversion support.
- P3 Ongoing: content, monitoring, and authority-building work that compounds over time.

## Current SEO Scorecard

| Area | Current State | Priority | Summary |
| --- | --- | --- | --- |
| Entry gate | Fixed on `Development` | Complete | The full-screen video background and Enter Now blocker have been removed. |
| Server HTML content | Weak | P0 | Initial HTML is mostly `<div id="root"></div>`, so non-JS bots see little content. |
| Route-specific metadata | Weak | P0/P1 | Home, Services, Team, and Privacy share the same generic title and description. |
| Crawlable internal links | Weak | P1 | Main navigation uses buttons and JavaScript routing instead of standard anchors. |
| Sitemap | Partial | P1 | Sitemap exists but duplicates the homepage and lacks stronger supporting metadata. |
| robots.txt | Partial | P1 | Crawling is not blocked, which is good, but there is no `Sitemap:` directive. |
| HTTP status behavior | Weak | P1 | Unknown URLs return HTTP 200 because of the SPA fallback, creating soft 404 risk. |
| Structured data | Missing | P1 | No Organization, FinancialService, BreadcrumbList, Person, or WebSite JSON-LD found. |
| Page headings | Mixed | P1 | Homepage currently uses multiple H1s and lacks a clear text H1 naming the firm in the hero. |
| Image performance | Weak | P1/P2 | Several PNG/JPG assets are multi-megabyte files; broken preload URLs are present. |
| Trust signals | Good foundation | P2 | ADV, CRS, privacy notice, SEC adviser link, team bios, and contact details help credibility. |
| Content depth | Moderate | P2/P3 | The site explains services, but service topics need more crawlable, text-rich detail. |
| Search Console/Bing monitoring | Unknown | P1 | Should be verified and monitored after deployment. |

## Audit Method

The site was reviewed in four ways:

1. Source code review of public files, routes, components, sitemap, robots.txt, redirects, manifest, and page components.
2. Raw HTTP checks against production at `https://inflectioncm.com`.
3. Rendered DOM checks in a browser against the local Development branch.
4. Lighthouse diagnostic run against the local development server.

Important caveat: Lighthouse reported an SEO score of 100 in the rendered local browser, but that score does not catch the app-shell problem. A page can pass Lighthouse's basic rendered SEO checks while still being weak for non-JS crawlers, social previews, and many AI/scraping systems.

## What Is Working Well

- The entry gate has been removed on the Development branch.
- HTTPS is active on production.
- `www.inflectioncm.com` redirects to `https://inflectioncm.com/`, which helps consolidate host-level duplication.
- The current `robots.txt` does not block the site.
- A sitemap exists at `/sitemap.xml`.
- The rendered pages contain real business content once JavaScript runs.
- The footer includes credibility signals: ADV, Form CRS, privacy policy, SEC adviser information, disclosure text, location, and phone number.
- The team page contains names, titles, biographies, and professional context.
- Team headshots have useful alt text and lazy loading.
- The privacy policy is available as a public route.
- The site has a clear brand identity and a focused business category: partner-owned multi-family office and wealth management.

## Most Important Finding

### P0: The Initial HTML Is Too Thin For Non-JS Crawlers

Observation:

The production site and local Development build serve a React app shell first. The raw HTML response does not contain the visible page copy, service content, team bios, headings, or route-specific metadata. Content appears after JavaScript executes.

Evidence:

- `GET /` returns the app shell and an empty root container.
- `GET /services`, `GET /team`, and `GET /privacy-policy` return the same generic shell.
- The default source title is `Inflection`.
- The same generic meta description is used across all public routes.

Why this matters:

Google can render JavaScript, but Google itself documents that JavaScript pages go through crawling, rendering, and indexing, and that server-side or pre-rendering is still a strong practice because it is faster for users and crawlers. Many other systems do not reliably run JavaScript at all. This affects:

- Google discovery speed and rendering reliability.
- Bing and other search engines.
- AI answer engines and LLM scrapers.
- Social sharing previews.
- Link preview bots.
- Compliance archiving tools.
- SEO crawlers such as Screaming Frog, Ahrefs, Semrush, and similar tools.
- Lightweight enterprise scrapers that fetch raw HTML only.

Recommended fix:

Move the public marketing site to server-rendered or statically generated HTML.

Best-fit options:

- Static site generation with Next.js, Astro, Gatsby, or another SSG-capable framework.
- Server-side rendering with Next.js or Remix.
- Netlify prerendering or a prerender service as an interim workaround.
- A custom build step that pre-renders `/`, `/services`, `/team`, and `/privacy-policy` to real HTML files.

Acceptance criteria:

- `curl -s https://inflectioncm.com/` contains the firm name, primary H1, homepage copy, canonical tag, and Organization JSON-LD.
- `curl -s https://inflectioncm.com/services` contains `Our Services` and crawlable service descriptions.
- `curl -s https://inflectioncm.com/team` contains team names, roles, and biography summaries.
- Each route has its own `<title>`, meta description, canonical URL, and Open Graph data in the initial HTML.
- No public page depends on a click, hover, animation, or JavaScript execution for its primary content to exist in the document.

## Critical Technical Findings And Fixes

### P0: Route Metadata Is Generic And Duplicated

Current condition:

All main routes use the same HTML title and description:

- Title: `Inflection`
- Description: generic firm description

Why this matters:

Title links are one of the most important pieces of information users see in search results. Generic or repeated titles make it harder for Google, Bing, and users to distinguish pages. Meta descriptions are not a direct ranking factor, but they strongly affect search result snippets and click-through rate when Google chooses to use them.

Recommended fix:

Add route-specific metadata for every page. This should be present in initial HTML, not only injected after JavaScript runs.

Suggested metadata:

| Route | Proposed Title | Proposed Meta Description |
| --- | --- | --- |
| `/` | `Inflection Capital Management | Multi-Family Office in Silicon Valley` | `Inflection Capital Management is a partner-owned multi-family office in Silicon Valley helping families preserve, grow, and steward wealth and legacy.` |
| `/services` | `Family Office & Wealth Management Services | Inflection Capital Management` | `Explore Inflection Capital Management's family office services, including investment management, estate planning coordination, reporting, and family governance.` |
| `/team` | `Our Team | Inflection Capital Management` | `Meet the Inflection Capital Management team: investment, family office, and client service professionals serving families from Silicon Valley and San Francisco.` |
| `/privacy-policy` | `Privacy Notice | Inflection Capital Management` | `Read the Inflection Capital Management privacy notice, including how personal information is collected, shared, protected, and disclosed.` |

Add Open Graph and Twitter Card tags:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

Acceptance criteria:

- View-source for each route shows a unique title and description.
- Search Console URL Inspection shows the expected canonical and rendered page title.
- Link previews in Slack, LinkedIn, iMessage, and X display the correct page title and image.

### P0: Missing Canonical Tags

Current condition:

No route-specific canonical tags were found in the initial HTML.

Why this matters:

Canonical tags help consolidate signals across duplicate or similar URLs. The site already redirects `www` to apex, which is good, but canonical tags should still be explicit on every indexable route.

Recommended fix:

Add absolute canonical URLs:

```html
<link rel="canonical" href="https://inflectioncm.com/" />
<link rel="canonical" href="https://inflectioncm.com/services" />
<link rel="canonical" href="https://inflectioncm.com/team" />
<link rel="canonical" href="https://inflectioncm.com/privacy-policy" />
```

Acceptance criteria:

- Each public route has exactly one canonical tag.
- The canonical URL matches the sitemap URL.
- Internal links point to the canonical URL format.
- No canonical points to localhost, the fork, Netlify preview URLs, or `www`.

### P1: Navigation Uses Buttons Instead Of Crawlable Links

Current condition:

The header navigation uses `<button>` elements and JavaScript actions such as `window.location.href` for key pages. In the rendered homepage, the main nav items appear as buttons rather than standard anchors.

Why this matters:

Search engines use links to discover pages and understand site structure. Google specifically recommends crawlable links as `<a>` elements with `href` attributes. Buttons may work for users, but they are weaker for crawlers and link graph understanding.

Recommended fix:

Replace route navigation buttons with standard links:

```html
<a href="/services">Services</a>
<a href="/team">Team</a>
<a href="/#about">About Us</a>
<a href="/#contact">Contact</a>
```

Use a styled anchor if the design needs button-like visuals. External login should also be a real link.

Acceptance criteria:

- Browser-rendered DOM includes crawlable anchors for all core pages.
- Raw or prerendered HTML includes the same anchors.
- A crawler can discover `/services`, `/team`, and `/privacy-policy` from the homepage.

### P1: Sitemap Has Duplicate Homepage Entry And robots.txt Does Not Reference It

Current condition:

`/sitemap.xml` exists, but it includes the homepage twice. `robots.txt` allows crawling, but does not include a `Sitemap:` directive.

Why this matters:

A sitemap helps search engines discover the preferred URLs. Duplicate entries are not usually catastrophic, but they are sloppy and reduce confidence in the crawl setup. A sitemap directive in robots.txt helps bots discover it quickly.

Recommended sitemap:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://inflectioncm.com/</loc>
    <lastmod>2026-05-08</lastmod>
  </url>
  <url>
    <loc>https://inflectioncm.com/services</loc>
    <lastmod>2026-05-08</lastmod>
  </url>
  <url>
    <loc>https://inflectioncm.com/team</loc>
    <lastmod>2026-05-08</lastmod>
  </url>
  <url>
    <loc>https://inflectioncm.com/privacy-policy</loc>
    <lastmod>2026-05-08</lastmod>
  </url>
</urlset>
```

Recommended robots.txt:

```txt
User-agent: *
Disallow:

Sitemap: https://inflectioncm.com/sitemap.xml
```

Acceptance criteria:

- Sitemap has no duplicate URLs.
- Sitemap uses only canonical production URLs.
- Sitemap is submitted in Google Search Console and Bing Webmaster Tools.
- robots.txt references the sitemap.

### P1: Unknown URLs Return 200 Instead Of 404

Current condition:

`public/_redirects` contains:

```txt
/* /index.html 200
```

This means unknown paths such as `/nonexistent-test` return HTTP 200 and the app shell.

Why this matters:

Search engines may treat this as a soft 404. Google documents that a 200 response can still be considered a soft 404 when the page content looks like an error or empty page. This can waste crawl time and pollute index quality.

Recommended fix:

If the site stays as a React SPA temporarily, configure known route rewrites and a real 404 fallback:

```txt
/services /index.html 200
/team /index.html 200
/privacy-policy /index.html 200
/ /index.html 200
/* /404.html 404
```

If the site moves to SSG, generate actual static files and a real `404.html`.

Acceptance criteria:

- `https://inflectioncm.com/not-a-real-page` returns HTTP 404.
- The 404 page includes helpful links to Home, Services, Team, and Contact.
- The 404 page includes `noindex` if it is served with a normal HTML body.

### P1: Broken Preload URLs In public/index.html

Current condition:

The HTML includes preload links pointing to paths like:

```html
/inflection-website/src/assets/mainInfo/paralaxBottom.png
/inflection-website/src/assets/mainInfo/opener.png
/inflection-website/src/assets/logos/mobileParalax.jpg
```

On production, these paths are not real static image paths. Because of the SPA fallback, they can return the app shell as HTML instead of an image.

Why this matters:

Broken or incorrect preloads waste network priority, can confuse crawlers and performance tools, and do not help the real Largest Contentful Paint asset load faster.

Recommended fix:

- Remove incorrect preloads.
- Preload only the actual above-the-fold hero/LCP image using the generated production asset URL or a stable public asset path.
- If the hero image changes by viewport, use responsive image markup and let the browser select the best file.

Acceptance criteria:

- Browser DevTools Network panel shows no preload warnings.
- Preloaded assets return the expected image MIME type.
- Lighthouse no longer flags LCP request discovery issues.

### P1: Homepage Heading Structure Is Confusing

Current condition:

The rendered homepage includes multiple H1 elements:

- `The Story of Inflection`
- `Our Clients Inspire Us`
- `Our Partnership`
- `Success Together`
- `Our Approach`
- `Meet with the Inflection Team`

The hero's primary brand signal is a wordmark image rather than a clear text H1.

Why this matters:

Search engines and assistive technologies use headings to understand page structure. Multiple H1s are not automatically fatal, but this implementation misses an obvious opportunity: the homepage should clearly name the business and category in the most prominent text heading.

Recommended fix:

Use one primary H1 on the homepage:

```html
<h1>Inflection Capital Management</h1>
```

Supporting hero copy should describe the business:

```text
A partner-owned multi-family office serving families across Silicon Valley and San Francisco.
```

Convert current section H1s to H2s:

- The Story of Inflection
- Our Clients Inspire Us
- Our Partnership
- Success Together
- Our Approach
- Meet with the Inflection Team

Acceptance criteria:

- Homepage has one clear H1 naming the firm.
- Section headings follow H2/H3 hierarchy.
- The first viewport contains text that identifies the firm, business category, and service area.

### P1: Structured Data Is Missing

Current condition:

No JSON-LD structured data was found for the organization, team members, breadcrumbs, website, or services.

Why this matters:

Structured data helps search engines understand entities, relationships, business details, logos, contact points, and page context. It does not guarantee rich results or rankings, but it improves machine readability and entity disambiguation.

Recommended JSON-LD types:

- `Organization` on homepage.
- `FinancialService` or the most appropriate Schema.org subtype if compliance approves.
- `WebSite` on homepage.
- `BreadcrumbList` on Services, Team, Privacy.
- `Person` for team members, especially if individual profile pages are later created.
- `Service` or `OfferCatalog` only if the content is visible and accurately describes services.

Organization schema should include:

- Legal or approved public name.
- URL.
- Logo.
- Description.
- Telephone.
- Approved address or service area.
- SEC adviser profile in `sameAs`.
- LinkedIn profile if available and approved.
- Contact point.

Example direction, with final values to be compliance-approved:

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Inflection Capital Management",
  "url": "https://inflectioncm.com/",
  "description": "Partner-owned multi-family office and wealth management firm serving families in Silicon Valley and San Francisco.",
  "telephone": "+1-415-358-8100",
  "areaServed": ["Silicon Valley", "San Francisco", "California"],
  "sameAs": [
    "https://adviserinfo.sec.gov/firm/summary/333157"
  ]
}
```

Acceptance criteria:

- JSON-LD is present in initial HTML.
- Rich Results Test reports no critical errors.
- Structured data describes only content visible to users.
- Compliance approves all regulated business descriptions before publishing.

## Page-By-Page Audit

### Homepage

Current strengths:

- Strong visual brand identity.
- Good story-oriented copy.
- Compliance and trust links in footer.
- Contact form appears on the page.
- Entry gate removal makes the homepage accessible immediately.

Current weaknesses:

- Raw HTML does not include the visible homepage content.
- No homepage-specific title, description, canonical, or social preview metadata.
- Hero does not expose `Inflection Capital Management` as a clear text H1.
- Multiple H1s dilute the page outline.
- Main nav links are buttons.
- Several images have weak or incorrect alt text, including carousel images showing `[object Object]` as alt text in the rendered DOM.
- Some key terms are underused in prominent text: multi-family office, wealth management, Silicon Valley, San Francisco, family office services, legacy planning, investment management.

Recommended homepage changes:

- Add a visible text H1: `Inflection Capital Management`.
- Add a concise hero description: `A partner-owned multi-family office serving families across Silicon Valley and San Francisco.`
- Add 2 to 4 lines of crawlable copy describing who the firm serves and what outcomes it supports.
- Convert section H1s to H2s.
- Add Organization or FinancialService JSON-LD.
- Add a static contact section with phone, approved address/service area, and contact link.
- Improve image alt text:
  - Wordmark: `Inflection Capital Management`
  - Story image: describe the actual image or use empty alt if decorative.
  - Carousel images: meaningful alt based on each slide, not `[object Object]`.
- Add internal links from homepage sections to Services and Team using anchors.

Suggested homepage target keywords:

- Inflection Capital Management
- multi-family office
- family office Silicon Valley
- wealth management Silicon Valley
- private wealth management San Francisco
- legacy planning
- family governance
- investment management
- estate planning coordination

### Services Page

Current strengths:

- Route exists at `/services`.
- Rendered page includes a clear H1: `Our Services`.
- The page lists meaningful service categories.
- Mobile experience exposes service content in accordions.

Current weaknesses:

- Initial HTML does not include the service content.
- Page title and description are not unique.
- Desktop service presentation is driven by a D3/SVG interactive chart, which may be less useful to crawlers than normal semantic text.
- Service sections lack deep, descriptive copy that can rank for specific needs.
- No FAQ, breadcrumb, or service structured data.
- No visible internal links from services to team, contact, or relevant service anchors in static HTML.

Recommended services changes:

- Add server-rendered text sections for each service category.
- Keep the interactive chart if desired, but make it an enhancement on top of semantic HTML.
- Add H2s for each service area.
- Add short paragraphs under each service area explaining who it is for, what the firm coordinates, and why it matters.
- Add internal jump links:
  - `/services#investment-management`
  - `/services#family-office`
  - `/services#estate-planning`
  - `/services#reporting`
  - `/services#family-governance`
- Add a compliance-reviewed FAQ section.
- Add BreadcrumbList JSON-LD.
- Consider individual service pages if content expands.

Potential service content blocks:

- Investment management
- Consolidated reporting
- Estate and trust coordination
- Tax planning coordination
- Family governance
- Philanthropic planning coordination
- Liquidity event planning
- Legacy and succession planning
- Risk management and insurance coordination
- Multi-generational wealth stewardship

Compliance note:

Avoid promises such as "maximize returns," "guaranteed preservation," or unapproved performance claims. Use language like "helping families coordinate," "supporting decision-making," and "working with outside advisors."

### Team Page

Current strengths:

- Route exists at `/team`.
- H1 is clear: `Our Team`.
- Team names, roles, headshots, and biographies are present in the rendered DOM.
- Professional biographies are strong trust content for financial services.
- Joint venture partner section adds credibility.

Current weaknesses:

- Initial HTML does not include the content.
- Metadata is generic.
- Bios rely heavily on interactive hover/mobile reveal patterns.
- Team members do not have individual profile URLs.
- No Person schema.
- No author/reviewer framework for future educational content.

Recommended team changes:

- Server-render the team names, titles, and short biography summaries.
- Add unique title, description, canonical, and Open Graph tags.
- Add Person JSON-LD for each team member or at minimum prepare for it.
- Consider individual profile pages over time:
  - `/team/andrew-c-stewart`
  - `/team/william-t-montgomery`
  - etc.
- Add professional credentials and role descriptions where compliance approves.
- If educational articles are added later, show author and reviewer names linked to team profiles.

Why this matters:

Financial services content is a YMYL category because it can affect financial stability. Google emphasizes trust, expertise, authoritativeness, and transparent authorship for these topics. Strong team pages support entity trust and conversion quality.

### Privacy Policy Page

Current strengths:

- Public privacy policy exists.
- Page has many clear H2 sections.
- Legal and privacy content supports trust.

Current weaknesses:

- It has the same generic title and meta description as every other page.
- It lacks the site header, which reduces internal linking.
- Initial HTML does not include the privacy text.

Recommended privacy changes:

- Add unique metadata.
- Include a simple header or breadcrumb for navigation.
- Keep indexable unless compliance prefers `noindex`.
- If indexed, make sure the title clearly says `Privacy Notice`.

Recommended default:

Keep it indexable. Privacy pages are not ranking assets, but public privacy access supports trust and business credibility.

## Performance Audit

### Current Diagnostic Findings

Local Lighthouse run against the Development server:

- Performance: 66
- Accessibility: 97
- Best Practices: 100
- SEO: 100
- Largest Contentful Paint: 15.6 seconds
- Time to Interactive: 15.7 seconds
- Speed Index: 7.1 seconds
- Total Blocking Time: 100 ms
- Cumulative Layout Shift: 0.004
- Total byte weight flagged: about 5,872 KiB
- Estimated image delivery savings: about 2,134 KiB

Important caveat:

This was run against a local development server, so production PageSpeed Insights should be run after deployment. However, the oversized asset problem is real in the codebase and build output.

### Large Asset Findings

Large source assets observed:

- `src/assets/mainInfo/portfolio/poi1.png`: about 7.2 MB
- `src/assets/mainInfo/portfolio/poi2.png`: about 6.3 MB
- `src/assets/logos/mobileParalax.png`: about 6.0 MB
- `src/assets/BG2.jpg`: about 5.0 MB
- `src/assets/mainInfo/opener.png`: about 4.9 MB
- `src/assets/mainInfo/carousel/tempCaro.png`: about 2.5 MB

Large build assets observed:

- Built portfolio image: about 7.2 MB
- Built portfolio image: about 6.3 MB
- Built background JPG: about 1.1 MB
- ADV PDF: about 932 KB
- Openersmall JPG: about 908 KB
- CRS PDF: about 836 KB
- Carousel images: roughly 568 KB to 768 KB each

Why this matters:

Large images slow LCP, increase mobile data use, and can reduce page experience. Google states page experience is not a single ranking signal, but Core Web Vitals and overall page experience can contribute to search success, especially where content relevance is otherwise competitive.

Recommended fixes:

- Convert large PNG/JPG assets to WebP or AVIF.
- Serve responsive images with `srcset` and `sizes`.
- Keep fallbacks with valid `src` attributes.
- Add explicit `width` and `height` attributes to reduce layout shift.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary hero/LCP image.
- Remove unused media from bundles.
- Re-run PageSpeed Insights on production after deployment.

Target performance goals:

- LCP under 2.5 seconds on mobile field data.
- CLS under 0.1.
- INP under 200 ms.
- Homepage transfer size materially below current multi-megabyte image footprint.
- No broken preloads or MIME mismatch warnings.

## Entity Trust, E-E-A-T, And Financial Services Credibility

Inflection operates in a financial-services category. Google describes financial stability topics as YMYL, meaning trust and expertise matter heavily.

Current trust assets:

- Team biographies.
- Partner-owned positioning.
- ADV and Form CRS links.
- SEC adviser profile link.
- Privacy policy.
- Disclosures.
- Phone number.
- San Francisco location signal.

Recommended trust improvements:

- Add full approved NAP details where compliance allows:
  - Name
  - Address
  - Phone
- Add a dedicated "About" or "Firm" page with:
  - Firm history.
  - Ownership model.
  - Who the firm serves.
  - Fiduciary/adviser status, if compliance approves wording.
  - Service area.
  - Regulatory links.
- Add individual team profile pages over time.
- Add a concise compliance-reviewed statement explaining registration and disclosures.
- Add LinkedIn and other official social profiles in footer and schema if active.
- Add a "Last reviewed" date to important educational content.
- For future resources, include author and reviewer names.

Avoid:

- Performance claims without required disclosures.
- Testimonials or endorsements unless fully reviewed under SEC marketing rules.
- Ranking-focused thin pages.
- Mass AI-generated financial advice.
- Overstated guarantees such as "protects wealth" or "maximizes returns."
- Keyword stuffing.

## Content Strategy Recommendations

The current site explains the firm but does not yet give search engines much page-specific depth. To rank beyond brand searches, the site needs helpful, compliance-approved content that answers real questions wealthy families, founders, executives, and their advisors search for.

### Priority Commercial Pages

Create or expand pages around:

- Multi-family office services.
- Private wealth management.
- Family office services in Silicon Valley.
- Family office services in San Francisco.
- Liquidity event planning.
- Estate planning coordination.
- Tax planning coordination.
- Investment management.
- Family governance.
- Consolidated reporting.
- Philanthropic planning coordination.

Suggested URL structure:

```txt
/services
/services/investment-management
/services/family-office-services
/services/estate-planning-coordination
/services/family-governance
/services/liquidity-event-planning
```

Start with strong sections on `/services`. Only create separate pages when there is enough unique content to avoid thin pages.

### Priority Educational Content

Potential article or guide topics:

- What does a multi-family office do?
- When should a family consider a multi-family office?
- Family office vs. wealth manager: key differences.
- Planning after a business sale or liquidity event.
- How families coordinate estate, tax, and investment decisions.
- What is consolidated reporting for complex family wealth?
- How family governance supports multi-generational planning.
- Questions to ask when choosing a family office.
- How outside advisors work with a multi-family office.
- Common planning priorities after an IPO, acquisition, or concentrated stock event.

Content guidelines:

- Write for clients first, search engines second.
- Use clear, expert explanations.
- Include author/reviewer attribution.
- Add dates only when meaningful.
- Avoid generic summaries that repeat what every competitor says.
- Include compliance disclosures where needed.
- Add internal links to Services, Team, and Contact.

### Keyword Themes To Research

Use these as seed topics, not as stuffing:

- multi-family office
- family office Silicon Valley
- family office San Francisco
- private wealth management Silicon Valley
- wealth management for founders
- liquidity event planning
- family governance
- family office investment management
- estate planning coordination
- UHNW wealth management
- consolidated wealth reporting
- legacy planning
- wealth transfer planning

Recommended process:

1. Confirm actual search volume and competitiveness in Google Search Console, Ahrefs, Semrush, or similar tooling.
2. Compare competitor pages ranking for each query.
3. Build one excellent page per intent, not many near-duplicate pages.
4. Review all financial claims with compliance before publishing.

## AI, Bots, And Scraper Readiness

The goal is not only Google ranking. The site should be easy for reputable bots and AI systems to understand.

Best practices:

- Put core content in server-rendered HTML.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Use crawlable anchors with `href`.
- Avoid hiding primary content behind click-only UI.
- Use JSON-LD structured data.
- Keep sitemap accurate.
- Add `Sitemap:` to robots.txt.
- Avoid blocking important CSS, JS, images, or PDFs unless intentionally private.
- Use meaningful titles and descriptions.
- Make contact details and business identity explicit.
- Return proper HTTP status codes.
- Keep PDFs and downloads linked with descriptive anchor text.

Optional:

Add `/llms.txt` as an AI-orientation file. This is not a Google ranking factor and should not be sold as an SEO shortcut. It can still be useful for LLM crawlers and agents by listing approved canonical pages, a firm summary, and compliance-safe descriptions.

Possible `llms.txt` outline:

```txt
# Inflection Capital Management

Inflection Capital Management is a partner-owned multi-family office based in Silicon Valley and San Francisco.

## Core Pages
- https://inflectioncm.com/
- https://inflectioncm.com/services
- https://inflectioncm.com/team
- https://inflectioncm.com/privacy-policy

## Public Regulatory Resources
- https://adviserinfo.sec.gov/firm/summary/333157
```

AI crawler policy:

If the business wants discoverability, do not block reputable search and AI crawlers by default. If there are content licensing concerns later, define a deliberate robots policy by crawler. Do not accidentally block Googlebot, Bingbot, or critical resources.

## Accessibility And Semantic Improvements That Also Help SEO

Current strengths:

- Lighthouse accessibility was high in the local rendered check.
- Team images generally have useful alt text.

Issues found:

- No clear `main` landmark was flagged.
- Header navigation is not semantically crawlable.
- Carousel image alt values include `[object Object]`.
- Homepage heading hierarchy is weak.
- Contact form behavior should prevent default form submission reliably.
- Some visual images may need empty alt text if decorative, or accurate descriptive alt if meaningful.

Recommended fixes:

- Add one `<main>` element per page.
- Use semantic page sections.
- Use one primary H1 per page.
- Replace nav buttons with anchors.
- Fix carousel alt text.
- Ensure all inputs have visible or programmatically associated labels.
- Add accessible names to icon-only controls.
- Avoid hover-only content for critical information.

## PDF And Regulatory Document Recommendations

Current strengths:

- ADV and Form CRS are linked publicly.
- SEC adviser profile is linked.

Recommended improvements:

- Use descriptive anchor text:
  - `Form ADV Part 2A`
  - `Form CRS Relationship Summary`
  - `SEC Investment Adviser Public Disclosure profile`
- Consider creating a `/disclosures` page that explains each document in plain language and links to the PDFs.
- Keep PDF filenames descriptive if possible.
- If PDFs should be indexed, make sure they are accessible and linked from crawlable HTML.
- If PDFs should not be indexed, use appropriate `X-Robots-Tag` headers rather than robots.txt alone.
- Add canonical HTTP headers for PDFs if duplicate document URLs exist.

## Local And Business Profile Recommendations

If compliance and business strategy allow, strengthen local/entity signals:

- Verify Google Business Profile.
- Verify Bing Places.
- Keep name, address, and phone consistent across:
  - Website footer.
  - Google Business Profile.
  - Bing Places.
  - SEC/IAPD profile.
  - LinkedIn.
  - Major reputable directories.
- Add a dedicated contact page with approved address/service area and phone.
- Add `sameAs` links in structured data.
- Add a map or office description only if it helps real visitors and compliance approves.

Do not create fake local landing pages. If the firm serves clients nationally but has a San Francisco/Silicon Valley base, describe that accurately.

## Analytics And Webmaster Tooling

Recommended setup:

- Google Search Console domain property.
- Bing Webmaster Tools.
- Submit sitemap in both platforms.
- Use Bing URL submission or IndexNow after major page updates.
- GA4 or a privacy-friendly analytics platform.
- PageSpeed Insights monitoring for production.
- Uptime monitoring.
- Search Console email alerts enabled.

Monitor:

- Indexed pages.
- Crawled but not indexed pages.
- Soft 404s.
- Duplicate without user-selected canonical.
- Alternate page with proper canonical.
- Mobile usability.
- Core Web Vitals.
- Search queries by page.
- Click-through rate by query.
- Branded vs. non-branded traffic.
- Backlinks to public pages.

After deploying SEO fixes:

1. Submit `/sitemap.xml` in Search Console.
2. Inspect `/`, `/services`, `/team`, and `/privacy-policy`.
3. Request indexing for updated core pages.
4. Test social previews.
5. Run Rich Results Test.
6. Run PageSpeed Insights.
7. Recheck raw HTML with `curl`.

## Immediate 0-48 Hour Checklist

- [ ] Deploy the entry gate removal to production after stakeholder approval.
- [ ] Remove broken preload links from `public/index.html`.
- [ ] Fix sitemap duplicate homepage entry.
- [ ] Add `Sitemap: https://inflectioncm.com/sitemap.xml` to `robots.txt`.
- [ ] Replace header route buttons with crawlable `<a href="">` links.
- [ ] Add unique route titles and meta descriptions.
- [ ] Add canonical tags for all routes.
- [ ] Fix carousel image alt text currently rendering as `[object Object]`.
- [ ] Add a visible homepage H1 naming `Inflection Capital Management`.
- [ ] Convert secondary homepage H1s to H2s.
- [ ] Add a real 404 response for unknown URLs.
- [ ] Verify Google Search Console and Bing Webmaster Tools access.
- [ ] Submit sitemap after production deploy.

## 1-2 Week Technical Foundation Checklist

- [ ] Decide on SSG/SSR/prerender strategy.
- [ ] Ensure raw HTML for every public route includes visible page content.
- [ ] Add Open Graph and Twitter Card metadata.
- [ ] Add Organization or FinancialService JSON-LD.
- [ ] Add BreadcrumbList JSON-LD on subpages.
- [ ] Add semantic `main`, `nav`, `section`, and `footer` landmarks.
- [ ] Build a real 404 page.
- [ ] Compress large PNG/JPG assets to WebP/AVIF.
- [ ] Add responsive image markup with `srcset` and `sizes`.
- [ ] Add explicit image dimensions.
- [ ] Run production PageSpeed Insights.
- [ ] Run Rich Results Test.
- [ ] Run Search Console URL Inspection for all core pages.

## 30-60 Day Content And Authority Checklist

- [ ] Expand `/services` with semantic text for each core service.
- [ ] Add a compliance-reviewed FAQ to Services.
- [ ] Create a dedicated Contact or About/Firm page.
- [ ] Add individual team profile pages if approved.
- [ ] Publish one to three high-quality educational guides.
- [ ] Add author/reviewer attribution to educational content.
- [ ] Build internal links between Home, Services, Team, About, Contact, and resources.
- [ ] Verify business profiles and entity listings.
- [ ] Build legitimate backlinks through partners, directories, press, podcasts, events, and professional associations.
- [ ] Review Search Console query data monthly and improve pages based on real impressions.

## Ongoing Monthly Checklist

- [ ] Review Search Console indexing report.
- [ ] Review Bing Webmaster Tools indexing report.
- [ ] Check for soft 404s and crawl errors.
- [ ] Check top queries and click-through rates.
- [ ] Update content only when changes are meaningful.
- [ ] Review page speed after major image or layout changes.
- [ ] Confirm sitemap reflects all public canonical pages.
- [ ] Audit new pages for metadata, headings, structured data, internal links, and compliance.
- [ ] Confirm regulatory PDFs and disclosure links remain current.
- [ ] Monitor backlinks and brand mentions.

## Suggested Implementation Order

1. Technical crawlability
   - Server-render or prerender core pages.
   - Fix links, metadata, canonicals, sitemap, robots, and 404s.

2. Page quality
   - Improve headings, visible copy, semantic HTML, alt text, and service content.

3. Entity trust
   - Add Organization/FinancialService schema, stronger NAP signals, team profile depth, and regulatory context.

4. Performance
   - Compress images, responsive image delivery, remove broken preloads, measure production Core Web Vitals.

5. Content authority
   - Publish compliance-reviewed educational content and improve internal links.

## Acceptance Test Script

Run these checks after deployment:

```bash
curl -s https://inflectioncm.com/ | grep -i "Inflection Capital Management"
curl -s https://inflectioncm.com/services | grep -i "Our Services"
curl -s https://inflectioncm.com/team | grep -i "Our Team"
curl -s https://inflectioncm.com/ | grep -i 'rel="canonical"'
curl -s https://inflectioncm.com/services | grep -i '<title>'
curl -I https://inflectioncm.com/not-a-real-page
curl -s https://inflectioncm.com/robots.txt
curl -s https://inflectioncm.com/sitemap.xml
```

Expected results:

- Homepage raw HTML includes firm name and homepage copy.
- Services raw HTML includes service content.
- Team raw HTML includes team content.
- Every page includes a canonical tag.
- Unknown pages return HTTP 404.
- robots.txt includes the sitemap directive.
- sitemap.xml lists each canonical page once.

Browser/tool checks:

- Google Search Console URL Inspection: page is crawlable, indexable, and canonical is correct.
- Rich Results Test: structured data has no critical errors.
- PageSpeed Insights: mobile LCP and INP are within recommended ranges.
- LinkedIn Post Inspector: preview title, description, and image are correct.
- Facebook Sharing Debugger: preview metadata is correct.
- Bing Webmaster Tools: sitemap accepted and URLs can be inspected.

## Customer-Facing SEO Action Summary

The website now has a much better starting point because visitors and bots can reach the homepage directly. The next step is to make the site machine-readable at the HTML level. Search engines should not have to execute a full React app before they can identify the business, understand the services, discover pages, or see trust signals.

The top customer-visible work is:

- Make every public page render real HTML content.
- Give every page a distinct title, description, and canonical URL.
- Make navigation crawlable.
- Fix sitemap, robots.txt, and 404 behavior.
- Add structured data that identifies the firm and its relationship to regulatory profiles.
- Improve service copy so the page can rank for more than brand terms.
- Optimize images to improve Core Web Vitals.
- Build a small library of expert, compliance-reviewed educational content.

## Risks If No Further SEO Work Is Done

- Google may still index some rendered content, but discovery and ranking signals remain weaker than they need to be.
- Bing, social bots, AI scrapers, and SEO tools may continue seeing thin or generic pages.
- Search results may show generic titles or descriptions.
- Unknown URLs may be treated as soft 404s.
- Large images may continue hurting mobile performance.
- The firm may rank for brand queries but struggle to rank for service and category queries.
- Competitors with server-rendered, content-rich service pages may have stronger topical authority.

## Reference Standards Used

Official Google Search Central documentation:

- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- JavaScript SEO basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Title link guidance: https://developers.google.com/search/docs/appearance/title-link
- Meta description and snippets guidance: https://developers.google.com/search/docs/appearance/snippet
- Sitemaps overview: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- robots.txt introduction: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Canonical URL guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- HTTP status code handling: https://developers.google.com/crawling/docs/troubleshooting/http-status-codes
- Structured data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Page experience guidance: https://developers.google.com/search/docs/appearance/page-experience
- Mobile-first indexing guidance: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- Image SEO best practices: https://developers.google.com/search/docs/appearance/google-images
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Other references:

- IndexNow documentation: https://www.indexnow.org/documentation
- Schema.org FinancialService type: https://schema.org/FinancialService

## Compliance Note

This audit is an SEO and technical discoverability review, not legal or compliance advice. Because Inflection Capital Management is a financial services firm, all public-facing copy, service descriptions, claims, testimonials, endorsements, performance references, and regulatory statements should be reviewed by qualified compliance or legal counsel before publication.
