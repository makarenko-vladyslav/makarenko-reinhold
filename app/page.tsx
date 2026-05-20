import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyUs from "@/components/WhyUs";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import ServiceDirectory from "@/components/ServiceDirectory";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import VideoSection from "@/components/VideoSection";
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
        <WhyUs />
        <Calculator />
        <Services />
        <ServiceDirectory />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <VideoSection />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
