import type { Metadata } from "next";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import { absoluteUrl } from "../../src/data/site";
import { spacexToolConfig } from "../../src/data/preIpoTools";
import PreIpoSnapshotTool from "../../src/site/preIpoTool/PreIpoSnapshotTool";

export const metadata: Metadata = {
  title: spacexToolConfig.title,
  description: spacexToolConfig.description,
  alternates: {
    canonical: spacexToolConfig.route,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: `${spacexToolConfig.title} | Inflection Capital Management`,
    description: spacexToolConfig.description,
    url: spacexToolConfig.route,
    images: ["/favicon.png"],
  },
  twitter: {
    title: `${spacexToolConfig.title} | Inflection Capital Management`,
    description: spacexToolConfig.description,
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
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: spacexToolConfig.name,
      item: absoluteUrl(spacexToolConfig.route),
    },
  ],
};

export default function SpaceXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      {/* PreIpoSnapshotTool renders its own <main id="main-content">, so this
          only supplies the legacy style scope — a second <main> would break the
          single-landmark contract the SEO smoke check enforces. */}
      <div className="legacy-page">
        <PreIpoSnapshotTool config={spacexToolConfig} />
      </div>
      <FooterComponent />
    </>
  );
}
