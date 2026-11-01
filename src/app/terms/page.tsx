import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Términos y condiciones de uso de los servicios de Ikizen Studio. Conoce nuestras políticas y condiciones de trabajo.",
  robots: {
    index: true,
    follow: true,
  },
};

// Ejemplo: /terminos-de-uso/page.tsx
export default function TermsOfService() {
  return (
    <>
    <Navbar></Navbar>
    <div className="pt-28 pb-20 px-gutter max-w-4xl mx-auto text-paper-dim leading-relaxed">
      <h1 className="text-display-md font-bold mb-6">Términos de Uso</h1>
      <p className="mb-4">
        Al usar este sitio web, aceptas cumplir con los siguientes términos y condiciones.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Uso del sitio</h2>
      <p className="mb-4">
        Este sitio es propiedad de <strong>Ikizen</strong>. Puedes usarlo para obtener información sobre nuestros servicios, contactarnos o solicitar una consulta. No está permitido copiar, modificar o distribuir contenido sin autorización.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Consultas y servicios</h2>
      <p className="mb-4">
        Las consultas iniciales son gratuitas, pero no garantizan la contratación de servicios. Todos los proyectos se formalizan mediante un contrato detallado antes del inicio del trabajo.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Propiedad intelectual</h2>
      <p className="mb-4">
        Todos los diseños, textos, logotipos y marcas mostrados en este sitio son propiedad de Ikizen Studio o de sus clientes. Su uso sin permiso está prohibido.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitación de responsabilidad</h2>
      <p className="mb-4">
        No nos hacemos responsables por daños directos o indirectos derivados del uso de este sitio. Los resultados de nuestros servicios pueden variar según el proyecto.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Cambios en los términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Te recomendamos revisar esta página periódicamente.
      </p>
      <p className="text-sm text-paper-dim mt-6">
        Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
    <Footer></Footer>
    </>
  );
}