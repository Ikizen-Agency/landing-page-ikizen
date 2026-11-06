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
 * The link label follows `href`: an `.apk` file on any host reads "Download for Android", any other
 * GitHub URL "View on GitHub", anything else "View project".
 */
const PROJECTS: Project[] = [
  {
    name: "Ikizen Flow",
    type: { es: "Producto propio", en: "In-house product" },
    purpose: {
      es: "Una plataforma de operaciones para estudios de servicios: clientes, ventas, lo que se debe y quién trabaja en qué, en un solo lugar.",
      en: "An operations platform for service studios: clients, sales, what is owed and who works on what, all in one place.",
    },
    href: "https://ikizen-flow.vercel.app/login",
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
    name: "Brand Morph",
    type: { es: "Producto propio", en: "In-house product" },
    purpose: {
      es: "Un laboratorio interactivo de diseño: una arquitectura de tokens que cambia un producto entre tres marcas de muestra, en vivo y listas para exportar a código.",
      en: "An interactive design lab: a token architecture that morphs one product across three sample brands, live and ready to export to code.",
    },
    href: "https://brand-morph-chi.vercel.app/components",
    video: {
      src: "/assets/portfolio/brand-morph-showcase-web.mp4",
      poster: "/assets/portfolio/brand-morph-showcase-poster.webp",
      label: {
        es: "Recorrido en video por Brand Morph: un producto que cambia entre tres marcas en vivo.",
        en: "Video tour of Brand Morph: one product that morphs across three brands live.",
      },
    },
  },
  {
    name: "MoneyForge",
    type: { es: "Código abierto", en: "Open source" },
    purpose: {
      es: "Una app de finanzas personales para Android que guarda todo en el teléfono: cuentas, presupuestos, planes y respaldos cifrados, sin cuentas ni rastreo.",
      en: "A personal finance app for Android that keeps everything on the phone: accounts, budgets, plans and encrypted backups, with no sign-up and no tracking.",
    },
    // Always the newest release: GitHub serves `latest/download` for a stable asset name.
    href: "https://github.com/JohnyYen/moneyforge/releases/latest/download/moneyforge-full.apk",
  },
];

const LINK_LABELS = {
  download: { es: "Descargar para Android", en: "Download for Android" },
  github: { es: "Ver en GitHub", en: "View on GitHub" },
  live: { es: "Ver proyecto", en: "View project" },
} satisfies Record<string, Localized>;

/** Decided by what the link delivers, so a release page or a non-Android asset never reads as an APK. */
export function linkLabel(href: string, locale: Locale) {
  const { hostname, pathname } = new URL(href);
  if (pathname.toLowerCase().endsWith(".apk")) return LINK_LABELS.download[locale];
  return LINK_LABELS[hostname === "github.com" ? "github" : "live"][locale];
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
