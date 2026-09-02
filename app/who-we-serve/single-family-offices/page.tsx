import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";

const TITLE = "Single Family Offices — Fractional OCIO | Inflection";
const DESCRIPTION =
  "Fractional family office and outsourced CIO services: portfolio construction, manager due diligence, consolidated reporting, and investment operations.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/who-we-serve/single-family-offices") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/who-we-serve/single-family-offices"),
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
      name: "Single Family Offices",
      item: "https://inflectioncm.com/who-we-serve/single-family-offices",
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

export default function SingleFamilyOfficesPage() {
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
      <main id="main-content" className="p-wws-sfo">
        <Reveal />

        {/* ====================== BANNER ====================== */}
        <section
          className="banner"
          style={{ "--plate": "url(/media/plates/dusk-2.jpg)" } as React.CSSProperties}
          aria-labelledby="page-title"
        >
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="wrap banner-copy">
            <p className="banner-eyebrow hload" style={{ "--hd": ".12s" } as React.CSSProperties}>
              <Link href="/who-we-serve">Who We Serve</Link> <span className="dot">·</span> Fractional OCIO and investment operations
            </p>
            <h1 className="banner-h1" id="page-title">Single Family Offices</h1>
            <p className="banner-sub hload" style={{ "--hd": ".42s" } as React.CSSProperties}>
              For established single family offices seeking capacity, institutional infrastructure, and a genuinely aligned investment partner.
            </p>
          </div>
        </section>

        <section className="aud aud-dark" aria-labelledby="sfo-advise">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">01</span>
                  <h2 className="aud-title" id="sfo-advise">We do not simply advise single family offices.</h2>
                </div>
              </div>
              <div className="aud-body reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p>Our team has operated inside the single family office world for decades, alongside the most sophisticated families in the country, and that lived experience is genuinely rare in this industry.</p>
                <p>We act as a fractional extension of your family office: an outsourced CIO and investment-operations partner. Plug us in where you need depth, and keep the parts you would rather run yourself.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aud aud-mint" aria-labelledby="sfo-ocio">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">02</span>
                  <h2 className="aud-title" id="sfo-ocio">Fractional OCIO and investment operations</h2>
                </div>
              </div>
              <div className="reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p className="display-line display-wide">Portfolio construction, manager due diligence, consolidated reporting, and day-to-day investment operations, all backed by the connectivity of a team that knows the family office world from the inside. <em>Institutional infrastructure, without the fixed cost of building it.</em></p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== ANALYTICAL TOOL ====================== */}
        <section className="aud aud-paper" aria-labelledby="single-family-offices-tool">
          <div className="wrap">
            <div className="tool-head reveal">
              <span className="label">Analytical tool</span>
              <h2 className="tool-title" id="single-family-offices-tool">Concentrated Stock Analytical Tool</h2>
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
        <section className="aud aud-ink" aria-labelledby="single-family-offices-peers">
          <div className="wrap">
            <h2 className="label reveal" id="single-family-offices-peers">Also in Who We Serve</h2>
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
                href="/who-we-serve/next-generation-families"
              >
                <span className="peer-k">02</span>
                <span className="peer-name">Next Generation Families</span>
                <span className="peer-note">Multigenerational and the rising generation</span>
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
      <FooterComponent includeInstitutionalFootnote />
    </>
  );
}
