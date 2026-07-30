import type { Metadata } from "next";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import ContactForm from "../../src/components/contactForm/ContactForm";
import { absoluteUrl } from "../../src/data/site";

const TITLE = "Contact Inflection Capital Management | San Francisco";
const DESCRIPTION =
  "Meet with the Inflection team. A partner-owned, fee-only multi-family office at 1 Sansome Street, Suite 1400, San Francisco, CA 94104. Call (415) 450-6556.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/contact"),
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://inflectioncm.com/contact",
  name: "Meet with the Inflection Team",
  mainEntity: {
    "@type": "FinancialService",
    name: "Inflection Capital Management, LLC",
    url: "https://inflectioncm.com/",
    telephone: "+1-415-450-6556",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Sansome Street, Suite 1400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94104",
      addressCountry: "US",
    },
    sameAs: ["https://adviserinfo.sec.gov/firm/summary/333157"],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeaderComponent />

      <main id="main-content" className="p-contact">
        <Reveal />

        {/*
          Compact evergreen header band (~46vh) over dusk-2 — city lights from
          across the bay. The homepage keeps the only full-height hero.
        */}
        <section className="banner banner-dusk" aria-labelledby="page-title">
          <div className="plate-bg" aria-hidden="true" />
          <div className="plate-grain" aria-hidden="true" />
          <div className="plate-scrim" aria-hidden="true" />
          <div className="banner-copy">
            <p className="label hload" style={{ "--hd": ".14s" } as React.CSSProperties}>
              Contact
            </p>
            <h1
              className="banner-title hload-lcp"
              id="page-title"
              style={{ "--hd": ".26s" } as React.CSSProperties}
            >
              Meet with the <em>Inflection</em> Team
            </h1>
            <p className="banner-meta hload" style={{ "--hd": ".46s" } as React.CSSProperties}>
              <span>1 Sansome Street, Suite 1400, San Francisco, CA 94104</span>
              <span className="sep" aria-hidden="true">
                ·
              </span>
              <a href="tel:+14154506556">(415) 450-6556</a>
            </p>
          </div>
        </section>

        <section className="interlude pad-sweep" aria-label="Contact the Inflection team">
          <div className="wrap">
            <div className="contact-grid">
              <div className="reveal">
                <h2 className="label">Send a Message</h2>
                <p className="form-title">
                  We meet you at the inflection point of your legacy and wealth.
                </p>
                <p className="form-note">
                  Prefer to speak with someone? Call the office at{" "}
                  <a href="tel:+14154506556">(415) 450-6556</a>.
                </p>

                <ContactForm />
              </div>

              <div className="reveal" style={{ "--d": ".15s" } as React.CSSProperties}>
                <div className="rail">
                  <h2 className="rail-title">Our office</h2>

                  <div className="rail-item">
                    <p className="rail-k">Address</p>
                    <address className="rail-v">
                      Inflection Capital Management, LLC
                      <br />
                      1 Sansome Street, Suite 1400
                      <br />
                      San Francisco, CA 94104
                    </address>
                  </div>

                  <div className="rail-item">
                    <p className="rail-k">Telephone</p>
                    <p className="rail-v">
                      <a href="tel:+14154506556">(415) 450-6556</a>
                    </p>
                  </div>

                  <div className="rail-item">
                    <p className="rail-k">Adviser record</p>
                    <p className="rail-v">
                      <a
                        href="https://adviserinfo.sec.gov/firm/summary/333157"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Inflection&rsquo;s SEC adviser record{" "}
                        <span className="arr" aria-hidden="true">
                          &#8599;
                        </span>
                      </a>
                    </p>
                  </div>

                  <div className="rail-item">
                    <p className="rail-k">Also doing business as</p>
                    <p className="rail-v">The Oglethorpe Collective, LLC (&ldquo;TOC-23&rdquo;)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="statement" aria-label="About Inflection Capital Management">
          <div className="wrap">
            <p className="label reveal">Inflection Capital Management</p>
            <p className="statement-line reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
              Inflection Capital Management is a partner-owned, fee-only multi-family office serving
              wealth creators, multigenerational families, and single family offices.
            </p>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      <FooterComponent />
    </>
  );
}
