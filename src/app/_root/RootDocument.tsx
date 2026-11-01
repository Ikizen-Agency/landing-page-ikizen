import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { StructuredData, organizationStructuredData, websiteStructuredData } from "@/components/StructuredData";
import type { Dictionary, Locale } from "@/i18n";

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

const SITE_URL = "https://ikizen.vercel.app";

export const rootViewport: Viewport = {
  themeColor: "#16120E",
};

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
      // Layouts sit below the app root, so an inherited file-based image would be dropped.
      images: [locale === "en" ? "/en/opengraph-image" : "/opengraph-image"],
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
  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
      <body className="bg-ink text-paper font-sans antialiased">
        {children}

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
