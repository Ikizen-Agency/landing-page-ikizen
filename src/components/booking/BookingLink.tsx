import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { trackAttrs, type TrackLocation } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

type BookingLinkProps = {
  dict: Pick<Dictionary, "booking" | "whatsappUrl">;
  location: TrackLocation;
  className: string;
  /** The slug of the offer this CTA belongs to, sent with the click. */
  offer?: string;
  /** Replaces the booking label, for a CTA tied to one offer. */
  label?: string;
  /** Replaces the WhatsApp label where the full one does not fit. */
  fallbackLabel?: string;
};

/** Every booking CTA: the hosted Cal.com page, or WhatsApp until `BOOKING_URL` is set. */
export function BookingLink({ dict, location, className, offer, label, fallbackLabel }: BookingLinkProps) {
  const { booking, whatsappUrl } = dict;
  const text = BOOKING_URL ? (label ?? booking.cta) : (fallbackLabel ?? booking.fallbackCta);
  const tracking = BOOKING_URL
    ? trackAttrs("book_cta_click", { location, offer })
    : trackAttrs("whatsapp_click", { location, offer });

  return (
    <a href={BOOKING_URL ?? whatsappUrl} target="_blank" rel="noopener noreferrer" {...tracking} className={className}>
      {text}
      <span className="sr-only"> ({booking.opensInNewTab})</span>
      <ArrowUpRight aria-hidden="true" className="size-[1.15em] shrink-0" />
    </a>
  );
}
