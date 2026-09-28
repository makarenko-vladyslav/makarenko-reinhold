import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Packages from "@/components/Packages";
import Guarantee from "@/components/Guarantee";
import TelemarkCabin from "@/components/TelemarkCabin";
import BeforeAfter from "@/components/BeforeAfter";
import VideoShowcase from "@/components/VideoShowcase";
import Advantages from "@/components/Advantages";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Calculator />
        <Reveal>
          <Packages />
        </Reveal>
        <Guarantee />
        <TelemarkCabin />
        <Reveal>
          <BeforeAfter />
        </Reveal>
        <VideoShowcase />
        <Advantages />
        <Team />
        <Reveal>
          <Testimonials />
        </Reveal>
        <Process />
        <FAQ />
        <CtaBanner />
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
