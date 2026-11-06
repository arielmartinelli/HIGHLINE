import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import { CtaFinal, Faq, Footer, Horarios, Proceso } from "@/components/Secciones";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Especialidades />
      <Proceso />
      <Horarios />
      <Faq />
      <CtaFinal />
      <Footer />
    </>
  );
}
