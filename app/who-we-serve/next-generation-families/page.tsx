import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";

const TITLE = "Next Generation Families — Rising Generation | Inflection";
const DESCRIPTION =
  "Multigenerational wealth stewardship: governance, education, and the Inflection Next Gen Community, preparing the rising generation to steward family wealth.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/who-we-serve/next-generation-families") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/who-we-serve/next-generation-families"),
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inflection Capital Management — a partner-owned multi-family office in San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inflectioncm.com/" },
    { "@type": "ListItem", position: 2, name: "Who We Serve", item: "https://inflectioncm.com/who-we-serve" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Next Generation Families",
      item: "https://inflectioncm.com/who-we-serve/next-generation-families",
    },
  ],
};

const financialServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Inflection Capital Management, LLC",
  url: "https://inflectioncm.com/",
  logo: "https://inflectioncm.com/logo512.png",
  image: "https://inflectioncm.com/og-image.jpg",
  description:
    "Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.",
  telephone: "+1-415-450-6556",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Sansome Street, Suite 1400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94104",
    addressCountry: "US",
  },
  areaServed: "US",
  sameAs: ["https://adviserinfo.sec.gov/firm/summary/333157"],
};

export default function NextGenerationFamiliesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main id="main-content" className="p-wws-ng">
        <Reveal />

        {/* ====================== BANNER ====================== */}
        <section
          className="banner"
          style={{ "--plate": "url(/media/plates/cables-1.jpg)" } as React.CSSProperties}
          aria-labelledby="page-title"
        >
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="wrap banner-copy">
            <p className="banner-eyebrow hload" style={{ "--hd": ".12s" } as React.CSSProperties}>
              <Link href="/who-we-serve">Who We Serve</Link> <span className="dot">·</span> Multigenerational and the rising generation
            </p>
            <h1 className="banner-h1" id="page-title">Next Generation Families</h1>
            <p className="banner-sub hload" style={{ "--hd": ".42s" } as React.CSSProperties}>
              For multigenerational families preparing the rising generation to steward what came before them.
            </p>
          </div>
        </section>

        <section className="aud aud-dark" aria-labelledby="ng-ethos">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">01</span>
                  <h2 className="aud-title" id="ng-ethos">Multigenerational and the rising generation</h2>
                </div>
              </div>
              <div className="aud-body reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p>The same ethos, carried across generations. We are independent and partner-owned, so our incentives stay aligned with families for the long term, not the length of a single transaction. Our roots run through the single family offices that have stayed cohesive for generations, and we know what keeps them that way.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aud aud-mint" aria-labelledby="ng-continuity">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">02</span>
                  <h2 className="aud-title" id="ng-continuity">We steward continuity.</h2>
                </div>
              </div>
              <div className="reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p className="display-line display-wide">Nearly <span className="big">70%</span> of generational wealth transfers fail through fragmented advice and incomplete planning. <em>We exist to change that outcome.</em></p>
                <blockquote className="quote">
                  <span className="quote-k">The Inflection Next Gen Community</span>
                  <p>…we give family members a safe place for genuine peership, where the rising generation learns from one another and inherits not only capital, but the judgment to steward it.</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== ANALYTICAL TOOL ====================== */}
        <section className="aud aud-paper" aria-labelledby="next-generation-families-tool">
          <div className="wrap">
            <div className="tool-head reveal">
              <span className="label">Analytical tool</span>
              <h2 className="tool-title" id="next-generation-families-tool">Concentrated Stock Analytical Tool</h2>
            </div>
            <div className="tool reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
              <span>
                <span className="tool-label">Educational plan</span>
                <span className="tool-name">Explore a personalized educational plan for managing concentrated stock, liquidity, diversification, and tax considerations.</span>
              </span>
              <a
                className="tool-go"
                href="/concentrated-stock-tool.html"
                aria-label="Open the Concentrated Stock Analytical Tool"
              >
                Open the tool <span className="arr" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ====================== PEER NAVIGATION ====================== */}
        <section className="aud aud-ink" aria-labelledby="next-generation-families-peers">
          <div className="wrap">
            <h2 className="label reveal" id="next-generation-families-peers">Also in Who We Serve</h2>
            <div className="peer-grid">
              <Link className="peer reveal" href="/who-we-serve/wealth-creators">
                <span className="peer-k">01</span>
                <span className="peer-name">Wealth Creators</span>
                <span className="peer-note">Founders and first-generation wealth</span>
                <span className="peer-arr">Read the page <span className="arr" aria-hidden="true">→</span></span>
              </Link>
              <Link
                className="peer reveal"
                style={{ "--d": ".1s" } as React.CSSProperties}
                href="/who-we-serve/single-family-offices"
              >
                <span className="peer-k">03</span>
                <span className="peer-name">Single Family Offices</span>
                <span className="peer-note">Fractional OCIO and investment operations</span>
                <span className="peer-arr">Read the page <span className="arr" aria-hidden="true">→</span></span>
              </Link>
            </div>
            <p className="peer-back reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              <Link href="/who-we-serve">Back to Who We Serve</Link>
            </p>
          </div>
        </section>

        {/* ====================== CLOSING CTA ====================== */}
        <section className="plate-dusk cta-plate" aria-labelledby="cta-title">
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="plate-copy">
            <span className="label reveal">Wherever you are on the curve</span>
            <h2 className="cta-title reveal" style={{ "--d": ".1s" } as React.CSSProperties} id="cta-title">
              Meet with the <em>Inflection Team.</em>
            </h2>
            <p className="cta-copy reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              What would you like to discuss with Inflection?
            </p>
            <div className="cta-actions reveal" style={{ "--d": ".3s" } as React.CSSProperties}>
              <Link className="btn-mint" href="/contact">Meet with the Inflection Team</Link>
              <div className="cta-contact">
                <a href="tel:+14154506556">(415) 450-6556</a>
                <span aria-hidden="true">·</span>
                <span>1 Sansome Street, Suite 1400, San Francisco, CA 94104</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
