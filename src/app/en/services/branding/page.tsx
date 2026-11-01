import { buildPageMetadata } from "@/app/_root/RootDocument";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata = buildPageMetadata("branding", "en");

export default function BrandingPage() {
  return <ServicePage locale="en" service="branding" />;
}
