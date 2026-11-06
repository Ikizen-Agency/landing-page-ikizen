# Offers

## Objective

Replace the "services we offer" content with offer packages, one per client type, starting with Ikizen Flow, each readable in full and priced by visitor region.

## Problem

The home and the `/services/web` and `/services/branding` pages describe generic services. The owner now sells concrete packages, and the Ikizen Flow offer (`Ikizen_Flow_Oferta.pdf`) is the first one.

## Why

A package aimed at one client type, with its process, price, payment terms and support, converts better than a list of services.

## Scope

- Single-source data file `src/i18n/offers.ts`, modeled on `src/i18n/projects.ts`: adding one entry makes the offer appear on the home, on its own page, in the footer and in the sitemap.
- Home: one card per offer (client type, promise, regional price, CTA) replaces the `Services` section, keeping the `#services` anchor working.
- One page per offer at `/offers/<slug>` and `/en/offers/<slug>` with the full content of the PDF, in Spanish and English.
- Regional price: `middleware.ts` reads `x-vercel-ip-country` and sets a `region` cookie; static HTML ships the international price and a small client component swaps in the regional one. Ikizen Flow: from $1,500 USD worldwide, from $700 USD in Cuba.
- `/services/web` and `/services/branding` (and `/en` counterparts) redirect to the offers.
- Projects flow: Ikizen Flow links to https://ikizen-flow.vercel.app/login and Brand Morph to https://brand-morph-chi.vercel.app/components.

## Constraints

- Match the existing visual system: warm editorial brutalism, brand tokens only, the shared section header pattern.
- Pages stay statically generated; region detection only adds request-time middleware.
- Generated copy and code in English; Spanish copy follows the PDF.

## Out of scope

- Further offers beyond Ikizen Flow.
- Detecting Cuban visitors behind a VPN: detection is by IP only.

## Decisions

- Owner decision: a card per offer on the home plus a full page per offer.
- Assumption, stated to the owner: the Cuba price is in USD ("from $700 USD").
- Owner decisions (T8): the studio boosts the client's digital presence through web design and development, and brand identity; custom business software such as Ikizen Flow counts as web development; social media is future work and stays off the site. The home process is the company-wide one and every offer shares its phase names (Discover · Design · Build · Launch), with Kaizen as the home-only fifth step. Portfolio demos are public. Ikizen Flow takes 4 to 8 weeks, works in Spanish or English, the result belongs to the client, and hosting and domain are not included. The 3 included support months cover project questions and bug fixes; new features, large changes and scope changes are quoted. After that, support is billed hourly with a 1-hour minimum: $25 USD/hour internationally and $1 USD/hour in Cuba, priced by region like the offer. Payment methods are undecided, so none is named.
- Delivery strategy: `exception-ok`. The site deploys from `main` without pull requests; the forecast exceeds 400 authored lines because data, page, home section and middleware depend on each other.

## Checks

- `mise x node@26.4.0 -- pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`.
- Production smoke after deploy: offer page 200 on both locales, old service URLs redirect, price swaps with a `region=CU` cookie.

## Tasks

