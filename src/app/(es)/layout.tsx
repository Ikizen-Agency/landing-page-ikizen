import { RootDocument, buildRootMetadata, rootViewport } from "@/app/_root/RootDocument";
import { getDictionary } from "@/i18n";

export const viewport = rootViewport;
export const metadata = buildRootMetadata(getDictionary("es"));

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
