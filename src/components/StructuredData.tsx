import Script from 'next/script';

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Datos estructurados para la organización
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ikizen Agency",
  "description": "Agencia de desarrollo web e identidad de marca. Creamos experiencias digitales que convierten y marcas que conectan.",
  "url": "https://ikizen.vercel.app",
  "logo": "https://ikizen.vercel.app/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "ikizen.agency@gmail.com"
  },
  "sameAs": [
    // Agregar redes sociales cuando las tengas
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES"
  },
  "foundingDate": "2024",
  "numberOfEmployees": "1-10",
  "industry": "Marketing and Advertising"
};

// Datos estructurados para servicios
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desarrollo Web y Branding",
  "description": "Servicios de desarrollo web, diseño de identidad de marca y creación de experiencias digitales.",
  "provider": {
    "@type": "Organization",
    "name": "Ikizen Agency",
    "url": "https://ikizen.vercel.app"
  },
  "serviceType": "Web Development and Branding",
  "areaServed": "Spain",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Ikizen Agency",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo Web",
          "description": "Sitios web modernos, responsivos y optimizados para conversión."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidad de Marca",
          "description": "Diseño de logotipos, identidad visual y manuales de marca."
        }
      }
    ]
  }
};

// Datos estructurados para la página web
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ikizen Agency",
  "description": "Agencia de desarrollo web e identidad de marca",
  "url": "https://ikizen.vercel.app",
  "publisher": {
    "@type": "Organization",
    "name": "Ikizen Agency"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ikizen.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
