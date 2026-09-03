import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import { absoluteUrl } from "../../src/data/site";
import { resourceGuides } from "../../src/data/resources";

export const metadata: Metadata = {
  title: "Family Office Resources",
  description:
    "Educational guides from Inflection Capital Management on liquidity events, multi-family office structure, and family governance.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Family Office Resources | Inflection Capital Management",
    description:
      "Educational guides on liquidity events, multi-family office structure, and family governance.",
    url: "/resources",
    images: ["/favicon.png"],
  },
  twitter: {
    title: "Family Office Resources | Inflection Capital Management",
    description:
      "Educational guides on liquidity events, multi-family office structure, and family governance.",
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
      name: "Resources",
      item: absoluteUrl("/resources"),
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="resources-fixed-header">
        <HeaderComponent />
      </div>

      <main className="legacy-page resources-page" id="main-content">
        <section className="resources-hero">
          <p className="resources-eyebrow">Resources</p>
          <h1>Family Office Guides</h1>
          <p>
            Educational perspectives for families organizing wealth, governance,
            and adviser coordination at meaningful transition points.
          </p>
        </section>

        <section className="resources-list" aria-label="Educational guides">
          {resourceGuides.map((guide) => (
            <article key={guide.slug} className="resource-row">
              <div>
                <p className="resource-row-eyebrow">{guide.eyebrow}</p>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
              </div>
              <Link href={`/resources/${guide.slug}`}>Read guide</Link>
            </article>
          ))}
        </section>

        <nav className="resources-related-links" aria-label="Related pages">
          <Link href="/services">Services</Link>
          <Link href="/team">Team</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </main>

      <FooterComponent />
    </>
  );
}
