import { CalEmbed } from "@/components/booking/CalEmbed";
import type { Dictionary } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";

export function Closing({ dict }: { dict: Dictionary }) {
  const { closing, booking, whatsappUrl } = dict;
  // CalEmbed's own fallback is already the WhatsApp route when no calendar is set.
  const hasCalendar = Boolean(process.env.NEXT_PUBLIC_CAL_LINK);

  return (
    <section id="agenda" className="scroll-mt-16 bg-amber px-gutter py-section text-ink">
      <div className="mx-auto max-w-site">
        <p className="font-mono text-label uppercase">{closing.eyebrow}</p>
        <h2 className="mt-4 max-w-5xl text-display-xl font-bold text-ink">{closing.title}</h2>
        <p className="mt-6 max-w-xl text-lg">{closing.support}</p>

        <div className="mt-12">
          <CalEmbed labels={booking} whatsappUrl={whatsappUrl} />
        </div>

        {hasCalendar && (
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
