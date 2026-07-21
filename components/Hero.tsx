"use client";
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  const handleScrollToCalc = () => {
    const target = document.getElementById('calculator');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-bg-dark pt-24">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={t('hero.videoPoster')}
        className="absolute inset-0 w-full h-full object-cover opacity-45 z-0"
        src={t('hero.videoSrc')}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-bg-dark/70 to-bg-dark z-1" />

      {/* Giant Decorative Type Layer (Watermark) */}
      <div className="absolute top-[25%] left-0 right-0 text-center select-none pointer-events-none opacity-[0.03] z-2">
        <span className="font-display font-extrabold text-[15vw] tracking-tighter uppercase whitespace-nowrap leading-none">
          NOTODDEN
        </span>
      </div>

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 w-full my-auto z-10 flex flex-col items-center text-center">
        {/* Kicker with Real Meta */}
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent uppercase font-display block mb-4">
          ETABLERT 2018 — NOTODDEN REGION
        </span>

        {/* Display Typography */}
        <h1 className="text-white font-display leading-[1.02] tracking-tight max-w-5xl mb-6">
          <span className="block text-4xl sm:text-6xl md:text-7xl font-light text-white/95">
            {t('hero.title1')}
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl text-accent font-extrabold italic">
            {t('hero.title2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8">
          {t('hero.subtitle')}
        </p>

        {/* Floating Rotating Text Seal */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block z-20">
          <svg className="w-32 h-32 animate-spin-slow select-none pointer-events-none" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className="text-[7.2px] uppercase tracking-[0.2em] fill-white/60 font-display font-semibold">
              <textPath href="#circlePath">
                • offentlig godkjent renholdsbedrift • Notodden •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Left and Right Flanking Columns (Marginalia) */}
        <div className="hidden lg:flex justify-between w-full absolute top-[55%] inset-x-0 px-12 pointer-events-none select-none text-white/40 text-[10px] tracking-widest uppercase font-display font-semibold">
          <div className="max-w-xs text-left">
            DOKUMENTERT PRECISION<br/>
            UTEN MELLOMLEDD
          </div>
          <div className="max-w-xs text-right">
            TELEMARK STANDARD<br/>
            ANVARSFORSIKRET GJENSIDIGE
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button 
            onClick={handleScrollToCalc}
            className="cursor-pointer w-full sm:w-auto px-10 py-4.5 rounded-full bg-accent hover:bg-accent-dark text-white font-bold tracking-wider uppercase text-xs transition-all duration-300 glow-glow shadow-xl"
          >
            {t('hero.ctaPrimary')}
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer w-full sm:w-auto px-10 py-4.5 rounded-full border border-white/20 hover:border-white text-white font-bold tracking-wider uppercase text-xs transition-colors bg-white/5"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </div>

      {/* Hero Base Meta Strip & Scroll Cue Area */}
      <div className="relative w-full z-10 bg-bg-dark/40 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 3-item Meta Strip with Hairlines */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-xs tracking-wider uppercase font-display font-semibold">
            <span>ÅPNINGSTIDER: 08:00 – 17:00</span>
            <span className="hidden md:block text-white/20">|</span>
            <span>NOTODDEN & TELEMARK REGION</span>
            <span className="hidden md:block text-white/20">|</span>
            <span>4.9 / 5.0 Google Anmeldelser</span>
          </div>

          <div className="text-white/40 text-[10px] tracking-widest uppercase font-display font-medium">
            MVA REGISTRERT
          </div>
        </div>
      </div>

      {/* Classic Scroll Cue (Normal flow, last child, margin bottom to sit beautifully) */}
      <div className="relative flex flex-col items-center gap-2 pb-6 z-10 opacity-60 self-center">
        <span className="text-[9px] tracking-[0.3em] text-white uppercase font-display font-semibold">SCROLL</span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
