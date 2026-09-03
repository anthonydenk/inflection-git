import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../src/components/header/header";
import FooterComponent from "../src/components/footer/footer";
import Reveal from "../src/components/reveal/Reveal";
import { absoluteUrl } from "../src/data/site";

const TITLE = "Multi-Family Office in San Francisco | Inflection Capital";
const DESCRIPTION =
  "Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/"),
    type: "website",
  },
};

const schema = {
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

const practices = [
  { idx: "S-01", name: "Rising Generation", href: "/services#rising-generation" },
  { idx: "S-02", name: "Philanthropy", href: "/services#philanthropy" },
  {
    idx: "S-03",
    name: "Family Governance & Succession",
    href: "/services#family-governance",
  },
  {
    idx: "S-04",
    name: "Liquidity & Equity Compensation Planning",
    href: "/services#liquidity-equity",
  },
  { idx: "S-05", name: "Lifestyle", href: "/services#lifestyle" },
  { idx: "S-06", name: "Investment Process", href: "/services#investment-process" },
  {
    idx: "S-07",
    name: "Trust, Tax and Estate Planning",
    href: "/services#trust-tax-estate",
  },
  { idx: "S-08", name: "Financial Reporting", href: "/services#financial-reporting" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />

      <main id="main-content" className="p-home">
        <Reveal />

        {/* PLATE 01 · hero — fog over San Francisco from the Marin Headlands */}
        <section
          className="plate plate-hero"
          aria-label="Inflection Capital Management — a multi-family office in San Francisco"
        >
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="plate-copy">
            <h1
              className="hero-eyebrow hload"
              style={{ "--hd": ".15s" } as React.CSSProperties}
            >
              Inflection Capital Management <span className="dot">·</span> San Francisco
            </h1>
            <p
              className="hero-display hload"
              style={{ "--hd": ".3s" } as React.CSSProperties}
            >
              Trusted stewards at <em>every inflection point.</em>
            </p>
            <p
              className="hero-sub hload"
              style={{ "--hd": ".5s" } as React.CSSProperties}
            >
              Inflection Capital Management is a partner-owned and independent multi-family
              office serving wealth creators, multigenerational families, and single
              family offices.
            </p>
            <div
              className="hero-ctas hload"
              style={{ "--hd": ".68s" } as React.CSSProperties}
            >
              <a className="cta-line" href="#conversation">
                Begin a conversation <span className="arr">&#8594;</span>
              </a>
              <a className="cta-quiet" href="#approach">
                Our services
              </a>
            </div>
          </div>
          <span
            className="scroll-cue hload"
            style={{ "--hd": ".9s" } as React.CSSProperties}
          >
            Continue
          </span>
          <span
            className="plate-tag hload"
            style={{ "--hd": ".9s" } as React.CSSProperties}
          >
            Fog over San Francisco, from the Marin Headlands &middot; morning
          </span>
        </section>

        {/* 01 · THE FIRM */}
        <section className="interlude" id="story">
          <div className="wrap">
            <div className="story-grid">
              <div className="reveal">
                <span className="label">01 &middot; The Firm</span>
                <h2 className="story-lede">
                  A partner-owned and independent multi-family office{" "}
                  <em>based in San Francisco.</em>
                </h2>
              </div>
              <div
                className="story-body reveal"
                style={{ "--d": ".15s" } as React.CSSProperties}
              >
                <p>
                  Inflection Capital Management is a partner-owned and operated
                  multi-family office based in San Francisco, dedicated to working with
                  clients to preserve and grow their wealth and legacy.
                </p>
                <p>
                  Our careers have been dedicated to working with wealth creators,
                  families navigating periods of transition, and family offices,
                  including their foundations. With a commitment to personal connection
                  and a deep understanding of our clients&rsquo; unique goals, we serve as
                  trusted stewards at every inflection point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLATE 02 · Golden Gate south tower in fog, dawn */}
        <section
          className="plate plate-bay"
          aria-label="We meet you at the inflection point of your legacy"
        >
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="plate-copy">
            <p className="plate-line reveal">
              We meet you at the inflection point of <em>your legacy.</em>
            </p>
          </div>
          <span className="plate-tag">
            The south tower in fog, from Fort Point &middot; dawn
          </span>
        </section>

        {/* 02 · OUR PRINCIPLES */}
        <section className="interlude pad-sweep">
          <div className="wrap">
            <span className="label reveal">02 &middot; Our Principles</span>
            <div className="principle-rows">
              <div className="p-row reveal">
                <span className="p-num">01</span>
                <h3 className="p-title">Our Clients Inspire Us</h3>
                <p className="p-theme">
                  We believe that people thrive when they have the space, support, and
                  resources to focus on what matters most. At Inflection, we are inspired
                  by our clients&rsquo; passions and motivations, whether that be family,
                  business, or philanthropy. We recognize that our clients are not
                  interchangeable, which is why we believe in a personalized relationship
                  for each client, allowing them to maximize their time and focus on their
                  pursuits.
                </p>
              </div>
              <div
                className="p-row reveal"
                style={{ "--d": ".12s" } as React.CSSProperties}
              >
                <span className="p-num">02</span>
                <h3 className="p-title">Our Partnership</h3>
                <p className="p-theme">
                  We meet you at the inflection point of your legacy and wealth,
                  collaborating to build the infrastructure to support your family&rsquo;s
                  unique needs. Using skills honed at some of the largest financial institutions, we enhance both your
                  financial well-being and personal affairs. Acting as your advocate, we
                  design a refined investment portfolio that aligns precisely with your
                  vision for protecting and growing your assets.
                </p>
              </div>
              <div
                className="p-row reveal"
                style={{ "--d": ".24s" } as React.CSSProperties}
              >
                <span className="p-num">03</span>
                <h3 className="p-title">Success Together</h3>
                <p className="p-theme">
                  As your partner, we leverage decades of experience of working with
                  hundreds of single family offices and successful families, offering you
                  a uniquely informed perspective. After establishing your financial
                  priorities, we provide clarity and direction, acting as your steward to
                  safeguard and grow your legacy for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* quiet numbers band */}
        <section className="load">
          <div className="wrap">
            <span className="label reveal">The Firm, in Brief</span>
            <div className="load-grid">
              <div className="stat reveal">
                <div className="stat-num">
                  25<sup>+</sup>
                </div>
                <p className="stat-cap">
                  Years advising single-family offices, foundations, and institutional
                  allocators.
                </p>
              </div>
              <div
                className="stat reveal"
                style={{ "--d": ".12s" } as React.CSSProperties}
              >
                <div className="stat-num">
                  100<sup>s</sup>
                </div>
                <p className="stat-cap">
                  Single family offices worked alongside directly, among the most
                  sophisticated in the country.
                </p>
              </div>
              <div
                className="stat reveal"
                style={{ "--d": ".24s" } as React.CSSProperties}
              >
                <div className="stat-num is-word">Independent</div>
                <p className="stat-cap">
                  Partner-owned and independent, so our incentives remain fully aligned with yours
                  across generations.
                </p>
              </div>
            </div>
            <p
              className="load-note reveal"
              style={{ "--d": ".3s" } as React.CSSProperties}
            >
              Our clients are not interchangeable.
            </p>
          </div>
        </section>

        {/* PLATE 03 · cables into cloud */}
        <section
          className="plate plate-cloud"
          aria-label="We bring order and intention to the complexity that comes with meaningful wealth"
        >
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="plate-copy">
            <p className="plate-line reveal">
              We bring order and intention to the complexity that comes with{" "}
              <em>meaningful wealth.</em>
            </p>
          </div>
          <span className="plate-tag">Cables into cloud, from the bridge deck</span>
        </section>

        {/* 03 · OUR APPROACH + PARTNERS + WHO WE SERVE */}
        <section className="interlude" id="approach">
          <div className="wrap">
            <div className="approach-top">
              <div className="reveal">
                <span className="label">03 &middot; Our Approach</span>
                <h2 className="approach-lede">Order and intention, in the everyday.</h2>
              </div>
              <div
                className="approach-copy reveal"
                style={{ "--d": ".15s" } as React.CSSProperties}
              >
                <p>
                  <strong>
                    25+ years advising single-family offices, foundations, and
                    institutional allocators.
                  </strong>{" "}
                  Transparent fees, intuitive reporting, education tailored to your needs.
                  We bring order and intention to the complexity that comes with
                  meaningful wealth &mdash; one deliberate decision at a time.
                </p>
              </div>
            </div>

            <div
              className="deck-line reveal"
              style={{ "--d": ".2s" } as React.CSSProperties}
            >
              <ul className="practices">
                {practices.map((practice) => (
                  <li className="practice" key={practice.idx}>
                    <Link className="pr-link" href={practice.href}>
                      <span className="pr-idx">{practice.idx}</span>
                      <span className="pr-name">{practice.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 04 · the partners */}
            <div className="partners-block" id="partners">
              <div className="partners-head reveal">
                <div>
                  <span className="label">04 &middot; Our Team</span>
                  <h2 className="partners-title">Partner-owned and operated.</h2>
                </div>
                <div className="partners-note">
                  <p>
                    Our careers have been dedicated to working with wealth creators,
                    families navigating periods of transition, and family offices, including
                    their foundations.
                  </p>
                  <Link className="team-prompt" href="/team">
                    <em>Meet the full Inflection team</em>
                    <span aria-hidden="true">&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 05 · who we serve */}
            <div className="writing-block">
              <span className="label reveal">05 &middot; Who We Serve</span>
              <ul className="writing-list">
                <li className="reveal">
                  <Link className="w-link" href="/who-we-serve#wealth-creators">
                    <span className="w-idx">i.</span>
                    <span className="w-title">
                      Wealth Creators
                      <em className="w-sub">Founders and first-generation wealth</em>
                    </span>
                    <span className="w-arr">&#8594;</span>
                  </Link>
                </li>
                <li className="reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
                  <Link className="w-link" href="/who-we-serve#next-generation">
                    <span className="w-idx">ii.</span>
                    <span className="w-title">
                      Next Generation Families
                      <em className="w-sub">
                        Multigenerational and the rising generation
                      </em>
                    </span>
                    <span className="w-arr">&#8594;</span>
                  </Link>
                </li>
                <li className="reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
                  <Link className="w-link" href="/who-we-serve#single-family-offices">
                    <span className="w-idx">iii.</span>
                    <span className="w-title">
                      Single Family Offices
                      <em className="w-sub">Fractional OCIO and investment operations</em>
                    </span>
                    <span className="w-arr">&#8594;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PLATE 04 · city lights at dusk — CTA */}
        <section
          className="plate plate-dusk"
          id="conversation"
          aria-label="Begin a conversation"
        >
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="plate-copy">
            <h2
              className="cta-title reveal"
              style={{ "--d": ".1s" } as React.CSSProperties}
            >
              Meet with the <em>Inflection team.</em>
            </h2>
            <p
              className="cta-copy reveal"
              style={{ "--d": ".2s" } as React.CSSProperties}
            >
              Our model is intentionally adaptable. We can partner around a wealth
              transition phase, steward an entire portfolio, or coordinate the full
              architecture&mdash;tax, estate, philanthropy, governance, and investment
              strategy&mdash;as your needs evolve.
            </p>
            <div
              className="cta-actions reveal"
              style={{ "--d": ".3s" } as React.CSSProperties}
            >
              <Link className="btn-mint" href="/contact">
                Meet with the Inflection team
              </Link>
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
