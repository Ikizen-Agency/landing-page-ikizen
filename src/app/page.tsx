// src/app/page.tsx
import Navbar from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description:
      "Bienvenido a Ikizen. Tu aliado en desarrollo web e identidad de marca.",
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AnimatedSection delay={150}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Services />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
