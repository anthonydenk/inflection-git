import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeaderComponent from "../../components/header/header";
import FooterComponent from "../../components/footer/footer";
import "./whoWeServe.css";

const AUDIENCES = {
    "wealth-creators": {
        navTitle: "Wealth Creators",
        navDescription: "Founders and first-generation wealth",
        title: "Wealth Creators | Inflection Capital Management",
        description:
            "Wealth management for founders, operators, and technology executives: concentrated stock risk management, pre-IPO and equity compensation planning, tax, estate, and institutional investment management.",
        heading: "Wealth",
        emphasis: "Creators",
        thesis:
            "For entrepreneurs and operators creating first-generation wealth in ways the traditional industry was never designed to support.",
        whoWeAre: (
            <>
                <span className="who-we-serve__lead">Inflection</span> is a partner-owned,
                fee-only multi-family office. Very few firms can say what our team can: we
                spent our careers inside institutions like BlackRock and Fidelity, working
                directly alongside <span className="who-we-serve__peach">hundreds of the most sophisticated single family offices</span> in the country.
            </>
        ),
        whatWeDo:
            "We take the playbook those families spent decades refining and pass it down to the people creating wealth today.",
        detail:
            "Much of first-generation wealth sits in a single concentrated position. We manage that risk directly, building hedging, staged diversification, and liquidity strategies around large, low-basis equity holdings. You also inherit our connectivity: the managers, structures, and relationships usually reserved for the largest single family offices. Investments, tax, estate, and governance in one cohesive ecosystem, without building a family office from scratch.",
    },
    "next-generation": {
        navTitle: "Next Generation Families",
        navDescription: "Multigenerational and the rising generation",
        title: "Next Generation Families | Inflection Capital Management",
        description:
            "Multigenerational wealth stewardship: governance, education, and the Inflection Next Gen Community, preparing the rising generation to steward family wealth.",
        heading: "Next Generation",
        emphasis: "Families",
        thesis:
            "For multigenerational families preparing the rising generation to steward what came before them.",
        whoWeAre:
            "The same ethos, carried across generations. We are independent and partner-owned, so our incentives stay aligned with families for the long term, not the length of a single transaction. Our roots run through the single family offices that have stayed cohesive for generations, and we know what keeps them that way.",
        whatWeDo:
            "We steward continuity. Nearly 70% of generational wealth transfers fail through fragmented advice and incomplete planning. We exist to change that outcome.",
        detail: (
            <>
                Through the <span className="who-we-serve__peach">Inflection Next Gen Community</span>, we give family members a safe place for genuine peership, where the rising generation learns from one another and inherits not only capital, but the judgment to steward it.
            </>
        ),
    },
    "single-family-offices": {
        navTitle: "Single Family Offices",
        navDescription: "Fractional OCIO and investment operations",
        title: "Single Family Offices | Inflection Capital Management",
        description:
            "Fractional family office and outsourced CIO services: portfolio construction, manager due diligence, consolidated reporting, and investment operations.",
        heading: "Single Family",
        emphasis: "Offices",
        thesis:
            "For established single family offices seeking capacity, institutional infrastructure, and a genuinely aligned investment partner.",
        whoWeAre: (
            <>
                We do not simply advise single family offices. <span className="who-we-serve__peach">We come from them.</span> Our team has operated inside the single family office world for decades, alongside the most sophisticated families in the country, and that lived experience is genuinely rare in this industry.
            </>
        ),
        whatWeDo:
            "We act as a fractional extension of your family office: an outsourced CIO and investment-operations partner. Plug us in where you need depth, and keep the parts you would rather run yourself.",
        detail:
            "Portfolio construction, manager due diligence, consolidated reporting, and day-to-day investment operations, all backed by the connectivity of a team that knows the family office world from the inside. Institutional infrastructure, without the fixed cost of building it.",
    },
};

