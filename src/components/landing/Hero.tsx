// src/components/landing/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Columna de Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Tu marca, lista para <span className="text-secondary">dejar huella</span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl text-secondary/90">
              Construimos sitios que no solo funcionan, sino que cuentan tu historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                className="border border-secondary text-secondary text-gray-900 hover:bg-secondary hover:text-dark-bg px-6 py-3 rounded-lg transition-all duration-300"
              >
                <a href="mailto:ikizen.agency@gmail.com?subject=Agendar%20una%20cita&body=Hola,%20quisiera%20agendar%20una%20cita">
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="relative h-[70vh] w-[100%] lg:h-[80vh] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-dev.jpg"
            alt="Desarrollo web moderno - Ikizen Agency"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}