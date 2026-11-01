import { buildPageMetadata } from "@/app/_root/RootDocument";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = buildPageMetadata("terms", "en");

export default function TermsPage() {
  return <LegalPage locale="en" page="terms" />;
}
