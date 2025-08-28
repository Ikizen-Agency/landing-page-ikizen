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
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondo con círculos dorados más visibles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 border border-primary/10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 border-2 border-secondary/15 rounded-full"></div>

      {/* Efecto de difuminado sutil en los círculos */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-xl"></div>

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-dark-bg/80 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
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
            <div className="bg-dark-bg/60 backdrop-blur-sm border border-primary/20 rounded-3xl p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
              <div className="flex gap-6">
                <div className="text-6xl text-primary group-hover:scale-110 transition-transform duration-500">
                  {services[0].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-secondary/90 mb-6 leading-relaxed">
                    {services[0].description}
                  </p>
                  <a
                    href={services[0].href}
                    className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium group/link"
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
            <div className="bg-dark-bg/60 backdrop-blur-sm border border-secondary/20 rounded-3xl p-10 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 group">
              <div className="flex gap-6">
                <div className="text-6xl text-secondary group-hover:scale-110 transition-transform duration-500">
                  {services[1].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {services[1].title}
                  </h3>
                  <p className="text-secondary/90 mb-6 leading-relaxed">
                    {services[1].description}
                  </p>
                  <a
                    href={services[1].href}
                    className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium group/link"
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