import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedServices from "@/components/FeaturedServices";
import ServiceDirectory from "@/components/ServiceDirectory";
import Calculator from "@/components/Calculator";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedServices />
        <ServiceDirectory />
        <Calculator />
        <Advantages />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
