import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Checklist from "@/components/Checklist";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SOCIAL PROOF TICKER */}
        <SocialProof />

        {/* SERVICES / PRICE LIST */}
        <Services />

        {/* INTERSTITIAL 1: Labeled Hairline */}
        <div className="bg-white py-6 select-none pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-primary/10"></div>
            <span className="text-[9px] tracking-[0.3em] font-extrabold text-accent uppercase font-display">
              PREISGARANTI — FULL TRANSKREATIVITET
            </span>
            <div className="flex-1 h-[1px] bg-primary/10"></div>
          </div>
        </div>

        {/* CALCULATOR */}
        <Calculator />

        {/* INTERSTITIAL 2: Oversized Standalone Statement Band */}
        <div className="bg-primary text-white py-16 overflow-hidden relative z-10 text-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[10px] tracking-[0.3em] font-extrabold text-accent uppercase font-display block mb-4">
              INTERN INTERVALLKONTROLL
            </span>
            <p className="font-display font-bold text-xl sm:text-2xl leading-relaxed uppercase tracking-tight">
              VI UTBEDRER EVENTUELLE MANGLER KOSTNADSFRITT INNEN 24 TIMER
            </p>
          </div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent/20"></div>
        </div>

        {/* CHECKLIST */}
        <Checklist />

        {/* TRUST ENGINEERING */}
        <Trust />

        {/* INTERSTITIAL 3: Giant Watermark Word Strip */}
        <div className="bg-bg-light py-10 overflow-hidden relative select-none pointer-events-none border-y border-text-muted/10">
          <div className="text-center">
            <span className="font-display font-black text-[8vw] tracking-tighter text-primary/[0.03] uppercase whitespace-nowrap block leading-none">
              DOKUMENTERT ARBEID
            </span>
          </div>
        </div>

        {/* ABOUT / CRAFT (WhyUs) */}
        <WhyUs />

        {/* BEFORE & AFTER */}
        <BeforeAfter />

        {/* TESTIMONIALS (Proof) */}
        <Testimonials />

        {/* VIDEO SECTION */}
        <VideoSection />

        {/* FAQ */}
        <Faq />

        {/* BOOKING / CTA */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
