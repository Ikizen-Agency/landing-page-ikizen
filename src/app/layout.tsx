import type { Metadata } from "next";
import "./globals.css";
import "../styles/prose.css";
import { StructuredData, organizationStructuredData, websiteStructuredData } from "@/components/StructuredData";
import Script from "next/script"; // Importa el componente Script

export const metadata: Metadata = {
  title: {
    default: "Ikizen Agency | Desarrollo Web & Identidad de Marca",
    template: "%s | Ikizen Agency",
  },
  metadataBase: new URL("https://ikizen.vercel.app"),
  description: "Agencia de desarrollo web e identidad de marca. Creamos experiencias digitales que convierten y marcas que conectan.",
  keywords: ["desarrollo web", "identidad de marca", "agencia digital", "diseño web", "branding", "Next.js", "React", "impulso digital"],
  authors: [{ name: "Ikizen Agency" }],
  creator: "Ikizen Agency",
  publisher: "Ikizen Agency",
  openGraph: {
    title: "Ikizen Agency | Experiencias digitales que convierten",
    description: "Creamos sitios web y marcas memorables para empresas que quieren destacar.",
    url: "https://ikizen.vercel.app",
    siteName: "Ikizen Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ikizen Agency - Desarrollo Web & Branding",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
    <html lang="es">
      <head>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
      <body className="bg-gray-900 text-white">
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