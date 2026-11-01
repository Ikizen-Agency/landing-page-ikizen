import { whatsappUrl } from "./contact";
import type { Dictionary } from "./types";

const home = "/";

export const es: Dictionary = {
  locale: "es",
  meta: {
    title: "Ikizen Studio | Desarrollo Web & Identidad de Marca",
    description: "Ikizen Studio diseña y desarrolla webs y marcas con propósito, y las pule paso a paso.",
    keywords: ["desarrollo web", "identidad de marca", "estudio digital", "diseño web", "branding", "Next.js", "React"],
    ogTitle: "Ikizen Studio | Razón de ser. Mejora continua.",
    ogDescription: "Webs y marcas con propósito, mejoradas paso a paso.",
    ogImageAlt: "Ikizen Studio: desarrollo web e identidad de marca",
    ogTagline: "Webs y marcas con propósito, mejoradas paso a paso.",
  },
  nav: {
    homeHref: home,
    primaryLabel: "Navegación principal",
    links: [
      { label: "Inicio", href: home },
      { label: "Servicios", href: "/#services" },
      { label: "Proceso", href: "/#process" },
    ],
    cta: { label: "Agenda 20 min", href: "/#agenda" },
    switcher: { label: "EN", ariaLabel: "View the site in English", href: "/en", lang: "en" },
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },
  hero: {
    titleLines: ["Razón de ser.", "Mejora continua."],
    support: "Ikizen Studio diseña y desarrolla webs y marcas con propósito, y las pule paso a paso.",
    primaryCta: { label: "Agenda 20 min", href: "#agenda" },
    whatsappCta: "o escríbenos por WhatsApp",
    captions: {
      ikigai: "ikigai — razón de ser",
      kaizen: "kaizen — mejora continua",
    },
  },
  services: {
    eyebrow: "Qué hacemos",
    title: "Dos oficios, un mismo cuidado.",
    blocks: [
      {
        title: "Desarrollo web",
        summary: "Sitios y aplicaciones modernas y responsivas, con código limpio y atención al rendimiento y al SEO.",
        offerings: ["Sitios corporativos", "Aplicaciones web", "Tiendas online", "Rediseño de sitios"],
        linkLabel: "Ver desarrollo web",
        href: "/services/web",
      },
      {
        title: "Identidad de marca",
        summary: "Logotipos, paletas, tipografía y guías de estilo para que tu marca sea coherente en todos los canales.",
        offerings: ["Logotipos estratégicos", "Sistemas de identidad", "Naming", "Manuales de marca"],
        linkLabel: "Ver identidad de marca",
        href: "/services/branding",
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Cinco pasos, y el último no se acaba.",
    steps: [
      {
        title: "Descubrimiento",
        description: "Entendemos tu negocio, tus objetivos, tu audiencia y tu competencia.",
      },
      {
        title: "Diseño y planificación",
        description: "Definimos arquitectura, direcciones visuales y cronograma.",
      },
      {
        title: "Construcción",
        description: "Desarrollamos el sitio con código limpio, o la identidad con sus aplicaciones en contextos reales.",
      },
      {
        title: "Ajustes y entrega",
        description: "Revisamos cada detalle contigo, probamos todo y lanzamos o entregamos los archivos con su guía de uso.",
      },
      {
        title: "Mejora continua",
        description: "Tras el lanzamiento te acompañamos con actualizaciones y mejoras. Ese es nuestro kaizen.",
      },
    ],
  },
  closing: {
    eyebrow: "Agenda",
    title: "Empecemos por tu razón de ser.",
    support: "Veinte minutos para conocer tu proyecto y ver por dónde empezar.",
    whatsappAlternative: "¿Prefieres escribir? Hablemos por WhatsApp",
  },
  booking: {
    loading: "Cargando calendario…",
    openCalendar: "Abrir el calendario",
    fallbackTitle: "Escríbenos y agendamos los 20 minutos por WhatsApp.",
    fallbackCta: "Agendar por WhatsApp",
  },
  footer: {
    tagline: "Razón de ser. Mejora continua.",
    navTitle: "Navegación",
    servicesTitle: "Servicios",
    legalTitle: "Legal",
    contactTitle: "Contacto",
    services: [
      { label: "Desarrollo web", href: "/services/web" },
      { label: "Identidad de marca", href: "/services/branding" },
    ],
    legal: [
      { label: "Política de privacidad", href: "/privacy-policies" },
      { label: "Términos de uso", href: "/terms" },
    ],
    whatsappLabel: "WhatsApp",
    facebookLabel: "Ikizen Studio en Facebook",
    linkedinLabel: "Ikizen Studio en LinkedIn",
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "Esta página no existe.",
    support: "Puede que el enlace haya cambiado. La portada sigue en su sitio.",
    homeCta: "Volver al inicio",
  },
  whatsappUrl: whatsappUrl("Hola, me interesan sus servicios"),
};
