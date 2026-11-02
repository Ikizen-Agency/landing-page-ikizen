# SEO checklist for Ikizen Studio

The site lives at `https://ikizen.vercel.app` until a custom domain exists. `SITE_URL` in `src/i18n/routes.ts` is the one place to change it.

## In place

### Crawling

- [x] `src/app/robots.ts` allows everything, `/_next/` included, and points to the sitemap
- [x] `src/app/sitemap.ts` lists the 10 pages, Spanish and English
- [x] `src/i18n/routes.ts` is the single map of es/en page pairs
- [x] Unknown URLs return a real 404 with text, marked `noindex`
- [x] `/blog` and `/blog/*` redirect to the home page

### Metadata

- [x] `metadataBase`, title template, description and canonical on every page
- [x] Home and service pages have unique titles near 60 characters and descriptions near 155, in Spanish and English, aimed at web design, web development and brand identity searches
- [x] The audience is international first, with Cuba as one served market and no location claim
- [x] `hreflang` alternates with `x-default` on every page
- [x] Open Graph and Twitter tags with absolute URLs, one image per language at `/og/es` and `/og/en`
- [x] `site.webmanifest`, SVG favicon and Apple icon

### Structured data

- [x] Plain JSON-LD in the raw HTML: Organization and WebSite on every page, Service on the two service pages
- [x] `areaServed` is Cuba and worldwide
- [x] `sameAs` holds only the Facebook and LinkedIn links in the footer
- [x] No address, founding date, staff count or search action, because none can be verified

### Analytics

- [x] Google Analytics loads only when `NEXT_PUBLIC_GA_ID` is set
- [x] Conversion events: `book_cta_click`, `whatsapp_click`, `project_click`, `language_switch`
- [x] Bookings happen on the hosted Cal.com page, which cannot report to the site. Measuring them would need a redirect back from Cal.com or a webhook

### Performance and accessibility

- [x] Self-hosted fonts through `next/font`, security headers, compression
- [x] Skip link, one visible focus style, named icon links, keyboard-ready mobile menu

## Owner to do

- [ ] Set `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_CAL_LINK`
- [ ] Mark `book_cta_click` as a key event in Google Analytics
- [ ] Confirm Search Console ownership, `public/googlef8f3116cca00f1cc.html` is the verification file
- [ ] Submit `https://ikizen.vercel.app/sitemap.xml` in Search Console
- [ ] Add a logo in PNG format to JSON-LD if Google ignores the SVG one
- [ ] Update `SITE_URL` when the custom domain exists

## Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
