import { whatsappUrl } from "./contact";
import { getProjectStops } from "./projects";
import { routes } from "./routes";
import type { Dictionary } from "./types";

const home = routes.home.en;

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Web Design, Web Development & Brand Identity | Ikizen Studio",
    description:
      "Ikizen Studio: a web design, web development and brand identity studio for businesses worldwide. Sites and brands with purpose, refined step by step.",
    keywords: ["web design", "web development", "brand identity", "web design studio", "branding"],
    ogTitle: "Ikizen Studio: web design, web development and brand identity",
    ogDescription: "Websites and brands with a clear purpose for businesses worldwide, refined step by step.",
    ogImageAlt: "Ikizen Studio: web design, web development and brand identity",
    ogTagline: "Web design, web development and brand identity, refined step by step.",
  },
  nav: {
    homeHref: home,
    primaryLabel: "Main navigation",
    skipToContent: "Skip to content",
    links: [
      { label: "Home", href: home },
      { label: "Services", href: "/en#services" },
      { label: "Projects", href: "/en#projects" },
      { label: "Process", href: "/en#process" },
    ],
    switcher: { label: "ES", ariaLabel: "ES: ver esta página en español", lang: "es" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    titleLines: ["Purpose first.", "Better every pass."],
    descriptor: "A web design, web development and brand identity studio for businesses worldwide.",
    whatsappCta: "or message us on WhatsApp",
    captions: {
      ikigai: "ikigai — reason for being",
      kaizen: "kaizen — continuous improvement",
    },
  },
  services: {
    eyebrow: "What we do",
    title: "Web design, web development and brand identity, with the same care.",
    blocks: [
      {
        title: "Web design and development",
        summary: "We design and build modern, responsive sites and apps with clean code and close attention to performance and SEO.",
        offerings: ["Company websites", "Web applications", "Online stores", "Website redesigns"],
        linkLabel: "See web design and development",
        href: routes.web.en,
      },
      {
        title: "Brand identity",
        summary: "Logos, palettes, type and style guides that keep your brand consistent on every channel.",
        offerings: ["Strategic logos", "Identity systems", "Naming", "Brand guidelines"],
        linkLabel: "See brand identity",
        href: routes.branding.en,
      },
    ],
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
    support: "Thirty minutes to hear about your website or brand project and work out where to begin.",
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
    servicesTitle: "Services",
    legalTitle: "Legal",
    contactTitle: "Contact",
    services: [
      { label: "Web design and development", href: routes.web.en },
      { label: "Brand identity", href: routes.branding.en },
    ],
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
  pages: {
    web: {
      meta: {
        title: "Web Design and Development for Your Business",
        description:
          "We design and build company websites, web applications and online stores with clean code, close attention to performance and SEO, and support after launch.",
        keywords: [
          "web design",
          "web development",
          "company websites",
          "web applications",
          "online stores",
          "website redesign",
          "Next.js",
          "React",
        ],
      },
      serviceType: "Web Design and Development",
      hero: {
        eyebrow: "For businesses worldwide",
        title: "Web design and development: a fast, clear site of your own.",
        support:
          "We design and build sites, apps and stores with clean code, close attention to performance and SEO, and room to grow with you.",
      },
      audience: {
        eyebrow: "Who it is for",
        title: "For businesses with a website to build or renew.",
        items: [
          "Businesses with no website yet that want a modern, trustworthy presence.",
          "Companies with an old site that need current technology without losing their identity.",
          "Businesses that want to sell online with a smooth path to checkout.",
          "Teams that need a web application with advanced features that stays easy to use.",
        ],
      },
      offerings: {
        eyebrow: "What we do",
        title: "Websites, apps, online stores and redesigns.",
        includesLabel: "Includes",
        items: [
          {
            title: "Company websites",
            description: "Modern and responsive, designed to earn trust and bring in inquiries.",
            includes: [
              "Modern, responsive design",
              "A clear page architecture",
              "Close attention to performance and SEO",
              "A direct way for people to contact you",
            ],
          },
          {
            title: "Web applications",
            description: "Advanced features with solid performance and an experience people find easy to use.",
            includes: [
              "Wireframes and architecture before any code",
              "Advanced features with solid performance",
              "An interface that is easy to use",
              "Clean code with room to grow",
            ],
          },
          {
            title: "Online stores",
            description: "Ready to sell, with payment gateways and a smooth path to checkout.",
            includes: [
              "Payment gateways",
              "A smooth path to checkout",
              "Responsive design",
              "Close attention to performance and SEO",
            ],
          },
          {
            title: "Website redesigns",
            description: "We rebuild your old site on current technology without losing your identity.",
            includes: [
              "Current technology in place of the old site",
              "Your identity stays intact",
              "A revised architecture and responsive design",
              "Close attention to performance and SEO",
            ],
          },
        ],
      },
      deliverables: {
        eyebrow: "What you get",
        title: "Your site live, and support after launch.",
        items: [
          "Wireframes, the architecture and the schedule before any code.",
          "A modern, responsive design for your business.",
          "Clean, modern code with close attention to performance and SEO.",
          "Testing before launch and follow-up after it.",
          "Support, updates and improvements once the site is live.",
        ],
      },
      process: {
        eyebrow: "How we work",
        title: "From first consultation to support.",
        steps: [
          { title: "First consultation", description: "We get to know your goals, your audience and your challenges." },
          { title: "Design and planning", description: "We prepare wireframes, the architecture and the schedule." },
          { title: "Development", description: "We build your site in clean, modern code." },
          { title: "Testing and launch", description: "We review everything, launch, and keep watching how it runs." },
          {
            title: "Support and improvements",
            description: "After launch we stay on with updates and improvements.",
          },
        ],
      },
    },
    branding: {
      meta: {
        title: "Brand Identity: Logos, Naming and Guidelines",
        description:
          "Logos, identity systems, naming and brand guidelines for businesses worldwide: a brand that stays consistent on every channel, with support after delivery.",
        keywords: [
          "brand identity",
          "brand design",
          "professional logo",
          "visual identity",
          "naming",
          "brand guidelines",
        ],
      },
      serviceType: "Brand Identity Design",
      hero: {
        eyebrow: "For businesses worldwide",
        title: "Brand identity, recognizable on any channel.",
        support:
          "We design identities that reflect who you are and build trust from first contact: logo, palette, type and style guides.",
      },
      audience: {
        eyebrow: "Who it is for",
        title: "For new brands and brands in need of order.",
        items: [
          "New businesses that need a name, a logo and an identity from first contact.",
          "Brands that look different on every channel and want that consistency back.",
          "Companies that work with third parties and need clear rules for using their brand.",
        ],
      },
      offerings: {
        eyebrow: "What we do",
        title: "Logo, identity system, naming and brand guidelines.",
        includesLabel: "Includes",
        items: [
          {
            title: "Strategic logos",
            description: "Distinctive designs that convey your personality and hold up over time.",
            includes: [
              "Style directions, moodboards and sketches",
              "A logo tried in real contexts",
              "Adjustments with you up to the final version",
            ],
          },
          {
            title: "Identity systems",
            description: "Palettes, typefaces, iconography and style guides that keep every channel consistent.",
            includes: [
              "Color palette",
              "Typefaces",
              "Iconography",
              "Style guides",
            ],
          },
          {
            title: "Naming",
            description: "Names that reflect your purpose and are easy to remember.",
            includes: [
              "A study of your business, values, audience and competition",
              "Name proposals aligned with your purpose",
            ],
          },
          {
            title: "Brand guidelines",
            description: "Clear documentation that keeps your brand intact in other people's hands.",
            includes: [
              "How to use the logo, palette and type",
              "Examples of use in real contexts",
              "A complete usage guide",
            ],
          },
        ],
      },
      deliverables: {
        eyebrow: "What you get",
        title: "All your files, and support after delivery.",
        items: [
          "Moodboards, sketches and style directions to choose the path with you.",
          "A logo, palette and type applied in real contexts.",
          "Adjustments with you until we reach the final version.",
          "All the files and formats, with a complete usage guide.",
          "Support and improvements after delivery.",
        ],
      },
      process: {
        eyebrow: "How we work",
        title: "From discovery to support.",
        steps: [
          { title: "Discovery", description: "We study your business, values, audience and competition." },
          { title: "Visual concept", description: "We explore style directions, moodboards and sketches." },
          { title: "Design", description: "We develop the logo, palette, type and applications in real contexts." },
          { title: "Iteration and feedback", description: "We adjust every detail with you until we reach the final version." },
          {
            title: "Delivery and support",
            description:
              "We hand over all the files, the formats and a complete usage guide. After that we stay on with support and improvements.",
          },
        ],
      },
    },
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
