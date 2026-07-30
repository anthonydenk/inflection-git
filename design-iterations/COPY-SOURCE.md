# Copy source of truth — inflectioncm.com (extracted 2026-07-29)

**Rule (user directive):** all copy on these pages must come from inflectioncm.com. Do not invent claims about the brand. In particular, never imply exclusivity, selectivity, client-count limits, or performance the firm does not claim ("in service of a few families — not many" was invented and is banned). Connective tissue (nav labels, button text, captions) may be written plainly, but must not assert anything about the firm that isn't on the live site.

Extracted from the live site's rendered pages and its JS bundle (`main.1a8aecb7.js`).

---

## Firm identity

- **Positioning line (use this as the canonical descriptor):**
  "Inflection Capital Management is a partner-owned, fee-only multi-family office serving wealth creators, multigenerational families, and single family offices."
- **Story paragraph (homepage, verbatim):**
  "Inflection Capital Management is a partner-owned and operated multi-family office based in Silicon Valley, dedicated to working with clients to preserve and grow their wealth and legacy. Our careers have been dedicated to working with wealth creators, families navigating periods of transition, and family offices, including their foundations. With a commitment to personal connection and a deep understanding of our clients' unique goals, we serve as trusted stewards for generations to come."
- **Credentials claim:** "we spent our careers inside institutions like BlackRock and Fidelity, working directly alongside hundreds of the most sophisticated single family offices in the country."
- **Address:** Inflection Capital Management, LLC, 1 Sansome Street, Suite 1400, San Francisco, CA 94104 · (415) 450-6556
- **Also does business as:** The Oglethorpe Collective, LLC ("TOC-23")
- **SEC:** https://adviserinfo.sec.gov/firm/summary/333157
- **Client login:** `https://inflection.addepar.com` (Addepar portal). On the live site this is a `<button>` firing `window.open(..., '_blank', 'noopener,noreferrer')`; extracted from the JS bundle since it has no href to crawl. Rebuilt here as a real anchor with `target="_blank" rel="noopener noreferrer"` — same destination, but works without JS and announces correctly to screen readers.

## Homepage sections (verbatim)

**Our Clients Inspire Us** — "We believe that people thrive when they have the space, support, and resources to focus on what matters most. At Inflection, we are inspired by our clients' passions and motivations, whether that be family, business, or philanthropy. We recognize that our clients are not interchangeable, which is why we believe in a personalized relationship for each client, allowing them to maximize their time and focus on their pursuits."

**Our Partnership** — "We meet you at the inflection point of your legacy and wealth, collaborating to build the infrastructure to support your family's unique needs. With institutional-level expertise, we enhance both your financial well-being and personal affairs. Acting as your advocate, we design a refined investment portfolio that aligns precisely with your vision for protecting and growing your assets."

**Success Together** — "As your partner, we leverage decades of experience of working with hundreds of single family offices and successful families, offering you a uniquely informed perspective. After establishing your financial priorities, we provide clarity and direction, acting as your steward to safeguard and grow your legacy for generations to come."

**Our Approach** lead-in — "When working with clients we are committed to:"

**The Inflection Client Experience** — "Our 25+ years spent advising single-family offices, foundations, and institutional allocators shape everything we do. We bring that same level of rigorous risk management and discipline directly to our clients. Clarity sits at the center of the relationship: transparent fees, intuitive reporting, and education tailored to your needs. Our philosophy is simple—bring order and intention to the complexity that comes with meaningful wealth."

**Adaptability** — "Our model is intentionally adaptable. We can partner around a wealth transition phase, steward an entire portfolio, or coordinate the full architecture—tax, estate, philanthropy, governance, and investment strategy—as your needs evolve. There is no one-size-fits-all approach; each relationship is designed around where you are today and where you're headed next."

**The inflection point thesis** — "Every family reaches an inflection point-where wealth becomes complex and legacy structures are no longer compatible. At Inflection, we integrate investments with tax strategy, estate planning, philanthropy, governance, and next generation stewardship-turning a fragmented financial world into one cohesive ecosystem. As a partner-owned firm, our incentives remain fully aligned with yours across generations."

**Contact CTA (real label):** "Meet with the Inflection Team" · form placeholder "What would you like to discuss with Inflection..." · button "Submit"

## Who We Serve — three audiences (verbatim)

