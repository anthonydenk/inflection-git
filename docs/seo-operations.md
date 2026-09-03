# SEO Operations Checklist

This file covers P3 items that require recurring review or external account access.

## Monthly Search Console Review

Run this once per month after Google Search Console is verified:

- Review indexing status for `/`, `/about`, `/services`, `/team`, `/resources`, and all profile/resource pages.
- Check queries, impressions, click-through rate, and average position for branded and category terms.
- Inspect pages with impressions but low CTR and decide whether title or description updates are warranted.
- Review Core Web Vitals for mobile and desktop.
- Check crawl errors, soft 404s, duplicate canonical warnings, and blocked resources.
- Record actions taken and next content priorities.

## Bing Webmaster Tools and Bing Places

These require account access and cannot be completed from the repository alone.

- Verify Bing Webmaster Tools for `inflectioncm.com`.
- Submit `https://inflectioncm.com/sitemap.xml`.
- Verify or create Bing Places for Business.
- Use the same public NAP values as the website footer:
  - Name: Inflection Capital Management, LLC
  - Address: 1 Sansome Street, Suite 1400, San Francisco, CA 94104
  - Phone: (415) 450-6556
  - Website: https://inflectioncm.com

## NAP Consistency

Confirm these public listings match the website exactly:

- Website footer and privacy notice
- Google Business Profile
- Bing Places
- LinkedIn company page
- SEC/IAPD adviser profile
- Any future directory or map listings

## New Page Pre-Publish Audit

Before publishing any new page:

- One visible H1.
- Unique title and meta description.
- Canonical URL matches sitemap URL.
- Page is present in `app/sitemap.ts` when it should be indexed.
- Internal links connect it to relevant pages.
- Images have descriptive alt text, `srcset`, `sizes`, width, and height where practical.
- Structured data is added when there is a clear schema fit.
- Financial, legal, tax, performance, testimonial, and endorsement language has compliance approval.
- Run `npm run build`, `npm run lint`, and `npm run seo:check`.
