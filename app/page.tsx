
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import FlyttevaskFeature from "@/components/FlyttevaskFeature";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Coverage from "@/components/Coverage";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <Services />
        <Calculator />
        <FlyttevaskFeature />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <Coverage />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
