// app/services/branding/page.tsx
import {
  ServiceHero,
  ServiceOfferings,
  ServiceProcess,
  ServiceTechnologies,
  ServiceCTAWithForm
} from "@/components/services";
import { BrandValues } from "@/components/services/BrandValues";
import Navbar from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceHero
          badge="Identidad de Marca"
          title="Marcas que inspiran y conectan"
          subtitle="Diseñamos identidades memorables que reflejan tu esencia, atraen a tu audiencia ideal y construyen confianza desde el primer contacto."
        />

        <ServiceOfferings
          mainTitle="Lo que creamos para tu marca"
          mainItems={[
            { icon: "✨", title: "Logotipos estratégicos", desc: "Diseños únicos que comunican tu personalidad y se mantienen relevantes en el tiempo." },
            { icon: "🎨", title: "Sistemas de identidad", desc: "Paletas, tipografías, iconografía y guías de estilo que aseguran coherencia en todos los canales." }
          ]}
          sideItems={[
            { title: "Naming & Branding", desc: "Elegimos nombres poderosos que reflejan tu propósito y son fáciles de recordar." },
            { title: "Manuales de marca", desc: "Documentación profesional para que tu marca se mantenga impecable en manos de terceros." }
          ]}
        />

        <BrandValues />

        <ServiceTechnologies
          title="Herramientas del oficio"
          description="Combinamos arte digital con estrategia de marca."
          technologies={["Figma", "Adobe Illustrator", "Procreate", "Photoshop", "Miro", "Notion", "FontPair", "Coolors"]}
        />

        <ServiceProcess
          title="Nuestro proceso creativo"
          description="Un viaje colaborativo que transforma tu esencia en una identidad visual poderosa."
          steps={[
            { title: "Descubrimiento", desc: "Analizamos tu negocio, valores, audiencia y competencia para entender tu universo." },
            { title: "Concepto Visual", desc: "Creamos direcciones de estilo, moodboards y bocetos para explorar posibles identidades." },
            { title: "Diseño Profundo", desc: "Desarrollamos el logotipo, paleta, tipografía y aplicaciones en contextos reales." },
            { title: "Iteración & Feedback", desc: "Trabajamos contigo para ajustar cada detalle hasta alcanzar la perfección." },
            { title: "Entrega Final", desc: "Te entregamos todos los archivos, formatos y una guía completa de uso de marca." }
          ]}
        />

        <ServiceCTAWithForm
          title="¿Listo para tener una marca inolvidable?"
          description="Agenda una consulta gratuita y comencemos a construir tu identidad desde cero."
          buttonText="Reserva tu sesión →"
        />
      </div>
      <Footer />
    </>
  );
}