import type { MetadataRoute } from "next";
import { teamMembers } from "../src/data/team";
import { siteUrl } from "../src/data/site";

export const dynamic = "force-static";

// Canonical, 200-status routes only, ordered roughly by importance. Priorities
// mirror the site's own hierarchy: the homepage, then the hubs a prospective
// client lands on, then leaves and compliance documents.
const routes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1.0 },

  { path: "/who-we-serve", priority: 0.9 },
  { path: "/who-we-serve/wealth-creators", priority: 0.9 },
  { path: "/who-we-serve/next-generation-families", priority: 0.9 },
  { path: "/who-we-serve/single-family-offices", priority: 0.9 },
  { path: "/services", priority: 0.9 },

  { path: "/team", priority: 0.8 },
  ...teamMembers.map((member) => ({ path: `/team/${member.slug}`, priority: 0.8 })),
  { path: "/about", priority: 0.8 },
  { path: "/about/news", priority: 0.6 },
  { path: "/contact", priority: 0.8 },

  // Deliberately absent: /about/insights, /pre-ipo, /spacex, /resources and its
  // guides all set robots noindex. Listing a noindex URL here earns a
  // "Submitted URL marked noindex" error in Search Console, so the sitemap and
  // the meta must agree.
  { path: "/privacy-policy", priority: 0.4 },
  { path: "/documents/adv-part-2a", priority: 0.4 },
  { path: "/documents/adv-part-2b", priority: 0.4 },
  { path: "/documents/form-crs", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-03");
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    priority,
  }));
}
