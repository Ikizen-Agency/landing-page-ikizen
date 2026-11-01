import { buildPageMetadata } from "@/app/_root/RootDocument";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = buildPageMetadata("terms", "es");

export default function TermsPage() {
  return <LegalPage locale="es" page="terms" />;
}
