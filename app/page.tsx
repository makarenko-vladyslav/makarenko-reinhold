import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedService from "@/components/FeaturedService";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <FeaturedService />
        <Calculator />
        <Services />
        <Trust />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
