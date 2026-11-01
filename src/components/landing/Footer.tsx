import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";

export function Footer() {
  return (
    <footer className="py-8 border-t border-line">
      <div className="max-w-site px-gutter mx-auto text-center text-sm text-paper-dim">
        <Link href="/" className="inline-block mb-4 text-paper hover:text-amber transition-colors duration-200">
          <Wordmark />
        </Link>
        <p>&copy; {new Date().getFullYear()} Ikizen Studio. Todos los derechos reservados.</p>
        <div className="mt-2">
          <Link href="/privacy-policies" className="hover:text-amber">
            Política de privacidad
          </Link>
          {" | "}
          <Link href="/terms" className="hover:text-amber">
            Términos de uso
          </Link>
        </div>
        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61578920502554"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber flex items-center gap-2"
          >
            <Facebook size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ikizen-agency-615244377/?originalSubdomain=cu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber flex items-center gap-2"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
