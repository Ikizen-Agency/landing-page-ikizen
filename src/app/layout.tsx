import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ikizen Agency",
  description: "Agencia de Desarrollo Web e Identidad de Marca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-900 text-white"
      >
        {children}
      </body>
    </html>
  );
}
