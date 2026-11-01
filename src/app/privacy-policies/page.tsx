import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Ikizen Studio. Conoce cómo protegemos y manejamos tus datos personales.",
  robots: {
    index: true,
    follow: true,
  },
};

// Ejemplo: /politica-de-privacidad/page.tsx
export default function PrivacyPolicy() {
  return (
    <>
    <Navbar></Navbar>
    <div className="pt-28 pb-20 px-gutter max-w-4xl mx-auto text-paper-dim leading-relaxed">
      <h1 className="text-display-md font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4">
        En <strong>Ikizen</strong>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Información que recopilamos</h2>
      <p className="mb-4">
        Cuando llenas un formulario de contacto o solicitas una consulta gratuita, podemos recopilar:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Nombre y apellido</li>
        <li>Correo electrónico</li>
        <li>Teléfono (opcional)</li>
        <li>Información sobre tu proyecto o necesidades</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. ¿Cómo usamos tu información?</h2>
      <p className="mb-4">
        Usamos tus datos para:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Responder a tus consultas y propuestas de servicio</li>
        <li>Enviar información sobre nuestros servicios (si lo autorizas)</li>
        <li>Mejorar nuestra oferta y experiencia de cliente</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Protección de datos</h2>
      <p className="mb-4">
        Tus datos están almacenados de forma segura y no los compartimos con terceros. Solo los usamos para comunicarnos contigo y ofrecerte nuestros servicios.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Derechos del usuario</h2>
      <p className="mb-4">
        Tienes derecho a acceder, corregir, eliminar o solicitar la portabilidad de tus datos. Para ejercer estos derechos, escríbenos a: <a href="mailto:ikizen.agency@gmail.com" className="text-amber underline underline-offset-2 hover:text-amber-pale">ikizen.agency@gmail.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado aquí.
      </p>
      <p className="text-sm text-paper-dim mt-6">
        Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>

    <Footer></Footer>
    </>
  );
}