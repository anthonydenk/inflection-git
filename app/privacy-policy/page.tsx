import type { Metadata } from "next";
import PrivacyPolicy from "../../src/legacyPages/privacyPolicy/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Read the Inflection Capital Management privacy notice, including how personal information is collected, shared, protected, and disclosed.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Notice | Inflection Capital Management",
    description:
      "Read the Inflection Capital Management privacy notice and client privacy disclosures.",
    url: "/privacy-policy",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Privacy Notice | Inflection Capital Management",
    description:
      "Read the Inflection Capital Management privacy notice and client privacy disclosures.",
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
      name: "Privacy Notice",
      item: "https://inflectioncm.com/privacy-policy",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PrivacyPolicy />
    </>
  );
}
