export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gray-950 text-gray-300 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Contacto</h2>
        <p className="text-gray-400 mb-8">
          Podés contactarme o ver mis perfiles:
        </p>
        <ul className="space-y-2">
          <li>
            📧{" "}
            <a
              href="mailto:bonaviaalejo@gmail.com"
              className="hover:text-blue-400"
            >
              bonaviaalejo@gmail.com
            </a>
          </li>
          <li>📞 +54 9 3385 443705</li>
          <li>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/alejo-bonavia-550539278/"
              target="_blank"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            💻{" "}
            <a
              href="https://github.com/alejobonavia003"
              target="_blank"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
          </li>
          <li>📍 Río Cuarto, Córdoba, Argentina</li>
        </ul>
      </div>
    </section>
  );
}
