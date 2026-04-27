import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Valores from "@/components/Valores";
import Localidades from "@/components/Localidades";
import Depoimentos from "@/components/Depoimentos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Valores />
        <Localidades />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
