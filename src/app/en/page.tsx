import type { Metadata } from "next";
import { pageAlternates } from "@/app/_root/RootDocument";
import { HomePage } from "@/components/landing/HomePage";

export const metadata: Metadata = {
  alternates: pageAlternates("home", "en"),
};

export default function Home() {
  return <HomePage locale="en" />;
}
