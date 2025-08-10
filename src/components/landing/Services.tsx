// src/components/landing/Services.tsx
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios y aplicaciones modernas, responsivas y optimizadas para rendimiento, SEO y conversiones. Tecnología robusta con diseño impecable.",
    icon: "⚡",
    href: "/services/web",
  },
  {
    title: "Identidad de Marca",
    description:
      "Diseñamos marcas memorables: logotipos, paletas, tipografía y guías de estilo que reflejan tu esencia y conectan con tu audiencia.",
    icon: "✨",
    href: "/services/branding",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
            Dos áreas de excelencia, un solo objetivo: hacer que tu marca destaque.
          </p>
        </AnimatedSection>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              delay={300 + index * 150}
              className="group"
            >
              <Card
                className="bg-dark-bg/40 border border-secondary/20 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icono */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-secondary/90 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Enlace con flecha animada */}
                <Link
                  href={service.href}
                  className="flex items-center text-primary hover:text-secondary text-sm font-medium transition-colors duration-200 w-fit group/link"
                >
                  Conoce más
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}