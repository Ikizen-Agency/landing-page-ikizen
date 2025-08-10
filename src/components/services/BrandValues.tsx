// src/components/services/BrandValues.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const values = [
  {
    icon: "🧠",
    title: "Autenticidad",
    description: "Tu marca debe ser fiel a quién eres, no a lo que crees que deberías ser.",
  },
  {
    icon: "🎯",
    title: "Claridad",
    description: "Una identidad fuerte comunica tu propósito en segundos, sin ambigüedades.",
  },
  {
    icon: "❤️",
    title: "Conexión",
    description: "Las mejores marcas no venden productos, crean relaciones humanas.",
  },
  {
    icon: "📐",
    title: "Consistencia",
    description: "La coherencia visual genera confianza y reconocimiento a largo plazo.",
  },
];

export function BrandValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  return (
    <section className="max-w-6xl mx-auto mb-32 px-4 relative">
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Nuestros valores de diseño
        </h2>
        <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
          No solo creamos logos. Creamos identidades con propósito.
        </p>
      </div>

      {/* Contenedor del carrusel */}
      <div className="relative max-w-4xl mx-auto">
                {/* Botones de navegación - Diseño premium */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark-bg/60 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 group transition-all duration-300"
          onClick={prev}
          aria-label="Valor anterior"
        >
          <ChevronLeft className="h-5 w-5 text-primary group-hover:-translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark-bg/60 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 group transition-all duration-300"
          onClick={next}
          aria-label="Siguiente valor"
        >
          <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" />
        </Button>

        {/* Carrusel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div
                  className="bg-dark-bg/60 backdrop-blur-sm border border-secondary/30 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center justify-center h-96 md:h-[28rem] relative group hover:shadow-primary/20 transition-all duration-500"
                  style={{
                    // Efecto de capa: sombra más fuerte en la activa
                    boxShadow: currentIndex === index
                      ? "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(253, 224, 149, 0.15)"
                      : "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Decoración de fondo (círculo dorado tenue) */}
                  <div className="absolute inset-0 rounded-3xl opacity-5 overflow-hidden">
                    <div
                      className="w-64 h-64 bg-primary rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        animation: "float 6s ease-in-out infinite",
                      }}
                    ></div>
                  </div>

                  {/* Icono */}
                  <div
                    className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                    style={{
                      textShadow: "0 0 20px rgba(253, 224, 149, 0.3)",
                    }}
                  >
                    {value.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-secondary/90 text-base leading-relaxed max-w-xs mx-auto">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex justify-center mt-8 space-x-2">
          {values.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-secondary/40 hover:bg-secondary/60"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al valor ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}