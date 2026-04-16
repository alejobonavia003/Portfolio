export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a] text-[#e5e5e5] px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">Contacto</h2>
        <p className="text-[#9ca3af] text-center mb-12 text-lg">
          Podés contactarme o ver mis perfiles:
        </p>
        <ul className="space-y-4 text-center">
          <li className="text-[#9ca3af] hover:text-green-500 transition">
            <span className="text-green-500 mr-2">→</span>
            <a
              href="mailto:bonaviaalejo@gmail.com"
              className="hover:text-green-500"
            >
              bonaviaalejo@gmail.com
            </a>
          </li>
          <li className="text-[#9ca3af]">
            <span className="text-green-500 mr-2">→</span>
            +54 9 3385 443705
          </li>
          <li className="text-[#9ca3af] hover:text-green-500 transition">
            <span className="text-green-500 mr-2">→</span>
            <a
              href="https://www.linkedin.com/in/alejo-bonavia-550539278/"
              target="_blank"
              className="hover:text-green-500"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-[#9ca3af] hover:text-green-500 transition">
            <span className="text-green-500 mr-2">→</span>
            <a
              href="https://github.com/alejobonavia003"
              target="_blank"
              className="hover:text-green-500"
            >
              GitHub
            </a>
          </li>
          <li className="text-[#9ca3af]">
            <span className="text-green-500 mr-2">→</span>
            Río Cuarto, Córdoba, Argentina
          </li>
        </ul>
      </div>
    </section>
  );
}
