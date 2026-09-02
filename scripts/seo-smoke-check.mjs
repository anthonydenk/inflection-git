import { readFileSync } from "node:fs";
import { join } from "node:path";

// Smoke check for the shipped static export. Re-baselined 2026-07-30 when the
// memorandum design was replaced by the current site; the per-page table below
// reflects the approved pages, while the structural assertions further down are
// what actually catch regressions.

const outDir = join(process.cwd(), "out");

const pages = [
  {
    "name": "home",
    "file": "index.html",
    "title": "Multi-Family Office in San Francisco | Inflection Capital",
    "description": "Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.",
    "canonical": "https://inflectioncm.com",
    "jsonLd": "FinancialService",
    "content": [
      "Inflection Capital Management",
      "partner-owned and independent multi-family office",
      "We recognize that our clients are not interchangeable",
      "Meet with the Inflection"
    ]
  },
  {
    "name": "about",
    "file": "about.html",
    "title": "About the Firm | Inflection Capital Management",
    "description": "Inflection Capital Management is a partner-owned and independent multi-family office in San Francisco serving wealth creators, families, and single family offices.",
    "canonical": "https://inflectioncm.com/about",
    "jsonLd": "BreadcrumbList",
    "content": [
      "Trusted stewards at",
      "Our Clients Inspire Us"
    ]
  },
  {
    "name": "who we serve",
    "file": "who-we-serve.html",
    "title": "Who We Serve | Inflection Capital Management, San Francisco",
    "description": "Inflection Capital Management serves wealth creators, next generation families, and single family offices from San Francisco. Choose your audience.",
    "canonical": "https://inflectioncm.com/who-we-serve",
    "jsonLd": "BreadcrumbList",
    "content": [
      "Wealth Creators",
      "Next Generation Families",
      "Single Family Offices"
    ]
  },
  {
    "name": "wealth creators",
    "file": "who-we-serve/wealth-creators.html",
    "title": "Wealth Creators \u2014 Founders and Operators | Inflection",
    "description": "Wealth management for founders, operators, and technology executives: concentrated stock risk management, pre-IPO and equity compensation planning, tax.",
    "canonical": "https://inflectioncm.com/who-we-serve/wealth-creators",
    "jsonLd": "BreadcrumbList",
    "content": [
      "first-generation wealth",
      "Concentrated and single-stock risk management",
      "Concentrated Stock Analytical Tool"
    ]
  },
  {
    "name": "next generation",
    "file": "who-we-serve/next-generation-families.html",
    "title": "Next Generation Families \u2014 Rising Generation | Inflection",
    "description": "Multigenerational wealth stewardship: governance, education, and the Inflection Next Gen Community, preparing the rising generation to steward family wealth.",
    "canonical": "https://inflectioncm.com/who-we-serve/next-generation-families",
    "jsonLd": "BreadcrumbList",
    "content": [
      "rising generation",
      "We steward continuity"
    ]
  },
  {
    "name": "single family offices",
    "file": "who-we-serve/single-family-offices.html",
    "title": "Single Family Offices \u2014 Fractional OCIO | Inflection",
    "description": "Fractional family office and outsourced CIO services: portfolio construction, manager due diligence, consolidated reporting, and investment operations.",
    "canonical": "https://inflectioncm.com/who-we-serve/single-family-offices",
    "jsonLd": "BreadcrumbList",
    "content": [
      "We do not simply advise single family offices",
      "outsourced CIO"
    ]
  },
  {
    "name": "services",
    "file": "services.html",
    "title": "Multi-Family Office Services in San Francisco | Inflection",
    "description": "Rising generation, philanthropy, governance, liquidity and equity compensation, investments, trust and tax, and financial reporting \u2014 coordinated in San Francisco.",
    "canonical": "https://inflectioncm.com/services",
    "jsonLd": "ItemList",
    "content": [
      "Rising Generation",
      "Philanthropy",
      "Family Governance &amp; Succession",
      "Liquidity &amp; Equity Compensation Planning",
      "DAF &amp; Private Foundations",
      "Investment Process",
      "Financial Reporting"
    ]
  },
  {
    "name": "team",
    "file": "team.html",
    "title": "Our Team \u2014 Partner-Owned Multi-Family Office | Inflection",
    "description": "Meet Inflection Capital Management's partner-owned and independent team in San Francisco, alongside its strategic alliance with TOC-23.",
    "canonical": "https://inflectioncm.com/team",
    "jsonLd": "ItemList",
    "content": [
      "Justin Kunz",
      "Katie Riley Mahany",
      "Patrick Hayes",
      "Sophia Mura",
      "Yvonne Freeman",
      "Strategic Alliance: Inflection &amp;",
      "TOC-23"
    ]
  },
  {
    "name": "team profile",
    "file": "team/justin-kunz.html",
    "title": "Justin Kunz \u2014 CEO and Founding Partner | Inflection",
    "description": "Justin Kunz is the CEO and Founding Partner of Inflection Capital Management, where he leads the firm's business, investment strategy and client relationships.",
    "canonical": "https://inflectioncm.com/team/justin-kunz",
    "jsonLd": "Person",
    "content": [
      "Justin Kunz",
      "CEO"
    ]
  },
  {
    "name": "contact",
    "file": "contact.html",
    "title": "Contact Inflection Capital Management | San Francisco",
    "description": "Meet with the Inflection team. A partner-owned and independent multi-family office at 1 Sansome Street, Suite 1400, San Francisco, CA 94104. Call (415) 450-6556.",
    "canonical": "https://inflectioncm.com/contact",
    "jsonLd": "ContactPage",
    "content": [
      "Meet with the Inflection Team",
      "1 Sansome Street"
    ]
  },
  {
    "name": "privacy",
    "file": "privacy-policy.html",
    "title": "Privacy Notice Regarding Client Privacy | Inflection",
    "description": "How Inflection Capital Management collects, uses, discloses, and safeguards non-public personal client information, and our security policy. Updated March 2026.",
    "canonical": "https://inflectioncm.com/privacy-policy",
    "jsonLd": "WebPage",
    "content": [
      "Privacy Notice Regarding Client Privacy",
      "March 2026",
      "Complaint Notification"
    ]
  },
  {
    "name": "adv 2a",
    "file": "documents/adv-part-2a.html",
    "title": "ADV Part 2A \u2014 Disclosures | Inflection Capital Management",
    "description": "Read Form ADV Part 2A for Inflection Capital Management \u2014 the firm brochure covering services, fees, conflicts of interest, and disciplinary history.",
    "canonical": "https://inflectioncm.com/documents/adv-part-2a",
    "jsonLd": "BreadcrumbList",
    "content": [
      "Form ADV Part 2A"
    ]
  },
  {
    "name": "form crs",
    "file": "documents/form-crs.html",
    "title": "Form CRS \u2014 Disclosures | Inflection Capital Management",
    "description": "Read Form CRS for Inflection Capital Management \u2014 the client relationship summary covering our services, costs, and how the firm is compensated.",
    "canonical": "https://inflectioncm.com/documents/form-crs",
    "jsonLd": "BreadcrumbList",
    "content": [
      "Form CRS"
    ]
  },
  {
    "name": "resources",
    "file": "resources.html",
    "title": "Family Office Resources | Inflection Capital Management",
    "description": "Educational guides from Inflection Capital Management on liquidity events, multi-family office structure, and family governance.",
    "canonical": "https://inflectioncm.com/resources",
    "jsonLd": "BreadcrumbList",
    "noindex": true,
    "content": [
      "Family Office Guides"
    ]
  },
  {
    "name": "resource guide",
    "file": "resources/planning-after-liquidity-event.html",
    "title": "Planning After a Liquidity Event | Inflection Capital Management",
    "description": "A practical framework for organizing decisions after a business sale, IPO, tender offer, or other meaningful liquidity event.",
    "canonical": "https://inflectioncm.com/resources/planning-after-liquidity-event",
    "jsonLd": "BreadcrumbList",
    "noindex": true,
    "content": [
      "Planning After a Liquidity Event"
    ]
  },
  {
    "name": "spacex",
    "file": "spacex.html",
    "title": "SpaceX Equity Snapshot | Inflection Capital Management",
    "description": "A planning snapshot for SpaceX employees and investors evaluating concentrated private-company equity before a liquidity event.",
    "canonical": "https://inflectioncm.com/spacex",
    "jsonLd": "BreadcrumbList",
    "noindex": true,
    "content": [
      "SpaceX"
    ]
  },
  {
    "name": "pre-ipo",
    "file": "pre-ipo.html",
    "title": "Pre-IPO Planning | Inflection Capital Management",
    "description": "Planning paths for concentrated private-company equity, including SpaceX, Anthropic, OpenAI, and general pre-IPO planning.",
    "canonical": "https://inflectioncm.com/pre-ipo",
    "jsonLd": "BreadcrumbList",
    "noindex": true,
    "content": [
      "Pre-IPO"
    ]
  }
];

