import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Guarantee from "@/components/Guarantee";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ShowcaseVideo from "@/components/ShowcaseVideo";
import CoverageMap from "@/components/CoverageMap";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Services />
        <Calculator />
        <Guarantee />
        <WhyUs />
        <Process />
        <ShowcaseVideo />
        <CoverageMap />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}