### 1. Wealth Creators — "Founders and first-generation wealth"
- Tagline: "For entrepreneurs and operators creating first-generation wealth in ways the traditional industry was never designed to support."
- Meta: "Wealth management for founders, operators, and technology executives: concentrated stock risk management, pre-IPO and equity compensation planning, tax, estate, and institutional investment management."
- WHO WE ARE: "Inflection is a partner-owned, fee-only multi-family office. Very few firms can say what our team can: we spent our careers inside institutions like BlackRock and Fidelity, working directly alongside hundreds of the most sophisticated single family offices in the country."
- WHAT WE DO: "We take the playbook those families spent decades refining and pass it down to the people creating wealth today."
- "Much of first-generation wealth sits in a single concentrated position. We manage that risk directly, building hedging, staged diversification, and liquidity strategies around large, low-basis equity holdings. You also inherit our connectivity: the managers, structures, and relationships usually reserved for the largest single family offices. Investments, tax, estate, and governance in one cohesive ecosystem, without building a family office from scratch."
- Services lead-in: "One team for your whole balance sheet" / "Inflection gives founders, operators, and technology executives a single, coordinated team for turning concentrated equity and ownership into diversified, tax-efficient, multigenerational wealth. Core services include:"
  1. **Concentrated and single-stock risk management** — "Hedging, collars, variable prepaid forwards, exchange funds, and staged diversification for large, low-basis positions."
  2. **Pre-IPO and equity compensation planning** — "RSUs, ISOs and NSOs, QSBS qualification, 83(b) elections, 10b5-1 plans, and tender-offer strategy."
  3. **Liquidity event planning** — "Pre-transaction structuring, cash-flow design, and reinvestment strategy around a sale, IPO, or secondary."
  4. **Tax strategy** — "Tax-loss harvesting, asset location, entity structuring, and multi-state and California tax planning."
  5. **Estate and generational wealth transfer** — "Trust design, lifetime gifting, grantor and SLAT structures, and legacy planning built for growing wealth."
  6. **Investment management** — "Institutional-grade portfolios with access to boutique and alternative managers usually reserved for the largest family offices."
  7. **Philanthropy and charitable planning** — "Donor-advised funds, charitable remainder trusts, and private foundations."
  8. **Consolidated reporting and administration** — "A single, real-time view of your entire balance sheet across custodians, entities, and asset classes."
- Tool link: "Concentrated Stock Analytical Tool" — "Explore a personalized educational plan for managing concentrated stock, liquidity, diversification, and tax considerations."

### 2. Next Generation Families — "Multigenerational and the rising generation"
- Tagline: "For multigenerational families preparing the rising generation to steward what came before them."
- Meta: "Multigenerational wealth stewardship: governance, education, and the Inflection Next Gen Community, preparing the rising generation to steward family wealth."
- "The same ethos, carried across generations. We are independent and partner-owned, so our incentives stay aligned with families for the long term, not the length of a single transaction. Our roots run through the single family offices that have stayed cohesive for generations, and we know what keeps them that way."
- "We steward continuity. Nearly 70% of generational wealth transfers fail through fragmented advice and incomplete planning. We exist to change that outcome."
- Next Gen Community: "…we give family members a safe place for genuine peership, where the rising generation learns from one another and inherits not only capital, but the judgment to steward it."

### 3. Single Family Offices — "Fractional OCIO and investment operations"
- Tagline: "For established single family offices seeking capacity, institutional infrastructure, and a genuinely aligned investment partner."
- Meta: "Fractional family office and outsourced CIO services: portfolio construction, manager due diligence, consolidated reporting, and investment operations."
- "We do not simply advise single family offices."
- "Our team has operated inside the single family office world for decades, alongside the most sophisticated families in the country, and that lived experience is genuinely rare in this industry."
- "We act as a fractional extension of your family office: an outsourced CIO and investment-operations partner. Plug us in where you need depth, and keep the parts you would rather run yourself."
- "Portfolio construction, manager due diligence, consolidated reporting, and day-to-day investment operations, all backed by the connectivity of a team that knows the family office world from the inside. Institutional infrastructure, without the fixed cost of building it."

## Services — the seven, with their real sub-items

1. **Rising Generation** — Rising Generation Investment Philosophy · Family Business Succession Planning · Family Board · Marriage & Prenuptial Agreements · Rising Generation Career Initiatives
2. **Philanthropy** — Foundation Investment Allocation · Grant Analysis · Impact Alignment · Vehicle Structuring & Formation
3. **Family Governance & Succession** — Family Business Structures/Restructures · Rising Generation Education · Generational Legacy Success · Documenting Family Legacy
4. **Lifestyle** — Private Aviation · Collectible Insurance & Assessment · Health & Wellness · Project Management
5. **Investment Process** — Overall Investment Asset Allocation · Tactical Allocation · Concentrated Equity · Hedging Strategies · Completion Portfolio · Alternative Portfolio Optimization · Direct Co-Investment Opportunities
6. **Trust, Tax and Estate Planning** — Asset Protection · Tax Mitigation Strategies & Investment Management · Estate Planning · Document Storage
7. **Financial Reporting** — Performance Reporting · K-1 Aggregation · Balance Sheet & Cash Flow · Private Banking · Lending & Mortgages

Section title on the live services page: "Inflection & Your Family"

## Team

| Name | Title | Image (in repo) |
|---|---|---|
| Justin Kunz | CEO \| Founding Partner | `public/images/team/justin-kunz-*.webp` |
| Katie Riley Mahany | Managing Partner | `katie-riley-mahany-*.webp` |
| Patrick Hayes | Chief Compliance Officer | `patrick-hayes-*.webp` |
| Sophia Mura | Client Experience Associate | `sophia-mura-*.webp` |
| Yvonne Freeman | Client Service & Operations Associate | `yvonne-freeman-*.webp` |

