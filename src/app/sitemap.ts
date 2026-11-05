import type { MetadataRoute } from "next";
import { routes, SITE_URL, type Locale } from "@/i18n";
import { getOfferSlugs } from "@/i18n/offers";
import { offerPaths } from "@/i18n/routes";

const LAST_MODIFIED = "2026-11-01";
const LOCALES: Locale[] = ["es", "en"];

type Page = { paths: Record<Locale, string>; changeFrequency: "monthly" | "yearly"; priority: number };

/** Offer pages follow `offers.ts`, so a new offer is listed without touching this file. */
const pages: Page[] = [
  { paths: routes.home, changeFrequency: "monthly", priority: 1 },
  ...getOfferSlugs().map((slug): Page => ({ paths: offerPaths(slug), changeFrequency: "monthly", priority: 0.8 })),
  { paths: routes.terms, changeFrequency: "yearly", priority: 0.3 },
  { paths: routes.privacy, changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ paths, changeFrequency, priority }) =>
    LOCALES.map((locale) => {
      const path = paths[locale];
      return {
        url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency,
        priority,
      };
    }),
  );
}
