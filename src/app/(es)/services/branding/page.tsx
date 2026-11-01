import { buildPageMetadata } from "@/app/_root/RootDocument";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata = buildPageMetadata("branding", "es");

export default function BrandingPage() {
  return <ServicePage locale="es" service="branding" />;
}
