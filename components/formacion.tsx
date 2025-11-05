export default function Formacion() {
  return (
    <section id="formacion" className="py-20 bg-gray-900 text-gray-200 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Formación</h2>

        <ul className="space-y-10 text-gray-400">
          {/* Universidad */}
          <li className="flex flex-col items-center space-y-2">
            <p>
              <b className="text-gray-100">Analista en Ciencias de la Computación</b> — Universidad Nacional de Río Cuarto (en curso)
            </p>
          </li>

          {/* Curso Udemy */}
          <li className="flex flex-col items-center space-y-4">
            <p>
              <b className="text-gray-100">Curso “Become a Full-Stack Web Developer”</b> — Udemy
            </p>
            <img
              src="/udemy.png"
              alt="Certificado Udemy - Become a Full-Stack Web Developer"
              className="rounded-xl shadow-lg border border-gray-700 max-w-sm transition-transform hover:scale-105"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
