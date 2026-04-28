import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
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
        <SocialProof />
        <WhyUs />
        <Services />
        <Calculator />
        <Process />
        <BeforeAfter />
        <Trust />
        <Testimonials />
        <Gallery />
        <VideoSection />
        <Team />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
