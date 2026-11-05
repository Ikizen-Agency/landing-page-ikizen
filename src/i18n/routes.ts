import type { Locale } from "./types";

export const SITE_URL = "https://ikizen.vercel.app";

/** Every page exists in both languages; this map is the single source for those pairs. */
export const routes = {
  home: { es: "/", en: "/en" },
  terms: { es: "/terms", en: "/en/terms" },
  privacy: { es: "/privacy-policies", en: "/en/privacy-policies" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Offer pages come from `offers.ts`, so their pairs are built from the slug instead of listed above. */
export function offerPaths(slug: string): Record<Locale, string> {
  return { es: `/offers/${slug}`, en: `/en/offers/${slug}` };
}
