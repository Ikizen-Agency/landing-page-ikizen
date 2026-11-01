import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables, rootViewport } from "@/app/_root/RootDocument";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/button";
import { getDictionary, SITE_URL, type Locale } from "@/i18n";

export const viewport = rootViewport;
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 | Ikizen Studio",
  robots: { index: false, follow: true },
};

function NotFoundMessage({ locale, heading: Heading }: { locale: Locale; heading: "h1" | "h2" }) {
  const { notFound, nav } = getDictionary(locale);

  return (
    <section lang={locale}>
      <p className="font-mono text-label uppercase text-amber">{notFound.eyebrow}</p>
      <Heading className="mt-4 text-display-md font-bold">{notFound.title}</Heading>
      <p className="mt-6 max-w-xl text-lg text-paper-dim">{notFound.support}</p>
      <Button asChild size="lg" className="mt-8">
        <Link href={nav.homeHref}>{notFound.homeCta}</Link>
      </Button>
    </section>
  );
}

/** The path is unknown here, so this page speaks both languages instead of guessing one. */
export default function GlobalNotFound() {
  return (
    <html lang="es" className={fontVariables}>
      <body className="bg-ink text-paper font-sans antialiased">
        <main className="flex min-h-svh flex-col justify-center px-gutter py-section">
          <div className="mx-auto w-full max-w-site">
            <Link href="/" className="inline-block">
              <Wordmark />
            </Link>
            <div className="mt-16 grid gap-16 md:grid-cols-2">
              <NotFoundMessage locale="es" heading="h1" />
              <NotFoundMessage locale="en" heading="h2" />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
