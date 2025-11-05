const habilidades = {
  Lenguajes: ["Java", "JavaScript", "SQL"],
  Frontend: ["React", "Tailwind CSS"],
  Backend: ["Node.js", "Express"],
  "Bases de datos": ["PostgreSQL", "DDL", "DML", "Diagramas ER", "Normalización"],
  Herramientas: ["Git", "GitHub", "Scrum", "UML"],
  Aprendiendo: ["Automatización n8n", "APIs", "Integraciones"],
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 bg-gray-900 text-gray-200 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Habilidades</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(habilidades).map(([categoria, items]) => (
            <div key={categoria} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-blue-600 transition">
              <h3 className="font-semibold text-lg text-white mb-3">{categoria}</h3>
              <ul className="space-y-1 text-sm">
                {items.map((hab) => (
                  <li key={hab} className="text-gray-400">• {hab}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
