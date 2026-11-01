import { buildPageMetadata } from "@/app/_root/RootDocument";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata = buildPageMetadata("web", "es");

export default function WebDevelopmentPage() {
  return <ServicePage locale="es" service="web" />;
}
