export const stateOptions = [
  { code: "CA", name: "California", rate: 0.133 },
  { code: "NY", name: "New York", rate: 0.109 },
  { code: "NJ", name: "New Jersey", rate: 0.1075 },
  { code: "MA", name: "Massachusetts", rate: 0.09 },
  { code: "WA", name: "Washington", rate: 0.07 },
  { code: "OR", name: "Oregon", rate: 0.099 },
  { code: "CO", name: "Colorado", rate: 0.044 },
  { code: "TX", name: "Texas", rate: 0 },
  { code: "FL", name: "Florida", rate: 0 },
  { code: "NV", name: "Nevada", rate: 0 },
  { code: "TN", name: "Tennessee", rate: 0 },
  { code: "OTHER", name: "Other state", rate: 0.055 },
];

const spacexDisclosure = [
  {
    heading: "Engagement",
    body:
      "By clicking below, you acknowledge that you requested Inflection Capital Management, LLC to provide consulting services in the form of a SpaceX Equity Snapshot. You will not be charged for this snapshot. The following provisions form the basis of this limited engagement.",
  },
  {
    heading: "Scope",
    body:
      "The firm is retained only to provide a SpaceX Equity Snapshot using information you provide, including equity position details and supporting information you choose to share. The snapshot is informational and illustrative only.",
  },
  {
    heading: "No legal, tax, or accounting advice",
    body:
      "Inflection is neither an accounting firm nor a law firm. Services provided through this engagement should not be construed as legal, accounting, tax, investment, or securities advice, or as a recommendation of any particular security or investment strategy.",
  },
  {
    heading: "No advisory agreement required",
    body:
      "Prospects who request a SpaceX Equity Snapshot are under no obligation to enter into a formal agreement with Inflection for investment advisory services. Any future advisory relationship and related fees would be governed by a separate written agreement.",
  },
  {
    heading: "Information sources",
    body:
      "The information in the snapshot is derived from proprietary and non-proprietary sources deemed reliable, including information you provide. Inflection does not guarantee the accuracy or completeness of third-party or user-provided information.",
  },
  {
    heading: "Forward-looking statements",
    body:
      "Some statements may contain or be based on forecasts, estimates, projections, targets, or other forward-looking statements. Actual results may differ substantially from assumptions. Past results are no guarantee of future results.",
  },
  {
    heading: "Third-party company",
    body:
      "SpaceX is referenced only to identify the concentrated private-company equity position being modeled. Inflection is not affiliated with, endorsed by, or sponsored by SpaceX.",
  },
  {
    heading: "Documents",
    body:
      "By clicking below, you acknowledge receipt of Inflection's Privacy Notice, Form ADV Part 2A brochure, and Form CRS. Final public-launch copy for this acknowledgement must be approved by compliance before the page is indexed or promoted.",
  },
];

