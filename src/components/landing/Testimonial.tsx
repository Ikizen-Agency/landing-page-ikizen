"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "Ikizen transformó nuestra presencia digital. El sitio web no solo se ve increíble, sino que duplicó nuestras conversiones en solo dos meses.",
    author: "Valentina R.",
    role: "CEO, NovaLabs",
    rating: 5,
  },
  {
    quote:
      "Su enfoque en la identidad de marca fue impecable. Ahora nuestra imagen transmite profesionalismo y creatividad a partes iguales.",
    author: "Mateo D.",
    role: "Fundador, Creativo Estudio",
    rating: 5,
  },
  {
    quote:
      "Trabajar con Ikizen fue una experiencia sin fricciones. Entendieron nuestra visión desde el primer día y la ejecutaron a la perfección.",
    author: "Lucía M.",
    role: "Directora de Marketing, Eleva",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanzar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
            Confianza, resultados y experiencias reales de marcas que crecieron con Ikizen.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
            onClick={goToPrevious}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
            onClick={goToNext}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-secondary/40 hover:bg-secondary/60"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="p-8 rounded-2xl bg-dark-bg/40 border border-secondary/20 text-center h-full flex flex-col hover:border-primary/40 transition-all duration-300">
      {/* Estrellas */}
      <div className="flex justify-center mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-secondary text-lg mx-1">★</span>
        ))}
      </div>

      {/* Cita */}
      <blockquote className="text-secondary/90 text-lg leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {/* Autor */}
      <div>
        <div className="font-semibold text-primary">{testimonial.author}</div>
        <div className="text-secondary/70 text-sm">{testimonial.role}</div>
      </div>
    </div>
  );
}