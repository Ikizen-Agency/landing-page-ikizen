import { whatsappUrl } from "./contact";
import { getOfferCards, getOfferLinks } from "./offers";
import { getProjectStops } from "./projects";
import { routes } from "./routes";
import type { Dictionary } from "./types";

const home = routes.home.es;

export const es: Dictionary = {
  locale: "es",
  meta: {
    title: "Diseño y desarrollo web e identidad de marca | Ikizen Studio",
    description:
      "Ikizen Studio: estudio de diseño y desarrollo web e identidad de marca para negocios de todo el mundo. Webs y marcas con propósito, mejoradas paso a paso.",
    keywords: ["diseño web", "desarrollo web", "identidad de marca", "estudio de diseño web", "branding"],
    ogTitle: "Ikizen Studio: diseño y desarrollo web e identidad de marca",
    ogDescription: "Webs y marcas con propósito para negocios de todo el mundo, mejoradas paso a paso.",
    ogImageAlt: "Ikizen Studio: diseño y desarrollo web e identidad de marca",
    ogTagline: "Diseño y desarrollo web e identidad de marca, mejorados paso a paso.",
  },
  nav: {
    homeHref: home,
    primaryLabel: "Navegación principal",
    skipToContent: "Saltar al contenido",
    links: [
      { label: "Inicio", href: home },
      { label: "Ofertas", href: "/#offers" },
      { label: "Proyectos", href: "/#projects" },
      { label: "Proceso", href: "/#process" },
    ],
    switcher: { label: "EN", ariaLabel: "EN: view this page in English", lang: "en" },
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },
  hero: {
    titleLines: ["Razón de ser.", "Mejora continua."],
    descriptor: "Estudio de diseño y desarrollo web e identidad de marca para negocios de todo el mundo.",
    whatsappCta: "o escríbenos por WhatsApp",
    captions: {
      ikigai: "ikigai — razón de ser",
      kaizen: "kaizen — mejora continua",
    },
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Nuestros proyectos, cada uno con su razón de ser.",
    ribbonLabel: "Proyectos, recorrido horizontal",
    previousLabel: "Proyecto anterior",
    nextLabel: "Proyecto siguiente",
    stops: getProjectStops("es"),
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Nuestro proceso: cinco pasos, y el último no se acaba.",
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
    eyebrow: "Diagnóstico sin costo",
    title: "Empecemos por tu razón de ser.",
    support: "Treinta minutos para entender cómo trabaja tu negocio, elegir la oferta que encaja y ver por dónde empezar.",
    whatsappAlternative: "¿Prefieres escribir? Hablemos por WhatsApp",
  },
  booking: {
    cta: "Agenda 30 min",
    fallbackCta: "Agendar por WhatsApp",
    opensInNewTab: "se abre en una pestaña nueva",
  },
  footer: {
    tagline: "Razón de ser. Mejora continua.",
    navTitle: "Navegación",
    offersTitle: "Ofertas",
    legalTitle: "Legal",
    contactTitle: "Contacto",
    offers: getOfferLinks("es"),
    legal: [
      { label: "Política de privacidad", href: routes.privacy.es },
      { label: "Términos de uso", href: routes.terms.es },
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
  legal: {
    eyebrow: "Legal",
    lastUpdatedLabel: "Última actualización",
    lastUpdatedDate: "1 de noviembre de 2026",
  },
  offers: {
    eyebrow: "Ofertas",
    title: "Un paquete para cada tipo de negocio.",
    fullOfferLabel: "Ver oferta completa",
    cards: getOfferCards("es"),
    includesLabel: "Incluye",
    fromLabel: "Desde",
  },
  pages: {
    terms: {
      meta: {
        title: "Términos de uso",
        description:
          "Términos y condiciones de uso de los servicios de Ikizen Studio. Conoce nuestras políticas y condiciones de trabajo.",
      },
      title: "Términos de uso",
      intro: "Al usar este sitio web, aceptas cumplir con los siguientes términos y condiciones.",
      sections: [
        {
          heading: "1. Uso del sitio",
          text: "Este sitio es propiedad de Ikizen. Puedes usarlo para obtener información sobre nuestros servicios, contactarnos o solicitar una consulta. No está permitido copiar, modificar o distribuir contenido sin autorización.",
        },
        {
          heading: "2. Consultas y servicios",
          text: "Las consultas iniciales son gratuitas, pero no garantizan la contratación de servicios. Todos los proyectos se formalizan mediante un contrato detallado antes del inicio del trabajo.",
        },
        {
          heading: "3. Propiedad intelectual",
          text: "Todos los diseños, textos, logotipos y marcas mostrados en este sitio son propiedad de Ikizen Studio o de sus clientes. Su uso sin permiso está prohibido.",
        },
        {
          heading: "4. Limitación de responsabilidad",
          text: "No nos hacemos responsables por daños directos o indirectos derivados del uso de este sitio. Los resultados de nuestros servicios pueden variar según el proyecto.",
        },
        {
          heading: "5. Cambios en los términos",
          text: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Te recomendamos revisar esta página periódicamente.",
        },
      ],
    },
    privacy: {
      meta: {
        title: "Política de privacidad",
        description: "Política de privacidad de Ikizen Studio. Conoce cómo protegemos y manejamos tus datos personales.",
      },
      title: "Política de privacidad",
      intro: "En Ikizen, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.",
      sections: [
        {
          heading: "1. Información que recopilamos",
          text: "Cuando llenas un formulario de contacto o solicitas una consulta gratuita, podemos recopilar:",
          items: [
            "Nombre y apellido",
            "Correo electrónico",
            "Teléfono (opcional)",
            "Información sobre tu proyecto o necesidades",
          ],
        },
        {
          heading: "2. ¿Cómo usamos tu información?",
          text: "Usamos tus datos para:",
          items: [
            "Responder a tus consultas y propuestas de servicio",
            "Enviar información sobre nuestros servicios (si lo autorizas)",
            "Mejorar nuestra oferta y experiencia de cliente",
          ],
        },
        {
          heading: "3. Protección de datos",
          text: "Tus datos están almacenados de forma segura y no los compartimos con terceros. Solo los usamos para comunicarnos contigo y ofrecerte nuestros servicios.",
        },
        {
          heading: "4. Derechos del usuario",
          text: "Tienes derecho a acceder, corregir, eliminar o solicitar la portabilidad de tus datos. Para ejercer estos derechos, escríbenos a:",
          contactEmail: true,
        },
        {
          heading: "5. Cambios en esta política",
          text: "Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado aquí.",
        },
      ],
    },
  },
  whatsappUrl: whatsappUrl("Hola, me interesan sus servicios"),
};
