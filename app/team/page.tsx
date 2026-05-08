import type { Metadata } from "next";
import Team from "../../src/legacyPages/team/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Inflection Capital Management team: investment, family office, compliance, operations, and client service professionals serving families from Silicon Valley and San Francisco.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Inflection Capital Management",
    description:
      "Meet the Inflection Capital Management team serving families from Silicon Valley and San Francisco.",
    url: "/team",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Our Team | Inflection Capital Management",
    description:
      "Meet the Inflection Capital Management team serving families from Silicon Valley and San Francisco.",
    images: ["/favicon.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://inflectioncm.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Team",
      item: "https://inflectioncm.com/team",
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Team />
    </>
  );
}
