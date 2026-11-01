import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
