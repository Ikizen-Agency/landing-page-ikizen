import type { Locale } from "./types";

export const SITE_URL = "https://ikizen.vercel.app";

/** Every page exists in both languages; this map is the single source for those pairs. */
export const routes = {
  home: { es: "/", en: "/en" },
  web: { es: "/services/web", en: "/en/services/web" },
  branding: { es: "/services/branding", en: "/en/services/branding" },
  terms: { es: "/terms", en: "/en/terms" },
  privacy: { es: "/privacy-policies", en: "/en/privacy-policies" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;
