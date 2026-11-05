import Link from "next/link";
import { BookingLink } from "@/components/booking/BookingLink";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, routes, type Locale, type RouteKey } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";

/**
 * `route` is the current page, so the switcher can link to its counterpart. Pages outside the
 * route map, such as offers, pass their pair as `paths` instead.
 */
export default function Navbar({
  locale = "es",
  route = "home",
  paths = routes[route],
}: {
  locale?: Locale;
  route?: RouteKey;
  paths?: Record<Locale, string>;
}) {
  const dict = getDictionary(locale);
  const { nav, footer } = dict;
  const switcherHref = paths[nav.switcher.lang];
  const currentHref = paths[locale];

  return (
    <nav aria-label={nav.primaryLabel} className="fixed top-0 z-50 w-full border-b bg-ink px-gutter">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between">
        <Link href={nav.homeHref} className="text-paper transition-colors duration-200 hover:text-amber">
          <Wordmark compact />
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === currentHref ? "page" : undefined}
                className="text-sm font-medium text-paper transition-colors duration-200 hover:text-amber"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switcherHref}
              hrefLang={nav.switcher.lang}
              lang={nav.switcher.lang}
              aria-label={nav.switcher.ariaLabel}
              {...trackAttrs("language_switch", { from: locale, to: nav.switcher.lang })}
              className="font-mono text-label text-paper-dim transition-colors duration-200 hover:text-amber"
            >
              {nav.switcher.label}
            </Link>
          </div>

          <BookingLink
            dict={dict}
            location="nav"
            fallbackLabel={footer.whatsappLabel}
            className={buttonVariants({ size: "sm", className: "max-sm:[&_svg]:hidden" })}
          />

          <MobileMenu nav={nav} locale={locale} currentHref={currentHref} switcherHref={switcherHref} />
        </div>
      </div>
    </nav>
  );
}
