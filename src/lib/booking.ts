/** Exactly `user/event`, so a pasted URL, an extra path or a typo cannot become a link. */
const CAL_LINK_PATTERN = /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i;

function hostedBookingUrl(calLink: string | undefined) {
  return calLink && CAL_LINK_PATTERN.test(calLink) ? `https://cal.com/${calLink}` : null;
}

/** Null while the variable is unset or invalid, which sends visitors to WhatsApp. */
export const BOOKING_URL = hostedBookingUrl(process.env.NEXT_PUBLIC_CAL_LINK);
