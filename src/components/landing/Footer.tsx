import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-secondary/20">
      <div className="container px-4 mx-auto text-center text-sm text-secondary">
        &copy; {new Date().getFullYear()} Ikizen. Todos los derechos reservados.
        <div className="mt-2">
          <Link href="/privacy-policies" className="hover:text-primary">
            Política de privacidad
          </Link>
          {" | "}
          <Link href="/terms" className="hover:text-primary">
            Términos de uso
          </Link>
        </div>
        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61578920502554"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-2"
          >
            <Facebook size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ikizen-agency-615244377/?originalSubdomain=cu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-2"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
