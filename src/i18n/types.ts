export type Locale = "es" | "en";

export type NavLink = { label: string; href: string };

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

/** An amount in a given currency. Offer prices are "from" prices. */
export type Money = { amount: number; currency: string };

/** `regions` overrides the default per ISO 3166-1 alpha-2 country code, e.g. `CU`. */
export type OfferPricing = Money & { regions?: Partial<Record<string, Money>> };

export type OfferItem = { title: string; text: string };

/** The full, localized copy of one offer page, in the order the page reads. */
export type OfferCopy = {
  meta: PageMeta;
  /** Who the offer is for, as a short label. */
  clientType: string;
  tagline: string;
  hero: {
    /** The first line shows in paper, the second in amber. */
    title: [string, string];
    lead: string;
    label: string;
  };
  /** Everything the offer includes, one short line each, for the home card. */
  summary: string[];
  cta: { label: string; fallbackLabel: string };
  benefits: { eyebrow: string; title: string; items: OfferItem[] };
  includes: { eyebrow: string; title: string; items: OfferItem[] };
  process: { eyebrow: string; title: string; steps: (OfferItem & { phase: string })[] };
  investment: {
    eyebrow: string;
    title: string;
    priceLabel: string;
    priceNote: string;
    paymentTitle: string;
    payment: { share: string; text: string }[];
    scopeNote: string;
    support: { title: string; intro: string; items: string[]; note: string };
  };
  fit: { eyebrow: string; title: string; paragraphs: string[] };
  closing: { eyebrow: string; title: string; text: string; signoff: string; note: string };
};

/** What the home shows of an offer: enough to choose it, with its page for the rest. */
export type OfferCard = Pick<OfferDetail, "slug" | "name" | "clientType" | "price" | "cta" | "summary"> & {
  title: [string, string];
  lead: string;
  href: string;
};

export type OfferDetail = OfferCopy & {
  slug: string;
  name: string;
  /** Stable English name for the Service structured data. */
  serviceType: string;
  price: OfferPricing;
  paths: Record<Locale, string>;
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
    offersTitle: string;
    legalTitle: string;
    contactTitle: string;
    offers: NavLink[];
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
  offers: {
    eyebrow: string;
    title: string;
    fromLabel: string;
    includesLabel: string;
    fullOfferLabel: string;
    cards: OfferCard[];
  };
  pages: {
    terms: LegalPageCopy;
    privacy: LegalPageCopy;
  };
  whatsappUrl: string;
};
