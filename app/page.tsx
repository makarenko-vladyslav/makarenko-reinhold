
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesShowcase from "@/components/ServicesShowcase";
import ServicesCatalog from "@/components/ServicesCatalog";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
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
        <ServicesShowcase />
        <ServicesCatalog />
        <Calculator />
        <Trust />
        <Advantages />
        <Process />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
