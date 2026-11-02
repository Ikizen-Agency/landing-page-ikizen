import { whatsappUrl } from "./contact";
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
      { label: "Servicios", href: "/#services" },
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
  services: {
    eyebrow: "Qué hacemos",
    title: "Diseño web, desarrollo web e identidad de marca, con el mismo cuidado.",
    blocks: [
      {
        title: "Diseño y desarrollo web",
        summary: "Diseñamos y programamos sitios y aplicaciones modernas y responsivas, con código limpio y atención al rendimiento y al SEO.",
        offerings: ["Sitios corporativos", "Aplicaciones web", "Tiendas online", "Rediseño de sitios"],
        linkLabel: "Ver diseño y desarrollo web",
        href: routes.web.es,
      },
      {
        title: "Identidad de marca",
        summary: "Logotipos, paletas, tipografía y guías de estilo para que tu marca sea coherente en todos los canales.",
        offerings: ["Logotipos estratégicos", "Sistemas de identidad", "Naming", "Manuales de marca"],
        linkLabel: "Ver identidad de marca",
        href: routes.branding.es,
      },
    ],
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
    eyebrow: "Agenda una llamada",
    title: "Empecemos por tu razón de ser.",
    support: "Treinta minutos para conocer tu proyecto de web o de marca y ver por dónde empezar.",
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
    servicesTitle: "Servicios",
    legalTitle: "Legal",
    contactTitle: "Contacto",
    services: [
      { label: "Diseño y desarrollo web", href: routes.web.es },
      { label: "Identidad de marca", href: routes.branding.es },
    ],
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
  pages: {
    web: {
      meta: {
        title: "Diseño y desarrollo web para tu negocio",
        description:
          "Diseñamos y desarrollamos sitios corporativos, aplicaciones web y tiendas online con código limpio, atención al SEO y soporte después del lanzamiento.",
        keywords: [
          "diseño web",
          "desarrollo web",
          "sitios web corporativos",
          "aplicaciones web",
          "tiendas online",
          "rediseño web",
          "Next.js",
          "React",
        ],
      },
      serviceType: "Web Design and Development",
      hero: {
        eyebrow: "Para negocios de todo el mundo",
        title: "Diseño y desarrollo web: un sitio rápido, claro y tuyo.",
        support:
          "Diseñamos y programamos sitios, aplicaciones y tiendas con código limpio, atención al rendimiento y al SEO, y margen para crecer contigo.",
      },
      audience: {
        eyebrow: "Para quién es",
        title: "Para negocios con una web por hacer o por renovar.",
        items: [
          "Negocios sin web que quieren una presencia moderna y confiable.",
          "Empresas con una web antigua que necesitan tecnología actual sin perder su identidad.",
          "Negocios que quieren vender online con un recorrido de compra sin tropiezos.",
          "Equipos que necesitan una aplicación web con funciones avanzadas y fácil de usar.",
        ],
      },
      offerings: {
        eyebrow: "Qué hacemos",
        title: "Sitios, aplicaciones, tiendas y rediseños.",
        includesLabel: "Incluye",
        items: [
          {
            title: "Sitios corporativos",
            description: "Modernos y responsivos, pensados para generar confianza y traerte contactos.",
            includes: [
              "Diseño moderno y responsivo",
              "Arquitectura clara de las páginas",
              "Atención al rendimiento y al SEO",
              "Un camino directo para que te contacten",
            ],
          },
          {
            title: "Aplicaciones web",
            description: "Funciones avanzadas con buen rendimiento y una experiencia fácil de usar.",
            includes: [
              "Wireframes y arquitectura antes de programar",
              "Funciones avanzadas con buen rendimiento",
              "Una interfaz fácil de usar",
              "Código limpio con margen para crecer",
            ],
          },
          {
            title: "Tiendas online",
            description: "Listas para vender, con pasarelas de pago y un recorrido de compra sin tropiezos.",
            includes: [
              "Pasarelas de pago",
              "Recorrido de compra sin tropiezos",
              "Diseño responsivo",
              "Atención al rendimiento y al SEO",
            ],
          },
          {
            title: "Rediseño de sitios",
            description: "Renovamos tu web antigua con tecnología actual, sin perder tu identidad.",
            includes: [
              "Tecnología actual en lugar de la web antigua",
              "Tu identidad se conserva",
              "Arquitectura revisada y diseño responsivo",
              "Atención al rendimiento y al SEO",
            ],
          },
        ],
      },
      deliverables: {
        eyebrow: "Qué recibes",
        title: "Tu web publicada, y soporte después del lanzamiento.",
        items: [
          "Wireframes, arquitectura y cronograma antes de programar.",
          "Un diseño moderno y responsivo para tu negocio.",
          "Código limpio y moderno, con atención al rendimiento y al SEO.",
          "Pruebas antes del lanzamiento y seguimiento después.",
          "Soporte, actualizaciones y mejoras con la web ya publicada.",
        ],
      },
      process: {
        eyebrow: "Cómo trabajamos",
        title: "De la primera consulta al soporte.",
        steps: [
          { title: "Consulta inicial", description: "Entendemos tus objetivos, tu audiencia y tus desafíos." },
          { title: "Diseño y planificación", description: "Preparamos wireframes, arquitectura y cronograma." },
          { title: "Desarrollo", description: "Construimos tu sitio con código limpio y moderno." },
          { title: "Pruebas y lanzamiento", description: "Revisamos todo y lanzamos con seguimiento." },
          {
            title: "Soporte y mejoras",
            description: "Después del lanzamiento te acompañamos con actualizaciones y mejoras.",
          },
        ],
      },
    },
    branding: {
      meta: {
        title: "Identidad de marca: logotipo, naming y manual",
        description:
          "Logotipos, sistemas de identidad, naming y manuales para negocios de todo el mundo: una marca coherente en todos los canales, con soporte tras la entrega.",
        keywords: [
          "identidad de marca",
          "diseño de marca",
          "logotipo profesional",
          "identidad visual",
          "naming",
          "manual de marca",
        ],
      },
      serviceType: "Brand Identity Design",
      hero: {
        eyebrow: "Para negocios de todo el mundo",
        title: "Identidad de marca reconocible en cualquier canal.",
        support:
          "Diseñamos identidades que reflejan quién eres y generan confianza desde el primer contacto: logotipo, paleta, tipografía y guías de estilo.",
      },
      audience: {
        eyebrow: "Para quién es",
        title: "Para marcas nuevas y marcas por ordenar.",
        items: [
          "Negocios nuevos que necesitan nombre, logotipo e identidad desde el primer contacto.",
          "Marcas que se ven distintas en cada canal y quieren recuperar la coherencia.",
          "Empresas que trabajan con terceros y necesitan reglas claras para usar su marca.",
        ],
      },
      offerings: {
        eyebrow: "Qué hacemos",
        title: "Logotipo, sistema visual, naming y manual de marca.",
        includesLabel: "Incluye",
        items: [
          {
            title: "Logotipos estratégicos",
            description: "Diseños únicos que comunican tu personalidad y siguen vigentes con el tiempo.",
            includes: [
              "Direcciones de estilo, moodboards y bocetos",
              "Logotipo probado en contextos reales",
              "Ajustes contigo hasta la versión final",
            ],
          },
          {
            title: "Sistemas de identidad",
            description: "Paletas, tipografías, iconografía y guías de estilo para mantener la coherencia en todos los canales.",
            includes: [
              "Paleta de color",
              "Tipografías",
              "Iconografía",
              "Guías de estilo",
            ],
          },
          {
            title: "Naming",
            description: "Nombres que reflejan tu propósito y se recuerdan con facilidad.",
            includes: [
              "Análisis de tu negocio, tus valores, tu audiencia y tu competencia",
              "Propuestas de nombre alineadas con tu propósito",
            ],
          },
          {
            title: "Manuales de marca",
            description: "Documentación clara para que tu marca se mantenga intacta en manos de terceros.",
            includes: [
              "Uso del logotipo, la paleta y la tipografía",
              "Ejemplos de aplicación en contextos reales",
              "Guía completa de uso",
            ],
          },
        ],
      },
      deliverables: {
        eyebrow: "Qué recibes",
        title: "Todos tus archivos, y soporte después de la entrega.",
        items: [
          "Moodboards, bocetos y direcciones de estilo para elegir el camino contigo.",
          "Logotipo, paleta y tipografía aplicados en contextos reales.",
          "Ajustes contigo hasta dar con la versión final.",
          "Todos los archivos y formatos, con una guía completa de uso.",
          "Soporte y mejoras después de la entrega.",
        ],
      },
      process: {
        eyebrow: "Cómo trabajamos",
        title: "Del descubrimiento al soporte.",
        steps: [
          { title: "Descubrimiento", description: "Analizamos tu negocio, tus valores, tu audiencia y tu competencia." },
          { title: "Concepto visual", description: "Exploramos direcciones de estilo, moodboards y bocetos." },
          {
            title: "Diseño",
            description: "Desarrollamos logotipo, paleta, tipografía y aplicaciones en contextos reales.",
          },
          { title: "Iteración y feedback", description: "Ajustamos cada detalle contigo hasta dar con la versión final." },
          {
            title: "Entrega y soporte",
            description:
              "Te entregamos todos los archivos, los formatos y una guía completa de uso. Después seguimos contigo con soporte y mejoras.",
          },
        ],
      },
    },
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
