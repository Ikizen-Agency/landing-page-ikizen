/** Exactly `user/event`, so a pasted URL, an extra path or a typo cannot reach the embed. */
const CAL_LINK_PATTERN = /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i;

function parseCalLink(value: string | undefined) {
  return value && CAL_LINK_PATTERN.test(value) ? value : undefined;
}

/** Undefined while the variable is unset or invalid, which sends visitors to WhatsApp. */
export const CAL_LINK = parseCalLink(process.env.NEXT_PUBLIC_CAL_LINK);

export const CAL_URL = CAL_LINK && `https://cal.com/${CAL_LINK}`;
