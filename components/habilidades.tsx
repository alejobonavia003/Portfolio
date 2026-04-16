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
    <section id="habilidades" className="py-24 bg-[#0a0a0a] text-[#e5e5e5] px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Habilidades</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(habilidades).map(([categoria, items]) => (
            <div key={categoria} className="skill-card">
              <h3 className="font-semibold text-lg text-[#e5e5e5] mb-4">
                {categoria}
              </h3>
              <ul className="space-y-2 text-sm">
                {items.map((hab) => (
                  <li key={hab} className="text-[#9ca3af]">
                    <span className="text-green-500 mr-2">▸</span>
                    {hab}
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
