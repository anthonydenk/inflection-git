import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../src/data/site";

const TITLE = "Who We Serve | Inflection Capital Management, San Francisco";
const DESCRIPTION =
  "Inflection Capital Management serves wealth creators, next generation families, and single family offices from San Francisco. Choose your audience.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/who-we-serve") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/who-we-serve"),
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
    title: "Who We Serve — Founders, Families, Family Offices | Inflection",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
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
      name: "Who We Serve",
      item: "https://inflectioncm.com/who-we-serve",
    },
  ],
};

export default function WhoWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main id="main-content" className="p-wws">
        <Reveal />

        {/* ====================== BANNER ====================== */}
        <section className="banner" aria-labelledby="page-title">
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="wrap banner-copy">
            <p className="banner-eyebrow hload" style={{ "--hd": ".12s" } as React.CSSProperties}>
              Inflection Capital Management <span className="dot">·</span> San Francisco
            </p>
            <h1 className="banner-h1" id="page-title">Who We Serve</h1>
            <p className="banner-sub hload" style={{ "--hd": ".42s" } as React.CSSProperties}>
              Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.
            </p>
          </div>
        </section>

        {/* ====================== THE THREE AUDIENCES ====================== */}
        <section className="hub" aria-labelledby="audiences-h">
          <div className="wrap">
            <h2 className="label reveal" id="audiences-h">Three audiences</h2>
            <div className="hub-grid">
              <Link className="hub-card reveal" href="/who-we-serve/wealth-creators">
                <span className="hub-n" aria-hidden="true">01</span>
                <h3 className="hub-name">Wealth Creators</h3>
                <p className="hub-desc">Founders and first-generation wealth</p>
                <p className="hub-tag">For entrepreneurs and operators creating first-generation wealth in ways the traditional industry was never designed to support.</p>
                <span className="hub-go">Read the page <span className="arr" aria-hidden="true">→</span></span>
              </Link>
              <Link
                className="hub-card reveal"
                style={{ "--d": ".1s" } as React.CSSProperties}
                href="/who-we-serve/next-generation-families"
              >
                <span className="hub-n" aria-hidden="true">02</span>
                <h3 className="hub-name">Next Generation Families</h3>
                <p className="hub-desc">Multigenerational and the rising generation</p>
                <p className="hub-tag">For multigenerational families preparing the rising generation to steward what came before them.</p>
                <span className="hub-go">Read the page <span className="arr" aria-hidden="true">→</span></span>
              </Link>
              <Link
                className="hub-card reveal"
                style={{ "--d": ".2s" } as React.CSSProperties}
                href="/who-we-serve/single-family-offices"
              >
                <span className="hub-n" aria-hidden="true">03</span>
                <h3 className="hub-name">Single Family Offices</h3>
                <p className="hub-desc">Fractional OCIO and investment operations</p>
                <p className="hub-tag">For established single family offices seeking capacity, institutional infrastructure, and a genuinely aligned investment partner.</p>
                <span className="hub-go">Read the page <span className="arr" aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ====================== CLOSING CTA ====================== */}
        <section className="plate-dusk cta-plate" id="contact" aria-labelledby="cta-title">
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
