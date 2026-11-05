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
- Delivery strategy: `exception-ok`. The site deploys from `main` without pull requests; the forecast exceeds 400 authored lines because data, page, home section and middleware depend on each other.

## Checks

- `mise x node@26.4.0 -- pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`.
- Production smoke after deploy: offer page 200 on both locales, old service URLs redirect, price swaps with a `region=CU` cookie.

## Tasks

- [x] T1 Project links to production URLs. Route: inline (one data file). Commit: `feat(portfolio): link projects to their production apps`. Checks: tsc and lint passed.
- [x] T2 Offer data model, offer pages, routes, sitemap, metadata and redirects from the service pages. Route: delegated (2+ non-trivial files). Commit: `feat(offers): add offer pages from a single data source and retire the service pages`. Checks: tsc and lint passed; build prerendered `/offers/ikizen-flow` and `/en/offers/ikizen-flow` (SSG). About 675 added and 655 removed lines: most of the removal is the two service pages' copy, most of the addition is the bilingual offer copy, which cannot be split without leaving an offer page half written. The footer column already lists offers here, because removing the service routes would otherwise leave it broken; the home Services blocks lose their links until T3 replaces them.
- [x] T3 Home offer cards replace the Services section; nav, footer and structured data follow the offers. Route: delegated (2+ non-trivial files). Commit: `feat(offers): show offer cards on the home page in place of the services`. Checks: tsc and lint passed. The section anchor is `#offers`, with an empty `#services` target kept so old links still land on it; nav and mobile menu read "Ofertas"/"Offers". Offer CTAs track `offer_card` and `offer_page` locations with the offer slug. Structured data needed no change: only the removed service pages described services.
- [ ] T4 Regional pricing: middleware, region cookie and client price. Route: delegated (2+ non-trivial files).
- [ ] T5 Deploy to production and smoke check.

## Progress

- Branch `feat/offers` created from `main`. RDD is on (global).

## Next step

T2.
