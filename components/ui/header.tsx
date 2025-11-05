"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-3 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/80 px-4 shadow-lg backdrop-blur-md border border-gray-800">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <Image
              src="/alejo.jpg" // reemplazá por el nombre exacto de tu foto en public
              alt="Alejo Bonavia"
              width={36}
              height={36}
              className="rounded-full border border-gray-700"
            />
            <span className="text-gray-200 font-semibold tracking-wide">
              Alejo Bonavia
            </span>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex gap-6">
            <a
              href="#sobre-mi"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
