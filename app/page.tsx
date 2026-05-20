import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Trust from "@/components/Trust";
import ServicesFeatured from "@/components/ServicesFeatured";
import ServicesList from "@/components/ServicesList";
import Calculator from "@/components/Calculator";
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
        <Trust />
        <ServicesFeatured />
        <ServicesList />
        <Calculator />
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
