import type { Locale, ProjectStop } from "./types";

type Localized = Record<Locale, string>;

type Project = {
  name: string;
  type: Localized;
  purpose: Localized;
  href: string;
  /** Takes priority over `image`. Local paths, with `label` as the video's accessible name. */
  video?: { src: string; poster: string; label: Localized };
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
    video: {
      src: "/assets/portfolio/ikizen-flow-showcase-web.mp4",
      poster: "/assets/portfolio/ikizen-flow-showcase-poster.webp",
      label: {
        es: "Recorrido en video por Ikizen Flow: panel, tareas, facturas y búsqueda.",
        en: "Video tour of Ikizen Flow: dashboard, tasks, invoices and search.",
      },
    },
  },
  {
    name: "Gloria Díaz Portfolio",
    type: { es: "Portafolio personal", en: "Personal portfolio" },
    purpose: {
      es: "Un sitio propio para una periodista: sus artículos y sus servicios reunidos en un solo lugar.",
      en: "A personal site for a journalist: articles and services gathered in one place.",
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
  return PROJECTS.map(({ name, type, purpose, href, video, image }) => ({
    name,
    type: type[locale],
    purpose: purpose[locale],
    href,
    linkLabel: linkLabel(href, locale),
    video: video && { src: video.src, poster: video.poster, label: video.label[locale] },
    image: image && { src: image.src, alt: image.alt[locale] },
  }));
}
