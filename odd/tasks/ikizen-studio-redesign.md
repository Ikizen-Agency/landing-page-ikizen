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
- [ ] T2 Visual system: fonts, tokens, wordmark, favicon, OG image, rename. Route: delegated.
- [ ] T3 Home and i18n: new sections, signature interaction, Cal.com CTA, `/en`. Route: delegated.
- [ ] T4 Service and legal pages on the new system, in both languages. Route: delegated.
- [ ] T5 SEO, performance, accessibility and conversion events. Route: delegated.
- [ ] T6 Deploy workflow with pnpm and a real README. Route: delegated.

## Progress

- Branch `feat/ikizen-studio-redesign` created from `main`.
- Engram mirror pending: writes fail with a host session registration error.

## Next step

Run T2.
