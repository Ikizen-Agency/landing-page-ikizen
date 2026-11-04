export type Locale = "es" | "en";

export type NavLink = { label: string; href: string };

export type ServiceBlock = {
  title: string;
  summary: string;
  offerings: string[];
  linkLabel: string;
  href: string;
};

export type ProjectStop = {
  name: string;
  type: string;
  purpose: string;
  href: string;
  linkLabel: string;
  video?: { src: string; poster: string; label: string };
  image?: { src: string; alt: string };
};

export type ProcessStep = { title: string; description: string };

export type ProcessCopy = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
};

export type ServiceOffering = { title: string; description: string; includes: string[] };

export type ServiceListCopy = {
  eyebrow: string;
  title: string;
  items: string[];
};

export type ServicePageCopy = {
  meta: PageMeta;
  /** Stable English name for the Service structured data. */
  serviceType: string;
  hero: {
    eyebrow: string;
    title: string;
    support: string;
  };
  audience: ServiceListCopy;
  offerings: {
    eyebrow: string;
    title: string;
    includesLabel: string;
    items: ServiceOffering[];
  };
  deliverables: ServiceListCopy;
  process: ProcessCopy;
};

export type LegalSection = {
  heading: string;
  text: string;
  items?: string[];
  /** Ends the section with the contact address, which `text` leads into. */
  contactEmail?: boolean;
};

export type LegalPageCopy = {
  meta: PageMeta;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export type Dictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    ogTagline: string;
  };
  nav: {
    homeHref: string;
    primaryLabel: string;
    skipToContent: string;
    links: NavLink[];
    switcher: { label: string; ariaLabel: string; lang: Locale };
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    titleLines: [string, string];
    /** Says plainly what the studio does, under the concept headline. */
    descriptor: string;
    whatsappCta: string;
    captions: { ikigai: string; kaizen: string };
  };
  services: {
    eyebrow: string;
    title: string;
    blocks: ServiceBlock[];
  };
  projects: {
    eyebrow: string;
    title: string;
    ribbonLabel: string;
    previousLabel: string;
    nextLabel: string;
    stops: ProjectStop[];
  };
  process: ProcessCopy;
  closing: {
    eyebrow: string;
    title: string;
    support: string;
    whatsappAlternative: string;
  };
  booking: {
    cta: string;
    fallbackCta: string;
    opensInNewTab: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    legalTitle: string;
    contactTitle: string;
    services: NavLink[];
    legal: NavLink[];
    whatsappLabel: string;
    facebookLabel: string;
    linkedinLabel: string;
    rights: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    support: string;
    homeCta: string;
  };
  legal: {
    eyebrow: string;
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
  };
  pages: {
    web: ServicePageCopy;
    branding: ServicePageCopy;
    terms: LegalPageCopy;
    privacy: LegalPageCopy;
  };
  whatsappUrl: string;
};
