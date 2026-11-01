import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { TrackClicks } from "@/components/analytics/TrackClicks";
import { ogImageSize } from "@/components/brand/renderOgImage";
import { JsonLd, organizationStructuredData, websiteStructuredData } from "@/components/StructuredData";
import { getDictionary, routes, SITE_URL, type Dictionary, type Locale, type RouteKey } from "@/i18n";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bricolage",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-instrument",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;

export const rootViewport: Viewport = {
  themeColor: "#16120E",
};

function ogImage(locale: Locale) {
  return { url: `/og/${locale}`, ...ogImageSize, type: "image/png", alt: getDictionary(locale).meta.ogImageAlt };
}

export function pageAlternates(route: RouteKey, locale: Locale): Metadata["alternates"] {
  const { es, en } = routes[route];
  return {
    canonical: routes[route][locale],
    languages: { es, en, "x-default": es },
  };
}

/** A page-level `openGraph` replaces the layout's, so it restates site name and image. */
export function buildPageMetadata(route: Exclude<RouteKey, "home">, locale: Locale): Metadata {
  const { title, description, keywords } = getDictionary(locale).pages[route].meta;
  const socialTitle = `${title} | Ikizen Studio`;
  const images = [ogImage(locale)];

  return {
    title,
    description,
    keywords,
    alternates: pageAlternates(route, locale),
    openGraph: {
      title: socialTitle,
      description,
      url: routes[route][locale],
      siteName: "Ikizen Studio",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images,
    },
  };
}

export function buildRootMetadata(dict: Dictionary): Metadata {
  const { meta, locale, nav } = dict;
  return {
    title: {
      default: meta.title,
      template: "%s | Ikizen Studio",
    },
    metadataBase: new URL(SITE_URL),
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Ikizen Studio" }],
    creator: "Ikizen Studio",
    publisher: "Ikizen Studio",
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: nav.homeHref,
      siteName: "Ikizen Studio",
      type: "website",
      images: [ogImage(locale)],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Shared <html> shell for the per-locale root layouts. */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const { meta, nav } = getDictionary(locale);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <JsonLd data={organizationStructuredData(meta.description)} />
        <JsonLd data={websiteStructuredData(meta.description, locale)} />
      </head>
      <body className="bg-ink text-paper font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-60 focus:bg-amber focus:px-4 focus:py-2 focus:font-medium focus:text-ink"
        >
          {nav.skipToContent}
        </a>
        {children}
        <TrackClicks />

        {gaId && (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${JSON.stringify(gaId)});
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