const SERVICES = [
    [
        "Concentrated and single-stock risk management",
        "Hedging, collars, variable prepaid forwards, exchange funds, and staged diversification for large, low-basis positions.",
    ],
    [
        "Pre-IPO and equity compensation planning",
        "RSUs, ISOs and NSOs, QSBS qualification, 83(b) elections, 10b5-1 plans, and tender-offer strategy.",
    ],
    [
        "Liquidity event planning",
        "Pre-transaction structuring, cash-flow design, and reinvestment strategy around a sale, IPO, or secondary.",
    ],
    [
        "Tax strategy",
        "Tax-loss harvesting, asset location, entity structuring, and multi-state and California tax planning.",
    ],
    [
        "Estate and generational wealth transfer",
        "Trust design, lifetime gifting, grantor and SLAT structures, and legacy planning built for growing wealth.",
    ],
    [
        "Investment management",
        "Institutional-grade portfolios with access to boutique and alternative managers usually reserved for the largest family offices.",
    ],
    [
        "Philanthropy and charitable planning",
        "Donor-advised funds, charitable remainder trusts, and private foundations.",
    ],
    [
        "Consolidated reporting and administration",
        "A single, real-time view of your entire balance sheet across custodians, entities, and asset classes.",
    ],
];

const AUDIENCE_IDS = Object.keys(AUDIENCES);

const getAudienceFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    return AUDIENCE_IDS.includes(hash) ? hash : "wealth-creators";
};

const InflectionMark = () => (
    <svg aria-hidden="true" viewBox="0 0 236.92 205.47">
        <defs>
            <linearGradient id="who-we-serve-mark" x1="0" y1="102.73" x2="236.92" y2="102.73" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d7e9e5" stopOpacity="0" />
                <stop offset=".1" stopColor="#d7e9e5" stopOpacity=".06" />
                <stop offset=".28" stopColor="#d7e9e5" stopOpacity=".22" />
                <stop offset=".53" stopColor="#d7e9e5" stopOpacity=".49" />
                <stop offset=".83" stopColor="#d7e9e5" stopOpacity=".84" />
                <stop offset=".96" stopColor="#d7e9e5" />
            </linearGradient>
        </defs>
        <path
            fill="url(#who-we-serve-mark)"
            d="M0,171.22h82.33c-13.06,21.28-36.23,34.24-61.2,34.24H0v-34.24ZM82.33,171.22h154.6v-34.24h-93.4c-24.97,0-48.14,12.97-61.2,34.24ZM106.4,102.73H0v34.24h45.2c24.97,0,48.14-12.97,61.2-34.24ZM106.4,102.73h130.52v-34.24h-69.33c-24.97,0-48.14,12.97-61.2,34.24ZM69.28,68.49c24.97,0,48.14-12.97,61.2-34.24H0v34.24h69.28ZM236.92,0h-45.25c-24.97,0-48.14,12.97-61.2,34.24h106.45V0Z"
        />
    </svg>
);

const WaveDivider = ({ color }) => (
    <div className="who-we-serve__divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,54 L360,54 C430,54 430,30 500,30 L1080,30 C1150,30 1150,12 1220,12 L1440,12 L1440,90 L0,90 Z" fill={color} />
        </svg>
    </div>
);

