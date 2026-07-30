import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import { absoluteUrl } from "../../src/data/site";
import { preIpoPromoPages } from "../../src/data/preIpoNavigation";

export const metadata: Metadata = {
  title: "Pre-IPO Planning",
  description:
    "Planning paths for concentrated private-company equity, including SpaceX, Anthropic, OpenAI, and general pre-IPO planning.",
  alternates: {
    canonical: "/pre-ipo",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: "Pre-IPO Planning | Inflection Capital Management",
    description:
      "Planning paths for concentrated private-company equity before a liquidity event.",
    url: "/pre-ipo",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Pre-IPO Planning | Inflection Capital Management",
    description:
      "Planning paths for concentrated private-company equity before a liquidity event.",
    images: ["/favicon.png"],
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
      name: "Pre-IPO Planning",
      item: absoluteUrl("/pre-ipo"),
    },
  ],
};

export default function PreIpoPlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main className="legacy-page preipo-index-page" id="main-content">
        <section className="preipo-index-hero" aria-labelledby="preipo-index-title">
          <div>
            <p className="preipo-eyebrow">Pre-IPO planning</p>
            <h1 id="preipo-index-title">Planning paths for concentrated private-company equity</h1>
            <p>
              Company-specific snapshots give founders, employees, and private-market investors a
              first view of tax exposure, liquidity sequencing, diversification, estate planning, and
              charitable planning before a liquidity event.
            </p>
          </div>
          <div className="preipo-index-visual">
            <img
              src="/images/preipo/spacex-rocket-960.webp"
              srcSet="/images/preipo/spacex-rocket-640.webp 640w, /images/preipo/spacex-rocket-960.webp 960w"
              sizes="(max-width: 980px) calc(100vw - 28px), 460px"
              width="960"
              height="640"
              alt="Rocket launch representing private-company liquidity planning"
              fetchPriority="high"
            />
            <span>Company-specific snapshots</span>
          </div>
        </section>

        <section className="preipo-index-grid" aria-label="Pre-IPO planning pages">
          {preIpoPromoPages.map((page) => (
            <article className="preipo-index-card" id={page.id} key={page.id}>
              <div>
                <span>{page.status}</span>
                <h2>{page.title}</h2>
                <p>{page.description}</p>
              </div>
              <Link href={page.route}>
                {page.id === "spacex" ? "Open snapshot" : "View planning path"}
              </Link>
            </article>
          ))}
        </section>

        <section className="preipo-index-note" aria-labelledby="preipo-note-title">
          <div>
            <p className="preipo-eyebrow">What these tools are for</p>
            <h2 id="preipo-note-title">A starting point, not a recommendation</h2>
          </div>
          <p>
            These pages are designed to organize the first conversation. They do not replace legal,
            tax, accounting, or investment advice. Final public-launch disclosure language should be
            approved before these pages are indexed or promoted beyond site navigation.
          </p>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
