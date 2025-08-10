// src/app/page.tsx
import  Navbar  from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import  {Services}  from "@/components/landing/Services";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Testimonials } from "@/components/landing/Testimonial";
import InitialPopup from "@/components/landing/InitialPopup";

export default function Home() {
  return (
    <>
    <InitialPopup></InitialPopup>
      <Navbar />
      <main className="min-h-screen">
        <AnimatedSection delay={150}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Services/>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <Testimonials/>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}