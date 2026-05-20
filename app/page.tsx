import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Guarantee from "@/components/Guarantee";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Coverage from "@/components/Coverage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Services />
        <Calculator />
        <Guarantee />
        <Process />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <Coverage />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
