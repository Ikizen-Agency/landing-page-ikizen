// src/components/services/ServiceTechnologies.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

export function ServiceTechnologies({
  title = "Tecnología de punta",
  description = "Trabajamos con las herramientas más modernas del mercado.",
  technologies,
}: {
  title?: string;
  description?: string;
  technologies: string[];
}) {
  // Duplicamos la lista para que el scroll sea infinito sin saltos
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="max-w-6xl mx-auto mb-32 overflow-hidden">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-secondary/80">{description}</p>
      </AnimatedSection>

      {/* Carrusel infinito */}
      <div className="overflow-hidden">
        <div
          className="flex animate-infinite-scroll gap-8 whitespace-nowrap"
          style={{
            // Duración ajustada según cantidad de elementos
            animationDuration: `${technologies.length * 4}s`, // 4s por tecnología (ajustable)
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-5 py-2.5 rounded-full flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}