// src/components/landing/Hero.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-gutter">
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Columna de Texto */}
        <div className="space-y-6">
          <h1 className="text-display-lg font-bold">
            Tu marca, lista para <span className="text-amber">dejar huella</span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl text-paper-dim">
              Construimos sitios que no solo funcionan, sino que cuentan tu historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="https://wa.me/+5355002026?text=Me+interesan+sus+servicios" target="_blank" rel="noopener noreferrer">
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="relative h-[70vh] w-[100%] lg:h-[80vh] overflow-hidden">
          <Image
            src="/images/hero-dev.jpg"
            alt="Desarrollo web moderno - Ikizen Studio"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}