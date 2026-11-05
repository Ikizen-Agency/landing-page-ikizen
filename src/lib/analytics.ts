import type { Locale } from "@/i18n";

/** Where a CTA sits on the page, so its clicks compare across sections. */
export type TrackLocation = "nav" | "hero" | "offer_card" | "offer_page" | "closing" | "footer";

type EventParams = {
  /** `offer` is the slug, set on the CTAs that belong to one offer. */
  book_cta_click: { location: TrackLocation; offer?: string };
  whatsapp_click: { location: TrackLocation; offer?: string };
  project_click: { project: string };
  language_switch: { from: Locale; to: Locale };
};

type AnalyticsEvent = keyof EventParams;

declare global {
  interface Window {
    /** Defined by the GA snippet, which only renders when `NEXT_PUBLIC_GA_ID` is set. */
    gtag?: (command: "event", event: string, params: Record<string, string>) => void;
  }
}

export function track<Event extends AnalyticsEvent>(event: Event, params: EventParams[Event]) {
  window.gtag?.("event", event, params);
}

/** Spread on any link, including in server components; `TrackClicks` picks up the click. */
export function trackAttrs<Event extends AnalyticsEvent>(event: Event, params: EventParams[Event]) {
  const attributes: Record<`data-track${string}`, string> = { "data-track": event };
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) attributes[`data-track-${key}`] = value;
  }
  return attributes;
}

/** Sends the event that `trackAttrs` wrote onto this element. */
export function trackElement(element: HTMLElement) {
  const { track: event, ...dataset } = element.dataset;
  if (!event) return;

  const params = Object.fromEntries(
    Object.entries(dataset)
      .filter(([key]) => key.startsWith("track"))
      .map(([key, value]) => [key.slice("track".length).toLowerCase(), value ?? ""]),
  );
  window.gtag?.("event", event, params);
}
