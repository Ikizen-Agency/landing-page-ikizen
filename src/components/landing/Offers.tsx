import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BookingLink } from "@/components/booking/BookingLink";
import { OfferPrice } from "@/components/offers/OfferPrice";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import type { OfferCard as OfferCardData } from "@/i18n/types";

type OffersProps = { dict: Pick<Dictionary, "offers" | "booking" | "whatsappUrl"> };

/** `wide` lays a lone offer out as one editorial row; with more, each card stacks in a grid cell. */
function OfferCard({ card, dict, wide }: OffersProps & { card: OfferCardData; wide: boolean }) {
  return (
    <article className={wide ? "grid gap-10 border-y py-10 lg:grid-cols-12 lg:gap-8 lg:py-14" : "flex flex-col gap-10 border-y py-10"}>
      <div className={wide ? "lg:col-span-7" : undefined}>
        <p className="font-mono text-label uppercase text-paper-dim">{card.clientType}</p>
        <h3 className="mt-4 text-display-md font-bold">{card.name}</h3>
        <p className="mt-6 text-balance text-2xl font-bold">
          {card.title[0]} <span className="text-amber">{card.title[1]}</span>
        </p>
        <p className="mt-4 max-w-prose text-lg text-paper-dim">{card.lead}</p>

        <p className="mt-10 font-mono text-label uppercase text-amber">{dict.offers.includesLabel}</p>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {card.summary.map((item) => (
            <li key={item} className="flex gap-3 text-paper">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-amber" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={wide ? "border-t pt-6 lg:col-span-4 lg:col-start-9" : "mt-auto border-t pt-6"}>
        <p className="font-mono text-label uppercase text-paper-dim">{dict.offers.fromLabel}</p>
        <OfferPrice price={card.price} className="mt-2 block font-display text-display-md font-bold text-gold" />
        <div className="mt-8 flex flex-col items-start gap-4">
          <Link href={card.href} className={buttonVariants({ size: "lg" })}>
            {dict.offers.fullOfferLabel}
            <ArrowRight aria-hidden="true" />
          </Link>
          <BookingLink
            dict={dict}
            location="offer_card"
            offer={card.slug}
            label={card.cta.label}
            fallbackLabel={card.cta.fallbackLabel}
            className="hit-area inline-flex items-center gap-1.5 text-sm text-paper underline underline-offset-4 transition-colors duration-200 hover:text-amber"
          />
        </div>
      </div>
    </article>
  );
}

export function Offers({ dict }: OffersProps) {
  const { offers } = dict;
  const wide = offers.cards.length === 1;

  return (
    <section id="offers" className="relative scroll-mt-16 px-gutter py-section">
      {/* Keeps old `#services` links landing on this section. */}
      <span id="services" aria-hidden="true" className="absolute top-0 scroll-mt-16" />
      <div className="mx-auto max-w-site">
        <p className="font-mono text-label uppercase text-amber">{offers.eyebrow}</p>
        <h2 className="mt-4 text-display-lg font-bold">{offers.title}</h2>

        <div className={wide ? "mt-16 lg:mt-24" : "mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-24"}>
          {offers.cards.map((card) => (
            <OfferCard key={card.slug} card={card} dict={dict} wide={wide} />
          ))}
        </div>
      </div>
    </section>
  );
}
