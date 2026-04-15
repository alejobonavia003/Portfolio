"use client";
import { useState } from "react";

const proyectos = [
  {
    nombre:
      "Que Lomitos Manager | Sistema de Gestión Gastronómica y Liquidación de Cadetería",
    descripcion:
      "Desarrollo de una solución Full-Stack diseñada para digitalizar el flujo operativo de una lomitería de alto volumen. El sistema resuelve el cuello de botella del cierre de caja diario, automatizando la conciliación de pagos multicanal y la liquidación de comisiones de logística interna. Incluye módulos para gestión de comandas, cocina, usuarios, delivery y estadísticas detalladas para optimizar operaciones.",
    stack: ["Node.js", "Express", "APIs REST"],
    img: "/quelomitosimages/dasboard general.png",
    gallery: [
      "/quelomitosimages/dasboard general.png",
      "/quelomitosimages/estadisticas.png",
      "/quelomitosimages/gestion de comandas y cocina.png",
      "/quelomitosimages/gestion de usuarios.png",
      "/quelomitosimages/panel del deliveri.png",
    ],
    link: "https://github.com/alejobonavia003/QueLomitosSystem",
    webLink: "https://github.com/alejobonavia003/QueLomitosSystem",
    bottonSite: "Repositorio",
    bottonGit: "Ver github",
  },
  {
    nombre: "Mantis - Aplicación Full Stack",
    descripcion:
      "Aplicación Full Stack (React + Express). Web de reservas de turnos y reseñas; deployment en Railway.",
    stack: ["React", "Express", "Node.js", "Railway"],
    img: "/Mantis.png",
    link: "https://github.com/alejobonavia003/Mantis",
    webLink: "https://mantisespacioterapeutico.com/",
    bottonSite: "Ver sitio",
    bottonGit: "Ver github",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 bg-gray-950 text-gray-300 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Proyectos</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {proyectos.map((p) => {
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            const gallery = p.gallery || [p.img];
            const nextImage = () =>
              setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
            const prevImage = () =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + gallery.length) % gallery.length,
              );

            return (
              <div key={p.nombre} className="project-card">
                <div className="relative">
                  <img
                    src={gallery[currentImageIndex]}
                    alt={p.nombre}
                    className="project-card-img"
                  />
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  <a
                    href={p.webLink}
                    target="_blank"
                    className="hover:text-blue-400 transition"
                  >
                    {p.nombre}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mt-2 mb-3">
                  {p.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={p.webLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition"
                  >
                    {p.bottonSite ?? p.bottonSite ?? "Ver sitio"} →
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 border border-gray-600 text-blue-500 text-sm rounded hover:bg-gray-800 transition"
                  >
                    {p.bottonGit ?? "Ver github"} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
