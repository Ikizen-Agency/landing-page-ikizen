import { whatsappUrl } from "./contact";
import type { Dictionary } from "./types";

const home = "/en";

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Ikizen Studio | Web Development & Brand Identity",
    description: "Ikizen Studio designs and builds websites and brands with a clear purpose, then keeps refining them.",
    keywords: ["web development", "brand identity", "digital studio", "web design", "branding", "Next.js", "React"],
    ogTitle: "Ikizen Studio | Purpose first. Better every pass.",
    ogDescription: "Websites and brands with a clear purpose, refined step by step.",
    ogImageAlt: "Ikizen Studio: web development and brand identity",
    ogTagline: "Websites and brands with a clear purpose, refined step by step.",
  },
  nav: {
    homeHref: home,
    primaryLabel: "Main navigation",
    links: [
      { label: "Home", href: home },
      { label: "Services", href: "/en#services" },
      { label: "Process", href: "/en#process" },
    ],
    cta: { label: "Book 20 min", href: "/en#agenda" },
    switcher: { label: "ES", ariaLabel: "Ver el sitio en español", href: "/", lang: "es" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    titleLines: ["Purpose first.", "Better every pass."],
    support: "Ikizen Studio designs and builds websites and brands with a clear purpose, then keeps refining them.",
    primaryCta: { label: "Book 20 min", href: "#agenda" },
    whatsappCta: "or message us on WhatsApp",
    captions: {
      ikigai: "ikigai — reason for being",
      kaizen: "kaizen — continuous improvement",
    },
  },
  services: {
    eyebrow: "What we do",
    title: "Two crafts, the same care.",
    blocks: [
      {
        title: "Web development",
        summary: "Modern, responsive sites and apps with clean code and close attention to performance and SEO.",
        offerings: ["Company websites", "Web applications", "Online stores", "Website redesigns"],
        linkLabel: "See web development",
        // T4 moves service and legal links to their /en counterparts.
        href: "/services/web",
      },
      {
        title: "Brand identity",
        summary: "Logos, palettes, type and style guides that keep your brand consistent on every channel.",
        offerings: ["Strategic logos", "Identity systems", "Naming", "Brand guidelines"],
        linkLabel: "See brand identity",
        href: "/services/branding",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "Five steps, and the last one never ends.",
    steps: [
      {
        title: "Discovery",
        description: "We get to know your business, goals, audience and competition.",
      },
      {
        title: "Design and planning",
        description: "We settle the architecture, the visual direction and the schedule.",
      },
      {
        title: "Build",
        description: "We write the site in clean code, or develop the identity and try it in real contexts.",
      },
      {
        title: "Refine and deliver",
        description: "We review every detail with you, test everything, then launch or hand over the files with a usage guide.",
      },
      {
        title: "Continuous improvement",
        description: "After launch we stay on with updates and improvements. That is our kaizen.",
      },
    ],
  },
  closing: {
    eyebrow: "Book a call",
    title: "Let's start with your reason for being.",
    support: "Twenty minutes to hear about your project and work out where to begin.",
    whatsappAlternative: "Rather write? Message us on WhatsApp",
  },
  booking: {
    loading: "Loading calendar…",
    openCalendar: "Open the calendar",
    fallbackTitle: "Message us and we will set up the 20 minutes on WhatsApp.",
    fallbackCta: "Book on WhatsApp",
  },
  footer: {
    tagline: "Purpose first. Better every pass.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    legalTitle: "Legal",
    contactTitle: "Contact",
    services: [
      { label: "Web development", href: "/services/web" },
      { label: "Brand identity", href: "/services/branding" },
    ],
    legal: [
      { label: "Privacy policy", href: "/privacy-policies" },
      { label: "Terms of use", href: "/terms" },
    ],
    whatsappLabel: "WhatsApp",
    facebookLabel: "Ikizen Studio on Facebook",
    linkedinLabel: "Ikizen Studio on LinkedIn",
    rights: "All rights reserved.",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "This page does not exist.",
    support: "The link may have changed. The home page is right where it was.",
    homeCta: "Back to home",
  },
  whatsappUrl: whatsappUrl("Hi, I'm interested in your services"),
};
