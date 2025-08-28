// src/components/landing/Testimonials.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "Ikizen transformó nuestra presencia digital. El sitio web no solo se ve increíble, sino que duplicó nuestras conversiones en solo dos meses.",
    author: "Valentina R.",
    role: "CEO, NovaLabs",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1", // Imagen de placeholder
  },
  {
    quote:
      "Su enfoque en la identidad de marca fue impecable. Ahora nuestra imagen transmite profesionalismo y creatividad a partes iguales.",
    author: "Mateo D.",
    role: "Fundador, Creativo Estudio",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote:
      "Trabajar con Ikizen fue una experiencia sin fricciones. Entendieron nuestra visión desde el primer día y la ejecutaron a la perfección.",
    author: "Lucía M.",
    role: "Directora de Marketing, Eleva",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-secondary/80 text-lg">
            Confianza, resultados y experiencias reales de marcas que crecieron con Ikizen.
          </p>
        </AnimatedSection>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                index === currentIndex
                  ? "bg-primary scale-110 shadow-lg shadow-primary/30"
                  : "bg-secondary/40 hover:bg-secondary/60"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tarjeta de testimonio – nueva estructura
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="p-8 rounded-2xl bg-dark-bg/20 backdrop-blur-md border border-white/20 max-w-3xl mx-auto hover:border-primary/40 transition-all duration-300 shadow-lg shadow-black/10 flex flex-col">
      {/* Avatar + Nombre + Cargo */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={testimonial.avatar}
          alt={`Foto de ${testimonial.author}`}
          className="w-12 h-12 rounded-full object-cover border border-secondary/30"
        />
        <div className="text-left">
          <div className="font-semibold text-primary">{testimonial.author}</div>
          <div className="text-secondary/70 text-sm">{testimonial.role}</div>
        </div>
      </div>

      {/* Estrellas */}
      <div className="flex justify-center mb-5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg mx-0.5 ${i < testimonial.rating ? 'text-secondary' : 'text-secondary/40'}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Cita */}
      <blockquote className="text-secondary/90 text-lg leading-relaxed mb-6 flex-grow italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </div>
  );
}