const WhoWeServe = () => {
    const [activeAudience, setActiveAudience] = useState(getAudienceFromHash);
    const audience = AUDIENCES[activeAudience];

    useEffect(() => {
        const handleHashChange = () => setActiveAudience(getAudienceFromHash());
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [activeAudience]);

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) return undefined;

        const originalDescription = metaDescription.getAttribute("content");
        metaDescription.setAttribute("content", audience.description);

        return () => {
            if (originalDescription) {
                metaDescription.setAttribute("content", originalDescription);
            }
        };
    }, [audience.description]);

    const structuredData = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Inflection Capital Management",
            alternateName: "Inflection",
            url: "https://www.inflectioncm.com",
            description:
                "Inflection Capital Management is a partner-owned, fee-only multi-family office serving wealth creators, multigenerational families, and single family offices.",
            telephone: "+1-415-450-6556",
            email: "team@inflectioncm.com",
            priceRange: "Fee-only",
            areaServed: ["San Francisco Bay Area", "Silicon Valley", "United States"],
            address: {
                "@type": "PostalAddress",
                streetAddress: "One Sansome Street, Suite 1400",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94104",
                addressCountry: "US",
            },
            sameAs: ["https://adviserinfo.sec.gov/firm/summary/333157"],
        }),
        []
    );

    const selectAudience = (id) => {
        if (window.location.hash === `#${id}`) {
            setActiveAudience(id);
        } else {
            window.location.hash = id;
        }
    };

    return (
        <div className="who-we-serve">
            <Helmet>
                <title>{audience.title}</title>
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://www.inflectioncm.com/who-we-serve" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Inflection Capital Management" />
                <meta property="og:title" content={audience.title} />
                <meta property="og:description" content={audience.description} />
                <meta property="og:url" content="https://www.inflectioncm.com/who-we-serve" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <HeaderComponent />

            <main>
                <section className="who-we-serve__hero">
                    <div className="who-we-serve__wrap who-we-serve__hero-grid">
                        <div>
                            <div className="who-we-serve__eyebrow">Who We Serve</div>
                            <h1>
                                {audience.heading} <em>{audience.emphasis}</em>
                            </h1>
                            <p className="who-we-serve__thesis">{audience.thesis}</p>
                        </div>
                        <div className="who-we-serve__hero-art">
                            <InflectionMark />
                        </div>
                    </div>
                </section>

                <WaveDivider color="#D7E9E5" />

                <section className="who-we-serve__content">
                    <div className="who-we-serve__wrap who-we-serve__content-grid">
                        <article className="who-we-serve__block">
                            <div className="who-we-serve__label">Who We Are</div>
                            <p>{audience.whoWeAre}</p>
                        </article>
                        <article className="who-we-serve__block">
                            <div className="who-we-serve__label">What We Do</div>
                            <p>{audience.whatWeDo}</p>
                            <p className="who-we-serve__detail">{audience.detail}</p>
                        </article>
                    </div>
                </section>

                {activeAudience === "wealth-creators" && (
                    <section className="who-we-serve__services" aria-label="Services for Wealth Creators">
                        <div className="who-we-serve__wrap">
                            <div className="who-we-serve__services-eyebrow">Services for Wealth Creators</div>
                            <h2>
                                One team for your whole <em>balance sheet</em>
                            </h2>
                            <p className="who-we-serve__services-intro">
                                Inflection gives founders, operators, and technology executives a single, coordinated team for turning concentrated equity and ownership into diversified, tax-efficient, multigenerational wealth. Core services include:
                            </p>
                            <ul className="who-we-serve__services-grid">
                                {SERVICES.map(([title, description]) => (
                                    <li key={title}>
                                        <strong>{title}</strong>
                                        {description}
                                    </li>
                                ))}
                            </ul>
                            <div className="who-we-serve__cta-wrap">
                                <Link className="who-we-serve__cta" to="/preipo">
                                    Concentrated Stock Analytical Tool
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" aria-hidden="true">
                                        <path d="M1 6.5h16M12 1l5.5 5.5L12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                <nav className="who-we-serve__switcher" aria-label="Choose who we serve">
                    <div className="who-we-serve__wrap">
                        <div className="who-we-serve__switcher-label">Who We Serve</div>
                        <div className="who-we-serve__segments">
                            {AUDIENCE_IDS.map((id) => {
                                const item = AUDIENCES[id];
                                return (
                                    <button
                                        type="button"
                                        key={id}
                                        className={`who-we-serve__segment ${activeAudience === id ? "is-current" : ""}`}
                                        aria-current={activeAudience === id ? "page" : undefined}
                                        onClick={() => selectAudience(id)}
                                    >
                                        <span className="who-we-serve__segment-name">{item.navTitle}</span>
                                        <span className="who-we-serve__segment-description">{item.navDescription}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                <WaveDivider color="#75b2b2" />
            </main>

            <FooterComponent includeInstitutionalDisclosure={activeAudience === "wealth-creators"} />
        </div>
    );
};

export default WhoWeServe;
