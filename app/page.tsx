import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TrustEngineering from "@/components/TrustEngineering";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
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
      <main className="overflow-hidden">
        <Hero />
        <SocialProof />
        <TrustEngineering />
        <Services />
        <Calculator />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <VideoSection />
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
