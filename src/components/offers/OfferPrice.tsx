"use client";

import { useSyncExternalStore } from "react";
import type { OfferPricing } from "@/i18n/types";
import { formatPrice, priceForRegion } from "@/lib/offers";
import { readRegion } from "@/lib/region";

const subscribe = () => () => {};

/**
 * A region-priced amount: the offer's "from" price, or its hourly support rate with a `suffix`.
 * The static HTML carries the default, so it reads right without JavaScript; after hydration
 * the visitor's regional amount replaces it in the same element.
 */
export function OfferPrice({ price, suffix, className }: { price: OfferPricing; suffix?: string; className?: string }) {
  const region = useSyncExternalStore(subscribe, readRegion, () => null);
  const amount = formatPrice(priceForRegion(price, region));
  return <span className={className}>{suffix ? `${amount} ${suffix}` : amount}</span>;
}
