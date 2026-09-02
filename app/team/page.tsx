import type { Metadata } from "next";
import Link from "next/link";
import HeaderComponent from "../../src/components/header/header";
import FooterComponent from "../../src/components/footer/footer";
import Reveal from "../../src/components/reveal/Reveal";
import { absoluteUrl } from "../../src/data/site";
import { teamMembers } from "../../src/data/team";

const TITLE = "Our Team — Partner-Owned Multi-Family Office | Inflection";
const DESCRIPTION =
  "Meet Inflection Capital Management's partner-owned and independent team in San Francisco, alongside its strategic alliance with TOC-23.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/team") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/team"),
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
      name: "Team",
      item: "https://inflectioncm.com/team",
    },
  ],
};

const peopleJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Inflection Capital Management team",
  itemListElement: teamMembers.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      url: absoluteUrl(`/team/${member.slug}`),
      worksFor: {
        "@type": "Organization",
        name: "Inflection Capital Management, LLC",
      },
    },
  })),
};

// The joint-venture roster is prototype copy, transcribed verbatim.
const jointVenture = [
  {
    years: "16",
    role: "Chief Executive Officer",
    name: "Matt Blind, CFA",
    experience:
      "Bramalea Partners (founder), Fidelity Family Office, TortoiseEcofin, Kraft Foods, US Army",
    education: "West Point (BS), US Army Ranger School, Sapper School, Airborne School",
  },
  {
    years: "30",
    role: "Chief Operating Officer",
    name: "Phil Ierardi",
    experience: "Eton Solutions, Fidelity Family Office",
    education: "Providence College (BS)",
  },
  {
    years: "17",
    role: "Chief Planning Officer",
    name: "Jim Machinchick, CFP, CPWA",
    experience: "Lake Street Advisors, Fidelity Investments",
    education: "University of New Hampshire (BS)",
  },
  {
    years: "13",
    role: "Managing Director, Research",
    name: "Hunter Steadley, CFA, CFP, CAIA",
    experience:
      "Lake Street Advisors, Johnson Financial Group, Personal Capital, NY Life, Morgan Stanley",
    education: "Elon University",
  },
  {
    years: "6",
    role: "Director, Wealth Strategy",
    name: "Sam Stanton",
    experience: "Lake Street Advisors, Morgan Stanley, Eaton Vance Investment Company",
    education: "University of New Hampshire (BS)",
  },
  {
    years: "30",
    role: "Non-executive Chairman",
    name: "Chris di Bonaventura",
    experience:
      "Senior Partner Andalusian Credit Partners, EVP Fidelity Family Office Services, EVP Citi Family Office, Morgan Stanley PWM",
    education: "Yale University (BA), NYU (MBA)",
  },
];

const leadDelays = [undefined, ".12s"];
const rowDelays = [undefined, ".1s", ".2s"];

function MemberCard({
  member,
  delay,
  lazy,
}: {
  member: (typeof teamMembers)[number];
  delay?: string;
  lazy?: boolean;
}) {
  return (
    <Link
      className="tm tm-link reveal"
      style={delay ? ({ "--d": delay } as React.CSSProperties) : undefined}
      href={`/team/${member.slug}`}
      aria-label={`${member.name} — ${member.title}`}
    >
      <div className="tm-frame">
        <img
          src={member.card.src}
          srcSet={member.card.srcSet}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          alt={member.name}
          width={member.card.width}
          height={member.card.height}
          loading={lazy ? "lazy" : undefined}
          decoding="async"
        />
      </div>
      <div className="tm-meta">
        <div>
          <h3 className="tm-name">{member.name}</h3>
          <p className="tm-role">{member.title}</p>
        </div>
        <span className="tm-go" aria-hidden="true">&#8594;</span>
      </div>
    </Link>
  );
}

