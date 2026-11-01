import { buildPageMetadata } from "@/app/_root/RootDocument";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = buildPageMetadata("privacy", "es");

export default function PrivacyPage() {
  return <LegalPage locale="es" page="privacy" />;
}
