// src/components/Newsletter.tsx
"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías conectarlo con tu backend o servicio externo (Mailchimp, Brevo, etc.)
    console.log("Email registrado:", email);
    setEmail("");
  };

  return (
    <section className="max-w-3xl mx-auto mb-20 px-4">
      <div
        className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl p-10 relative overflow-hidden text-center"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite",
        }}
      >
        {/* Glow decorativo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Suscríbete a nuestro newsletter
          </h2>
          <p className="text-secondary/80 mb-8 max-w-xl mx-auto">
            Recibe novedades, consejos y recursos exclusivos para potenciar tu
            proyecto digital.
          </p>
        </AnimatedSection>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Tu correo electrónico"
            className="flex-1 w-full bg-dark-bg/60 border border-secondary/30 rounded-lg px-4 py-2 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button
            type="submit"
            className="w-full sm:w-auto bg-primary text-gray-900 font-medium rounded-lg px-6 py-2 hover:bg-primary/90 transition-colors"
          >
            Suscribirme
          </Button>
        </form>

        <p className="text-secondary/70 text-xs mt-6">
          Al suscribirte, aceptas recibir nuestras comunicaciones. Puedes darte
          de baja en cualquier momento.
        </p>
      </div>
    </section>
  );
}
