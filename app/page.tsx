import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import FlyttevaskFocus from "@/components/FlyttevaskFocus";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import CoverageArea from "@/components/CoverageArea";
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
        <SocialProof />
        <WhyUs />
        <Calculator />
        <Services />
        <FlyttevaskFocus />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <CoverageArea />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
