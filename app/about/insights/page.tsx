import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";

const TITLE = "Insights";
const DESCRIPTION =
  "Perspectives from Inflection Capital Management on wealth, liquidity, governance, investing, and multigenerational stewardship. Coming soon.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/about/insights") },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Insights | Inflection Capital Management",
    description: DESCRIPTION,
    url: absoluteUrl("/about/insights"),
    type: "website",
    images: ["/og-image.jpg"],
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
      name: "About",
      item: absoluteUrl("/about"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Insights",
      item: absoluteUrl("/about/insights"),
    },
  ],
};

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />

      <main id="main-content" className="p-editorial">
        <Reveal />

        <section className="editorial-hero banner" aria-labelledby="page-title">
          <div className="editorial-hero-bg" aria-hidden="true" />
          <div className="editorial-hero-grain" aria-hidden="true" />
          <div className="editorial-hero-scrim" aria-hidden="true" />
          <div className="wrap editorial-hero-copy">
            <p className="label hload" style={{ "--hd": ".15s" } as React.CSSProperties}>
              About &middot; Insights
            </p>
            <h1
              className="editorial-title hload"
              id="page-title"
              style={{ "--hd": ".3s" } as React.CSSProperties}
            >
              Insights
            </h1>
            <p
              className="editorial-intro hload"
              style={{ "--hd": ".48s" } as React.CSSProperties}
            >
              Ideas shaped by experience, written for moments of change.
            </p>
          </div>
        </section>

        <section className="editorial-body" aria-label="Insights coming soon">
          <div className="wrap">
            <div className="coming-soon reveal">
              <div>
                <span className="label">Coming soon</span>
                <h2>Thoughtful perspectives, in progress.</h2>
              </div>
              <div className="coming-soon-copy">
                <p>
                  We are preparing a collection of perspectives on liquidity,
                  stewardship, family governance, philanthropy, and investing.
                </p>
                <Link className="editorial-link" href="/about/news">
                  View firm news <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