- [x] T1 Project links to production URLs. Route: inline (one data file). Commit: `feat(portfolio): link projects to their production apps`. Checks: tsc and lint passed.
- [x] T2 Offer data model, offer pages, routes, sitemap, metadata and redirects from the service pages. Route: delegated (2+ non-trivial files). Commit: `feat(offers): add offer pages from a single data source and retire the service pages`. Checks: tsc and lint passed; build prerendered `/offers/ikizen-flow` and `/en/offers/ikizen-flow` (SSG). About 675 added and 655 removed lines: most of the removal is the two service pages' copy, most of the addition is the bilingual offer copy, which cannot be split without leaving an offer page half written. The footer column already lists offers here, because removing the service routes would otherwise leave it broken; the home Services blocks lose their links until T3 replaces them.
- [x] T3 Home offer cards replace the Services section; nav, footer and structured data follow the offers. Route: delegated (2+ non-trivial files). Commit: `feat(offers): show offer cards on the home page in place of the services`. Checks: tsc and lint passed. The section anchor is `#offers`, with an empty `#services` target kept so old links still land on it; nav and mobile menu read "Ofertas"/"Offers". Offer CTAs track `offer_card` and `offer_page` locations with the offer slug. Structured data needed no change: only the removed service pages described services.
- [x] T4 Regional pricing: middleware, region cookie and client price. Route: delegated (2+ non-trivial files). Commit: `feat(offers): show the visitor's regional offer price`. Checks: tsc and lint passed; build lists the middleware and keeps both offer pages SSG; `pnpm start` smoke: `/`, `/en`, both offer pages 200, `/offers/nope` 404, `/services/web` and `/en/services/branding` 308 to `/#offers` and `/en#offers`, home HTML has "Ikizen Flow" and `$1,500 USD`; `x-vercel-ip-country: cu` returns `set-cookie: region=CU; Path=/; Max-Age=2592000; SameSite=lax`, no cookie when it already matches or on `robots.txt` and `/og/es`. Playwright (Chromium) at 1440px and 360px on `/` and both offer pages: no horizontal overflow, no console errors, `$1,500 USD` by default and `$700 USD` with a `region=CU` cookie or `?region=cu`.
- [x] T5 Deploy to production and smoke check. Route: inline. `feat/offers` fast-forwarded into `main` at 11146e4; GitHub run 42114039108 passed check and deploy. Production: `/`, `/en` and both offer pages 200, `/offers/nope` 404, `/services/web` 308 to `/#offers`, `/en/services/branding` 308 to `/en#offers`, the home ships `$1,500 USD` and both production project links, and the middleware set `region=US` from Vercel's header. Not checked: a real visit from a Cuban IP.

- [x] T6 Owner feedback: shorter CTAs and everything the offer includes on the home card. Route: inline (small edits). The closing CTAs on the home and the offer page were full-width bars (190px and 155px tall, 82px and 51px type); both are now a regular ink button. The offer CTA reads "Diagnóstico gratis" / "Free diagnosis", and the home card lists the seven inclusions from the PDF: free diagnosis meeting, preliminary design, custom development, testing, rollout, 3 months of support and the 30/70 payment. Commit: `feat(offers): list what each offer includes and calm the booking CTAs`. Checks: tsc and lint passed; on the dev server at 1440px and 360px, `/` and `/offers/ikizen-flow` had no horizontal overflow and no console errors, closing CTA 290x60, screenshots reviewed.

- [x] T7 Home closing copy follows the offers. Route: inline. The eyebrow reads "Diagnóstico sin costo" / "Free diagnosis" and the support line drops the old web and brand services. Commit: `feat(copy): align the home closing with the offers`. Checks: tsc and lint passed; production shows the new copy after deploy.

- [x] T8 Owner feedback: positioning, one shared process and the remaining offer terms. Route: delegated (2+ non-trivial files). Commits: c3c1c12 `feat(copy): position the studio on digital presence and share the process phases` (hero descriptor, home meta and OG copy, home steps rewritten company-wide with a `phase` label per step); 24be6c7 `feat(offers): add timeline, ownership and support terms to the offer` (`supportRate` on the offer, rendered by `OfferPrice` with a per-hour suffix; a Terms block and the hourly rate in the investment section; the home card summary at eight lines with timeline and ownership; the demos note links to the projects section; README documents `supportRate`). The offer page's process already used the shared phases and was left unchanged. Checks: tsc and lint passed after each commit; on the dev server at 1440px and 360px, `/`, `/en` and both offer pages had no horizontal overflow and no console errors; the support rate read `$25 USD / hora` and `$25 USD / hour` by default (also in the static HTML) and `$1 USD` with a `region=CU` cookie, where the offer price read `$700 USD`; the demos note links to `/#projects` and `/en#projects`; screenshots of the home offers and process and the offer investment and closing reviewed. Not run: `pnpm build`, left to the deploy check.

- [x] T9 Shorter home title for search results. Route: inline. ES "Diseño web y de marca que impulsa tu negocio | Ikizen Studio" (60 characters), EN "Web Design & Branding That Grows Your Business | Ikizen Studio" (62), so Google no longer cuts the brand. Commit: `feat(seo): shorten the home title for search results`. Checks: tsc and lint passed. T8 was reviewed with one reliability lens, consent granted, approved and acknowledged with one non-blocking suggestion on `OfferPrice.tsx`.

