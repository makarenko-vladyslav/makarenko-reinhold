"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import WhyUs from "@/components/WhyUs";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocale } from "@/lib/i18n";
import { Reveal, Marquee } from "@/components/motion";

export default function Home() {
  const { t } = useLocale();

  const marqueeItems = (t("marquee") as string[]) || [];
  const hairlineText = String(t("interstitials.hairline"));
  const statementQuote = String(t("interstitials.statementQuote"));
  const statementSub = String(t("interstitials.statementSub"));
  const statementLead = String(t("interstitials.statementLead"));

  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Reveal>
          <Hero />
        </Reveal>

        {/* Section 2: Social Proof */}
        <Reveal>
          <SocialProof />
        </Reveal>

        {/* Interstitial 1: Text Marquee Ticker */}
        <div className="py-4 bg-primary text-white border-y border-white/10 overflow-hidden select-none">
          <Marquee className="font-display text-xs font-bold uppercase tracking-[0.22em] text-white/85">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-8 mx-4 whitespace-nowrap">
                <span>{item}</span>
                <span className="text-accent select-none" aria-hidden="true">―</span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* Section 3: Services */}
        <Reveal>
          <Services />
        </Reveal>

        {/* Interstitial 2: Labeled Hairline Separator */}
        <div className="bg-bg-light py-5 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-text-muted">
            <span className="h-px flex-grow bg-gray-200 mr-4" />
            <span className="font-display font-bold uppercase tracking-widest text-[11px] text-accent text-center">
              {hairlineText}
            </span>
            <span className="h-px flex-grow bg-gray-200 ml-4" />
          </div>
        </div>

        {/* Section 4: Packages & Master Price List */}
        <Reveal>
          <Packages />
        </Reveal>

        {/* Section 5: Calculator */}
        <Reveal>
          <Calculator />
        </Reveal>

        {/* Section 6: Before & After */}
        <Reveal>
          <BeforeAfter />
        </Reveal>

        {/* Section 7: Why Us & Craft Standards */}
        <Reveal>
          <WhyUs />
        </Reveal>

        {/* Section 8: Video Showcase */}
        <Reveal>
          <VideoShowcase />
        </Reveal>

        {/* Interstitial 3: Expansive Typographic Statement Band */}
        <Reveal>
          <div className="py-16 sm:py-20 bg-bg-surface border-b border-gray-200 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-accent mb-4">
                {statementLead}
              </p>
              <blockquote className="font-display font-extrabold text-xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-tight max-w-4xl mx-auto mb-5 text-balance">
                «{statementQuote}»
              </blockquote>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                {statementSub}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Section 9: Testimonials */}
        <Reveal>
          <Testimonials />
        </Reveal>

        {/* Section 10: Team */}
        <Reveal>
          <Team />
        </Reveal>

        {/* Section 11: Process */}
        <Reveal>
          <Process />
        </Reveal>

        {/* Section 12: Coverage */}
        <Reveal>
          <Coverage />
        </Reveal>

        {/* Section 13: FAQ */}
        <Reveal>
          <FAQ />
        </Reveal>

        {/* Section 14: CTA Banner */}
        <Reveal>
          <CtaBanner />
        </Reveal>

        {/* Section 15: Contact Form */}
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
