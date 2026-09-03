import { getTeamMember } from "./team";

const justin = getTeamMember("justin-kunz");
const patrick = getTeamMember("patrick-hayes");

export const resourceGuides = [
  {
    slug: "planning-after-liquidity-event",
    title: "Planning After a Liquidity Event",
    eyebrow: "Wealth transition",
    description:
      "A practical framework for organizing decisions after a business sale, IPO, tender offer, or other meaningful liquidity event.",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    author: justin,
    reviewer: patrick,
    sections: [
      {
        heading: "Start With the Decision Calendar",
        body: [
          "A liquidity event can create a sudden increase in financial complexity. Families often need to coordinate tax planning, estate planning, investment policy, cash-flow needs, philanthropy, and family communication at the same time.",
          "A decision calendar helps separate urgent actions from durable decisions. It can also make room for outside advisers to review tax, legal, investment, and reporting considerations before capital is committed.",
        ],
      },
      {
        heading: "Build the Operating Picture",
        body: [
          "Before a long-term portfolio is designed, families benefit from a clear view of entities, expected tax obligations, liquidity needs, concentrated positions, insurance, estate documents, and existing adviser relationships.",
          "That operating picture becomes the reference point for allocation, governance, and reporting decisions. It also helps reduce duplicated work across attorneys, CPAs, trustees, bankers, and investment teams.",
        ],
      },
      {
        heading: "Move From Proceeds to Purpose",
        body: [
          "The transition from business ownership or concentrated wealth to a broader family balance sheet is not only technical. Families may also need to define what the capital is intended to support: lifestyle, enterprise reinvestment, philanthropy, education, stewardship, or future generations.",
          "A written investment policy, reporting cadence, and governance rhythm can help keep short-term activity aligned with those priorities.",
        ],
      },
    ],
  },
  {
    slug: "when-to-consider-a-multi-family-office",
    title: "When to Consider a Multi-Family Office",
    eyebrow: "Family office structure",
    description:
      "Signals that a family may need more coordinated investment, reporting, planning, and governance support.",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    author: justin,
    reviewer: patrick,
    sections: [
      {
        heading: "Complexity Is Usually the Trigger",
        body: [
          "Families often begin exploring multi-family office support when wealth becomes more complex than a portfolio alone. Common triggers include business transitions, private investments, multiple entities, trust structures, concentrated stock, philanthropic vehicles, or a growing group of family stakeholders.",
          "The question is less about a specific asset level and more about whether the family has the infrastructure to make coordinated decisions.",
        ],
      },
      {
        heading: "Coordination Can Become the Work",
        body: [
          "As adviser relationships grow, the family may need someone to connect the work of investment managers, CPAs, estate counsel, trustees, insurance advisers, bankers, and philanthropic consultants.",
          "A multi-family office can help organize that network, clarify roles, and keep recurring work moving across reporting, allocation, planning, and communication.",
        ],
      },
      {
        heading: "What to Evaluate",
        body: [
          "Families evaluating a multi-family office may want to understand ownership structure, fee transparency, adviser coordination, reporting capabilities, investment process, regulatory status, and experience with families in similar transition points.",
          "The right structure should support the family's existing strengths while adding discipline where complexity has outgrown informal processes.",
        ],
      },
    ],
  },
  {
    slug: "family-governance-long-term-stewardship",
    title: "Family Governance for Long-Term Stewardship",
    eyebrow: "Governance",
    description:
      "How families can create clearer decision-making practices around wealth, enterprise, philanthropy, and future generations.",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    author: justin,
    reviewer: patrick,
    sections: [
      {
        heading: "Governance Starts With Clarity",
        body: [
          "Family governance is the process of making expectations, roles, and decision rights more explicit. It can cover investment committees, family meetings, philanthropy, business succession, education, and communication with rising-generation family members.",
          "The goal is not bureaucracy. The goal is a practical structure that helps the family make important decisions with less ambiguity.",
        ],
      },
      {
        heading: "Education Supports Participation",
        body: [
          "Rising-generation education can help family members understand the balance sheet, investment philosophy, philanthropic priorities, and responsibilities that may come with stewardship.",
          "Families can start with shared vocabulary, regular conversations, and age-appropriate participation before moving into more formal board or committee structures.",
        ],
      },
      {
        heading: "Write Down the Operating Rhythm",
        body: [
          "A governance rhythm may include an annual family meeting, quarterly investment updates, documented committee roles, grantmaking calendars, and clear paths for escalating major decisions.",
          "Written practices help preserve continuity as the family, adviser team, and asset base change over time.",
        ],
      },
    ],
  },
];

export function getResourceGuide(slug) {
  return resourceGuides.find((guide) => guide.slug === slug);
}
