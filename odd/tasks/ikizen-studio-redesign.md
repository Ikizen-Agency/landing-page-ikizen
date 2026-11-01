# Ikizen Studio redesign

## Objective

Turn the landing into a memorable, presentable site for Ikizen Studio with a clear call to book a meeting.

## Problem

The site looks like a template: no logo, no web font, emoji icons, generic copy, no scheduling, a fake newsletter, a blocking popup, and several SEO and accessibility defects.

## Why

An agency site is its own best sample of work. It must prove craft and turn visitors into booked meetings.

## Scope

- Rebrand "Ikizen Agency" to "Ikizen Studio".
- New visual system, editorial brutalist and warm, one signature interaction.
- Name concept: ikigai (reason for being) + kaizen (continuous improvement) = Ikizen.
- Home: Hero, What we do, How we work, Closing CTA with calendar.
- Spanish at `/`, English at `/en`.
- Remove: blog, testimonials from the UI, popup, newsletter, mailto form.
- Fix SEO, performance, accessibility, analytics events, deploy workflow.

## Constraints

- No public prices.
- Markets: Cuba (national) and international.
- No fabricated claims, clients, numbers or testimonials.
- Keep `Testimonial.tsx` for later use with real cases.
- The projects section stays hidden until the carousel task, but its slot is prepared.
- One archetype and one signature interaction; `prefers-reduced-motion` respected.
- Scheduling uses Cal.com through `NEXT_PUBLIC_CAL_LINK`, falling back to WhatsApp while unset.

## Out of scope

- Project carousel, about section, FAQ, public pricing, form backend, custom domain, company email.

## Delivery

- Strategy: `exception-ok`. A rebrand is one cohesive change, and it stays split into work-unit commits. Forecast exceeds 400 authored lines. Push and PR remain the user's decision.

## Checks

No test runner exists and adding one is out of scope, so there is no meaningful RED; this is a visual and content change.
Each task runs `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`, and an HTTP smoke of affected routes.

## Tasks

- [x] T1 Clean up: remove blog, popup, newsletter and dead code, redirect `/blog`, hide testimonials. Route: delegated (2+ non-trivial files). Commit: `refactor(site): remove blog, popup, newsletter and dead code`. Checks: tsc, lint, build, HTTP smoke passed. Build and smoke ran in an isolated copy to leave the dev server's `.next` untouched.
- [x] T2 Visual system: fonts, tokens, wordmark, favicon, OG image, rename. Route: delegated (2+ non-trivial files). Commit: `feat(brand): add Ikizen Studio visual system and identity`. Checks: tsc, lint, HTTP smoke against the dev server, and the rename search passed; build passed in an isolated copy. Contrast measured on ink: paper-dim 8.35:1, amber 9.68:1. Exceeds the 400-line heuristic because a rebrand touches every styled file; kept as one commit since old and new tokens cannot coexist.
- [x] T3 Home and i18n: new sections, signature interaction, Cal.com CTA, `/en`. Route: delegated (2+ non-trivial files). Commit: `feat(home): rebuild home around the ikigai and kaizen concept with booking and English`. Checks: tsc, lint, HTTP smoke against the dev server, and screenshots at 1440px and 360px passed; build and production smoke passed in an isolated copy. Exceeds the 400-line heuristic because locale routing, the home sections and the dictionaries depend on each other.
- [x] T3b Real logo and review advisories. Route: delegated (2+ non-trivial files). Commit: `feat(brand): use the real Ikizen logo and harden booking and 404 failure paths`. Checks: tsc, lint, build and production smoke passed in an isolated copy; navbar, footer, OG, 404 and favicon at 16px and 32px checked in screenshots; with `NEXT_PUBLIC_CAL_LINK` set, a blocked embed script, a failed lazy chunk and a live cal.com embed all behaved as intended.
- [ ] T4 Service and legal pages on the new system, in both languages. Route: delegated.
- [ ] T5 SEO, performance, accessibility and conversion events. Route: delegated.
- [ ] T6 Deploy workflow with pnpm and a real README. Route: delegated.

## Progress

- Branch `feat/ikizen-studio-redesign` created from `main`.
- T2 notes for later tasks: default Tailwind colors and radii are cleared, so only brand tokens generate. Service pages set the OG image explicitly because a page-level `openGraph` drops the inherited file-based one. Hero, Services and service sections are only re-skinned; emoji icons and the mailto form remain for T3 and T4.
- For T5: `StructuredData` still claims `addressCountry: ES`, `areaServed: Spain`, `foundingDate`, `numberOfEmployees` and a `/search` action that does not exist. Unverified, left unchanged.
- T3 notes for later tasks: Spanish routes live in `src/app/(es)`, English in `src/app/en`, and the shared shell in `src/app/_root/RootDocument.tsx`. `Navbar` and `Footer` take `locale` (default `es`) and the dictionaries carry the links, so T4 only points `en.ts` service and legal links at `/en` routes and extends the switcher. For T5: Spanish and English OG images exist; the GA snippet still renders with an unset `NEXT_PUBLIC_GA_ID`.
- T3b notes for later tasks: `experimental.globalNotFound` serves every unmatched URL from `src/app/global-not-found.tsx` with status 404 and server-rendered text. The path is unknown there, so the page is bilingual, and the per-locale `not-found.tsx` files and `NotFoundPage` were removed as unreachable; a page that calls `notFound()` must bring its own boundary. `Mark` takes no hooks because next/og renders it. For T5: `next build` warns that `metadataBase` is unset for the 404 page, whose inherited OG image resolves to the request host even when `metadataBase` is set on the page; the page is `noindex`.
- Engram mirror pending: writes fail with a host session registration error.

## Next step

Run T4.
