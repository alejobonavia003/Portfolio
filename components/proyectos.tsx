const proyectos = [
  {
    nombre: "Sistema de Gestión Universitaria",
    descripcion:
      "Proyecto académico hecho en Java + Spark + JDBC + Mustache. Permite administrar estudiantes, materias y docentes.",
    stack: ["Java", "Spark", "JDBC", "Mustache"],
    img: "/proyecto_universidad.png",
    link: "https://github.com/alejobonavia003/SISTEMA-DE-GESTION-ESTUDIANTIL",
  },
  {
    nombre: "Mantis Espacio Terapéutico",
    descripcion:
      "Página web desarrollada con React + Node.js + Railway, enfocada en ofrecer información y servicios de bienestar.",
    stack: ["React", "Node.js", "Express", "Railway"],
    img: "/Mantis.png",
    link: "https://github.com/alejobonavia003/Mantis",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 bg-gray-950 text-gray-300 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Proyectos</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {proyectos.map((p) => (
            <div key={p.nombre} className="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:border-blue-600 transition">
              <img src={p.img} alt={p.nombre} className="rounded-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold text-white">{p.nombre}</h3>
              <p className="text-gray-400 text-sm mt-2 mb-3">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-300">{tech}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" className="text-blue-500 hover:text-blue-400 text-sm">
                Ver en GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
