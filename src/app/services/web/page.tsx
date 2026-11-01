// app/services/web/page.tsx
import { ServiceHero, ServiceOfferings, ServiceProcess, ServiceCTAWithForm } from "@/components/services";
import Navbar from "@/components/landing/Navbar";
import {Footer} from "@/components/landing/Footer";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para conversión y rendimiento. Aplicaciones web, e-commerce y sitios corporativos.",
    keywords: [
      "desarrollo web",
      "sitios web corporativos",
      "aplicaciones web",
      "e-commerce",
      "tiendas online",
      "diseño web responsivo",
      "Next.js",
      "React",
      "Ikizen Studio"
    ],
    openGraph: {
      title: "Desarrollo Web | Ikizen Studio",
      description: "Sitios que convierten y aplicaciones que impresionan. Diseño elegante, código limpio y resultados reales.",
      url: "https://ikizen.vercel.app/services/web",
      siteName: "Ikizen Studio",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Desarrollo Web | Ikizen Studio",
      description: "Sitios que convierten y aplicaciones que impresionan.",
      images: ["/opengraph-image"],
    },
  };
}

const webServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desarrollo Web",
  "description": "Creamos sitios web modernos, responsivos y optimizados para conversión y rendimiento. Aplicaciones web, e-commerce y sitios corporativos.",
  "provider": {
    "@type": "Organization",
    "name": "Ikizen Studio",
    "url": "https://ikizen.vercel.app"
  },
  "serviceType": "Web Development",
  "areaServed": "Spain",
  // Se agregó la propiedad "hasOfferCatalog" para resolver el error de tipado.
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catálogo de Servicios de Desarrollo Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitios Web Corporativos",
          "description": "Modernos, responsivos y diseñados para generar confianza y leads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicaciones Web",
          "description": "Funcionalidades avanzadas con rendimiento optimizado y UX impecable."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tiendas Online",
          "description": "E-commerce listos para vender, con pasarelas de pago y diseño centrado en conversión."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rediseño de Sitios",
          "description": "Actualizamos tu web antigua con tecnología moderna, sin perder tu identidad."
        }
      }
    ]
  }
};

export default function WebDevelopmentPage() {
  return (
    <>
      <StructuredData data={webServiceStructuredData} />
      <Navbar />
      <div className="min-h-screen pt-28 pb-20 px-gutter">
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
      </div>
      <Footer />
    </>
  );
}