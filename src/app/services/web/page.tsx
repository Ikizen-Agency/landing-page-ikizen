import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero de la página */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Desarrollo Web Profesional
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            Creamos sitios y aplicaciones modernas, rápidas y escalables que convierten visitantes en clientes.
          </p>
        </AnimatedSection>
      </div>

      {/* Sección: ¿Qué ofrecemos? */}
      <section className="max-w-4xl mx-auto mb-24">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">¿Qué ofrecemos?</h2>
          <p className="text-secondary/80">
            No solo construimos sitios. Creamos experiencias digitales que funcionan.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Sitios Corporativos",
              desc: "Modernos, responsivos y optimizados para transmitir confianza y generar leads.",
            },
            {
              title: "Aplicaciones Web",
              desc: "Soluciones personalizadas con funcionalidades avanzadas y rendimiento impecable.",
            },
            {
              title: "Tiendas Online",
              desc: "E-commerce listos para vender, con pasarelas de pago y diseño centrado en conversión.",
            },
            {
              title: "Rediseño de Sitios",
              desc: "Actualizamos tu web antigua con tecnología moderna, sin perder tu identidad.",
            },
          ].map((item, index) => (
            <AnimatedSection
              key={index}
              delay={200 + index * 100}
              className="bg-dark-bg/30 border border-secondary/20 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-secondary/90">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Sección: Tecnologías */}
      <section className="max-w-4xl mx-auto mb-24">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Tecnologías que usamos</h2>
          <p className="text-secondary/80">
            Trabajamos con las herramientas más modernas y confiables del mercado.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "Figma", "GSAP"].map((tech, index) => (
            <AnimatedSection
              key={index}
              delay={100 + index * 50}
              className="bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full"
            >
              {tech}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Sección: Nuestro Proceso */}
      <section className="max-w-4xl mx-auto mb-24">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Proceso</h2>
          <p className="text-secondary/80">
            Un enfoque claro y colaborativo para entregar resultados reales.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {[
            { step: "1", title: "Consulta Inicial", desc: "Entendemos tus objetivos, audiencia y desafíos." },
            { step: "2", title: "Diseño & Planificación", desc: "Creamos wireframes, arquitectura y cronograma." },
            { step: "3", title: "Desarrollo", desc: "Construimos tu sitio con código limpio y moderno." },
            { step: "4", title: "Pruebas & Lanzamiento", desc: "Revisamos todo y lanzamos con seguimiento." },
            { step: "5", title: "Soporte Posterior", desc: "Te acompañamos con actualizaciones y mejoras." },
          ].map((item, index) => (
            <AnimatedSection
              key={index}
              delay={200 + index * 100}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-dark-bg rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-secondary/90">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Sección: Formulario de Contacto */}
<section className="max-w-2xl mx-auto">
  <AnimatedSection className="bg-dark-bg/50 border border-secondary/20 rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-primary mb-6 text-center">
      Envíanos un mensaje
    </h2>
    <p className="text-secondary/80 text-center mb-6">
      ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te responderemos en menos de 24 horas.
    </p>

    <form
      action="mailto:ikizen.agencia@gmail.com"
      method="post"
      encType="text/plain"
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary/90 mb-2">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-dark-bg border border-secondary/30 rounded-lg px-4 py-3 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary/90 mb-2">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-dark-bg border border-secondary/30 rounded-lg px-4 py-3 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary/90 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="body"
          required
          rows={5}
          className="w-full bg-dark-bg border border-secondary/30 rounded-lg px-4 py-3 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
          placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-primary text-dark-bg font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
        >
          Enviar mensaje
        </button>
      </div>
    </form>

    <p className="text-xs text-secondary/60 text-center mt-4">
      Al enviar, se abrirá tu cliente de correo (Gmail, Outlook, etc.) para completar el envío.
    </p>
  </AnimatedSection>
</section>

      {/* CTA Final */}
      <section className="max-w-3xl mx-auto text-center">
        <AnimatedSection className="bg-dark-bg/50 border border-secondary/20 rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            ¿Listo para construir tu sitio ideal?
          </h2>
          <p className="text-secondary/80 mb-6">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-dark-bg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Link href="/contact">Hablemos ahora →</Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}