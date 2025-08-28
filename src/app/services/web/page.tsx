// app/services/web/page.tsx
import { ServiceHero, ServiceOfferings, ServiceProcess, ServiceCTAWithForm } from "@/components/services";
import Navbar from "@/components/landing/Navbar";
import {Footer} from "@/components/landing/Footer";
import { Metadata } from "next";
import NewsLetter from "@/components/landing/NewsLetter";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Desarrollo Web | Ikizen Agency",
    description: "Creamos sitios web modernos, responsivos y optimizados para conversión y rendimiento.",
    openGraph: {
      images: ["/og-web.jpg"],
    },
  };
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceHero
          badge="Desarrollo Web"
          title="Sitios que convierten y aplicaciones que impresionan"
          subtitle="Diseño elegante, código limpio y resultados reales. Creamos experiencias digitales que crecen contigo."
        />

        <ServiceOfferings
          mainItems={[
            { icon: "⚡", title: "Sitios Corporativos", desc: "Modernos, responsivos y diseñados para generar confianza y leads." },
            { icon: "📱", title: "Aplicaciones Web", desc: "Funcionalidades avanzadas con rendimiento optimizado y UX impecable." }
          ]}
          sideItems={[
            { title: "Tiendas Online", desc: "E-commerce listos para vender, con pasarelas de pago y diseño centrado en conversión." },
            { title: "Rediseño de Sitios", desc: "Actualizamos tu web antigua con tecnología moderna, sin perder tu identidad." }
          ]}
        />

        <ServiceProcess
          steps={[
            { title: "Consulta Inicial", desc: "Entendemos tus objetivos, audiencia y desafíos." },
            { title: "Diseño & Planificación", desc: "Creamos wireframes, arquitectura y cronograma." },
            { title: "Desarrollo", desc: "Construimos tu sitio con código limpio y moderno." },
            { title: "Pruebas & Lanzamiento", desc: "Revisamos todo y lanzamos con seguimiento." },
            { title: "Soporte Posterior", desc: "Te acompañamos con actualizaciones y mejoras." },
          ]}
        />

        <ServiceCTAWithForm />
        <NewsLetter></NewsLetter>
      </div>
      <Footer />
    </>
  );
}