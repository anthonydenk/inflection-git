import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import { absoluteUrl, firm } from "../../../src/data/site";
import { getResourceGuide, resourceGuides } from "../../../src/data/resources";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/resources/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | Inflection Capital Management`,
      description: guide.description,
      url: `/resources/${guide.slug}`,
      images: ["/favicon.png"],
    },
    twitter: {
      title: `${guide.title} | Inflection Capital Management`,
      description: guide.description,
      images: ["/favicon.png"],
    },
  };
}

function articleJsonLd(guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: {
      "@type": "Organization",
      name: firm.name,
      url: absoluteUrl("/"),
    },
    reviewedBy: guide.reviewer
      ? {
          "@type": "Person",
          name: guide.reviewer.name,
          jobTitle: guide.reviewer.title,
          url: absoluteUrl(`/team/${guide.reviewer.slug}`),
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: firm.name,
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: absoluteUrl(`/resources/${guide.slug}`),
  };
}

function breadcrumbJsonLd(guide) {
  return {
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
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: absoluteUrl(`/resources/${guide.slug}`),
      },
    ],
  };
}

export default async function ResourceGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(guide)).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(guide)).replace(/</g, "\\u003c"),
        }}
      />
      <div className="resources-fixed-header">
        <HeaderComponent />
      </div>

      <main className="legacy-page resource-article-page" id="main-content">
        <Link href="/resources" className="resource-back-link">
          Resources
        </Link>

        <article className="resource-article">
          <header className="resource-article-header">
            <p className="resources-eyebrow">{guide.eyebrow}</p>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <div className="resource-attribution">
              <span>Prepared by {firm.name}</span>
              {guide.reviewer && (
                <span>
                  Reviewed by{" "}
                  <Link href={`/team/${guide.reviewer.slug}`}>
                    {guide.reviewer.name}, {guide.reviewer.title}
                  </Link>
                </span>
              )}
            </div>
          </header>

          <div className="resource-article-body">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <footer className="resource-disclaimer">
            This material is for informational purposes only and does not
            constitute legal, tax, or investment advice. Families should consult
            qualified professional advisers before making decisions.
          </footer>
        </article>

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
