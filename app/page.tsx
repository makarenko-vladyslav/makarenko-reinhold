import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import FlyttevaskSpotlight from "@/components/FlyttevaskSpotlight";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
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
        <FlyttevaskSpotlight />
        <Advantages />
        <Process />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
