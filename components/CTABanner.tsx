
"use client";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-primary rounded-[40px] p-12 md:p-16 relative overflow-hidden text-center shadow-2xl">
          {/* Decorative blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a 
              href="#contact"
              className="inline-block px-10 py-5 rounded-full bg-accent text-white font-bold text-lg transition-all hover:bg-accent-light hover:scale-105 hover:shadow-[0_0_40px_hsl(158,64%,42%,0.5)] active:scale-95"
            >
              {t('ctaBanner.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
