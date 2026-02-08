"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-gray-100 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/alejo.jpg"
          alt="Alejo Bonavia"
          width={140}
          height={140}
          className="rounded-full border-4 border-gray-700 mx-auto mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Alejo Martín Bonavia
        </h1>
        <p className="text-blue-300 text-sm mb-2">
          Estudiante de Ciencias de la Computación • Perfil IT Junior
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Estudiante de 3er año con base técnica en desarrollo de software y
          sistemas. Experiencia en análisis de requerimientos, resolución de
          problemas técnicos y trabajo con aplicaciones backend y full stack.
          Capacidad para adaptarme a distintos entornos IT y aprender nuevas
          herramientas rápidamente.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#proyectos"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-5 py-2 rounded-md transition"
          >
            Contacto
          </a>
          <a
            href="/AlejoBonavia.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition"
            aria-label="Descargar CV en PDF"
          >
            Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
