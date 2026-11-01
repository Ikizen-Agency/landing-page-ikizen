import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { routes, SITE_URL, type RouteKey } from "./routes";
export type { Dictionary, Locale } from "./types";
