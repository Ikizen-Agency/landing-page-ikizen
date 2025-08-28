// src/components/landing/Hero.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [isBrand, setIsBrand] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Tu marca, lista para <span className="text-secondary">dejar huella</span>
          </h1>

          {/* Contenido dinámico con transición */}
          <div className="space-y-4 relative h-24">
            {!isBrand ? (
              <div
                key="dev"
                className="absolute inset-0 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100"
              >
                <p className="text-xl text-secondary/90">
                  Construimos sitios que no solo funcionan, sino que cuentan tu historia.
                </p>
                <Button
                  onClick={() => setIsBrand(true)}
                  className="border border-primary text-gray-900 hover:bg-primary group mt-5group mt-2 flex items-center text-sm font-medium bg-primary px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Ver identidad de marca"
                >
                  <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform " />
                  Continuar
                </Button>
              </div>
            ) : (
              <div
                key="brand"
                className="absolute inset-0 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100"
              >
                <p className="text-xl text-secondary/90">
                  Diseñamos identidades que no se olvidan, porque nacen de tu esencia.
                </p>
                <Button
                  asChild
                  className="bg-secondary text-dark-bg hover:bg-secondary/90 px-8 py-6 text-lg mt-2"
                >
                  <a href="mailto:ikizen.agency@gmail.com?subject=Agendar%20una%20cita&body=Hola,%20quisiera%20agendar%20una%20cita">Contáctanos</a>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Columna de Imagen con transición */}
        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isBrand ? "opacity-0 -translate-x-4" : "opacity-100"
            }`}
          >
            <Image
              src="/images/hero-dev.jpg"
              alt="Desarrollo web moderno"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isBrand ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <Image
              src="/images/hero-brand.jpg"
              alt="Diseño de identidad de marca"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}