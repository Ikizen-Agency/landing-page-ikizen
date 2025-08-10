import { AnimatedSection } from "@/components/AnimatedSection";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <>
    
    <Navbar/>
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero mejorado con diseño editorial */}
      <div className="max-w-4xl mx-auto mb-28 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/15 text-primary rounded-full mb-6 border border-primary/20">
            Desarrollo Web
          </span>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Sitios que <span className="text-secondary">convierten</span> y aplicaciones que <span className="text-secondary">impresionan</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-xl text-secondary/90 leading-relaxed max-w-3xl mx-auto">
            Diseño elegante, código limpio y resultados reales. Creamos experiencias digitales que crecen contigo.
          </p>
        </AnimatedSection>
      </div>

      {/* Sección: ¿Qué ofrecemos? – Diseño de bloques destacados */}
      <section className="max-w-6xl mx-auto mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bloque principal (destacado) */}
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-semibold text-primary mb-6 border-l-4 border-primary pl-3">
                Soluciones Web a tu Medida
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-primary text-2xl mt-1">⚡</div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Sitios Corporativos</h3>
                    <p className="text-secondary/90 mt-1">Modernos, responsivos y diseñados para generar confianza y leads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary text-2xl mt-1">📱</div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Aplicaciones Web</h3>
                    <p className="text-secondary/90 mt-1">Funcionalidades avanzadas con rendimiento optimizado y UX impecable.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bloque secundario (vertical) */}
          <AnimatedSection delay={200} className="space-y-6">
            <div className="bg-dark-bg/40 border border-secondary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Tiendas Online</h3>
              <p className="text-secondary/90">E-commerce listos para vender, con pasarelas de pago y diseño centrado en conversión.</p>
            </div>
            <div className="bg-dark-bg/40 border border-secondary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Rediseño de Sitios</h3>
              <p className="text-secondary/90">Actualizamos tu web antigua con tecnología moderna, sin perder tu identidad.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sección: Tecnologías – con diseño de "cinta" */}
      <section className="max-w-6xl mx-auto mb-32 overflow-hidden">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Tecnología de punta</h2>
          <p className="text-secondary/80">Trabajamos con las herramientas más modernas del mercado.</p>
        </AnimatedSection>

        <div className="flex animate-infinite-scroll gap-8">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "Figma", "GSAP", "PostgreSQL", "Prisma", "Zod", "ShadCN"].map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-5 py-2.5 rounded-full flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Sección: Proceso – diseño de línea de tiempo */}
      <section className="max-w-4xl mx-auto mb-32 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestro proceso</h2>
          <p className="text-secondary/80">Transparente, colaborativo y enfocado en resultados.</p>
        </AnimatedSection>

        <div className="relative">
          {/* Línea central (decorativa) */}
          <div className="absolute left-5 top-0 w-0.5 h-full bg-secondary/20"></div>

          {[
            { title: "Consulta Inicial", desc: "Entendemos tus objetivos, audiencia y desafíos." },
            { title: "Diseño & Planificación", desc: "Creamos wireframes, arquitectura y cronograma." },
            { title: "Desarrollo", desc: "Construimos tu sitio con código limpio y moderno." },
            { title: "Pruebas & Lanzamiento", desc: "Revisamos todo y lanzamos con seguimiento." },
            { title: "Soporte Posterior", desc: "Te acompañamos con actualizaciones y mejoras." },
          ].map((step, index) => (
            <AnimatedSection
              key={index}
              delay={200 + index * 100}
              className={`flex items-start gap-6 mb-10 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Círculo del paso */}
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-dark-bg rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Contenido */}
              <div className="bg-dark-bg/40 border border-secondary/20 rounded-xl p-5 max-w-lg">
                <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-secondary/90">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Formulario y CTA combinados – diseño de bloque único */}
      <section className="max-w-4xl mx-auto mb-20 relative">
        <div
          className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl p-10 relative overflow-hidden"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-shift 8s ease infinite",
          }}
        >
          {/* Decoración de fondo (círculo tenue) */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                ¿Listo para construir tu sitio ideal?
              </h2>
              <p className="text-secondary/90 mb-8 max-w-2xl">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form
                  action="mailto:ikizen.agencia@gmail.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    required
                    className="w-full bg-dark-bg/60 border border-secondary/30 rounded-lg px-4 py-2 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Correo"
                    required
                    className="w-full bg-dark-bg/60 border border-secondary/30 rounded-lg px-4 py-2 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <textarea
                    name="body"
                    placeholder="Tu proyecto..."
                    required
                    rows={3}
                    className="w-full bg-dark-bg/60 border border-secondary/30 rounded-lg px-4 py-2 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary text-dark-bg rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-secondary/80 text-sm leading-relaxed">
                  Al hacer clic en enviar, se abrirá tu cliente de correo (Gmail, Outlook, etc.) para completar el envío.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark-bg">
                      O habla con nosotros directamente
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}