import type { Locale, ProjectStop } from "./types";

type Localized = Record<Locale, string>;

type Project = {
  name: string;
  type: Localized;
  purpose: Localized;
  href: string;
  /** A local path. Remote hosts must be allowed in `next.config`. Without one, the typographic panel shows. */
  image?: { src: string; alt: Localized };
};

/**
 * Single source for the projects flow. Copy states what each project is, never results.
 *
 * TODO: both links are temporary repository URLs. Replace them with the live URLs once
 * they are known; the link label follows the URL on its own.
 */
const PROJECTS: Project[] = [
  {
    name: "Ikizen Flow",
    type: { es: "Producto propio", en: "In-house product" },
    purpose: {
      es: "Una plataforma de operaciones para estudios de servicios: clientes, ventas, lo que se debe y quién trabaja en qué, en un solo lugar.",
      en: "An operations platform for service studios: clients, sales, what is owed and who works on what, all in one place.",
    },
    href: "https://github.com/Ikizen-Agency/ikizen-flow",
  },
  {
    name: "Gloria Díaz Portfolio",
    type: { es: "Portafolio personal", en: "Personal portfolio" },
    purpose: {
      es: "Un sitio propio para una periodista: sus artículos y sus servicios reunidos en un solo lugar.",
      en: "A site of her own for a journalist: her articles and services gathered in one place.",
    },
    href: "https://github.com/Ikizen-Agency/gloria-diaz-portfolio",
  },
];

const LINK_LABELS = {
  github: { es: "Ver en GitHub", en: "View on GitHub" },
  live: { es: "Ver proyecto", en: "View project" },
} satisfies Record<string, Localized>;

function linkLabel(href: string, locale: Locale) {
  const host = new URL(href).hostname;
  return LINK_LABELS[host === "github.com" ? "github" : "live"][locale];
}

export function getProjectStops(locale: Locale): ProjectStop[] {
  return PROJECTS.map(({ name, type, purpose, href, image }) => ({
    name,
    type: type[locale],
    purpose: purpose[locale],
    href,
    linkLabel: linkLabel(href, locale),
    image: image && { src: image.src, alt: image.alt[locale] },
  }));
}
