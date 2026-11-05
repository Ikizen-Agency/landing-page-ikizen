import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/app/_root/RootDocument";
import { BookingLink } from "@/components/booking/BookingLink";
import { OfferPrice } from "@/components/offers/OfferPrice";
import { AREA_SERVED, JsonLd, ORGANIZATION_REFERENCE } from "@/components/StructuredData";
import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, SITE_URL, type Locale } from "@/i18n";
import { getOffer, getOfferSlugs } from "@/i18n/offers";
import type { OfferDetail } from "@/i18n/types";

/** Shared by both locales' `[slug]` routes, so an offer added to `offers.ts` gets both pages. */
export function offerStaticParams() {
  return getOfferSlugs().map((slug) => ({ slug }));
}

export function offerMetadata(slug: string, locale: Locale): Metadata {
  const offer = getOffer(slug, locale);
  return offer ? buildMetadata(offer.meta, offer.paths, locale) : {};
}

function offerStructuredData(offer: OfferDetail, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.name,
    description: offer.meta.description,
    url,
    serviceType: offer.serviceType,
    provider: ORGANIZATION_REFERENCE,
    areaServed: AREA_SERVED,
    audience: { "@type": "BusinessAudience", audienceType: offer.clientType },
    offers: {
      "@type": "Offer",
      url,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: offer.price.amount,
        priceCurrency: offer.price.currency,
      },
    },
  };
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="font-mono text-label uppercase text-amber">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-balance text-display-lg font-bold">{title}</h2>
    </>
  );
}

const twoDigits = (index: number) => String(index + 1).padStart(2, "0");

export function OfferPage({ locale, slug }: { locale: Locale; slug: string }) {
  const offer = getOffer(slug, locale);
  if (!offer) notFound();

  const dict = getDictionary(locale);
  const { hero, benefits, includes, process, investment, fit, closing } = offer;
  const { support } = investment;

  return (
    <>
      <JsonLd data={offerStructuredData(offer, `${SITE_URL}${offer.paths[locale]}`)} />
      <Navbar locale={locale} paths={offer.paths} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <section className="px-gutter pb-section pt-32 lg:pt-44">
          <div className="mx-auto max-w-site">
            <p className="font-mono text-label uppercase text-amber">{offer.name}</p>
            <h1 className="mt-4 max-w-5xl text-balance text-display-lg font-bold">
              <span className="block">{hero.title[0]}</span>
              <span className="mt-2 block text-amber">{hero.title[1]}</span>
            </h1>

            <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="max-w-prose text-lg text-paper-dim lg:text-xl">{hero.lead}</p>
                <p className="mt-8 font-mono text-label uppercase text-paper">{hero.label}</p>
              </div>
              <div className="border-t pt-6 lg:col-span-4 lg:col-start-9">
                <p className="font-mono text-label uppercase text-paper-dim">{dict.offers.fromLabel}</p>
                <OfferPrice price={offer.price} className="mt-2 block font-display text-display-md font-bold text-gold" />
                <BookingLink
                  dict={dict}
                  location="offer_page"
                  label={offer.cta.label}
                  fallbackLabel={offer.cta.fallbackLabel}
                  className={buttonVariants({ size: "lg", className: "mt-8 h-auto min-h-10 whitespace-normal py-2 text-left" })}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t px-gutter py-section">
          <div className="mx-auto max-w-site">
            <SectionHeader eyebrow={benefits.eyebrow} title={benefits.title} />
            <ul className="mt-16 border-b lg:mt-24">
              {benefits.items.map((item) => (
                <li key={item.title} className="grid gap-3 border-t py-8 lg:grid-cols-12 lg:gap-8">
                  <h3 className="text-2xl font-bold lg:col-span-5">{item.title}</h3>
                  <p className="max-w-prose text-lg text-paper-dim lg:col-span-7">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink-soft px-gutter py-section">
          <div className="mx-auto max-w-site">
            <SectionHeader eyebrow={includes.eyebrow} title={includes.title} />
            <ol className="mt-16 lg:mt-24">
              {includes.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-t py-8 md:grid-cols-[9rem_1fr_1fr] md:gap-x-8"
                >
                  <span aria-hidden="true" className="row-span-2 font-display text-display-lg font-bold text-amber md:row-span-1">
                    {twoDigits(index)}
                  </span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-prose text-paper-dim md:mt-0">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-gutter py-section">
          <div className="mx-auto max-w-site">
            <SectionHeader eyebrow={process.eyebrow} title={process.title} />
            <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
              {process.steps.map((step, index) => (
                <li key={step.phase} className="border-t pt-6">
                  <p className="font-mono text-label uppercase text-amber">
                    {twoDigits(index)} · {step.phase}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-paper-dim">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ink-soft px-gutter py-section">
          <div className="mx-auto max-w-site">
            <SectionHeader eyebrow={investment.eyebrow} title={investment.title} />

            <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
              <div className="border-2 border-gold bg-ink p-6 sm:p-10 lg:col-span-5">
                <p className="font-mono text-label uppercase text-amber">{investment.priceLabel}</p>
                <OfferPrice price={offer.price} className="mt-4 block font-display text-display-lg font-bold text-paper" />
                <p className="mt-6 max-w-prose text-paper-dim">{investment.priceNote}</p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <h3 className="text-2xl font-bold">{investment.paymentTitle}</h3>
                <ul className="mt-6 border-b">
                  {investment.payment.map((term) => (
                    <li key={term.share} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 border-t py-5 sm:grid-cols-[7rem_1fr]">
                      <span className="font-display text-display-md font-bold text-amber">{term.share}</span>
                      <span className="text-lg">{term.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-prose text-paper-dim">{investment.scopeNote}</p>
              </div>
            </div>

            <div className="mt-20 grid gap-8 border-t pt-10 lg:mt-28 lg:grid-cols-12">
              <h3 className="text-display-md font-bold lg:col-span-5">{support.title}</h3>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-lg">{support.intro}</p>
                <ul className="mt-6 space-y-4">
                  {support.items.map((item) => (
                    <li key={item} className="flex max-w-prose gap-3 text-lg text-paper-dim">
                      <span aria-hidden="true" className="mt-3 size-2 shrink-0 bg-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-prose text-sm text-paper-dim">{support.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-gutter py-section">
          <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={fit.eyebrow} title={fit.title} />
            </div>
            <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-10">
              {fit.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-prose text-lg text-paper-dim">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber px-gutter py-section text-ink">
          <div className="mx-auto max-w-site">
            <p className="font-mono text-label uppercase">{closing.eyebrow}</p>
            <h2 className="mt-4 max-w-5xl text-balance text-display-lg font-bold text-ink">{closing.title}</h2>
            <p className="mt-6 max-w-prose text-lg">{closing.text}</p>

            <BookingLink
              dict={dict}
              location="offer_page"
              label={offer.cta.label}
              fallbackLabel={offer.cta.fallbackLabel}
              className="mt-12 flex items-center justify-between gap-4 text-balance bg-ink px-5 py-8 font-display text-display-md font-bold text-paper transition-colors duration-200 hover:text-amber sm:gap-6 sm:px-10 sm:py-12 lg:mt-20 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-y-1 hover:[&_svg]:translate-x-1 motion-reduce:[&_svg]:transition-none"
            />

            <p className="mt-10 font-mono text-label uppercase">{closing.signoff}</p>
            <p className="mt-4 max-w-prose">{closing.note}</p>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
