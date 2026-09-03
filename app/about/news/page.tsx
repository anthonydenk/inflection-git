import type { Metadata } from "next";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";

const TITLE = "News and Press";
const DESCRIPTION =
  "Read news and press coverage from Inflection Capital Management, a partner-owned and independent multi-family office based in San Francisco.";
const ARTICLE_URL =
  "https://www.prnewswire.com/news-releases/from-blackrock-to-boutique-inflections-first-year-rewriting-the-wealth-management-playbook-302630993.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/about/news") },
  openGraph: {
    title: "News and Press | Inflection Capital Management",
    description: DESCRIPTION,
    url: absoluteUrl("/about/news"),
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
      name: "News",
      item: absoluteUrl("/about/news"),
    },
  ],
};

export default function NewsPage() {
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
              About &middot; News
            </p>
            <h1
              className="editorial-title hload"
              id="page-title"
              style={{ "--hd": ".3s" } as React.CSSProperties}
            >
              News
            </h1>
            <p
              className="editorial-intro hload"
              style={{ "--hd": ".48s" } as React.CSSProperties}
            >
              Firm milestones and coverage from trusted publications.
            </p>
          </div>
        </section>

        <section className="editorial-body" aria-labelledby="latest-news">
          <div className="wrap">
            <div className="news-heading reveal">
              <span className="label">Latest</span>
              <h2 id="latest-news">News and press</h2>
            </div>

            <article className="news-feature reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
              <div className="news-meta">
                <time dateTime="2025-12-03">December 3, 2025</time>
                <span>PR Newswire</span>
              </div>
              <div className="news-copy">
                <h3>From BlackRock to Boutique: Inflection&apos;s First Year Rewriting the Wealth Management Playbook</h3>
                <p>
                  Inflection reflects on its first year and the independent family-office
                  model it brings to modern wealth creators and families.
                </p>
                <a
                  className="editorial-link"
                  href={ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the article <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
