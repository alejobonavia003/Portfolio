export default function Formacion() {
  return (
    <section id="formacion" className="py-24 bg-[#0a0a0a] text-[#e5e5e5] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">Formación</h2>

        <div className="space-y-8 text-[#9ca3af]">
          <div className="flex flex-col items-center space-y-2 pb-8 border-b border-[#222222]">
            <p className="text-lg">
              <span className="text-[#e5e5e5] font-semibold">
                Analista en Ciencias de la Computación
              </span>{" "}
              — Universidad Nacional de Río Cuarto
            </p>
            <p className="text-sm text-[#9ca3af]">
              Feb 2023 – Presente (3er año en curso)
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-lg">
              <span className="text-[#e5e5e5] font-semibold">
                Full-Stack Web Development Bootcamp
              </span>{" "}
              — Udemy
            </p>
            <p className="text-sm text-[#9ca3af]">
              Formación intensiva en desarrollo web full-stack incluyendo HTML,
              CSS, JavaScript, Node.js, React, PostgreSQL y Web3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}