export default function TeamPage() {
  const partners = teamMembers.slice(0, 2);
  const colleagues = teamMembers.slice(2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(peopleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderComponent />
      <main id="main-content" className="p-team">
        <Reveal />

        {/* ====================== BANNER · dusk over the bay ====================== */}
        <section className="plate plate-dusk banner" aria-label="Our Team">
          <div className="plate-bg" aria-hidden="true"></div>
          <div className="plate-grain" aria-hidden="true"></div>
          <div className="plate-scrim" aria-hidden="true"></div>
          <div className="plate-copy">
            <span className="label hload" style={{ "--hd": ".15s" } as React.CSSProperties}>San Francisco</span>
            <h1 className="banner-title">Our Team</h1>
            <p className="banner-sub hload" style={{ "--hd": ".4s" } as React.CSSProperties}>A partner-owned and operated multi-family office in San Francisco.</p>
          </div>
          <span className="plate-tag hload" style={{ "--hd": ".6s" } as React.CSSProperties}>City lights at dusk, from across the bay</span>
        </section>

        {/* ====================== 01 · THE TEAM ====================== */}
        <section className="team-sheet" id="team" aria-labelledby="team-h">
          <div className="wrap">
            <div className="team-head">
              <div className="reveal">
                <span className="label">01 &middot; The Team</span>
                <h2 className="team-lede" id="team-h">Partner-owned and <em>operated.</em></h2>
              </div>
              <p className="team-note reveal" style={{ "--d": ".15s" } as React.CSSProperties}>Inflection Capital Management is a partner-owned and independent multi-family office serving wealth creators, multigenerational families, and single family offices.</p>
            </div>

            {/* the partners — square frames, given the page's largest scale */}
            <div className="tm-lead">
              {partners.map((member, index) => (
                <MemberCard key={member.slug} member={member} delay={leadDelays[index]} />
              ))}
            </div>

            <div className="tm-rule reveal" aria-hidden="true"></div>

            {/* the wider team — 4:3 frames, a quieter register */}
            <div className="tm-row">
              {colleagues.map((member, index) => (
                <MemberCard key={member.slug} member={member} delay={rowDelays[index]} lazy />
              ))}
            </div>
          </div>
        </section>

        {/* ====================== 02 · STRATEGIC ALLIANCE — TOC-23 ====================== */}
        <section className="load jv" id="toc-23" aria-labelledby="jv-h">
          <div className="wrap">
            <span className="label reveal">02 &middot; Strategic Alliance</span>
            <div className="jv-head">
              <div className="reveal">
                <h2 className="jv-title" id="jv-h">Strategic Alliance: Inflection &amp; <em>TOC-23</em></h2>
                <p className="jv-dba">The Oglethorpe Collective, LLC (&ldquo;TOC-23&rdquo;)</p>
              </div>
              <p className="jv-body reveal" style={{ "--d": ".15s" } as React.CSSProperties}>This strategic alliance between Inflection and TOC-23 is the continuation of decades of work together across a cohesive team with complementary strengths covering investment management, estate planning, business transition advisory, and family office services. By combining our expertise, we provide clients with a single, coordinated team that understands the full picture — financial, personal, and generational.</p>
            </div>

            <div className="jv-list">
              {jointVenture.map((person) => (
                <div className="jv-row reveal" key={person.name}>
                  <p className="jv-yrs">{person.years}<span>Years Experience</span></p>
                  <div>
                    <p className="jv-role">{person.role}</p>
                    <h3 className="jv-name">{person.name}</h3>
                  </div>
                  <div className="jv-facts">
                    <div className="jv-fact">
                      <span className="jv-flabel">Experience</span>
                      <p className="jv-ftext">{person.experience}</p>
                    </div>
                    <div className="jv-fact">
                      <span className="jv-flabel">Education</span>
                      <p className="jv-ftext">{person.education}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== 03 · CLOSING INVITATION ====================== */}
        <section className="close" id="conversation" aria-labelledby="close-h">
          <div className="wrap">
            <span className="label reveal">03 &middot; Contact</span>
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
