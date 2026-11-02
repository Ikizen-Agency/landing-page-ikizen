import { BookingLink } from "@/components/booking/BookingLink";
import { HeroScrub } from "@/components/landing/HeroScrub";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

/**
 * The site's one signature: IKI(gai) + (kai)ZEN = IKIZEN. The markup is laid out as
 * the final word, so the server render is already correct; `.signature*` in
 * globals.css offsets it back to the two source words from --progress.
 */
export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <HeroScrub>
      <section className="signature-stage">
        <div className="flex flex-1 flex-col justify-center gap-6 py-6">
          <div className="signature-frame">
            <div aria-hidden="true" className="signature-words">
              <span className="signature-iki">
                IKI<span className="signature-gai">GAI</span>
              </span>
              <span className="signature-zen">
                <span className="signature-kai">KAI</span>ZEN
              </span>
            </div>
          </div>
          <p className="flex flex-col gap-1 font-mono text-label text-paper-dim sm:flex-row sm:justify-between">
            <span>{hero.captions.ikigai}</span>
            <span>{hero.captions.kaizen}</span>
          </p>
        </div>

        <div className="grid gap-5 border-t pt-6 lg:grid-cols-2 lg:gap-12">
          <h1 className="text-display-md font-bold">
            <span className="block">{hero.titleLines[0]}</span> <span className="block">{hero.titleLines[1]}</span>
          </h1>
          <div className="space-y-5">
            <p className="max-w-xl text-lg text-paper">{hero.descriptor}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <BookingLink dict={dict} location="hero" className={buttonVariants({ size: "lg" })} />
              {BOOKING_URL && (
                <a
                  href={dict.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...trackAttrs("whatsapp_click", { location: "hero" })}
                  className="text-sm text-paper underline underline-offset-4 transition-colors duration-200 hover:text-amber"
                >
                  {hero.whatsappCta}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </HeroScrub>
  );
}
