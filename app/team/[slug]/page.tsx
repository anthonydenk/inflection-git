import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderComponent from "../../../src/components/header/header";
import FooterComponent from "../../../src/components/footer/footer";
import Reveal from "../../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../../src/data/site";
import { getTeamMember, teamMembers } from "../../../src/data/team";

type Member = (typeof teamMembers)[number];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) return {};

  const url = absoluteUrl(`/team/${member.slug}`);

  return {
    title: { absolute: member.seo.title },
    description: member.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: member.seo.title,
      description: member.seo.description,
      url,
      type: "profile",
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
      title: member.seo.title,
      description: member.seo.description,
      images: ["/og-image.jpg"],
    },
  };
}

function personJsonLd(member: Member) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    image: absoluteUrl(member.portrait.src),
    url: absoluteUrl(`/team/${member.slug}`),
    worksFor: {
      "@type": "Organization",
      name: "Inflection Capital Management",
      url: "https://inflectioncm.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Sansome Street, Suite 1400",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94104",
        addressCountry: "US",
      },
    },
  };
}

function breadcrumbJsonLd(member: Member) {
  return {
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
        name: "Team",
        item: "https://inflectioncm.com/team",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: member.name,
        item: absoluteUrl(`/team/${member.slug}`),
      },
    ],
  };
}

/**
 * The prototypes stagger the biography in .1s steps and hold the last two
 * paragraphs at .3s, drop a hairline rule before the closing paragraph, and
 * give that closing line the quieter .bio-coda register on three of the five
 * pages. Copy itself is the firm's published biography, verbatim.
 */
function bioDelay(index: number) {
  return `.${Math.min(index, 3)}s`;
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const index = teamMembers.findIndex((m) => m.slug === member.slug);
  const prev = teamMembers[(index - 1 + teamMembers.length) % teamMembers.length];
  const next = teamMembers[(index + 1) % teamMembers.length];

  const lede = member.bio[0];
  const middle = member.bio.slice(1, -1);
  const closing = member.bio[member.bio.length - 1];
  const closingIndex = member.bio.length - 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd(member)).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(member)).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main id="main-content" className="p-member">
        <Reveal />

        {/* ====================== MASTHEAD ====================== */}
        <section className="plate mast" aria-labelledby="member-h">
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="plate-copy">
            <div className="mast-grid">
              <div className="mast-copy">
                <span className="label hload" style={{ "--hd": ".15s" } as React.CSSProperties}>Our Team</span>
                <h1 className="mast-name" id="member-h">{member.name}</h1>
                <p className="mast-title hload" style={{ "--hd": ".42s" } as React.CSSProperties}>{member.title}</p>
                <Link className="mast-back hload" style={{ "--hd": ".58s" } as React.CSSProperties} href="/team">
                  <span className="arr" aria-hidden="true">&#8592;</span> Back to the team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== BIOGRAPHY ====================== */}
        <section className="bio-sheet" aria-label="Biography">
          <div className="wrap">
            <div className="bio-grid">
              <div className="bio-rail">
                <figure className="bio-fig">
                  <div className="bio-frame">
                    <img
                      src={member.portrait.src}
                      alt={member.portrait.alt}
                      width={member.portrait.width}
                      height={member.portrait.height}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="bio-cap">{member.name}<span>{member.title}</span></figcaption>
                </figure>
              </div>

              <div className="bio-body">
                <p className="reveal bio-lede">{lede}</p>
                {middle.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className="reveal"
                    style={{ "--d": bioDelay(i + 1) } as React.CSSProperties}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="bio-rule reveal" aria-hidden="true"></div>
                <p
                  className={member.coda ? "reveal bio-coda" : "reveal"}
                  style={{ "--d": bioDelay(closingIndex) } as React.CSSProperties}
                >
                  {closing}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== PREVIOUS / NEXT ====================== */}
        <section className="load pager" aria-labelledby="pager-h">
          <div className="wrap">
            <h2 className="label reveal" id="pager-h">More of the Team</h2>
            <nav className="pg-grid reveal" style={{ "--d": ".1s" } as React.CSSProperties} aria-label="Other team members">
              <Link className="pg pg-prev" href={`/team/${prev.slug}`}>
                <span className="pg-dir"><span aria-hidden="true">&#8592;</span> Previous</span>
                <span className="pg-name">{prev.name}</span>
                <span className="pg-role">{prev.title}</span>
              </Link>
              <Link className="pg pg-next" href={`/team/${next.slug}`}>
                <span className="pg-dir">Next <span aria-hidden="true">&#8594;</span></span>
                <span className="pg-name">{next.name}</span>
                <span className="pg-role">{next.title}</span>
              </Link>
            </nav>
            <p className="pg-back reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              <Link href="/team">Back to the full Inflection team</Link>
            </p>
          </div>
        </section>

        {/* ====================== CLOSING INVITATION ====================== */}
        <section className="close" id="conversation" aria-labelledby="close-h">
          <div className="wrap">
            <span className="label reveal">Contact</span>
            <h2 className="close-title reveal" id="close-h" style={{ "--d": ".1s" } as React.CSSProperties}>Meet with the <em>Inflection Team.</em></h2>
            <div className="close-actions reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              <Link className="btn-ever" href="/contact">Meet with the Inflection Team</Link>
              <p className="close-contact">
                <a href="tel:+14154506556">(415) 450-6556</a>
                <span className="sep" aria-hidden="true">·</span>
                <span>1 Sansome Street, Suite 1400, San Francisco, CA 94104</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
