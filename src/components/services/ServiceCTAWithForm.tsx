// src/components/services/ServiceCTAWithForm.tsx
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function ServiceCTAWithForm({
  title = "¿Listo para construir tu sitio ideal?",
  description = "Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.",
  sideText = "Al hacer clic en enviar, se abrirá tu cliente de correo para completar el envío.",
  buttonText = "O habla con nosotros directamente",
}: {
  title?: string;
  description?: string;
  formTitle?: string;
  sideText?: string;
  buttonText?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto mb-20 relative">
      <div
        className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl p-10 relative overflow-hidden"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite",
        }}
      >
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-secondary/90 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          </AnimatedSection>

          {/* Formulario centrado */}
          <div className="flex justify-center">
            <form
              action="mailto:ikizen.agency@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4 w-full max-w-md"
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
                className="w-full py-2 bg-primary text-gray-900 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <p className="text-secondary/70 text-sm mt-6">{sideText}</p>

          <div className="mt-4">
            <a href="mailto:ikizen.agency@gmail.com?subject=Agendar%20una%20cita&body=Hola,%20quisiera%20agendar%20una%20cita">
              <Button variant="outline" className="text-gray-900">
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
