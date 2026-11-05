"use client";

import { useSyncExternalStore } from "react";
import type { OfferPricing } from "@/i18n/types";
import { formatPrice, priceForRegion } from "@/lib/offers";
import { readRegion } from "@/lib/region";

const subscribe = () => () => {};

/**
 * The offer's "from" price. The static HTML carries the default, so it reads right without
 * JavaScript; after hydration the visitor's regional price replaces it in the same element.
 */
export function OfferPrice({ price, className }: { price: OfferPricing; className?: string }) {
  const region = useSyncExternalStore(subscribe, readRegion, () => null);
  return <span className={className}>{formatPrice(priceForRegion(price, region))}</span>;
}
