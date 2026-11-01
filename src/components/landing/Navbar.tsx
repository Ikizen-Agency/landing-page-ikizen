import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";

export default function Navbar({ locale = "es" }: { locale?: Locale }) {
  const { nav } = getDictionary(locale);

  return (
    <nav aria-label={nav.primaryLabel} className="fixed top-0 z-50 w-full border-b bg-ink px-gutter">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between">
        <Link href={nav.homeHref} className="text-paper transition-colors duration-200 hover:text-amber">
          <Wordmark />
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-paper transition-colors duration-200 hover:text-amber"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.switcher.href}
              hrefLang={nav.switcher.lang}
              lang={nav.switcher.lang}
              aria-label={nav.switcher.ariaLabel}
              className="font-mono text-label text-paper-dim transition-colors duration-200 hover:text-amber"
            >
              {nav.switcher.label}
            </Link>
          </div>

          <Button asChild size="sm">
            <a href={nav.cta.href}>{nav.cta.label}</a>
          </Button>

          <MobileMenu nav={nav} />
        </div>
      </div>
    </nav>
  );
}