- [x] T10 Second client walkthrough, point 5. Route: inline. The booking CTA reads "30 min gratis" / "Free 30 min", so the free call shows from the nav and hero; "Agenda gratis 30 min" was tried first and pushed the mobile menu button off screen at 360px (341-377), so the label stays as short as before. Ownership says the source code is included, on the offer page and the home card. Commit: `feat(copy): say the call is free and the source code is included`. Checks: tsc and lint passed; dev server with `NEXT_PUBLIC_CAL_LINK` set: no overflow and the menu button at 307-343 at 360px on `/` and `/en`, as in production; at 320px it ends at 322 and 314, against 336 in production before.

- [x] T11 Mobile audit, issues 1–5. Route: delegated (2+ non-trivial files). Commits: 4903f06 `fix(mobile): keep display headings and the header inside small screens` (the small ends of `display-lg` and `display-xl` drop to 2.125rem and 3rem with steeper slopes, so the large ends barely move; headings get `overflow-wrap: break-word` as a last resort; the navbar wordmark hides "studio" below 360px, its accessible name intact); ac3b93d `fix(a11y): give touch targets a 44px hit area` (a `hit-area` utility centers an invisible 44px box on buttons and inline links without moving them; footer links and social icons get real 44px rows below lg; "Ver proyecto" and the mobile menu's language link grow their padding); 03fd70d `perf(projects): respect Save-Data before loading project videos` (with `saveData` the video takes the reduced-motion path, poster and native controls, and the source is attached only when play is pressed); f784c11 `fix(offers): tighten the offer page on mobile` (below sm: 64px section padding, shorter gaps under headers and between the investment sub-blocks, Condiciones as a two-column grid from 360px, base-size body text in payment, terms and support; sm and up unchanged). Checks: tsc and lint passed; dev server with `NEXT_PUBLIC_CAL_LINK` set, mobile emulation at 320, 360 and 390 on `/`, `/en`, both offer pages and both legal pages: no horizontal overflow (the ES offer page was 343px wide at 320 before), no heading wider than its box and no word split, header logo-to-CTA gap 39 (ES) and 47 (EN) at 320 against 0 before, 20 and 28 at 360, menu button inside the viewport, no console errors. Offer page at 360 (ES): 11.88 screens before, 10.41 after (EN 11.35 to 9.79); investment 2.96 to 2.24 screens, "¿Qué incluye?" 2.03 to 1.78. Every interactive element reaches 44x44 except the email link inside the legal pages' text (211x22), which lives in `LegalPage.tsx`, outside this task's files. Save-Data emulated: no mp4 request on scroll, the mp4 loads and plays after play; without it the video autoplays as before. At 1440px the nav, offer card, offer investment section and footer pixel-match production apart from the logo sitting about 1px lower and the dev-only Next badge. Not run: `pnpm build`, left to the deploy check.

- [x] T12 MoneyForge in the projects flow, written by the owner. Route: inline (commit and deploy only). It links to the latest GitHub release APK, and GitHub release links read "Download for Android". Commit: `feat(portfolio): add MoneyForge with its Android download`. Checks: tsc and lint passed; the release `v0.1.0` exists and `releases/latest/download/moneyforge-full.apk` answers 200 with the APK (about 98 MB). Review: current-changes candidate, consent granted, approved and acknowledged with non-blocking advisories: the `/releases` substring would label any GitHub release link as an Android download, and `linkLabel` has no test.

## Progress

- Branch `feat/offers` created from `main`. RDD is on (global).
- Review: T1–T4 reviewed as one medium-risk slice (base `main` a84ed06, one reliability lens), consent granted, approved and acknowledged. The last reviewed boundary is 11146e4. Non-blocking advisories: price selection, region parsing and the middleware cookie have no automated tests; an invalid currency code would throw in `formatPrice`; `?region=CU` let anyone preview the Cuba price; removed at the owner's request in `fix(offers): drop the region query override`.
- Owner to confirm: CTA wording "Agenda tu diagnóstico sin costo" / "Book your free diagnosis" and the section labels above each offer section, which are not in the PDF.

## Next step

For the owner: review the T8 wording (positioning, process steps, terms and support block), confirm the CTA and section labels, decide the payment methods, and check the Cuba prices from a Cuban connection without a VPN.
