import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedServices from "@/components/FeaturedServices";
import ServiceDirectory from "@/components/ServiceDirectory";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
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
        <FeaturedServices />
        <ServiceDirectory />
        <Calculator />
        <Trust />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Team />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
