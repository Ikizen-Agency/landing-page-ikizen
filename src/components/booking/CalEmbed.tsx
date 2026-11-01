"use client";

import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import { trackAttrs, type TrackLocation } from "@/lib/analytics";
import { CAL_LINK, CAL_URL } from "@/lib/cal";

const CalFrame = dynamic(() => import("./CalFrame"), { ssr: false });

/** Starts loading the embed a little before the calendar scrolls into view. */
const LOAD_MARGIN = "600px";
/** Generous for slow connections; the calendar link stays usable while it waits. */
const LOAD_TIMEOUT_MS = 15_000;

type EmbedStatus = "idle" | "loading" | "ready" | "failed";

type CalEmbedProps = {
  labels: Dictionary["booking"];
  whatsappUrl: string;
};

/** A failed lazy chunk throws while rendering; this keeps that from reaching the page. */
class CalErrorBoundary extends Component<{ onError: () => void; children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

function HostedCalendarLink({
  href,
  label,
  location,
  onFocus,
}: {
  href: string;
  label: string;
  location: TrackLocation;
  onFocus?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onFocus={onFocus}
      {...trackAttrs("book_cta_click", { location })}
      className="text-sm underline underline-offset-4 transition-colors duration-200 hover:text-amber"
    >
      {label}
    </a>
  );
}

function FallbackPanel({
  labels,
  whatsappUrl,
  calendarUrl,
}: CalEmbedProps & {
  calendarUrl?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-6 bg-ink p-6 text-paper sm:p-10">
      <p className="max-w-2xl font-display text-display-md font-bold">{labels.fallbackTitle}</p>
      <Button asChild size="lg">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...trackAttrs("whatsapp_click", { location: "booking_fallback" })}
        >
          {labels.fallbackCta}
        </a>
      </Button>
      {calendarUrl && <HostedCalendarLink href={calendarUrl} label={labels.openCalendar} location="booking_fallback" />}
    </div>
  );
}

export function CalEmbed({ labels, whatsappUrl }: CalEmbedProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EmbedStatus>("idle");

  const startLoading = useCallback(() => {
    setStatus((current) => (current === "idle" ? "loading" : current));
  }, []);
  const markReady = useCallback(() => setStatus("ready"), []);
  const markFailed = useCallback(() => setStatus("failed"), []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!CAL_LINK || !panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoading();
          observer.disconnect();
        }
      },
      { rootMargin: LOAD_MARGIN },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, [startLoading]);

  // Browsers can pause a cross-origin frame off screen, and a paused frame reports nothing,
  // so the clock only starts once the panel is on screen.
  useEffect(() => {
    const panel = panelRef.current;
    if (status !== "loading" || !panel) return;

    let timeout: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timeout = setTimeout(markFailed, LOAD_TIMEOUT_MS);
        observer.disconnect();
      }
    });
    observer.observe(panel);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [status, markFailed]);

  if (!CAL_LINK || !CAL_URL) {
    return <FallbackPanel labels={labels} whatsappUrl={whatsappUrl} />;
  }

  if (status === "failed") {
    return <FallbackPanel labels={labels} whatsappUrl={whatsappUrl} calendarUrl={CAL_URL} />;
  }

  return (
    <div ref={panelRef} className="relative min-h-[36rem] bg-ink text-paper">
      {status !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="font-mono text-label text-paper-dim">{labels.loading}</p>
          <HostedCalendarLink
            href={CAL_URL}
            label={labels.openCalendar}
            location="booking_panel"
            onFocus={startLoading}
          />
        </div>
      )}
      {status !== "idle" && (
        <CalErrorBoundary onError={markFailed}>
          <CalFrame calLink={CAL_LINK} isReady={status === "ready"} onReady={markReady} onFail={markFailed} />
        </CalErrorBoundary>
      )}
    </div>
  );
}
