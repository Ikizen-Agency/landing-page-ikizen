import { NextResponse, type NextRequest } from "next/server";
import { normalizeRegion, REGION_COOKIE, REGION_MAX_AGE } from "@/lib/region";

/**
 * Remembers the visitor's country for regional offer prices. It only adds a cookie, so pages
 * stay static: the price swap happens in the browser, in `OfferPrice`.
 */
export function middleware(request: NextRequest) {
  const region = normalizeRegion(request.headers.get("x-vercel-ip-country"));
  const response = NextResponse.next();

  if (region && request.cookies.get(REGION_COOKIE)?.value !== region) {
    // Not httpOnly: `OfferPrice` reads it in the browser.
    response.cookies.set(REGION_COOKIE, region, { path: "/", sameSite: "lax", maxAge: REGION_MAX_AGE });
  }
  return response;
}

/** Pages only: no build assets, API, social images, or files, `robots.txt` and `sitemap.xml` included. */
export const config = {
  matcher: ["/((?!_next/|api/|og/|assets/|.*\\..*).*)"],
};
