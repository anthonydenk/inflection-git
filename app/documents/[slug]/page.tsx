import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import { absoluteUrl } from "../../../src/data/site";

/**
 * Compliance document viewers.
 *
 * `file` points at the real PDF in `public/documents/`. The two originals kept
 * the filenames they shipped with (ADVpt4.pdf is Part 2A, CRSForm2.pdf is
 * Form CRS); the Part 2B brochure supplement was added alongside them.
 */
type Doc = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  heading: string;
  sub: string;
  meta: string;
  label: string;
  file: string;
};

const DOCUMENTS: Doc[] = [
  {
    slug: "adv-part-2a",
    title: "ADV Part 2A — Disclosures | Inflection Capital Management",
    description:
      "Read Form ADV Part 2A for Inflection Capital Management — the firm brochure covering services, fees, conflicts of interest, and disciplinary history.",
    breadcrumb: "ADV Part 2A",
    heading: "Form ADV Part 2A",
    sub: "The firm brochure: services, fees, conflicts of interest, and disciplinary history.",
    meta: "19 pages",
    label: "ADV Part 2A",
    file: "/documents/ADVpt4.pdf",
  },
  {
    slug: "adv-part-2b",
    title: "ADV Part 2B — Disclosures | Inflection Capital Management",
    description:
      "Read Form ADV Part 2B for Inflection Capital Management — the brochure supplement covering the background and qualifications of your advisers.",
    breadcrumb: "ADV Part 2B",
    heading: "Form ADV Part 2B",
    sub: "The brochure supplement: background and qualifications of the individuals who advise you.",
    meta: "Brochure supplement",
    label: "ADV Part 2B",
    file: "/documents/adv-part-2b.pdf",
  },
  {
    slug: "form-crs",
    title: "Form CRS — Disclosures | Inflection Capital Management",
    description:
      "Read Form CRS for Inflection Capital Management — the client relationship summary covering our services, costs, and how the firm is compensated.",
    breadcrumb: "Form CRS",
    heading: "Form CRS",
    sub: "The client relationship summary: what we offer, what it costs, and how we are compensated.",
    meta: "2 pages",
    label: "Form CRS",
    file: "/documents/CRSForm2.pdf",
  },
];

function getDocument(slug: string) {
  return DOCUMENTS.find((doc) => doc.slug === slug);
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DOCUMENTS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocument(slug);

  if (!doc) return {};

  const url = absoluteUrl(`/documents/${doc.slug}`);

  return {
    title: { absolute: doc.title },
    description: doc.description,
    alternates: { canonical: url },
    openGraph: {
      title: doc.title,
      description: doc.description,
      url,
      type: "website",
    },
    twitter: {
      title: doc.title,
      description: doc.description,
    },
  };
}

function breadcrumbJsonLd(doc: Doc) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://inflectioncm.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: doc.breadcrumb,
        item: `https://inflectioncm.com/documents/${doc.slug}`,
      },
    ],
  };
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocument(slug);

  if (!doc) notFound();

  return (
    <>
      <HeaderComponent />

      <main id="main-content" className="p-doc">
        <section className="doc-head">
          <div className="wrap">
            <span className="label">Legal &amp; Disclosures</span>
            <h1 className="doc-title">{doc.heading}</h1>
            <p className="doc-sub">{doc.sub}</p>
            <div className="doc-meta">
              <span>Inflection Capital Management, LLC</span>
              <span aria-hidden="true">·</span>
              <span>{doc.meta}</span>
            </div>
          </div>
        </section>

        <section className="doc-body">
          <div className="wrap">
            <div className="doc-actions">
              <a
                className="doc-btn"
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${doc.label} as a PDF in a new tab`}
              >
                Open in new tab &#8599;
              </a>
              <a
                className="doc-btn"
                href={doc.file}
                download
                aria-label={`Download ${doc.label} as a PDF`}
              >
                Download PDF &#8595;
              </a>
            </div>

            {/*
              Rendered in-page so the link never depends on a browser's
              "download PDFs instead of opening them" preference.
            */}
            <object
              className="doc-frame"
              data={`${doc.file}#view=FitH`}
              type="application/pdf"
              aria-label={`${doc.heading} document viewer`}
            >
              <div className="doc-fallback">
                <p>
                  This browser can&rsquo;t display PDFs inline. The document is still available to
                  open or download.
                </p>
                <a className="doc-btn" href={doc.file} target="_blank" rel="noopener noreferrer">
                  Open {doc.label}
                </a>
              </div>
            </object>

            <p className="doc-note">
              Inflection Capital Management, LLC is a registered investment adviser. This document is
              also available through the SEC at{" "}
              <a
                className="inline-link"
                href="https://adviserinfo.sec.gov/firm/summary/333157"
                target="_blank"
                rel="noopener noreferrer"
              >
                adviserinfo.sec.gov
              </a>
              .
            </p>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd(doc)).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      <FooterComponent />
    </>
  );
}
