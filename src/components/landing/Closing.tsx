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
          className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-lg font-semibold text-paper transition-colors duration-200 hover:text-amber lg:mt-12 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-y-0.5 hover:[&_svg]:translate-x-0.5 motion-reduce:[&_svg]:transition-none"
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
