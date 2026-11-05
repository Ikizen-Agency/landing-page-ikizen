import { offerPaths } from "./routes";
import type { Locale, NavLink, OfferCard, OfferCopy, OfferDetail, OfferPricing } from "./types";

type Offer = {
  /** The page lives at `/offers/<slug>` and `/en/offers/<slug>`. */
  slug: string;
  name: string;
  /** Stable English name for the Service structured data. */
  serviceType: string;
  price: OfferPricing;
  /** Hourly support rate once the included support ends, priced by region like `price`. */
  supportRate: OfferPricing;
  copy: Record<Locale, OfferCopy>;
};

/**
 * Single source for the offers. One entry here is its home card, its page, its footer link
 * and its sitemap entry; nothing else needs editing.
 */
const OFFERS: Offer[] = [
  {
    slug: "ikizen-flow",
    name: "Ikizen Flow",
    serviceType: "Custom business software",
    price: { amount: 1500, currency: "USD", regions: { CU: { amount: 700, currency: "USD" } } },
    supportRate: { amount: 25, currency: "USD", regions: { CU: { amount: 1, currency: "USD" } } },
    copy: {
      es: {
        meta: {
          title: "Ikizen Flow: software a la medida de tu negocio",
          description:
            "Ikizen Flow transforma procesos manuales y herramientas desconectadas en soluciones digitales diseñadas alrededor de la forma en que funciona tu negocio.",
          keywords: ["software a la medida", "digitalizar procesos", "automatizar procesos", "software para negocios"],
        },
        clientType: "Negocios con procesos manuales",
        tagline: "Tu negocio. Tu forma de trabajar.",
        hero: {
          title: ["Tu negocio tiene su propia forma de trabajar.", "Tu software también debería tenerla."],
          lead: "Transformamos procesos manuales y herramientas desconectadas en soluciones digitales diseñadas alrededor de la forma en que funciona tu negocio.",
          label: "Software diseñado al ritmo de tu negocio",
        },
        summary: [
          "Reunión de diagnóstico sin costo (20–30 min)",
          "Diseño preliminar para explorar antes de desarrollar",
          "Desarrollo a la medida, probado y validado contigo",
          "Implementación y puesta en marcha",
          "Entrega en 4 a 8 semanas, según la complejidad",
          "El resultado es tuyo, con su código fuente",
          "3 meses de acompañamiento tras la entrega",
          "Pago 30% al iniciar y 70% al entregar",
        ],
        cta: { label: "Diagnóstico gratis", fallbackLabel: "Diagnóstico por WhatsApp" },
        benefits: {
          eyebrow: "Beneficios",
          title: "¿Qué puede cambiar en tu negocio?",
          items: [
            { title: "Más control", text: "Reúne la información importante de tu negocio en un solo lugar." },
            { title: "Menos trabajo manual", text: "Simplifica tareas repetitivas y procesos que consumen tiempo." },
            { title: "Mejor seguimiento", text: "Organiza clientes, ventas, operaciones y actividades." },
            { title: "Información más clara", text: "Facilita la consulta y el seguimiento de lo que ocurre." },
            { title: "Una solución que evoluciona", text: "Construye una herramienta que pueda crecer junto a tus necesidades." },
          ],
        },
        includes: {
          eyebrow: "Qué incluye",
          title: "¿Qué incluye el servicio?",
          items: [
            {
              title: "Diagnóstico de tu proceso",
              text: "Analizamos cómo funciona actualmente tu negocio, qué dificultades enfrentas y dónde existen oportunidades de mejora.",
            },
            {
              title: "Diseño de la solución",
              text: "Definimos cómo debería funcionar la herramienta y preparamos una propuesta visual para explorarla antes del desarrollo.",
            },
            {
              title: "Desarrollo personalizado",
              text: "Construimos la solución acordada, enfocándonos en resolver las necesidades identificadas.",
            },
            {
              title: "Pruebas y validación",
              text: "Revisamos el funcionamiento y comprobamos junto a ti que cumpla con los criterios acordados.",
            },
            {
              title: "Implementación y entrega",
              text: "Ponemos la solución en funcionamiento y te acompañamos en su puesta en marcha, con orientación básica para utilizarla.",
            },
          ],
        },
        process: {
          eyebrow: "Proceso",
          title: "Un proceso claro, de principio a fin",
          steps: [
            { phase: "Discover", title: "Entendemos", text: "Conocemos tu negocio y el problema que quieres resolver." },
            { phase: "Design", title: "Diseñamos", text: "Visualizamos una solución alineada con tus necesidades." },
            { phase: "Build", title: "Construimos", text: "Desarrollamos y validamos la herramienta." },
            { phase: "Launch", title: "Implementamos", text: "Entregamos la solución y te acompañamos en su inicio." },
          ],
        },
        investment: {
          eyebrow: "Inversión",
          title: "Inversión y acompañamiento",
          priceLabel: "Proyectos desde",
          priceNote:
            "El precio final se determina después de conocer tu negocio y definir la solución, el alcance y los resultados esperados.",
          paymentTitle: "Forma de pago",
          payment: [
            { share: "30%", text: "Al iniciar el proyecto." },
            { share: "70%", text: "Al entregar la solución y validar el cumplimiento de los criterios acordados." },
          ],
          scopeNote: "El alcance, calendario, precio y criterios de aceptación quedan definidos antes de comenzar.",
          terms: {
            title: "Condiciones",
            items: [
              { label: "Plazo", text: "De 4 a 8 semanas, según la complejidad de la solución." },
              { label: "Idioma", text: "Trabajamos contigo en español o en inglés." },
              { label: "Propiedad", text: "El resultado final es tuyo, incluido el código fuente." },
              { label: "Alojamiento y dominio", text: "No están incluidos en el precio." },
            ],
          },
          support: {
            title: "Acompañamiento incluido",
            intro: "Durante los primeros 3 meses después de la entrega, cuentas con:",
            items: ["Respuesta a tus dudas sobre el proyecto.", "Corrección de errores dentro del alcance acordado."],
            note: "Las nuevas funcionalidades, los cambios grandes y los cambios de alcance se cotizan por separado.",
            rateLabel: "Después de los 3 meses",
            rateUnit: "/ hora",
            rateNote: "El acompañamiento se factura por hora, con un mínimo de 1 hora.",
          },
        },
        fit: {
          eyebrow: "Para quién es",
          title: "¿Es Ikizen Flow para tu negocio?",
          paragraphs: [
            "Es una buena opción si tu negocio ya tiene una actividad que quieres organizar o mejorar, dependes de hojas de cálculo, mensajes o procesos manuales, y las herramientas actuales no se adaptan del todo a tu forma de trabajar.",
            "Si una herramienta existente puede resolver tu problema de manera más sencilla y económica, también podemos ayudarte a identificarla. Nuestro objetivo es encontrar la solución adecuada, no desarrollar software por desarrollarlo.",
          ],
        },
        closing: {
          eyebrow: "Diagnóstico inicial sin costo",
          title: "Cuéntanos qué proceso te gustaría mejorar.",
          text: "En una reunión de 20–30 minutos exploraremos cómo funciona actualmente, qué dificultades presenta y qué posibilidades existen para digitalizarlo.",
          signoff: "Ikizen Flow — From manual work to meaningful tools.",
          note: "¿Quieres conocer nuestro trabajo? Nuestras demos son públicas:",
          noteLinkLabel: "míralas en Proyectos",
        },
      },
      en: {
        meta: {
          title: "Ikizen Flow: software built around your business",
          description:
            "Ikizen Flow turns manual processes and disconnected tools into digital solutions designed around the way your business works.",
          keywords: ["custom software", "process digitization", "process automation", "business software"],
        },
        clientType: "Businesses running on manual processes",
        tagline: "Your business. Your way of working.",
        hero: {
          title: ["Your business has its own way of working.", "Your software should too."],
          lead: "We turn manual processes and disconnected tools into digital solutions designed around the way your business works.",
          label: "Software designed around the pace of your business",
        },
        summary: [
          "Free diagnosis meeting (20–30 min)",
          "Preliminary design to explore before building",
          "Custom development, tested and validated with you",
          "Rollout and launch",
          "Delivery in 4 to 8 weeks, depending on complexity",
          "The result is yours, source code included",
          "3 months of support after delivery",
          "Pay 30% to start and 70% on delivery",
        ],
        cta: { label: "Free diagnosis", fallbackLabel: "Diagnosis on WhatsApp" },
        benefits: {
          eyebrow: "Benefits",
          title: "What can change in your business?",
          items: [
            { title: "More control", text: "Bring your business's key information together in one place." },
            { title: "Less manual work", text: "Simplify repetitive tasks and time-consuming processes." },
            { title: "Better follow-up", text: "Keep clients, sales, operations and activities organized." },
            { title: "Clearer information", text: "Make it easier to look up and follow what is happening." },
            { title: "A solution that evolves", text: "Build a tool that can grow along with your needs." },
          ],
        },
        includes: {
          eyebrow: "What is included",
          title: "What does the service include?",
          items: [
            {
              title: "Diagnosis of your process",
              text: "We analyze how your business works today, the difficulties you face and where there is room to improve.",
            },
            {
              title: "Solution design",
              text: "We define how the tool should work and prepare a visual proposal so you can explore it before development.",
            },
            {
              title: "Custom development",
              text: "We build the agreed solution, focused on meeting the needs we identified.",
            },
            {
              title: "Testing and validation",
              text: "We review how it works and confirm with you that it meets the agreed criteria.",
            },
            {
              title: "Rollout and handover",
              text: "We put the solution into operation and support you through its launch, with basic guidance on how to use it.",
            },
          ],
        },
        process: {
          eyebrow: "Process",
          title: "A clear process, from start to finish",
          steps: [
            { phase: "Discover", title: "We understand", text: "We get to know your business and the problem you want to solve." },
            { phase: "Design", title: "We design", text: "We map out a solution aligned with your needs." },
            { phase: "Build", title: "We build", text: "We develop and validate the tool." },
            { phase: "Launch", title: "We launch", text: "We deliver the solution and support you as you get started." },
          ],
        },
        investment: {
          eyebrow: "Investment",
          title: "Investment and support",
          priceLabel: "Projects from",
          priceNote:
            "The final price is set once we know your business and have defined the solution, its scope and the expected results.",
          paymentTitle: "Payment terms",
          payment: [
            { share: "30%", text: "When the project starts." },
            { share: "70%", text: "On delivery, once the solution is confirmed to meet the agreed criteria." },
          ],
          scopeNote: "Scope, schedule, price and acceptance criteria are all agreed before work begins.",
          terms: {
            title: "Terms",
            items: [
              { label: "Timeline", text: "4 to 8 weeks, depending on the complexity of the solution." },
              { label: "Language", text: "We work with you in Spanish or English." },
              { label: "Ownership", text: "The final result belongs to you, source code included." },
              { label: "Hosting and domain", text: "Not included in the price." },
            ],
          },
          support: {
            title: "Support included",
            intro: "For the first 3 months after delivery, you get:",
            items: ["Answers to your questions about the project.", "Bug fixes within the agreed scope."],
            note: "New features, major changes and scope changes are quoted separately.",
            rateLabel: "After the 3 months",
            rateUnit: "/ hour",
            rateNote: "Support is billed by the hour, with a 1-hour minimum.",
          },
        },
        fit: {
          eyebrow: "Who it is for",
          title: "Is Ikizen Flow right for your business?",
          paragraphs: [
            "It is a good fit if your business already has an activity you want to organize or improve, you rely on spreadsheets, messages or manual processes, and current tools do not quite fit the way you work.",
            "If an existing tool can solve your problem in a simpler, more affordable way, we can help you find it too. Our goal is to find the right solution, not to build software for its own sake.",
          ],
        },
        closing: {
          eyebrow: "Free initial diagnosis",
          title: "Tell us which process you would like to improve.",
          text: "In a 20–30 minute meeting we will look at how it works today, what difficulties it brings and what options exist to digitize it.",
          signoff: "Ikizen Flow — From manual work to meaningful tools.",
          note: "Want to see our work? Our demos are public:",
          noteLinkLabel: "see them in Projects",
        },
      },
    },
  },
];

export function getOfferSlugs(): string[] {
  return OFFERS.map(({ slug }) => slug);
}

export function getOffer(slug: string, locale: Locale): OfferDetail | undefined {
  const offer = OFFERS.find((entry) => entry.slug === slug);
  if (!offer) return undefined;

  const { copy, ...rest } = offer;
  return { ...rest, ...copy[locale], paths: offerPaths(slug) };
}

export function getOfferLinks(locale: Locale): NavLink[] {
  return OFFERS.map(({ slug, name }) => ({ label: name, href: offerPaths(slug)[locale] }));
}

export function getOfferCards(locale: Locale): OfferCard[] {
  return OFFERS.map(({ slug, name, price, copy }) => {
    const { clientType, hero, cta, summary } = copy[locale];
    return { slug, name, clientType, price, cta, summary, title: hero.title, lead: hero.lead, href: offerPaths(slug)[locale] };
  });
}
