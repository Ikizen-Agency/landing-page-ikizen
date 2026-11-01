export type Locale = "es" | "en";

export type NavLink = { label: string; href: string };

export type ServiceBlock = {
  title: string;
  summary: string;
  offerings: string[];
  linkLabel: string;
  href: string;
};

export type ProcessStep = { title: string; description: string };

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
    links: NavLink[];
    cta: NavLink;
    switcher: { label: string; ariaLabel: string; href: string; lang: Locale };
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    titleLines: [string, string];
    support: string;
    primaryCta: NavLink;
    whatsappCta: string;
    captions: { ikigai: string; kaizen: string };
  };
  services: {
    eyebrow: string;
    title: string;
    blocks: ServiceBlock[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ProcessStep[];
  };
  closing: {
    eyebrow: string;
    title: string;
    support: string;
    whatsappAlternative: string;
  };
  booking: {
    loading: string;
    openCalendar: string;
    fallbackTitle: string;
    fallbackCta: string;
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
  whatsappUrl: string;
};
