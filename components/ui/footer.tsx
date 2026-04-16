import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#222222] bg-[#0a0a0a] py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-[#9ca3af] text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Alejo Bonavia — Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-lg">
            <Link
              href="https://github.com/alejobonavia003"
              target="_blank"
              className="hover:text-green-500 transition"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejo-bonavia-550539278/"
              target="_blank"
              className="hover:text-green-500 transition"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              href="#contacto"
              className="hover:text-green-500 transition"
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