export const spacexToolConfig = {
  slug: "spacex",
  companyName: "SpaceX",
  name: "SpaceX Equity Snapshot",
  eyebrow: "Pre-IPO planning",
  audience: "For SpaceX employees and private-market investors",
  route: "/spacex",
  title: "SpaceX Equity Snapshot",
  description:
    "A planning snapshot for SpaceX employees and investors evaluating concentrated private-company equity before a liquidity event.",
  hero:
    "Your SpaceX position has grown into something consequential. The decisions you make before a liquidity event shape taxes, liquidity, concentration risk, and long-term family wealth.",
  proof:
    "Four inputs create a practical first view: who you are, how you hold shares, what the position is worth, and what you want the equity to make possible.",
  heroImage: {
    src: "/images/preipo/spacex-rocket-1280.webp",
    srcSet:
      "/images/preipo/spacex-rocket-640.webp 640w, /images/preipo/spacex-rocket-960.webp 960w, /images/preipo/spacex-rocket-1280.webp 1280w, /images/preipo/spacex-rocket-1920.webp 1920w",
    sizes: "(max-width: 980px) calc(100vw - 28px), 596px",
    width: 1280,
    height: 853,
    alt: "Rocket launch against a dark sky",
  },
  assumptions: {
    federalLongTermRate: 0.238,
    ordinaryIncomeRate: 0.37,
    annualGrowthRate: 0.072,
    directIndexLossRate: 0.47,
    directIndexAllocationRate: 0.25,
    dafDefaultRate: 10,
  },
  holderTypes: [
    {
      id: "employee",
      title: "SpaceX employee",
      label: "RSUs, options, or grants",
      note:
        "Planning may be shaped by vesting schedules, company policies, and liquidity windows.",
    },
    {
      id: "secondary",
      title: "Private-market investor",
      label: "Secondary, SPV, or fund exposure",
      note:
        "Planning may center on basis, holding period, entity structure, and tender access.",
    },
    {
      id: "both",
      title: "Employee and investor",
      label: "Multiple sources of exposure",
      note:
        "Each holding type may need separate sequencing, tax, and liquidity review.",
    },
  ],
  grantTypes: ["RSU", "Option", "Secondary", "SPV", "Fund interest", "Other"],
  goals: [
    {
      id: "tax",
      title: "Reduce tax drag",
      body: "Understand how timing, basis, and structure may affect the eventual tax bill.",
    },
    {
      id: "diversify",
      title: "Diversify gradually",
      body: "Create a plan for moving from one concentrated position into a durable portfolio.",
    },
    {
      id: "liquidity",
      title: "Create liquidity",
      body: "Plan near-term cash needs without forcing a single large taxable sale.",
    },
    {
      id: "estate",
      title: "Transfer appreciation",
      body: "Review trust and estate planning before valuation and liquidity dynamics change.",
    },
    {
      id: "charity",
      title: "Give efficiently",
      body: "Compare donating appreciated shares with selling first and giving cash later.",
    },
    {
      id: "home",
      strategyId: "liquidity",
      title: "Fund a major purchase",
      body: "Coordinate tender windows, borrowing, and tax planning around a large purchase.",
    },
  ],
  strategies: [
    {
      id: "tax",
      title: "Pair liquidity with tax-loss capacity",
      tag: "Tax planning",
      body:
        "A direct-index tax-loss strategy may help offset capital gains created by planned SpaceX liquidity. The result depends on account size, financing costs, market conditions, and individual tax facts.",
    },
    {
      id: "charity",
      title: "Consider appreciated-share charitable giving",
      tag: "Philanthropy",
      body:
        "Donating appreciated private-company shares before a liquidity event may reduce capital gains exposure and create a fair-market-value deduction, subject to custodian review, AGI limits, and tax-adviser approval.",
    },
    {
      id: "estate",
      title: "Review transfer structures while private",
      tag: "Estate planning",
      body:
        "Trust structures such as GRATs or IDGTs can be more powerful before a public-market valuation reset. Legal counsel should evaluate fit, timing, and family goals.",
    },
    {
      id: "diversify",
      title: "Stage diversification across windows",
      tag: "Concentration risk",
      body:
        "A planned sequence across tender windows can reduce single-company risk while avoiding a rushed sale decision after a major event.",
    },
    {
      id: "liquidity",
      title: "Separate cash needs from sale decisions",
      tag: "Liquidity",
      body:
        "Borrowing, tender timing, and staged sales can be compared before a home purchase, business investment, or other near-term need forces a taxable decision.",
    },
    {
      id: "protection",
      title: "Map post-lockup protection options",
      tag: "Risk management",
      body:
        "Collars, prepaid variable forwards, and other hedging structures may be relevant after lockup or company restrictions, depending on holding type and eligibility.",
    },
  ],
  disclosure: spacexDisclosure,
  contactEmail: "team@inflectioncm.com",
};

export const preIpoToolConfigs = {
  spacex: spacexToolConfig,
};
