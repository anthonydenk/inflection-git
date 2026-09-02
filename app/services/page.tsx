import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../src/data/site";

const TITLE = "Multi-Family Office Services in San Francisco | Inflection";
const DESCRIPTION =
  "Rising generation, philanthropy, governance, liquidity and equity compensation, investments, trust and tax, and financial reporting — coordinated in San Francisco.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/services"),
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

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Multi-family office services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Rising Generation" },
    { "@type": "ListItem", position: 2, name: "Philanthropy" },
    { "@type": "ListItem", position: 3, name: "Family Governance & Succession" },
    { "@type": "ListItem", position: 4, name: "Liquidity & Equity Compensation Planning" },
    { "@type": "ListItem", position: 5, name: "Lifestyle" },
    { "@type": "ListItem", position: 6, name: "Investment Process" },
    { "@type": "ListItem", position: 7, name: "Trust, Tax and Estate Planning" },
    { "@type": "ListItem", position: 8, name: "Financial Reporting" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <link rel="preload" as="image" href="/media/plates/cables-1.jpg" fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main id="main-content" className="p-services">
        <Reveal />

        {/* ====================== BANNER ====================== */}
        <section className="banner" aria-label="Our services">
          <div className="banner-bg" aria-hidden="true"></div>
          <div className="banner-grain" aria-hidden="true"></div>
          <div className="banner-scrim" aria-hidden="true"></div>
          <div className="banner-copy">
            <span className="label">Services</span>
            <h1 className="banner-title">Our <em>Services</em></h1>
            <p className="banner-sub">Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.</p>
          </div>
          <span className="banner-tag">Cables into cloud, from the bridge deck</span>
        </section>

        {/* ====================== CLIENT EXPERIENCE + INDEX 01–04 ====================== */}
        <section className="interlude pad-sweep" id="experience">
          <div className="wrap">

            <div className="lede-grid">
              <div className="reveal">
                <span className="label">01 &middot; The Experience</span>
                <h2 className="lede-title">The Inflection Client Experience</h2>
              </div>
              <div className="lede-body reveal" style={{ "--d": ".15s" } as React.CSSProperties}>
                <p>Every family reaches an inflection point&mdash;where wealth becomes complex and legacy structures are no longer compatible. At Inflection, we integrate investments with tax strategy, estate planning, philanthropy, governance, and next generation stewardship&mdash;turning a fragmented financial world into one cohesive ecosystem. As a partner-owned firm, our incentives remain fully aligned with yours across generations.</p>
              </div>
            </div>

            {/* the index */}
            <div className="index-open reveal" id="services">
              <div>
                <span className="label">02 &middot; Services</span>
                <h2 className="index-title">Inflection &amp; <em>You</em></h2>
              </div>
              <span className="index-count">Eight practices · S-01 to S-08</span>
            </div>

            {/* S-01 / S-02 · paired columns */}
            <div className="svc-pair svc-pair-first reveal">
              <div className="svc-cell" id="rising-generation">
                <span className="svc-idx">S-01</span>
                <h2 className="svc-name">Rising Generation</h2>
                <ul className="svc-items">
                  <li>Rising Generation Investment Philosophy</li>
                  <li>Family Business Succession Planning</li>
                  <li>Family Board</li>
                  <li>Marriage &amp; Prenuptial Agreements</li>
                  <li>Rising Generation Career Initiatives</li>
                </ul>
              </div>
              <div className="svc-cell" id="philanthropy">
                <span className="svc-idx">S-02</span>
                <h2 className="svc-name">Philanthropy</h2>
                <ul className="svc-items">
                  <li>DAF &amp; Private Foundations</li>
                  <li>Foundation Investment Allocation</li>
                  <li>Grant Analysis</li>
                  <li>Impact Alignment</li>
                  <li>Vehicle Structuring &amp; Formation</li>
                </ul>
              </div>
            </div>

            {/* S-03 / S-04 · paired columns */}
            <div className="svc-pair reveal">
              <div className="svc-cell" id="family-governance">
                <span className="svc-idx">S-03</span>
                <h2 className="svc-name">Family Governance &amp; Succession</h2>
                <ul className="svc-items">
                  <li>Family Business Structures/Restructures</li>
                  <li>Rising Generation Education</li>
                  <li>Generational Legacy Success</li>
                  <li>Documenting Family Legacy</li>
                </ul>
              </div>
              <div className="svc-cell" id="liquidity-equity">
                <span className="svc-idx">S-04</span>
                <h2 className="svc-name">Liquidity &amp; Equity Compensation Planning</h2>
                <ul className="svc-items">
                  <li>Equity Compensation Strategy (RSUs, ISOs &amp; NSOs)</li>
                  <li>IPO, Tender Offer &amp; Liquidity Event Planning</li>
                  <li>Tax Planning for Vesting &amp; Exercise Decisions</li>
                  <li>Concentrated Stock Diversification &amp; Hedging</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ====================== QUIET MOMENT · ADAPTABILITY ====================== */}
        <section className="load quiet-dark" aria-label="Adaptability">
          <div className="wrap">
            <div className="quiet-grid">
              <div className="reveal">
                <span className="label">Adaptability</span>
                <p className="quiet-line">Our model is intentionally adaptable.</p>
              </div>
              <div className="reveal" style={{ "--d": ".15s" } as React.CSSProperties}>
                <p className="quiet-body">We can partner around a wealth transition phase, steward an entire portfolio, or coordinate the full architecture—tax, estate, philanthropy, governance, and investment strategy—as your needs evolve. There is no one-size-fits-all approach; each relationship is designed around where you are today and where you&rsquo;re headed next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== INDEX 05–08 ====================== */}
        <section className="interlude sweep-over">
          <div className="wrap">

            {/* S-05 / S-06 · asymmetric split */}
            <div className="svc-split reveal">
              <div className="svc-cell" id="lifestyle">
                <span className="svc-idx">S-05</span>
                <h2 className="svc-name">Lifestyle</h2>
                <ul className="svc-items">
                  <li>Private Aviation</li>
                  <li>Collectible Insurance &amp; Assessment</li>
                  <li>Health &amp; Wellness</li>
                  <li>Project Management</li>
                </ul>
              </div>
              <div className="svc-card" id="investment-process">
                <span className="svc-idx">S-06</span>
                <h2 className="svc-name">Investment Process</h2>
                <ul className="svc-items svc-two">
                  <li>Overall Investment Asset Allocation</li>
                  <li>Tactical Allocation</li>
                  <li>Concentrated Equity</li>
                  <li>Hedging Strategies</li>
                  <li>Completion Portfolio</li>
                  <li>Alternative Portfolio Optimization</li>
                  <li>Direct Co-Investment Opportunities</li>
                </ul>
              </div>
            </div>

            {/* S-07 / S-08 · paired columns */}
            <div
              className="svc-pair svc-tail reveal"
              style={{ "--d": ".1s", marginTop: "clamp(34px,4vw,58px)" } as React.CSSProperties}
            >
              <div className="svc-cell" id="trust-tax-estate">
                <span className="svc-idx">S-07</span>
                <h2 className="svc-name">Trust, Tax and Estate Planning</h2>
                <ul className="svc-items">
                  <li>Asset Protection</li>
                  <li>Tax Mitigation Strategies &amp; Investment Management</li>
                  <li>Estate Planning</li>
                  <li>Document Storage</li>
                </ul>
              </div>
              <div className="svc-cell" id="financial-reporting">
                <span className="svc-idx">S-08</span>
                <h2 className="svc-name">Financial Reporting</h2>
                <ul className="svc-items">
                  <li>Performance Reporting</li>
                  <li>K-1 Aggregation</li>
                  <li>Balance Sheet &amp; Cash Flow</li>
                  <li>Private Banking</li>
                  <li>Lending &amp; Mortgages</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ====================== PHOTOGRAPHIC REST · THE INFLECTION POINT ====================== */}
        <section className="band" aria-label="The inflection point">
          <div className="band-bg" aria-hidden="true"></div>
          <div className="band-grain" aria-hidden="true"></div>
          <div className="band-scrim" aria-hidden="true"></div>
          <div className="band-copy">
            <span className="label reveal">The Inflection Point</span>
            <p className="band-text reveal" style={{ "--d": ".12s" } as React.CSSProperties}>Every family reaches an inflection point&mdash;where wealth becomes complex and legacy structures are no longer compatible. At Inflection, we integrate investments with tax strategy, estate planning, philanthropy, governance, and next generation stewardship&mdash;turning a fragmented financial world into one cohesive ecosystem. As a partner-owned firm, our incentives remain fully aligned with yours across generations.</p>
          </div>
          <span className="band-tag">The bay from the Marin Headlands · morning</span>
        </section>

        {/* ====================== CLOSING CTA ====================== */}
        <section className="plate plate-dusk plate-cta" id="conversation" aria-label="Meet with the Inflection team">
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="plate-copy">
            <span className="label reveal">Contact</span>
            <h2 className="cta-title reveal" style={{ "--d": ".1s" } as React.CSSProperties}>Meet with the <em>Inflection Team</em></h2>
            <p className="cta-quiet-line reveal" style={{ "--d": ".2s" } as React.CSSProperties}>What would you like to discuss with Inflection…</p>
            <div className="cta-actions reveal" style={{ "--d": ".3s" } as React.CSSProperties}>
              <Link className="btn-mint" href="/contact">Meet with the Inflection Team</Link>
              <Link className="cta-second" href="/who-we-serve">See who we serve</Link>
              <div className="cta-contact">
                <a href="tel:+14154506556">(415) 450-6556</a>
                <span aria-hidden="true">·</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <span className="plate-tag">City lights at dusk, from across the bay</span>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
