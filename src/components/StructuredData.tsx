import { SITE_URL, type Locale } from "@/i18n";
import { CONTACT_EMAIL, FACEBOOK_URL, LINKEDIN_URL } from "@/i18n/contact";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Lets other blocks point at the one Organization block every page renders. */
export const ORGANIZATION_REFERENCE = { "@id": ORGANIZATION_ID };

export const AREA_SERVED = [{ "@type": "Country", name: "Cuba" }, "Worldwide"];

/** A plain script tag, so the block is in the raw HTML. `<` is escaped to keep it inside the tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationStructuredData(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Ikizen Studio",
    description,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: CONTACT_EMAIL,
    areaServed: AREA_SERVED,
    sameAs: [FACEBOOK_URL, LINKEDIN_URL],
  };
}

export function websiteStructuredData(description: string, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Ikizen Studio",
    description,
    url: SITE_URL,
    inLanguage: locale,
    publisher: ORGANIZATION_REFERENCE,
  };
}
