
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import TrustDetails from "@/components/TrustDetails";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Video from "@/components/Video";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Calculator />
        <Services />
        <TrustDetails />
        <Advantages />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <Video />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
