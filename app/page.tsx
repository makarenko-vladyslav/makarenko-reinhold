
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyUs from "@/components/WhyUs";
import FlyttevaskFocus from "@/components/FlyttevaskFocus";
import CalculatorSection from "@/components/CalculatorSection";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhyUs />
        <FlyttevaskFocus />
        <CalculatorSection />
        <ServicesGrid />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
