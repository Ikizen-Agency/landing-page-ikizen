// app/services/web/page.tsx
import { ServiceHero, ServiceOfferings, ServiceProcess, ServiceCTAWithForm } from "@/components/services";
import Navbar from "@/components/landing/Navbar";
import {Footer} from "@/components/landing/Footer";
import { Metadata } from "next";
import NewsLetter from "@/components/landing/NewsLetter";
import { StructuredData } from "@/components/StructuredData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Desarrollo Web | Ikizen Agency",
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
      "Ikizen Agency"
    ],
    openGraph: {
      title: "Desarrollo Web | Ikizen Agency",
      description: "Sitios que convierten y aplicaciones que impresionan. Diseño elegante, código limpio y resultados reales.",
      url: "https://ikizen.vercel.app/services/web",
      siteName: "Ikizen Agency",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ikizen Agency - Desarrollo Web",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Desarrollo Web | Ikizen Agency",
      description: "Sitios que convierten y aplicaciones que impresionan.",
      images: ["/og-image.jpg"],
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
    "name": "Ikizen Agency",
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