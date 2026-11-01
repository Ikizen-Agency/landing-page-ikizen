import type { MetadataRoute } from "next";
import { routes, SITE_URL, type Locale, type RouteKey } from "@/i18n";

const LAST_MODIFIED = "2026-11-01";
const LOCALES: Locale[] = ["es", "en"];

const pages: { route: RouteKey; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { route: "home", changeFrequency: "monthly", priority: 1 },
  { route: "web", changeFrequency: "monthly", priority: 0.8 },
  { route: "branding", changeFrequency: "monthly", priority: 0.8 },
  { route: "terms", changeFrequency: "yearly", priority: 0.3 },
  { route: "privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ route, changeFrequency, priority }) =>
    LOCALES.map((locale) => {
      const path = routes[route][locale];
      return {
        url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency,
        priority,
      };
    }),
  );
}
