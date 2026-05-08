import type { Metadata } from "next";
import HomePage from "../src/legacyPages/App";

export const metadata: Metadata = {
  title: "Inflection Capital Management | Multi-Family Office in Silicon Valley",
  description:
    "Inflection Capital Management is a partner-owned multi-family office in Silicon Valley helping families preserve, grow, and steward wealth and legacy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inflection Capital Management | Multi-Family Office in Silicon Valley",
    description:
      "A partner-owned multi-family office serving families across Silicon Valley and San Francisco.",
    url: "/",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Inflection Capital Management | Multi-Family Office in Silicon Valley",
    description:
      "A partner-owned multi-family office serving families across Silicon Valley and San Francisco.",
    images: ["/favicon.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Inflection Capital Management",
  url: "https://inflectioncm.com/",
  description:
    "Partner-owned multi-family office and wealth management firm serving families in Silicon Valley and San Francisco.",
  telephone: "+1-415-450-6556",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Sansome Street, Suite 1400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94104",
    addressCountry: "US",
  },
  areaServed: ["Silicon Valley", "San Francisco", "California"],
  sameAs: ["https://adviserinfo.sec.gov/firm/summary/333157"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
