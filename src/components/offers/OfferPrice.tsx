import type { OfferPricing } from "@/i18n/types";
import { formatPrice } from "@/lib/offers";

/** The offer's "from" price. */
export function OfferPrice({ price, className }: { price: OfferPricing; className?: string }) {
  return <span className={className}>{formatPrice(price)}</span>;
}
