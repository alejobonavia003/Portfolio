const proyectos = [
  {
    nombre: "Backend API - Philips App",
    descripcion:
      "API backend en Node.js y Express para gestión de finanzas y tareas. Diseño modular, documentación técnica y resolución de incidencias.",
    stack: ["Node.js", "Express", "APIs REST"],
    img: "/proyecto_universidad.png",
    link: "https://github.com/alejobonavia003/philips-app",
    webLink: "",
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
          {proyectos.map((p) => (
            <div key={p.nombre} className="project-card">
              <img src={p.img} alt={p.nombre} className="project-card-img" />
              <h3 className="text-lg font-semibold text-white">
                <a
                  href={p.webLink}
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  {p.nombre}
                </a>
              </h3>
              <p className="text-gray-400 text-sm mt-2 mb-3">{p.descripcion}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
