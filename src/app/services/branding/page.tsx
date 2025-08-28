// app/services/branding/page.tsx
import {
  ServiceHero,
  ServiceOfferings,
  ServiceProcess,
  ServiceCTAWithForm,
} from "@/components/services";
import Navbar from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Metadata } from "next";
import NewsLetter from "@/components/landing/NewsLetter";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Identidad de Marca | Ikizen Agency",
    description:
      "Diseñamos identidades de marca memorables: logotipos, paletas, tipografía y guías de estilo que conectan con tu audiencia y transmiten profesionalismo.",
    keywords: [
      "identidad de marca",
      "diseño de marca",
      "logotipo profesional",
      "branding agencia",
      "diseño de identidad visual",
      "manual de marca",
      "Ikizen Agency",
    ],
    openGraph: {
      title: "Identidad de Marca | Ikizen Agency",
      description:
        "Creamos marcas que inspiran y conectan. Diseño estratégico para empresas que quieren destacar.",
      url: "https://ikizen.vercel.app/services/branding",
      siteName: "Ikizen Agency",
      type: "website",
    },
  };
}

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
            {
              icon: "✨",
              title: "Logotipos estratégicos",
              desc: "Diseños únicos que comunican tu personalidad y se mantienen relevantes en el tiempo.",
            },
            {
              icon: "🎨",
              title: "Sistemas de identidad",
              desc: "Paletas, tipografías, iconografía y guías de estilo que aseguran coherencia en todos los canales.",
            },
          ]}
          sideItems={[
            {
              title: "Naming & Branding",
              desc: "Elegimos nombres poderosos que reflejan tu propósito y son fáciles de recordar.",
            },
            {
              title: "Manuales de marca",
              desc: "Documentación profesional para que tu marca se mantenga impecable en manos de terceros.",
            },
          ]}
        />

        <ServiceProcess
          title="Nuestro proceso creativo"
          description="Un viaje colaborativo que transforma tu esencia en una identidad visual poderosa."
          steps={[
            {
              title: "Descubrimiento",
              desc: "Analizamos tu negocio, valores, audiencia y competencia para entender tu universo.",
            },
            {
              title: "Concepto Visual",
              desc: "Creamos direcciones de estilo, moodboards y bocetos para explorar posibles identidades.",
            },
            {
              title: "Diseño Profundo",
              desc: "Desarrollamos el logotipo, paleta, tipografía y aplicaciones en contextos reales.",
            },
            {
              title: "Iteración & Feedback",
              desc: "Trabajamos contigo para ajustar cada detalle hasta alcanzar la perfección.",
            },
            {
              title: "Entrega Final",
              desc: "Te entregamos todos los archivos, formatos y una guía completa de uso de marca.",
            },
          ]}
        />

        <ServiceCTAWithForm
          title="¿Listo para tener una marca inolvidable?"
          description="Agenda una consulta gratuita y comencemos a construir tu identidad desde cero."
          buttonText="Reserva tu sesión →"
        />

        <NewsLetter></NewsLetter>
      </div>
      <Footer />
    </>
  );
}
