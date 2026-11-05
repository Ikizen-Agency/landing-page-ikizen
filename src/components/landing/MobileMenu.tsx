"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { trackAttrs } from "@/lib/analytics";

const PANEL_ID = "mobile-menu";

export function MobileMenu({
  nav,
  locale,
  currentHref,
  switcherHref,
}: {
  nav: Dictionary["nav"];
  locale: Locale;
  currentHref: string;
  switcherHref: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) panelRef.current?.querySelector("a")?.focus();
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Escape" || !isOpen) return;

    close();
    toggleRef.current?.focus();
  };

  /** Tabbing past the last link would otherwise leave the panel open over the page. */
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const { relatedTarget, currentTarget } = event;
    if (relatedTarget && !currentTarget.contains(relatedTarget)) close();
  };

  return (
    <div className="md:hidden" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <Button
        ref={toggleRef}
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        aria-label={isOpen ? nav.menuClose : nav.menuOpen}
        className="text-paper hover:text-amber"
      >
        {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
      </Button>

      {isOpen && (
        <div ref={panelRef} id={PANEL_ID} className="absolute inset-x-0 top-16 border-y bg-ink px-gutter py-4">
          <div className="flex flex-col">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === currentHref ? "page" : undefined}
                onClick={close}
                className="py-2 text-lg font-medium text-paper transition-colors duration-200 hover:text-amber"
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
              onClick={close}
              className="py-3 font-mono text-sm text-paper-dim transition-colors duration-200 hover:text-amber"
            >
              {nav.switcher.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
