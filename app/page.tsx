import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
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
        <SocialProof />
        <Calculator />
        <Services />
        <Trust />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <Gallery />
        <VideoSection />
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
