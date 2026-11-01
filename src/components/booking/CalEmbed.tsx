"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";

const CalFrame = dynamic(() => import("./CalFrame"), { ssr: false });

/** Starts loading the embed a little before the calendar scrolls into view. */
const LOAD_MARGIN = "600px";

type CalEmbedProps = {
  labels: Dictionary["booking"];
  whatsappUrl: string;
};

export function CalEmbed({ labels, whatsappUrl }: CalEmbedProps) {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
  const panelRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!calLink || !panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: LOAD_MARGIN },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, [calLink]);

  if (!calLink) {
    return (
      <div className="flex flex-col items-start gap-6 bg-ink p-6 text-paper sm:p-10">
        <p className="max-w-2xl font-display text-display-md font-bold">{labels.fallbackTitle}</p>
        <Button asChild size="lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {labels.fallbackCta}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div ref={panelRef} className="relative h-[42rem] bg-ink text-paper">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <p className="font-mono text-label text-paper-dim">{labels.loading}</p>
        <a
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={() => setShouldLoad(true)}
          className="text-sm underline underline-offset-4 transition-colors duration-200 hover:text-amber"
        >
          {labels.openCalendar}
        </a>
      </div>
      {shouldLoad && <CalFrame calLink={calLink} />}
    </div>
  );
}
