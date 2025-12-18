const proyectos = [
  {
    nombre: "ecomerce Imperio Sur",
    descripcion:
      "Pagina web de e-commerce desarrollada en Hostinguer, cree el backend.",
    stack: ["wordpress", "woocomerce"],
    img: "/imperiosur.png",
    link: "https://imperiosur.com/",
    webLink: "En proceso",
    bottonSite: "Ver sitio",
    bottonGit: "Ver github",
  },
  {
    nombre: "Mantis Espacio Terapéutico",
    descripcion:
      "Página web desarrollada con React + Node.js + Railway, enfocada en ofrecer información y servicios de bienestar.",
    stack: ["React", "Node.js", "Express", "Railway"],
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
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Proyectos</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {proyectos.map((p) => (
            <div key={p.nombre} className="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:border-blue-600 transition">
              <img src={p.img} alt={p.nombre} className="rounded-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold text-white">
                <a href={p.webLink} target="_blank" className="hover:text-blue-400 transition">{p.nombre}</a>
              </h3>
              <p className="text-gray-400 text-sm mt-2 mb-3">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-300">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={p.webLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition"
                >
                  {p.bottonSite ?? p.bottonSite ?? 'Ver sitio'} →
                </a>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border border-gray-600 text-blue-500 text-sm rounded hover:bg-gray-800 transition"
                >
                  {p.bottonGit ?? 'Ver github'} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
