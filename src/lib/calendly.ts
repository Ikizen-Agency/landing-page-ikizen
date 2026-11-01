const CALENDLY_ORIGIN = "https://calendly.com";

export const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";

/** Calendly takes literal colors without the hash, so these repeat the ink, paper and amber tokens. */
const WIDGET_PARAMS = {
  hide_gdpr_banner: "1",
  background_color: "16120e",
  text_color: "f3eadb",
  primary_color: "f4ad46",
};

/** Keeps only an https link to a page on calendly.com, so a typo cannot embed another site. */
function parseCalendlyUrl(value: string | undefined) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const hasCredentials = url.username !== "" || url.password !== "";
    const isCalendlyPage = url.origin === CALENDLY_ORIGIN && url.pathname !== "/";
    return isCalendlyPage && !hasCredentials ? url.href : undefined;
  } catch {
    return undefined;
  }
}

/** Undefined while the variable is unset or invalid, which sends visitors to WhatsApp. */
export const CALENDLY_URL = parseCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL);

export function calendlyEmbedUrl(calendlyUrl: string) {
  const url = new URL(calendlyUrl);
  for (const [name, value] of Object.entries(WIDGET_PARAMS)) {
    url.searchParams.set(name, value);
  }
  return url.href;
}

/** The event name of a message from Calendly. Messages from any other origin return undefined. */
export function calendlyEventName(message: MessageEvent<unknown>) {
  if (message.origin !== CALENDLY_ORIGIN) return undefined;

  const data = message.data as { event?: unknown } | null;
  return typeof data?.event === "string" ? data.event : undefined;
}
