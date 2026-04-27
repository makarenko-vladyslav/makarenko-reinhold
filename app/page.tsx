
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CoverageArea from "@/components/CoverageArea";
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
        <Services />
        <Calculator />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <VideoSection />
        <Team />
        <Gallery />
        <FAQ />
        <CoverageArea />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
