import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-900 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Alejo Bonavia — Todos los derechos reservados.
          </p>

          <div className="flex gap-5 text-lg">
            <Link
              href="https://github.com/alejobonavia"
              target="_blank"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejobonavia"
              target="_blank"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              href="#contacto"
              className="hover:text-white transition"
              aria-label="Contacto"
            >
              <i className="bi bi-envelope-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
