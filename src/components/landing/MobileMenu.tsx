"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";

const PANEL_ID = "mobile-menu";

export function MobileMenu({ nav, switcherHref }: { nav: Dictionary["nav"]; switcherHref: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button
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
        <div id={PANEL_ID} className="absolute inset-x-0 top-16 border-y bg-ink px-gutter py-4">
          <div className="flex flex-col">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
              onClick={close}
              className="py-2 font-mono text-sm text-paper-dim transition-colors duration-200 hover:text-amber"
            >
              {nav.switcher.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
