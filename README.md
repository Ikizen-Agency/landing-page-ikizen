# Ikizen Studio

The marketing site of Ikizen Studio, a web development and brand identity studio. It is bilingual, Spanish at `/` and English at `/en`, and it exists to turn visitors into booked meetings.

## Quick start

Requires Node 24 (see `.nvmrc`) and pnpm 11 (see `packageManager` in `package.json`).

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at <http://localhost:3000>. Both variables are optional, so it works with an empty `.env.local`.

## Stack

| Area | Choice |
|------|--------|
| Framework | Next.js 15 with the App Router, React 19 |
| Styling | Tailwind CSS 4, tokens in `src/app/globals.css` |
| Booking | Hosted Cal.com page, opened in a new tab |
| Analytics | Google Analytics 4, optional |

## Environment variables

| Variable | Example | While unset |
|----------|---------|-------------|
| `NEXT_PUBLIC_CAL_LINK` | `ikizen-qxevvr/meet-30min` | Booking CTAs go to WhatsApp, as they do for anything other than a `user/event` slug |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | No analytics script loads and events do nothing |

Both are read at build time, so changing one requires a new build.

## Structure

| Path | Holds |
|------|-------|
| `src/app/(es)`, `src/app/en` | Pages and root layout of each language |
| `src/app/_root` | The HTML shell and metadata both languages share |
| `src/app/og` | Social sharing images |
| `src/components` | Sections, service and legal pages, booking, brand |
| `src/i18n` | All copy, contact details and the map of page pairs |
| `src/lib/analytics.ts` | Conversion events |
| `src/lib/booking.ts` | The hosted booking URL |
| `odd/tasks` | Feature documents |

## Common changes

### Replace the temporary project links

Two projects still link to their GitHub repositories. To replace them:

1. Open `src/i18n/projects.ts`.
2. Change `href` on each project to the live URL.

The link label follows the URL: anything outside `github.com` reads "View project". Remove the `TODO` above the list when both are done.

### Track a new link

Spread `trackAttrs` on the link, in server components too:

```tsx
<a href={whatsappUrl} {...trackAttrs("whatsapp_click", { location: "hero" })}>
```

New events and locations are declared in `src/lib/analytics.ts`. Booking CTAs use `BookingLink`, which tracks itself.

The site records `book_cta_click`, not completed bookings: those happen on the hosted Cal.com page, which cannot report back. Measuring them would need Cal.com to redirect to the site after booking, or a webhook.

### Change the domain

Update `SITE_URL` in `src/i18n/routes.ts`. Metadata, the sitemap, `robots.txt` and structured data all read it.

## Checks

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

There is no test runner yet.

## Deploy

`.github/workflows/deploy-vercel.yml` runs on every push:

| Branch | Result |
|--------|--------|
| `main` | Checks, then a production deployment |
| `staging` | Checks, then a preview deployment |

It needs this repository configuration on GitHub:

| Kind | Name | Required |
|------|------|----------|
| Secret | `VERCEL_TOKEN` | Yes |
| Variable | `NEXT_PUBLIC_CAL_LINK` | No |
| Variable | `NEXT_PUBLIC_GA_ID` | No |
