import { whatsappUrl } from "./contact";
import { getOfferCards, getOfferLinks } from "./offers";
import { getProjectStops } from "./projects";
import { routes } from "./routes";
import type { Dictionary } from "./types";

const home = routes.home.en;

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Grow Your Digital Presence: Web Design, Web Development & Brand Identity | Ikizen Studio",
    description:
      "Ikizen Studio grows the digital presence of businesses worldwide through web design, web development and brand identity: websites, custom software and brands with purpose, refined step by step.",
    keywords: ["web design", "web development", "brand identity", "web design studio", "branding"],
    ogTitle: "Ikizen Studio: your digital presence through web design, web development and brand identity",
    ogDescription: "We grow the digital presence of businesses worldwide with websites, custom software and brands with a clear purpose, refined step by step.",
    ogImageAlt: "Ikizen Studio: your digital presence through web design, web development and brand identity",
    ogTagline: "Web design, web development and brand identity to grow your digital presence.",
  },
  nav: {
    homeHref: home,
    primaryLabel: "Main navigation",
    skipToContent: "Skip to content",
    links: [
      { label: "Home", href: home },
      { label: "Offers", href: "/en#offers" },
      { label: "Projects", href: "/en#projects" },
      { label: "Process", href: "/en#process" },
    ],
    switcher: { label: "ES", ariaLabel: "ES: ver esta página en español", lang: "es" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    titleLines: ["Purpose first.", "Better every pass."],
    descriptor: "We grow the digital presence of businesses worldwide through web design, web development and brand identity.",
    whatsappCta: "or message us on WhatsApp",
    captions: {
      ikigai: "ikigai — reason for being",
      kaizen: "kaizen — continuous improvement",
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Our projects, each with its reason for being.",
    ribbonLabel: "Projects, horizontal flow",
    previousLabel: "Previous project",
    nextLabel: "Next project",
    stops: getProjectStops("en"),
  },
  process: {
    eyebrow: "How we work",
    title: "Our process: five steps, and the last one never ends.",
    steps: [
      {
        phase: "Discover",
        title: "We understand",
        description: "We get to know your business, goals, audience and competition before proposing anything.",
      },
      {
        phase: "Design",
        title: "We design",
        description: "We set the strategy, visual direction, scope and schedule, and show you a proposal before we build.",
      },
      {
        phase: "Build",
        title: "We build",
        description: "We build what we agreed on, whether a website, a custom business tool or a brand identity, and validate it with you.",
      },
      {
        phase: "Launch",
        title: "We launch",
        description: "We review every detail, put it into use and hand over everything you need to work with it.",
      },
      {
        phase: "Kaizen",
        title: "We improve",
        description: "After delivery we stay with you for adjustments and improvements. That is our kaizen.",
      },
    ],
  },
  closing: {
    eyebrow: "Free diagnosis",
    title: "Let's start with your reason for being.",
    support: "Thirty minutes to understand how your business works, pick the offer that fits and work out where to begin.",
    whatsappAlternative: "Rather write? Message us on WhatsApp",
  },
  booking: {
    cta: "Book 30 min",
    fallbackCta: "Book on WhatsApp",
    opensInNewTab: "opens in a new tab",
  },
  footer: {
    tagline: "Purpose first. Better every pass.",
    navTitle: "Navigation",
    offersTitle: "Offers",
    legalTitle: "Legal",
    contactTitle: "Contact",
    offers: getOfferLinks("en"),
    legal: [
      { label: "Privacy policy", href: routes.privacy.en },
      { label: "Terms of use", href: routes.terms.en },
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
  legal: {
    eyebrow: "Legal",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "November 1, 2026",
  },
  offers: {
    eyebrow: "Offers",
    title: "A package for each kind of business.",
    fullOfferLabel: "See the full offer",
    cards: getOfferCards("en"),
    includesLabel: "Includes",
    fromLabel: "From",
  },
  pages: {
    terms: {
      meta: {
        title: "Terms of use",
        description: "Terms and conditions for using Ikizen Studio's services. Read our policies and working conditions.",
      },
      title: "Terms of use",
      intro: "By using this website, you agree to comply with the following terms and conditions.",
      sections: [
        {
          heading: "1. Use of the site",
          text: "This site is owned by Ikizen. You may use it to learn about our services, contact us or request a consultation. Copying, modifying or distributing content without permission is not allowed.",
        },
        {
          heading: "2. Consultations and services",
          text: "Initial consultations are free, but they do not guarantee that services will be contracted. All projects are formalized through a detailed contract before work begins.",
        },
        {
          heading: "3. Intellectual property",
          text: "All designs, text, logos and trademarks shown on this site are the property of Ikizen Studio or its clients. Using them without permission is prohibited.",
        },
        {
          heading: "4. Limitation of liability",
          text: "We are not liable for direct or indirect damages arising from the use of this site. The results of our services may vary by project.",
        },
        {
          heading: "5. Changes to these terms",
          text: "We reserve the right to modify these terms at any time. We recommend reviewing this page periodically.",
        },
      ],
    },
    privacy: {
      meta: {
        title: "Privacy policy",
        description: "Ikizen Studio's privacy policy. Learn how we protect and handle your personal data.",
      },
      title: "Privacy policy",
      intro: "At Ikizen, we respect your privacy and are committed to protecting your personal data.",
      sections: [
        {
          heading: "1. Information we collect",
          text: "When you fill out a contact form or request a free consultation, we may collect:",
          items: [
            "First and last name",
            "Email address",
            "Phone number (optional)",
            "Information about your project or needs",
          ],
        },
        {
          heading: "2. How do we use your information?",
          text: "We use your data to:",
          items: [
            "Respond to your inquiries and service proposals",
            "Send information about our services (if you authorize it)",
            "Improve our offering and customer experience",
          ],
        },
        {
          heading: "3. Data protection",
          text: "Your data is stored securely and we do not share it with third parties. We use it only to communicate with you and offer you our services.",
        },
        {
          heading: "4. User rights",
          text: "You have the right to access, correct, delete or request the portability of your data. To exercise these rights, write to us at:",
          contactEmail: true,
        },
        {
          heading: "5. Changes to this policy",
          text: "We may update this policy occasionally. Any changes will be posted here.",
        },
      ],
    },
  },
  whatsappUrl: whatsappUrl("Hi, I'm interested in your services"),
};
