
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesFeatured from "@/components/ServicesFeatured";
import CalculatorSection from "@/components/CalculatorSection";
import TrustSection from "@/components/TrustSection";
import WhyUs from "@/components/WhyUs";
import ServiceDirectory from "@/components/ServiceDirectory";
import BeforeAfter from "@/components/BeforeAfter";
import ProcessTimeline from "@/components/ProcessTimeline";
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
      <main className="overflow-hidden">
        <Hero />
        <SocialProof />
        <ServicesFeatured />
        <CalculatorSection />
        <TrustSection />
        <WhyUs />
        <ServiceDirectory />
        <BeforeAfter />
        <ProcessTimeline />
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
