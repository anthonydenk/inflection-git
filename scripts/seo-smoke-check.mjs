import { createHash } from "node:crypto";
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
      "Using skills honed at some of the largest financial institutions",
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
      "Our Clients Inspire Us",
      "Using skills honed at some of the largest financial institutions"
    ]
  },
  {
    "name": "insights",
    "file": "about/insights.html",
    "title": "Insights | Inflection Capital Management",
    "description": "Perspectives from Inflection Capital Management on wealth, liquidity, governance, investing, and multigenerational stewardship. Coming soon.",
    "canonical": "https://inflectioncm.com/about/insights",
    "jsonLd": "BreadcrumbList",
    "noindex": true,
    "content": [
      "Insights",
      "Coming soon",
      "Thoughtful perspectives, in progress."
    ]
  },
  {
    "name": "news",
    "file": "about/news.html",
    "title": "News and Press | Inflection Capital Management",
    "description": "Read news and press coverage from Inflection Capital Management, a partner-owned and independent multi-family office based in San Francisco.",
    "canonical": "https://inflectioncm.com/about/news",
    "jsonLd": "BreadcrumbList",
    "content": [
      "News and press",
      "December 3, 2025",
      "PR Newswire",
      "From BlackRock to Boutique: Inflection&#x27;s First Year Rewriting the Wealth Management Playbook"
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
      "Institutional-grade portfolios with access to boutique and alternative managers usually reserved for the largest family offices*.",
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
      "We come from them.",
      "outsourced CIO",
      "Institutional infrastructure, without the fixed cost of building it*."
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
      "TOC-23",
      "This strategic alliance between Inflection and TOC-23 is the continuation of decades of work together across a cohesive team with complementary strengths covering investment management, estate planning, business transition advisory, and family office services. By combining our expertise, we provide clients with a single, coordinated team that understands the full picture — financial, personal, and generational."
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

function htmlToText(html) {
  return decodeHtml(html.replace(/<!--.*?-->/g, "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
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
const homeText = htmlToText(home);
assert(
  countMatches(home, /<h1\b/g) === 1,
  "home: expected exactly one H1"
);
assert(
  /<h1[^>]*>\s*Inflection Capital Management\b/.test(home),
  "home: H1 must lead with the firm name"
);
assert(
  !home.includes("/images/team/justin-kunz") &&
    !home.includes("/images/team/katie-riley-mahany"),
  "home: partner portraits should remain on the team page"
);
assert(
  !home.includes('class="story-sign"'),
  "home: duplicate stewardship signoff should be removed"
);
assert(
  home.includes("Meet the full Inflection team"),
  "home: missing standalone team prompt"
);
assert(
  home.includes('href="/about/insights"') && home.includes('href="/about/news"'),
  "header: missing About subpage links"
);

const about = readOut("about.html");
assert(
  !about.includes('class="story-sign"'),
  "about: duplicate stewardship signoff should be removed"
);

const services = readOut("services.html");
const servicesMain = extractFirst(
  services,
  /<main\b[^>]*>([\s\S]*?)<\/main>/,
  "services: missing main content"
);
assert(
  countMatches(htmlToText(servicesMain), /Every family reaches an inflection point/g) === 1,
  "services: inflection-point introduction should appear once"
);
assert(
  !services.includes('class="banner-sub"'),
  "services: duplicate firm description should be removed from the hero"
);
const globalCss = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
assert(
  globalCss.includes(
    '.p-services .banner-bg{\n    position:absolute;inset:-2.5%;z-index:0;\n    background:url("/media/plates/bay-1.jpg")'
  ),
  "services: hero should use the lighter San Francisco fog image"
);

const newsPage = readOut("about/news.html");
assert(
  newsPage.includes(
    "https://www.prnewswire.com/news-releases/from-blackrock-to-boutique-inflections-first-year-rewriting-the-wealth-management-playbook-302630993.html"
  ),
  "news: missing supplied PR Newswire article link"
);

const mainDisclosure =
  "Information presented is for informational purposes only. Inflection Capital Management, LLC (“Inflection”) is a registered investment adviser. Registration as an investment adviser does not imply a certain level of skill or training. Past performance is not indicative of future results. Investing involves risk, including the possibility of loss of principal. The ideas and opinions expressed herein do not constitute legal, tax, or investment advice or a recommendation of any particular security or strategy. Before making any investment decision, you should seek expert, professional advice and obtain information regarding the legal, fiscal, regulatory and foreign currency requirements for any investment according to the laws of your home country and place of residence. Any forward-looking statements or forecasts are based on assumptions and actual results may vary. Information presented from third parties is believed to be reliable, but no warranty is provided. Inflection is not required to update information presented, unless otherwise required by applicable law. For more information about Inflection, including our Form ADV Part 2A Brochure, please visit https://adviserinfo.sec.gov/firm/summary/333157 or contact us at (415) 450-6556.";
assert(homeText.includes(mainDisclosure), "footer: general disclosure differs from main");
for (const href of [
  "/documents/adv-part-2a",
  "/documents/adv-part-2b",
  "/documents/form-crs",
  "/privacy-policy",
]) {
  assert(home.includes(`href="${href}"`), `footer: missing disclosure link ${href}`);
}

const team = readOut("team.html");
assert(/srcSet=|srcset=/.test(team), "team: missing responsive image srcset");
assert(
  team.includes("/team/justin-kunz"),
  "team: missing internal profile link"
);

const institutionalFootnote =
  "*Institutional accounts are defined by FINRA Rule 4512(c) as an “investor with total assets of at least $50 million.” When we use the term “institutional-level” or “institutional-grade,” we are referring to the rigorous process and standard of care that would need to be applied to service an account with this level of assets.";
for (const file of [
  "who-we-serve/wealth-creators.html",
  "who-we-serve/single-family-offices.html",
]) {
  assert(
    readOut(file).includes(institutionalFootnote),
    `${file}: missing current institutional footnote`
  );
}
assert(
  !home.includes("Institutional accounts are defined by FINRA Rule 4512(c)"),
  "home: institutional footnote must remain limited to the two approved audience pages"
);

const disclosureDocumentHashes = {
  "documents/ADVpt4.pdf":
    "f37eb28c65ce8d61852a687c5a94e34945d9ac2ad70d7b46f5173f892a87d331",
  "documents/adv-part-2b.pdf":
    "a7137bcf4fc401ca57d9d60a790206b7e47242df034a12389c46d9836f258cd9",
  "documents/CRSForm2.pdf":
    "16b52f83d808c5c7c1050d310bb34ed5ad384eec24af83bdb24d0e27fa4f4329",
};
for (const [file, expectedHash] of Object.entries(disclosureDocumentHashes)) {
  const actualHash = createHash("sha256")
    .update(readFileSync(join(outDir, file)))
    .digest("hex");
  assert(actualHash === expectedHash, `${file}: disclosure document differs from main`);
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
    "https://inflectioncm.com/about/news",
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
  !sitemapUrls.includes("https://inflectioncm.com/about/insights"),
  "sitemap: coming-soon insights page should remain excluded"
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
assert(llms.includes("https://inflectioncm.com/about/news"), "llms: missing news page");
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
