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
      <div className="bg-ink-soft border border-line p-10">
        <div className="text-center">
          <AnimatedSection>
            <h2 className="text-display-md font-bold mb-4">
              {title}
            </h2>
            <p className="text-paper-dim mb-8 max-w-2xl mx-auto">
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
                className="w-full bg-ink border border-line px-4 py-2 text-paper placeholder-paper-dim focus:outline-none focus:ring-2 focus:ring-amber"
              />
              <input
                name="email"
                type="email"
                placeholder="Correo"
                required
                className="w-full bg-ink border border-line px-4 py-2 text-paper placeholder-paper-dim focus:outline-none focus:ring-2 focus:ring-amber"
              />
              <textarea
                name="body"
                placeholder="Tu proyecto..."
                required
                rows={3}
                className="w-full bg-ink border border-line px-4 py-2 text-paper placeholder-paper-dim focus:outline-none focus:ring-2 focus:ring-amber"
              />
              <button
                type="submit"
                className="w-full py-2 bg-amber text-ink font-medium hover:bg-amber-pale transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <p className="text-paper-dim text-sm mt-6">{sideText}</p>

          <div className="mt-4">
            <a href="mailto:ikizen.agency@gmail.com?subject=Agendar%20una%20cita&body=Hola,%20quisiera%20agendar%20una%20cita">
              <Button variant="outline">
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
