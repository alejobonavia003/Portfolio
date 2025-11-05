import "./css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Alejo Bonavia | Portfolio",
  description:
    "Portfolio personal de Alejo Bonavia, analista en ciencias de la computación y desarrollador full stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-900 text-gray-100 font-inter tracking-tight antialiased transition-colors duration-300`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
