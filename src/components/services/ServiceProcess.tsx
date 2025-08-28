// src/components/services/ServiceProcess.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ServiceProcess({
  title = "Nuestro proceso",
  description = "Transparente, colaborativo y enfocado en resultados.",
  steps,
}: {
  title?: string;
  description?: string;
  steps: { title: string; desc: string }[];
}) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const elTop = rect.top + scrollTop;
      const windowHeight = window.innerHeight;

      const scrollY = scrollTop - elTop + windowHeight * 0.5;
      const localProgress = Math.max(0, Math.min(1, scrollY / rect.height));
      setProgress(localProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-4xl mx-auto mb-32 relative px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-secondary/80">{description}</p>
      </AnimatedSection>

      <div ref={containerRef} className="relative">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0; // alterna izquierda/derecha
          return (
            <AnimatedSection
              key={index}
              delay={200 + index * 100}
              className={`relative flex items-start mb-16 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Línea vertical que pasa por el número */}
              <div
                className={`absolute top-0 w-0.5 h-full bg-secondary/20 ${
                  isLeft ? "left-6" : "right-6"
                }`}
              >
                <div
                  className="w-full bg-primary origin-top transition-all duration-300 ease-out"
                  style={{ height: `${progress * 100}%` }}
                />
              </div>

              {/* Número */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-dark-bg rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-lg shadow-primary/20">
                {index + 1}
              </div>

              {/* Contenido */}
              <div className="bg-dark-bg/40 border border-secondary/20 rounded-xl p-6 max-w-sm lg:max-w-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary/90 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
