import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-secondary/20">
      <div className="container px-4 mx-auto text-center text-sm text-secondary">
        &copy; {new Date().getFullYear()} Ikizen Agency. Todos los derechos reservados.
        <div className="mt-2">
          <Link href="/privacy-policies" className="hover:text-primary">Política de privacidad</Link>
          {" | "}
          <Link href="/terms" className="hover:text-primary">Términos de uso</Link>
        </div>
      </div>
    </footer>
  );
}