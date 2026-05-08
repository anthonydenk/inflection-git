import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/services", "/team", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://inflectioncm.com${route}`,
    lastModified: new Date("2026-05-08"),
  }));
}
