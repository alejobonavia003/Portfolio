const habilidades = {
  Lenguajes: ["Java", "JavaScript (ES6+)", "SQL"],
  Backend: ["Node.js", "Express.js", "APIs REST"],
  Frontend: ["React.js", "HTML5", "CSS3"],
  "Bases de datos": ["PostgreSQL", "SQL (nivel principiante)"],
  Herramientas: ["Git", "GitHub", "JUnit", "Railway", "Vite"],
  "Soft Skills": [
    "Análisis de riesgos",
    "Estimación de tareas",
    "Comunicación técnica",
    "Aprendizaje autónomo",
  ],
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 bg-gray-900 text-gray-200 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">Habilidades</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(habilidades).map(([categoria, items]) => (
            <div key={categoria} className="skill-card">
              <h3 className="font-semibold text-lg text-white mb-3">
                {categoria}
              </h3>
              <ul className="space-y-1 text-sm">
                {items.map((hab) => (
                  <li key={hab} className="text-gray-400">
                    • {hab}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
