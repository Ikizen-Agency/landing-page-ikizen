import { OfferPage, offerMetadata, offerStaticParams } from "@/components/offers/OfferPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = offerStaticParams;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return offerMetadata(slug, "es");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <OfferPage locale="es" slug={slug} />;
}
