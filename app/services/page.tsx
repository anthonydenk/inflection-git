import type { Metadata } from "next";
import ServicesChart from "../../src/legacyPages/services/services";

export const metadata: Metadata = {
  title: "Family Office & Wealth Management Services",
  description:
    "Explore Inflection Capital Management's family office services, including investment management, estate planning coordination, reporting, philanthropy, and family governance.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Family Office & Wealth Management Services | Inflection Capital Management",
    description:
      "Explore family office services for investment process, estate planning coordination, reporting, philanthropy, lifestyle, and family governance.",
    url: "/services",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Family Office & Wealth Management Services | Inflection Capital Management",
    description:
      "Explore family office services for investment process, estate planning coordination, reporting, philanthropy, lifestyle, and family governance.",
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
      name: "Services",
      item: "https://inflectioncm.com/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesChart />
    </>
  );
}
