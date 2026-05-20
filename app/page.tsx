import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedServices from "@/components/FeaturedServices";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import ServiceDirectory from "@/components/ServiceDirectory";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
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
        <FeaturedServices />
        <Calculator />
        <Trust />
        <WhyUs />
        <ServiceDirectory />
        <Process />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