**Full published biographies exist for all five Inflection team members.** Source of truth: `assets/team-bios.js` (copied from the repo's `src/data/team.js`), verified character-for-character against the live site's rendered `.team-card__bio` content and its JS bundle. They are *hidden behind expandable cards* on the live `/team` page, which is why an early flat text dump of the site appeared to show names and titles only — an earlier note in this file wrongly concluded "the live site publishes only names and titles." Individual member pages live at `final/team/<slug>.html`. Bios are verbatim-only: never trim, paraphrase, or extend them, and never write prose about a real person that isn't in that file.

**Joint Venture: Inflection & TOC-23** — "This partnership of Inflection and TOC-23 is the continuation of decades of work together across a cohesive team with complementary strengths covering investment management, estate planning, business transition advisory, and family office services. By combining our expertise, we provide clients with a single, coordinated team that understands the full picture — financial, personal, and generational."

- Chief Executive Officer: **Matt Blind, CFA** — 16 years experience: Bramalea Partners (founder), Fidelity Family Office, TortoiseEcofin, Kraft Foods, US Army · Education: West Point (BS), US Army Ranger School, Sapper School, Airborne School
- Chief Operating Officer: **Phil Ierardi** — 30 years experience: Eton Solutions, Fidelity Family Office · Education: Providence College (BS)
- Chief Planning Officer: **Jim Machinchick, CFP, CPWA** — 17 years experience: Lake Street Advisors, Fidelity Investments · Education: University of New Hampshire (BS)
- Managing Director, Research: **Hunter Steadley, CFA, CFP, CAIA** — 13 years experience: Lake Street Advisors, Johnson Financial Group, Personal Capital, NY Life, Morgan Stanley · Education: Elon University
- Director, Wealth Strategy: **Sam Stanton** — 6 years experience: Lake Street Advisors, Morgan Stanley, Eaton Vance Investment Company · Education: University of New Hampshire (BS)
- Non-executive Chairman: **Chris di Bonaventura** — 30 years experience: Senior Partner Andalusian Credit Partners, EVP Fidelity Family Office Services, EVP Citi Family Office, Morgan Stanley PWM · Education: Yale University (BA), NYU (MBA)

## Compliance furniture (every page)

Footer links: San Francisco, CA · ADV Part 2A · ADV Part 2B · Form CRS · Privacy Policy

Real document URLs:
- ADV Part 2A — `https://inflectioncm.com/static/media/ADVpt4.84014303f46140b743ab.pdf`
- ADV Part 2B — `https://inflectioncm.com/static/media/ADVpt2B.ed9ba8230d812079cd09.pdf`
- Form CRS — `https://inflectioncm.com/static/media/CRSForm2.9325d95b617898906a0e.pdf`
- Privacy Policy — `/privacy-policy`
- SEC adviser record — `https://adviserinfo.sec.gov/firm/summary/333157`

**Full disclosure block (verbatim, every page):**
"Information presented is for informational purposes only. Inflection Capital Management, LLC ("Inflection") is a registered investment adviser. Registration as an investment adviser does not imply a certain level of skill or training. Past performance is not indicative of future results. Investing involves risk, including the possibility of loss of principal. The ideas and opinions expressed herein do not constitute legal, tax, or investment advice or a recommendation of any particular security or strategy. Before making any investment decision, you should seek expert, professional advice and obtain information regarding the legal, fiscal, regulatory and foreign currency requirements for any investment according to the laws of your home country and place of residence. Any forward-looking statements or forecasts are based on assumptions and actual results may vary. Information presented from third parties is believed to be reliable, but no warranty is provided. Inflection is not required to update information presented, unless otherwise required by applicable law. For more information about Inflection, including our Form ADV Part 2A Brochure, please visit https://adviserinfo.sec.gov/firm/summary/333157 or contact us at (415) 450-6556."

## Privacy policy

Full text captured at `research/privacy-policy.txt`. Headings: Information We Collect · Categories of Information We Disclose · Categories of Parties to Whom We Disclose · How We Use Information · Our Security Policy · Closed or Inactive Accounts · Document Retention · Complaint Notification · Changes to this Privacy Policy. Dated **March 2026**.

## Banned inventions (found in the first draft, removed)

- "in service of a few families — not many" — implies selectivity the firm does not claim
- "The people across the table" / "The people who built the firm are the people who serve you"
- "1 — Purpose: stewardship of wealth and legacy, from one generation to the next"
- Fabricated article titles ("Planning After a Liquidity Event", "What to Expect from a Multi-Family Office", "Family Governance for the Long Term") — the live site has no insights/blog section
- Any invented biography sentence for a real person. Real bios exist (see Team above) — use them verbatim or not at all
- "Education & Stewardship" as a service (not one of the seven)
- "We would be glad to meet you" as the CTA — the real label is "Meet with the Inflection Team"
