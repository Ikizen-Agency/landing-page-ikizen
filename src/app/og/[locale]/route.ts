import { renderOgImage } from "@/components/brand/renderOgImage";
import { getDictionary, type Locale } from "@/i18n";

export const dynamic = "force-static";
export const dynamicParams = false;

const LOCALES: Locale[] = ["es", "en"];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * A route, not the `opengraph-image` file convention: a file at the app root leaks into
 * the 404 page, where it resolves against the host instead of `metadataBase`.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderOgImage(getDictionary(locale).meta.ogTagline);
}
