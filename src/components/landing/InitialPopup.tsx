"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function InitialPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 right-4 bottom-4 w-60 sm:w-96 animate-in slide-in-from-bottom-4 duration-1000">
      <Card className="bg-dark-bg/95 backdrop-blur-3xl border-secondary/20 overflow-hidden shadow-2xl">
        {/* Cabecera con botón de cierre */}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-primary hover:bg-white/10 transition-colors"
            aria-label="Cerrar popup"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Contenido */}
        <CardContent className=" text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">
            ¿Listo para impulsar tu negocio?
          </h3>
          <p className="text-secondary/90 text-sm leading-relaxed">
            Descubre tus fortalezas y oportunidades con una <strong>consulta gratuita</strong> personalizada.
          </p>
        </CardContent>

        {/* Acción */}
        <CardFooter className="flex justify-center">
          <Button
            asChild
            className="bg-primary text-dark-bg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            <a
              href="https://forms.google.com/tu-enlace-aqui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir cuestionario de consulta gratuita"
            >
              Aplicar ahora →
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}