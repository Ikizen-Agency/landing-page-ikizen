import type { Money, OfferPricing } from "@/i18n/types";

/**
 * One format for both locales, `$1,500 USD`, as the offer documents print it: the symbol alone
 * is ambiguous across dollar countries, so the code always follows.
 */
export function formatPrice({ amount, currency }: Money) {
  const number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(amount);
  return `${number} ${currency}`;
}


/** The region's override when the offer defines one, the default price otherwise. */
export function priceForRegion(price: OfferPricing, region: string | null): Money {
  return (region && price.regions?.[region]) || price;
}
