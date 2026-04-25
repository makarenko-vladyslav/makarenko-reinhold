import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import CoverageArea from "@/components/CoverageArea";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <SocialProof />
        <Services />
        <Calculator />
        <WhyUs />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <Gallery />
        <VideoSection />
        <Team />
        <CoverageArea />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}