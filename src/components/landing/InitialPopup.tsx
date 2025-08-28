// src/components/landing/InitialPopup.tsx
"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function InitialPopup() {
  const [isMinimized, setIsMinimized] = useState(false);

  // Estado minimizado → bolita
  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed z-50 right-4 bottom-4 w-12 h-12 bg-primary text-gray-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center focus:outline-none"
        style={{
          transform: "scale(1)",
          transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        aria-label="Abrir consulta gratuita"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      </button>
    );
  }

  // Estado abierto → popup
  return (
    <div
      className="fixed z-50 right-4 bottom-20 w-60 sm:w-80 rounded-2xl shadow-2xl overflow-hidden"
      style={{
        transform: "scale(1)",
        transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        transformOrigin: "bottom right",
      }}
    >
      <div className="bg-dark-bg/95 backdrop-blur-3xl border border-secondary/20 rounded-2xl overflow-hidden">
        {/* Cabecera */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-secondary hover:text-primary hover:bg-white/10 transition-colors rounded-full p-1"
            aria-label="Minimizar popup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Contenido */}
        <div className="px-6 pb-4 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">
            ¿Listo para impulsar tu negocio?
          </h3>
          <p className="text-secondary/90 text-sm leading-relaxed">
            Descubre tus fortalezas y oportunidades con una{" "}
            <strong>consulta gratuita</strong> personalizada.
          </p>
        </div>

        {/* Acción */}
        <div className="px-6 pb-6">
          <a
            href="https://forms.gle/tu-enlace-aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary text-gray-900 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Aplicar ahora →
          </a>
        </div>
      </div>
    </div>
  );
}