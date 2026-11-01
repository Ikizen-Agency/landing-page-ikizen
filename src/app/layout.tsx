import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { StructuredData, organizationStructuredData, websiteStructuredData } from "@/components/StructuredData";
import Script from "next/script"; // Importa el componente Script

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bricolage",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-instrument",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const viewport: Viewport = {
  themeColor: "#16120E",
};

export const metadata: Metadata = {
  title: {
    default: "Ikizen Studio | Desarrollo Web & Identidad de Marca",
    template: "%s | Ikizen Studio",
  },
  metadataBase: new URL("https://ikizen.vercel.app"),
  description: "Estudio de desarrollo web e identidad de marca. Creamos experiencias digitales que convierten y marcas que conectan.",
  keywords: ["desarrollo web", "identidad de marca", "estudio digital", "diseño web", "branding", "Next.js", "React", "impulso digital"],
  authors: [{ name: "Ikizen Studio" }],
  creator: "Ikizen Studio",
  publisher: "Ikizen Studio",
  openGraph: {
    title: "Ikizen Studio | Experiencias digitales que convierten",
    description: "Creamos sitios web y marcas memorables para empresas que quieren destacar.",
    url: "https://ikizen.vercel.app",
    siteName: "Ikizen Studio",
    type: "website",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
      <body className="bg-ink text-paper font-sans antialiased">
        {children}
        
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}