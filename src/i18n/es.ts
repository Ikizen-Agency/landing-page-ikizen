import { whatsappUrl } from "./contact";
import { getProjectStops } from "./projects";
import { routes } from "./routes";
import type { Dictionary } from "./types";

const home = routes.home.es;

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
      { label: "Proyectos", href: "/#projects" },
      { label: "Proceso", href: "/#process" },
    ],
    cta: { label: "Agenda 20 min", href: "/#agenda" },
    switcher: { label: "EN", ariaLabel: "View this page in English", lang: "en" },
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
    title: "Cada proyecto, su razón de ser.",
    ribbonLabel: "Proyectos, recorrido horizontal",
    previousLabel: "Proyecto anterior",
    nextLabel: "Proyecto siguiente",
    stops: getProjectStops("es"),
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
      { label: "Desarrollo web", href: routes.web.es },
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
        title: "Desarrollo web",
        description:
          "Sitios corporativos, aplicaciones web, tiendas online y rediseños con código limpio y atención al rendimiento y al SEO.",
        keywords: [
          "desarrollo web",
          "sitios web corporativos",
          "aplicaciones web",
          "tiendas online",
          "rediseño web",
          "Next.js",
          "React",
        ],
      },
      serviceType: "Web Development",
      hero: {
        eyebrow: "Desarrollo web",
        title: "Una web rápida, clara y tuya.",
        support:
          "Diseñamos y programamos sitios, aplicaciones y tiendas con código limpio, atención al rendimiento y al SEO, y margen para crecer contigo.",
      },
      offerings: {
        eyebrow: "Qué hacemos",
        title: "Lo que construimos.",
        items: [
          {
            title: "Sitios corporativos",
            description: "Modernos y responsivos, pensados para generar confianza y traerte contactos.",
          },
          {
            title: "Aplicaciones web",
            description: "Funciones avanzadas con buen rendimiento y una experiencia fácil de usar.",
          },
          {
            title: "Tiendas online",
            description: "Listas para vender, con pasarelas de pago y un recorrido de compra sin tropiezos.",
          },
          {
            title: "Rediseño de sitios",
            description: "Renovamos tu web antigua con tecnología actual, sin perder tu identidad.",
          },
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
        title: "Identidad de marca",
        description:
          "Logotipos, sistemas de identidad, naming y manuales de marca para que tu marca sea coherente en todos los canales.",
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
        eyebrow: "Identidad de marca",
        title: "Tu marca, reconocible en cualquier canal.",
        support:
          "Diseñamos identidades que reflejan quién eres y generan confianza desde el primer contacto: logotipo, paleta, tipografía y guías de estilo.",
      },
      offerings: {
        eyebrow: "Qué hacemos",
        title: "Lo que creamos para tu marca.",
        items: [
          {
            title: "Logotipos estratégicos",
            description: "Diseños únicos que comunican tu personalidad y siguen vigentes con el tiempo.",
          },
          {
            title: "Sistemas de identidad",
            description: "Paletas, tipografías, iconografía y guías de estilo para mantener la coherencia en todos los canales.",
          },
          {
            title: "Naming",
            description: "Nombres que reflejan tu propósito y se recuerdan con facilidad.",
          },
          {
            title: "Manuales de marca",
            description: "Documentación clara para que tu marca se mantenga intacta en manos de terceros.",
          },
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
