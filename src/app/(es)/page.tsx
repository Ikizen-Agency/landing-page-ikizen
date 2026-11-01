import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage locale="es" />;
}