function readOut(file) {
  return readFileSync(join(outDir, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractFirst(html, pattern, message) {
  const match = html.match(pattern);
  assert(match, message);
  return decodeHtml(match[1]);
}

function countMatches(source, pattern) {
  return source.match(pattern)?.length ?? 0;
}

for (const page of pages) {
  const html = readOut(page.file);

  assert(
    extractFirst(html, /<title>(.*?)<\/title>/, `${page.name}: missing title`) ===
      page.title,
    `${page.name}: unexpected title`
  );
  assert(
    extractFirst(
      html,
      /<meta name="description" content="(.*?)"\/>/,
      `${page.name}: missing description`
    ) === page.description,
    `${page.name}: unexpected description`
  );
  assert(
    html.includes(`<link rel="canonical" href="${page.canonical}"/>`),
    `${page.name}: missing expected canonical`
  );
  if (page.noindex) {
    assert(html.includes('name="robots"'), `${page.name}: missing robots meta`);
    assert(html.includes("noindex"), `${page.name}: missing noindex directive`);
  }
  assert(html.includes(page.jsonLd), `${page.name}: missing JSON-LD`);
  assert(
    html.includes('href="#main-content"'),
    `${page.name}: missing skip link`
  );
  assert(
    countMatches(html, /<main\b/g) === 1,
    `${page.name}: expected exactly one main landmark`
  );
  assert(
    /<main\b[^>]*id="main-content"/.test(html),
    `${page.name}: missing main-content target`
  );

  for (const snippet of page.content) {
    assert(html.includes(snippet), `${page.name}: missing ${snippet}`);
  }

  assert(
    !html.includes("[object Object]"),
    `${page.name}: found broken [object Object] text`
  );
  assert(
    !html.toLowerCase().includes("fee-only"),
    `${page.name}: found retired fee-only language`
  );
  assert(
    !html.toLowerCase().includes("silicon valley"),
    `${page.name}: found retired Silicon Valley positioning`
  );
}

const home = readOut("index.html");
assert(
  countMatches(home, /<h1\b/g) === 1,
  "home: expected exactly one H1"
);
assert(
  /<h1[^>]*>\s*Inflection Capital Management\b/.test(home),
  "home: H1 must lead with the firm name"
);
assert(/srcSet=|srcset=/.test(home), "home: missing responsive image srcset");

const team = readOut("team.html");
assert(/srcSet=|srcset=/.test(team), "team: missing responsive image srcset");
assert(
  team.includes("/team/justin-kunz"),
  "team: missing internal profile link"
);

const institutionalFootnote =
  "Institutional accounts are defined by FINRA Rule 4512(c)";
for (const file of [
  "who-we-serve/wealth-creators.html",
  "who-we-serve/single-family-offices.html",
]) {
  assert(
    readOut(file).includes(institutionalFootnote),
    `${file}: missing current institutional footnote`
  );
}

const footerNap = [
  "Inflection Capital Management, LLC",
  "1 Sansome Street, Suite 1400",
  "(415) 450-6556",
];
for (const snippet of footerNap) {
  assert(home.includes(snippet), `footer: missing ${snippet}`);
}
assert(
  !home.includes('href="/resources"'),
  "home: resources should remain hidden from public navigation"
);

const sitemap = readOut("sitemap.xml");
const sitemapUrls = [
  ...sitemap.matchAll(/<loc>(.*?)<\/loc>/g),
].map((match) => match[1]);
assert(
  sitemapUrls.length === new Set(sitemapUrls).size,
  "sitemap: duplicate URLs found"
);
assert(
  [
    "https://inflectioncm.com",
    "https://inflectioncm.com/about",
    "https://inflectioncm.com/services",
    "https://inflectioncm.com/team",
    "https://inflectioncm.com/team/justin-kunz",
    "https://inflectioncm.com/team/katie-riley-mahany",
    "https://inflectioncm.com/team/patrick-hayes",
    "https://inflectioncm.com/team/sophia-mura",
    "https://inflectioncm.com/team/yvonne-freeman",
    "https://inflectioncm.com/privacy-policy",
  ].every((url) => sitemapUrls.includes(url)),
  "sitemap: missing canonical route"
);
assert(
  !sitemapUrls.includes("https://inflectioncm.com/spacex"),
  "sitemap: draft SpaceX route should remain excluded until compliance approval"
);
assert(
  !sitemapUrls.includes("https://inflectioncm.com/pre-ipo"),
  "sitemap: draft Pre-IPO hub should remain excluded until compliance approval"
);
assert(
  !sitemapUrls.some((url) => url.includes("/resources")),
  "sitemap: resources should remain hidden until republished"
);

const robots = readOut("robots.txt");
assert(
  robots.includes("Sitemap: https://inflectioncm.com/sitemap.xml"),
  "robots: missing sitemap directive"
);

const llms = readOut("llms.txt");
assert(llms.includes("Inflection Capital Management"), "llms: missing firm name");
assert(
  !llms.includes("https://inflectioncm.com/resources"),
  "llms: resources should remain hidden until republished"
);

const notFound = readOut("404.html");
assert(notFound.includes("Page not found"), "404: missing not-found content");
assert(notFound.includes('name="robots"'), "404: missing noindex metadata");

for (const page of pages) {
  const html = readOut(page.file);
  const title = extractFirst(html, /<title>(.*?)<\/title>/, `${page.name}: missing title`);
  assert(
    title.length >= 40 && title.length <= 65,
    `${page.name}: title length ${title.length} outside 40-65`
  );
  const description = extractFirst(
    html,
    /<meta name="description" content="(.*?)"\/>/,
    `${page.name}: missing description`
  );
  assert(
    description.length >= 110 && description.length <= 165,
    `${page.name}: description length ${description.length} outside 110-165`
  );
}

console.log("SEO smoke check passed.");
