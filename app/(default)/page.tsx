export const metadata = {
  title: "Alejo Bonavia - Portfolio",
  description: "Portfolio de Alejo Bonavia, desarrollador web y programador.",
};

import Inicio from "@/components/inicio";
import SobreMi from "@/components/sobreMi";
import Habilidades from "@/components/habilidades";
import Proyectos from "@/components/proyectos";
import Formacion from "@/components/formacion";
import Contacto from "@/components/contacto";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export default function Home() {
  return (
    <>

      <main>
        <Inicio />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>

    </>
  );
}
