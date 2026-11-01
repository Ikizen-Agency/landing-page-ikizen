// src/components/landing/Services.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios y aplicaciones modernas, responsivas y optimizadas para rendimiento y SEO.",
    icon: "⚡",
    href: "/services/web",
  },
  {
    title: "Identidad de Marca",
    description:
      "Diseñamos marcas memorables que reflejan tu esencia y conectan con tu audiencia.",
    icon: "✨",
    href: "/services/branding",
  },
];

export function Services() {
  return (
    <section id="services" className="py-section px-gutter">
      <div className="max-w-site mx-auto">
        {/* Título */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-display-md font-bold mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-paper-dim max-w-2xl mx-auto text-lg">
            Dos áreas de excelencia, un solo objetivo: hacer que tu marca destaque.
          </p>
        </AnimatedSection>

        {/* Diseño asimétrico: una tarjeta arriba, otra abajo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Servicio 1 - Desarrollo Web */}
          <AnimatedSection
            delay={300}
            className="lg:col-span-7 lg:col-start-1"
          >
            <div className="bg-ink-soft border border-line p-10 hover:border-amber transition-colors duration-300 group">
              <div className="flex gap-6">
                <div className="text-6xl text-amber group-hover:scale-110 transition-transform duration-500">
                  {services[0].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-paper-dim mb-6 leading-relaxed">
                    {services[0].description}
                  </p>
                  <a
                    href={services[0].href}
                    className="inline-flex items-center text-amber hover:text-amber-pale text-sm font-medium group/link"
                  >
                    Conoce más
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Espacio vacío para asimetría */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Servicio 2 - Identidad de Marca */}
          <AnimatedSection
            delay={500}
            className="lg:col-span-7 lg:col-start-6 lg:mt-20"
          >
            <div className="bg-ink-soft border border-line p-10 hover:border-amber transition-colors duration-300 group">
              <div className="flex gap-6">
                <div className="text-6xl text-amber group-hover:scale-110 transition-transform duration-500">
                  {services[1].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {services[1].title}
                  </h3>
                  <p className="text-paper-dim mb-6 leading-relaxed">
                    {services[1].description}
                  </p>
                  <a
                    href={services[1].href}
                    className="inline-flex items-center text-amber hover:text-amber-pale text-sm font-medium group/link"
                  >
                    Conoce más
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}