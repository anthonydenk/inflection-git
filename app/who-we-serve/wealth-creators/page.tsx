import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";

const TITLE = "Wealth Creators — Founders and Operators | Inflection";
const DESCRIPTION =
  "Wealth management for founders, operators, and technology executives: concentrated stock risk management, pre-IPO and equity compensation planning, tax.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/who-we-serve/wealth-creators") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/who-we-serve/wealth-creators"),
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
      name: "Wealth Creators",
      item: "https://inflectioncm.com/who-we-serve/wealth-creators",
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

export default function WealthCreatorsPage() {
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
      <main id="main-content" className="p-wws-wc">
        <Reveal />

        {/* ====================== BANNER ====================== */}
        <section
          className="banner"
          style={{ "--plate": "url(/media/plates/bay-1.jpg)" } as React.CSSProperties}
          aria-labelledby="page-title"
        >
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="wrap banner-copy">
            <p className="banner-eyebrow hload" style={{ "--hd": ".12s" } as React.CSSProperties}>
              <Link href="/who-we-serve">Who We Serve</Link> <span className="dot">·</span> Founders and first-generation wealth
            </p>
            <h1 className="banner-h1" id="page-title">Wealth Creators</h1>
            <p className="banner-sub hload" style={{ "--hd": ".42s" } as React.CSSProperties}>
              For entrepreneurs and operators creating first-generation wealth in ways the traditional industry was never designed to support.
            </p>
          </div>
        </section>

        <section className="aud aud-dark" aria-labelledby="wc-who">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">01</span>
                  <h2 className="aud-title" id="wc-who">Who we are</h2>
                </div>
              </div>
              <div className="aud-body reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p>Inflection is a partner-owned and independent multi-family office. Very few firms can say what our team can: we spent our careers inside institutions like BlackRock and Fidelity, working directly alongside hundreds of the most sophisticated single family offices in the country.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aud aud-mint" aria-labelledby="wc-what">
          <div className="wrap">
            <div className="aud-head">
              <div className="aud-stick">
                <div className="reveal">
                  <span className="label">02</span>
                  <h2 className="aud-title" id="wc-what">What we do</h2>
                </div>
              </div>
              <div className="reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                <p className="statement">We take the playbook those families spent decades refining and pass it down to the people creating wealth today.</p>
                <div className="aud-body">
                  <p>Much of first-generation wealth sits in a single concentrated position. We manage that risk directly, building hedging, staged diversification, and liquidity strategies around large, low-basis equity holdings. You also inherit our connectivity: the managers, structures, and relationships usually reserved for the largest single family offices. Investments, tax, estate, and governance in one cohesive ecosystem, without building a family office from scratch.</p>
                </div>
              </div>
            </div>

            <div className="svc-block">
              <div className="svc-head reveal">
                <div>
                  <span className="label">Core services</span>
                  <h3 className="svc-title">One team for your whole balance sheet</h3>
                </div>
                <p className="svc-lead">Inflection gives founders, operators, and technology executives a single, coordinated team for turning concentrated equity and ownership into diversified, tax-efficient, multigenerational wealth. Core services include:</p>
              </div>

              <dl className="svc-list">
                <div className="svc reveal">
                  <dt><span className="svc-n">01</span>Concentrated and single-stock risk management</dt>
                  <dd>Hedging, collars, variable prepaid forwards, exchange funds, and staged diversification for large, low-basis positions.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".06s" } as React.CSSProperties}>
                  <dt><span className="svc-n">02</span>Pre-IPO and equity compensation planning</dt>
                  <dd>RSUs, ISOs and NSOs, QSBS qualification, 83(b) elections, 10b5-1 plans, and tender-offer strategy.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                  <dt><span className="svc-n">03</span>Liquidity event planning</dt>
                  <dd>Pre-transaction structuring, cash-flow design, and reinvestment strategy around a sale, IPO, or secondary.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".18s" } as React.CSSProperties}>
                  <dt><span className="svc-n">04</span>Tax strategy</dt>
                  <dd>Tax-loss harvesting, asset location, entity structuring, and multi-state and California tax planning.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".06s" } as React.CSSProperties}>
                  <dt><span className="svc-n">05</span>Estate and generational wealth transfer</dt>
                  <dd>Trust design, lifetime gifting, grantor and SLAT structures, and legacy planning built for growing wealth.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
                  <dt><span className="svc-n">06</span>Investment management</dt>
                  <dd>Institutional-grade portfolios with access to boutique and alternative managers usually reserved for the largest family offices*.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".18s" } as React.CSSProperties}>
                  <dt><span className="svc-n">07</span>Philanthropy and charitable planning</dt>
                  <dd>Donor-advised funds, charitable remainder trusts, and private foundations.</dd>
                </div>
                <div className="svc reveal" style={{ "--d": ".24s" } as React.CSSProperties}>
                  <dt><span className="svc-n">08</span>Consolidated reporting and administration</dt>
                  <dd>A single, real-time view of your entire balance sheet across custodians, entities, and asset classes.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ====================== ANALYTICAL TOOL ====================== */}
        <section className="aud aud-paper" aria-labelledby="wealth-creators-tool">
          <div className="wrap">
            <div className="tool-head reveal">
              <span className="label">Analytical tool</span>
              <h2 className="tool-title" id="wealth-creators-tool">Concentrated Stock Analytical Tool</h2>
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
        <section className="aud aud-ink" aria-labelledby="wealth-creators-peers">
          <div className="wrap">
            <h2 className="label reveal" id="wealth-creators-peers">Also in Who We Serve</h2>
            <div className="peer-grid">
              <Link className="peer reveal" href="/who-we-serve/next-generation-families">
                <span className="peer-k">02</span>
                <span className="peer-name">Next Generation Families</span>
                <span className="peer-note">Multigenerational and the rising generation</span>
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
      <FooterComponent includeInstitutionalFootnote />
    </>
  );
}
