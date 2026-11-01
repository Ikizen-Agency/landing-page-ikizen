import { BookingLink } from "@/components/booking/BookingLink";
import type { Dictionary } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

export function Closing({ dict }: { dict: Dictionary }) {
  const { closing, whatsappUrl } = dict;

  return (
    <section className="bg-amber px-gutter py-section text-ink">
      <div className="mx-auto max-w-site">
        <p className="font-mono text-label uppercase">{closing.eyebrow}</p>
        <h2 className="mt-4 max-w-5xl text-display-xl font-bold text-ink">{closing.title}</h2>
        <p className="mt-6 max-w-xl text-lg">{closing.support}</p>

        <BookingLink
          dict={dict}
          location="closing"
          className="mt-12 flex items-center justify-between gap-4 text-balance bg-ink px-5 py-8 font-display text-display-md font-bold text-paper transition-colors duration-200 hover:text-amber sm:gap-6 sm:px-10 sm:py-12 sm:text-display-lg lg:mt-20 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-y-1 hover:[&_svg]:translate-x-1 motion-reduce:[&_svg]:transition-none"
        />

        {/* Without a booking page the CTA above is already the WhatsApp route. */}
        {BOOKING_URL && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...trackAttrs("whatsapp_click", { location: "closing" })}
            className="mt-6 inline-block font-medium underline underline-offset-4"
          >
            {closing.whatsappAlternative}
          </a>
        )}
      </div>
    </section>
  );
}
