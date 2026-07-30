export const siteUrl = "https://inflectioncm.com";

export const firm = {
  name: "Inflection Capital Management",
  legalName: "Inflection Capital Management, LLC",
  description:
    "Partner-owned multi-family office and wealth management firm serving families in Silicon Valley and San Francisco.",
  telephoneDisplay: "(415) 450-6556",
  telephoneSchema: "+1-415-450-6556",
  address: {
    streetAddress: "1 Sansome Street, Suite 1400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94104",
    addressCountry: "US",
  },
  areaServed: ["Silicon Valley", "San Francisco", "California"],
  urls: {
    website: siteUrl,
    sec: "https://adviserinfo.sec.gov/firm/summary/333157",
    linkedIn: "https://www.linkedin.com/company/inflection-capital-management",
  },
};

export const firmSameAs = [firm.urls.linkedIn, firm.urls.sec];

export function absoluteUrl(path = "/") {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export function firmJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: firm.name,
    legalName: firm.legalName,
    url: `${siteUrl}/`,
    description: firm.description,
    telephone: firm.telephoneSchema,
    address: {
      "@type": "PostalAddress",
      ...firm.address,
    },
    areaServed: firm.areaServed,
    sameAs: firmSameAs,
  };
}
