import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../src/data/site";

const TITLE = "About the Firm";
const DESCRIPTION =
  "Inflection Capital Management is a partner-owned and independent multi-family office in San Francisco serving wealth creators, families, and single family offices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About the Firm | Inflection Capital Management",
    description: DESCRIPTION,
    url: absoluteUrl("/about"),
    type: "website",
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
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />

      <main id="main-content" className="p-home">
        <Reveal />

        {/* hero plate — same photography and treatment as the homepage */}
        <section
          className="plate plate-hero"
          aria-label="About Inflection Capital Management"
        >
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="plate-copy">
            <span
              className="hero-eyebrow hload"
              style={{ "--hd": ".15s" } as React.CSSProperties}
            >
              About the firm
            </span>
            <h1
              className="hero-display hload"
              style={{ "--hd": ".3s" } as React.CSSProperties}
            >
              Trusted stewards at <em>every inflection point.</em>
            </h1>
            <p
              className="hero-sub hload"
              style={{ "--hd": ".5s" } as React.CSSProperties}
            >
              Inflection Capital Management is a partner-owned and independent multi-family
              office serving wealth creators, multigenerational families, and single
              family offices.
            </p>
          </div>
          <span
            className="plate-tag hload"
            style={{ "--hd": ".9s" } as React.CSSProperties}
          >
            Fog over San Francisco, from the Marin Headlands &middot; morning
          </span>
        </section>

        {/* 01 · the firm */}
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
                <p className="story-sign">
                  Trusted stewards at every inflection point
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Golden Gate south tower in fog */}
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

        {/* 02 · our principles */}
        <section className="interlude">
          <div className="wrap">
            <span className="label reveal">02 &middot; Our Principles</span>
            <div className="principle-rows">
              <div className="p-row reveal">
                <span className="p-num">01</span>
                <h2 className="p-title">Our Clients Inspire Us</h2>
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
                <h2 className="p-title">Our Partnership</h2>
                <p className="p-theme">
                  We meet you at the inflection point of your legacy and wealth,
                  collaborating to build the infrastructure to support your family&rsquo;s
                  unique needs. With institutional-level expertise, we enhance both your
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
                <h2 className="p-title">Success Together</h2>
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

        {/* 03 · the client experience */}
        <section className="interlude" id="client-experience">
          <div className="wrap">
            <div className="approach-top">
              <div className="reveal">
                <span className="label">03 &middot; The Inflection Client Experience</span>
                <h2 className="approach-lede">Order and intention, in the everyday.</h2>
              </div>
              <div
                className="story-body reveal"
                style={{ "--d": ".15s" } as React.CSSProperties}
              >
                <p>
                  Our 25+ years spent advising single-family offices, foundations, and
                  institutional allocators shape everything we do. We bring that same
                  level of rigorous risk management and discipline directly to our
                  clients. Clarity sits at the center of the relationship: transparent
                  fees, intuitive reporting, and education tailored to your needs. Our
                  philosophy is simple&mdash;bring order and intention to the complexity
                  that comes with meaningful wealth.
                </p>
                <p>
                  <Link className="inline-link" href="/services">
                    See how we work with families
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* the invitation */}
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
              strategy&mdash;as your needs evolve. There is no one-size-fits-all approach;
              each relationship is designed around where you are today and where
              you&rsquo;re headed next.
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
