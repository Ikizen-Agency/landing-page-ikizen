import { buildPageMetadata } from "@/app/_root/RootDocument";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = buildPageMetadata("privacy", "en");

export default function PrivacyPage() {
  return <LegalPage locale="en" page="privacy" />;
}
