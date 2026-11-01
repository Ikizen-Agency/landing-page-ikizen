import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";
import Link from "next/link";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const { notFound, nav } = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="flex min-h-svh flex-col justify-center px-gutter pt-16">
        <div className="mx-auto w-full max-w-site">
          <p className="font-mono text-label uppercase text-amber">{notFound.eyebrow}</p>
          <h1 className="mt-4 text-display-lg font-bold">{notFound.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-paper-dim">{notFound.support}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href={nav.homeHref}>{notFound.homeCta}</Link>
          </Button>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
