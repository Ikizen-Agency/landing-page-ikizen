import { RootDocument, buildRootMetadata, rootViewport } from "@/app/_root/RootDocument";
import { getDictionary } from "@/i18n";

export const viewport = rootViewport;
export const metadata = buildRootMetadata(getDictionary("en"));

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
