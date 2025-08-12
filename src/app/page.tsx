// src/app/page.tsx
import Navbar from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Testimonials } from "@/components/landing/Testimonial";
import InitialPopup from "@/components/landing/InitialPopup";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Inicio | Ikizen Agency",
    description: "Bienvenido a Ikizen Agency. Tu aliado en desarrollo web e identidad de marca.",
  };
}

export default function Home() {
  return (
    <>
      <InitialPopup></InitialPopup>
      <Navbar />
      <main
        className="min-h-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 70%, #f4ad4620, transparent 40%), radial-gradient(circle at 80% 20%, #fde09520, transparent 40%)",
        }}
      >
        <AnimatedSection delay={150}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Services />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <Testimonials />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
