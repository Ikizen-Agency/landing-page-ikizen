import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { trackAttrs, type TrackLocation } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

type BookingLinkProps = {
  dict: Pick<Dictionary, "booking" | "whatsappUrl">;
  location: TrackLocation;
  className: string;
  /** Replaces the WhatsApp label where the full one does not fit. */
  fallbackLabel?: string;
};

/** Every booking CTA: the hosted Cal.com page, or WhatsApp until `BOOKING_URL` is set. */
export function BookingLink({ dict, location, className, fallbackLabel }: BookingLinkProps) {
  const { booking, whatsappUrl } = dict;
  const label = BOOKING_URL ? booking.cta : (fallbackLabel ?? booking.fallbackCta);
  const tracking = BOOKING_URL
    ? trackAttrs("book_cta_click", { location })
    : trackAttrs("whatsapp_click", { location });

  return (
    <a href={BOOKING_URL ?? whatsappUrl} target="_blank" rel="noopener noreferrer" {...tracking} className={className}>
      {label}
      <span className="sr-only"> ({booking.opensInNewTab})</span>
      <ArrowUpRight aria-hidden="true" className="size-[1.15em] shrink-0" />
    </a>
  );
}
