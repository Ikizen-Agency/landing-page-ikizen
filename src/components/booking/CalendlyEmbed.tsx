"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import { track, trackAttrs, type TrackLocation } from "@/lib/analytics";
import { CALENDLY_SCRIPT_URL, CALENDLY_URL, calendlyEmbedUrl, calendlyEventName } from "@/lib/calendly";

/** Starts loading the widget a little before the calendar scrolls into view. */
const LOAD_MARGIN = "600px";
/** Generous for slow connections; the calendar link stays usable while it waits. */
const LOAD_TIMEOUT_MS = 15_000;

type EmbedStatus = "idle" | "loading" | "ready" | "failed";

type CalendlyEmbedProps = {
  labels: Dictionary["booking"];
  whatsappUrl: string;
};

declare global {
  interface Window {
    /** Defined by Calendly's widget script once it runs. */
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

/** Adds the widget script once per page. The returned function drops this caller's listeners. */
function loadWidgetScript(onLoad: () => void, onError: () => void) {
  if (window.Calendly) {
    onLoad();
    return () => {};
  }

  let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_URL}"]`);
  if (!script) {
    script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    document.head.append(script);
  }

  const loadedScript = script;
  const handleError = () => {
    // A failed tag never fires again, so a later mount has to start with a new one.
    loadedScript.remove();
    onError();
  };
  loadedScript.addEventListener("load", onLoad);
  loadedScript.addEventListener("error", handleError);

  return () => {
    loadedScript.removeEventListener("load", onLoad);
    loadedScript.removeEventListener("error", handleError);
  };
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
}: CalendlyEmbedProps & {
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

export function CalendlyEmbed({ labels, whatsappUrl }: CalendlyEmbedProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EmbedStatus>("idle");
  const isEmbedding = status === "loading" || status === "ready";

  const startLoading = useCallback(() => {
    setStatus((current) => (current === "idle" ? "loading" : current));
  }, []);
  const markReady = useCallback(() => setStatus("ready"), []);
  const markFailed = useCallback(() => setStatus("failed"), []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!CALENDLY_URL || !panel) return;

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

  // Browsers pause a cross-origin frame off screen, and Calendly sends nothing while paused,
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

  useEffect(() => {
    const widget = widgetRef.current;
    if (!CALENDLY_URL || !isEmbedding || !widget) return;
    const embedUrl = calendlyEmbedUrl(CALENDLY_URL);

    const handleMessage = (message: MessageEvent<unknown>) => {
      const event = calendlyEventName(message);
      if (event === "calendly.event_type_viewed" || event === "calendly.profile_page_viewed") {
        markReady();
      } else if (event === "calendly.event_scheduled") {
        // The payload names the invitee, so only the fact of the booking leaves this handler.
        track("booking_completed", {});
      }
    };
    window.addEventListener("message", handleMessage);

    const embedWidget = () => {
      try {
        window.Calendly?.initInlineWidget({ url: embedUrl, parentElement: widget });
      } catch {
        markFailed();
      }
    };
    const stopWaitingForScript = loadWidgetScript(embedWidget, markFailed);

    return () => {
      window.removeEventListener("message", handleMessage);
      stopWaitingForScript();
      widget.replaceChildren();
    };
  }, [isEmbedding, markReady, markFailed]);

  if (!CALENDLY_URL) {
    return <FallbackPanel labels={labels} whatsappUrl={whatsappUrl} />;
  }

  if (status === "failed") {
    return <FallbackPanel labels={labels} whatsappUrl={whatsappUrl} calendarUrl={CALENDLY_URL} />;
  }

  return (
    <div ref={panelRef} className="relative h-[54rem] bg-ink sm:h-[64rem] xl:h-[46rem] text-paper">
      {status !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="font-mono text-label text-paper-dim">{labels.loading}</p>
          <HostedCalendarLink
            href={CALENDLY_URL}
            label={labels.openCalendar}
            location="booking_panel"
            onFocus={startLoading}
          />
        </div>
      )}
      {/* Transparent rather than `invisible`: Calendly never renders in a visibility:hidden frame. */}
      {status !== "idle" && (
        <div
          ref={widgetRef}
          inert={status !== "ready"}
          className={`absolute inset-0 overflow-hidden [color-scheme:light] [&>iframe]:block ${status === "ready" ? "" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
