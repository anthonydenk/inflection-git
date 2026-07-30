export const preIpoPromoPages = [
  {
    id: "spacex",
    label: "SpaceX",
    title: "SpaceX Equity Snapshot",
    route: "/spacex",
    status: "Live draft",
    description:
      "A guided planning snapshot for concentrated SpaceX equity before a liquidity event.",
  },
  {
    id: "anthropic",
    label: "Anthropic",
    title: "Anthropic Equity Planning",
    route: "/pre-ipo#anthropic",
    status: "Next",
    description:
      "Planning framework for Anthropic employees and investors preparing for private-company liquidity.",
  },
  {
    id: "openai",
    label: "OpenAI",
    title: "OpenAI Equity Planning",
    route: "/pre-ipo#openai",
    status: "Next",
    description:
      "Pre-liquidity planning for OpenAI equity holders evaluating tax, concentration, and family goals.",
  },
  {
    id: "general",
    label: "Pre-IPO planning",
    title: "Pre-IPO Planning",
    route: "/pre-ipo#general",
    status: "Core",
    description:
      "A general planning path for concentrated private-company equity outside named company pages.",
  },
];

export const preIpoNavigationItems = [
  {
    label: "Overview",
    route: "/pre-ipo",
    description: "Pre-IPO planning paths",
  },
  ...preIpoPromoPages.map((page) => ({
    label: page.label,
    route: page.route,
    description: page.title,
  })),
];
