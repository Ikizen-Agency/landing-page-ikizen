// src/components/landing/Navbar.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/#services" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Testimonios", href: "/#testimonials" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navbar-gradient border-b border-secondary/20 fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Ikizen
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary hover:text-secondary text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="text-primary hover:text-secondary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="md:hidden bg-dark-bg pt-4 pb-6 border-t border-secondary/20">
            <div className="px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:text-secondary text-lg font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}