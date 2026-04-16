"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0a0a0a] text-[#e5e5e5] px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <Image
          src="/alejo.jpg"
          alt="Alejo Bonavia"
          width={140}
          height={140}
          className="rounded-full border-2 border-green-500/30 mx-auto mb-8"
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-[#e5e5e5]">
          Alejo Martín Bonavia
        </h1>
        <p className="text-green-500 text-base mb-3 font-medium">
          Estudiante de Ciencias de la Computación • Perfil IT Junior
        </p>
        <p className="text-[#9ca3af] max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Estudiante de 3er año con base en desarrollo de software y sistemas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#proyectos"
            className="bg-green-500 hover:bg-green-600 text-[#0a0a0a] px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="bg-[#111111] hover:bg-[#1a1a1a] text-[#e5e5e5] px-6 py-3 rounded-lg font-medium transition border border-[#222222]"
          >
            Contacto
          </a>
          <a
            href="/AlejoBonavia.pdf"
            download
            className="bg-green-500 hover:bg-green-600 text-[#0a0a0a] px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
            aria-label="Descargar CV en PDF"
          >
            Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
