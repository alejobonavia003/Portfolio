"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-3 z-30 w-full md:top-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-lg bg-[#111111]/80 px-4 shadow-lg backdrop-blur-md border border-[#222222]">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <Image
              src="/alejo.jpg"
              alt="Alejo Bonavia"
              width={36}
              height={36}
              className="rounded-full border border-green-500/30"
            />
            <span className="text-[#e5e5e5] font-semibold tracking-wide text-sm md:text-base">
              Alejo Bonavia
            </span>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#sobre-mi"
              className="text-[#9ca3af] hover:text-green-500 transition-colors text-sm"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="text-[#9ca3af] hover:text-green-500 transition-colors text-sm"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-[#9ca3af] hover:text-green-500 transition-colors text-sm"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
