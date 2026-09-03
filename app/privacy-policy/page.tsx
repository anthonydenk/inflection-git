import type { Metadata } from "next";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../src/data/site";

const TITLE = "Privacy Notice Regarding Client Privacy | Inflection";
const DESCRIPTION =
  "How Inflection Capital Management collects, uses, discloses, and safeguards non-public personal client information, and our security policy. Updated March 2026.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/privacy-policy"),
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
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
      name: "Privacy Policy",
      item: "https://inflectioncm.com/privacy-policy",
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Notice Regarding Client Privacy",
  url: "https://inflectioncm.com/privacy-policy",
  dateModified: "2026-03-01",
  publisher: {
    "@type": "Organization",
    name: "Inflection Capital Management, LLC",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <HeaderComponent />

      <main id="main-content" className="p-privacy">
        <Reveal />

        {/*
          No photographic plate: a legal document gets a restrained evergreen
          band, not a cinematic banner.
        */}
        <section className="masthead" aria-labelledby="page-title">
          <div className="wrap">
            <p className="label hload" style={{ "--hd": ".14s" } as React.CSSProperties}>
              Legal &amp; Disclosures
            </p>
            <h1
              className="mast-title hload-lcp"
              id="page-title"
              style={{ "--hd": ".26s" } as React.CSSProperties}
            >
              Privacy Notice Regarding <em>Client Privacy</em>
            </h1>
            <p className="mast-meta hload" style={{ "--hd": ".46s" } as React.CSSProperties}>
              <span>Inflection Capital Management, LLC</span>
              <span>Also d/b/a The Oglethorpe Collective, LLC</span>
              <span>March 2026</span>
            </p>
          </div>
        </section>

        <section className="doc" aria-label="Privacy notice">
          <div className="wrap">
            <div className="doc-grid">
              <div className="doc-main">
                <p className="doc-lede reveal">
                  Maintaining the trust and confidence of our clients is a high priority. That is why
                  we want you to understand how we protect your privacy when we collect and use
                  information about you, and the steps that we take to safeguard that information.
                  This notice is provided to you on behalf of Inflection Capital Management, LLC
                  (&ldquo;Inflection&rdquo;), also doing business as The Oglethorpe Collective, LLC
                  (&ldquo;TOC-23&rdquo;).
                </p>

                <h2 id="information-we-collect" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    01
                  </span>
                  Information We Collect
                </h2>
                <p>
                  In connection with providing investment products, financial advice, or other
                  services, we obtain non-public personal information about you, including:
                </p>
                <ul className="doc-list">
                  <li>
                    Information we receive from you on account applications or questionnaires, such
                    as your address, date of birth, Social Security Number, occupation, financial
                    goals, assets and income;
                  </li>
                  <li>Information about your transactions with us, our affiliates, or others; and</li>
                  <li>
                    Information received from credit or service bureaus or other third parties, such
                    as your credit history or employment status.
                  </li>
                </ul>

                <h2 id="categories-of-information-we-disclose" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    02
                  </span>
                  Categories of Information We Disclose
                </h2>
                <p>
                  We may disclose all information that we collect. Inflection and its affiliates do
                  not sell customer lists and will not sell your name to telemarketers.
                </p>

                <h2 id="categories-of-parties-to-whom-we-disclose" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    03
                  </span>
                  Categories of Parties to Whom We Disclose
                </h2>
                <p>
                  We will not disclose information regarding you or your account with us, except
                  under the following circumstances:
                </p>
                <ul className="doc-list">
                  <li>
                    To your authorized Investment Advisor Representative and his or her manager.
                    Inflection may permit Investment Advisor Representatives that terminate their
                    affiliation with Inflection to make copies of their client files.
                  </li>
                  <li>
                    To establish or maintain an account with a third party, such as a clearing
                    broker/dealer, investment company, or insurance company providing services to you
                    and/or our firm;
                  </li>
                  <li>To third parties who perform services on our behalf;</li>
                  <li>
                    To your attorney, accountant, trustee or anyone else who represents you in a
                    fiduciary capacity;
                  </li>
                  <li>To our attorneys, accountants or auditors; and</li>
                  <li>
                    To government entities or other third parties in response to subpoenas or other
                    legal process as required by law or to comply with regulatory inquiries.
                  </li>
                </ul>

                <h2 id="how-we-use-information" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    04
                  </span>
                  How We Use Information
                </h2>
                <p>
                  Information may be used among the companies that perform support services for us,
                  such as data processors, technical systems consultants and programmers, or
                  companies that help us market products and services to you for a number of
                  purposes, such as:
                </p>
                <ul className="doc-list">
                  <li>To protect your accounts from unauthorized access or identity theft;</li>
                  <li>To process your requests such as securities purchases and sales;</li>
                  <li>
                    To establish or maintain an account with an unaffiliated third party, such as a
                    clearing broker-dealer providing services to you and/or Inflection;
                  </li>
                  <li>To service your accounts, such as by issuing checks and account statements;</li>
                  <li>
                    To comply with Federal, State, and Self-Regulatory Organization requirements; and
                  </li>
                  <li>To keep you informed about financial services of interest to you.</li>
                </ul>

                <h2 id="our-security-policy" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    05
                  </span>
                  Our Security Policy
                </h2>
                <p>
                  We restrict access to nonpublic personal information about you to those individuals
                  who need to know that information to provide products or services to you and
                  perform their respective duties. We maintain physical, electronic, and procedural
                  security measures to safeguard confidential client information.
                </p>

                <h2 id="closed-or-inactive-accounts" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    06
                  </span>
                  Closed or Inactive Accounts
                </h2>
                <p>
                  If you decide to close your account(s) or become an inactive customer, our Privacy
                  Policy will continue to apply to you.
                </p>

                <h2 id="document-retention" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    07
                  </span>
                  Document Retention
                </h2>
                <p>
                  We follow internal retention schedules for various types of information and may
                  dispose of certain documents after the retention period expires. All confidential
                  information that is disposed of under this policy will be redacted, pulverized or
                  shredded so that personal information cannot be read or reconstructed.
                </p>

                <h2 id="complaint-notification" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    08
                  </span>
                  Complaint Notification
                </h2>
                <p>
                  Please direct complaints to: Inflection Capital Management, LLC, 1 Sansome Street,
                  Suite 1400, San Francisco, CA 94104, <a href="tel:+14154506556">(415) 450-6556</a>.
                </p>

                <h2 id="changes-to-this-privacy-policy" className="reveal">
                  <span className="h2-idx" aria-hidden="true">
                    09
                  </span>
                  Changes to this Privacy Policy
                </h2>
                <p>
                  If we make any substantial changes in the way we use or disseminate confidential
                  information, we will notify you. If you have any questions concerning this Privacy
                  Policy, please write to: Inflection Capital Management, LLC, 1 Sansome Street, Suite
                  1400, San Francisco, CA 94104, <a href="tel:+14154506556">(415) 450-6556</a>.
                </p>

                <p className="doc-date reveal">March 2026</p>
              </div>

              <nav className="doc-toc" aria-label="Contents of this notice">
                <span className="toc-k">Contents</span>
                <ul className="toc-list">
                  <li>
                    <a href="#information-we-collect">Information We Collect</a>
                  </li>
                  <li>
                    <a href="#categories-of-information-we-disclose">
                      Categories of Information We Disclose
                    </a>
                  </li>
                  <li>
                    <a href="#categories-of-parties-to-whom-we-disclose">
                      Categories of Parties to Whom We Disclose
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-use-information">How We Use Information</a>
                  </li>
                  <li>
                    <a href="#our-security-policy">Our Security Policy</a>
                  </li>
                  <li>
                    <a href="#closed-or-inactive-accounts">Closed or Inactive Accounts</a>
                  </li>
                  <li>
                    <a href="#document-retention">Document Retention</a>
                  </li>
                  <li>
                    <a href="#complaint-notification">Complaint Notification</a>
                  </li>
                  <li>
                    <a href="#changes-to-this-privacy-policy">Changes to this Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      <FooterComponent />
    </>
  );
}
