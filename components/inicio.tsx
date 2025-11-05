"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Inicio() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-gray-100 px-6">
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
          Alejo Bonavia 
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Soy estudiante de Analista en Ciencias de la Computación en la Universidad Nacional de Río Cuarto.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition">
            Ver proyectos
          </a>
          <a href="#contacto" className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-5 py-2 rounded-md transition">
            Contacto
          </a>
        </div>
      </motion.div>
    </section>
  );
}
