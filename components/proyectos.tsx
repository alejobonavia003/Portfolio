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
    webLink: "https://que-lomitos-system.vercel.app/",
    bottonSite: "sitio",
    bottonGit: "Ver github",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-[#0a0a0a] text-[#e5e5e5] px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Proyectos</h2>
        <div className="grid gap-8">
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
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={gallery[currentImageIndex]}
                    alt={p.nombre}
                    className="w-full h-64 object-cover"
                  />
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#0a0a0a]/60 hover:bg-[#0a0a0a]/80 text-[#e5e5e5] p-2 rounded transition"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#0a0a0a]/60 hover:bg-[#0a0a0a]/80 text-[#e5e5e5] p-2 rounded transition"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3">
                    <a
                      href={p.webLink}
                      target="_blank"
                      className="hover:text-green-500 transition"
                    >
                      {p.nombre}
                    </a>
                  </h3>
                  <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
                    {p.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#111111] text-xs px-3 py-1 rounded-md text-[#9ca3af] border border-[#222222]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center">
                    <a
                      href={p.webLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-[#0a0a0a] text-sm rounded font-medium transition"
                    >
                      {p.bottonSite ?? "Ver sitio"} →
                    </a>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-[#111111] hover:bg-[#1a1a1a] text-green-500 text-sm rounded font-medium transition border border-[#222222]"
                    >
                      {p.bottonGit ?? "Ver github"} →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
