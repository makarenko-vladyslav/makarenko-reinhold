
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Calculator from "@/components/Calculator";
import FeaturedServices from "@/components/FeaturedServices";
import AllServices from "@/components/AllServices";
import WhyUs from "@/components/WhyUs";
import TrustEngineering from "@/components/TrustEngineering";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
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
        <FeaturedServices />
        <TrustEngineering />
        <AllServices />
        <WhyUs />
        <BeforeAfter />
        <Process />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
