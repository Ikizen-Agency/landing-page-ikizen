import { BookingLink } from "@/components/booking/BookingLink";
import { AREA_SERVED, JsonLd, ORGANIZATION_REFERENCE } from "@/components/StructuredData";
import { Closing } from "@/components/landing/Closing";
import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Process } from "@/components/landing/Process";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, routes, SITE_URL, type Locale } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";
import type { ServiceListCopy, ServicePageCopy } from "@/i18n/types";

function ServiceList({ list }: { list: ServiceListCopy }) {
  return (
    <section className="px-gutter pb-section">
      <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="font-mono text-label uppercase text-amber">{list.eyebrow}</p>
          <h2 className="mt-4 text-display-md font-bold">{list.title}</h2>
        </div>
        <ul className="border-b lg:col-span-6">
          {list.items.map((item) => (
            <li key={item} className="border-t py-5 text-lg text-paper-dim">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function serviceStructuredData(copy: ServicePageCopy, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.meta.title,
    description: copy.meta.description,
    url,
    serviceType: copy.serviceType,
    provider: ORGANIZATION_REFERENCE,
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.meta.title,
      itemListElement: copy.offerings.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.description },
      })),
    },
  };
}

export function ServicePage({ locale, service }: { locale: Locale; service: "web" | "branding" }) {
  const dict = getDictionary(locale);
  const copy = dict.pages[service];

  return (
    <>
      <JsonLd data={serviceStructuredData(copy, `${SITE_URL}${routes[service][locale]}`)} />
      <Navbar locale={locale} route={service} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <section className="px-gutter pb-section pt-32 lg:pt-44">
          <div className="mx-auto max-w-site">
            <p className="font-mono text-label uppercase text-amber">{copy.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-display-xl font-bold">{copy.hero.title}</h1>
            <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="space-y-6 lg:col-span-6 lg:col-start-7">
                <p className="text-lg text-paper-dim lg:text-xl">{copy.hero.support}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <BookingLink dict={dict} location="service_hero" className={buttonVariants({ size: "lg" })} />
                  {BOOKING_URL && (
                    <a
                      href={dict.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...trackAttrs("whatsapp_click", { location: "service_hero" })}
                      className="text-sm text-paper underline underline-offset-4 transition-colors duration-200 hover:text-amber"
                    >
                      {dict.hero.whatsappCta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceList list={copy.audience} />

        <section className="px-gutter pb-section">
          <div className="mx-auto max-w-site">
            <p className="font-mono text-label uppercase text-amber">{copy.offerings.eyebrow}</p>
            <h2 className="mt-4 text-display-lg font-bold">{copy.offerings.title}</h2>

            <ul className="mt-16 border-b lg:mt-24">
              {copy.offerings.items.map((item) => (
                <li key={item.title} className="grid gap-3 border-t py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
                  <h3 className="text-display-md font-bold lg:col-span-7">{item.title}</h3>
                  <div className="lg:col-span-5">
                    <p className="text-lg text-paper-dim">{item.description}</p>
                    <p className="mt-6 font-mono text-label uppercase text-amber">{copy.offerings.includesLabel}</p>
                    <ul className="mt-3 space-y-2 font-mono text-sm text-paper">
                      {item.includes.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ServiceList list={copy.deliverables} />

        <Process process={copy.process} />
        <Closing dict={dict} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
