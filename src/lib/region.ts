/** The visitor's country, set by `src/middleware.ts` from the Vercel IP header. */
export const REGION_COOKIE = "region";

export const REGION_MAX_AGE = 60 * 60 * 24 * 30;

const REGION_PATTERN = /^[A-Z]{2}$/;

/** An ISO 3166-1 alpha-2 code in upper case, or null for anything else. */
export function normalizeRegion(value: string | null | undefined) {
  const region = value?.trim().toUpperCase();
  return region && REGION_PATTERN.test(region) ? region : null;
}

/** Browser only. Reads the region cookie; there is deliberately no URL override. */
export function readRegion() {
  const prefix = `${REGION_COOKIE}=`;
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(prefix))
    ?.slice(prefix.length);
  return normalizeRegion(cookie);
}
