// src/components/landing/Footer.tsx
export function Footer() {
  return (
    <footer className="py-8 border-t border-secondary/20">
      <div className="container px-4 mx-auto text-center text-sm text-secondary">
        &copy; {new Date().getFullYear()} Ikizen Agency. Todos los derechos reservados.
        <div className="mt-2">
          <a href="#" className="hover:text-primary">Política de privacidad</a>
          {" | "}
          <a href="#" className="hover:text-primary">Términos de uso</a>
        </div>
      </div>
    </footer>
  );
}