"use client";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-dark rounded-full blur-[100px] opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t('ctaBanner.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#calculator" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                {t('ctaBanner.buttonPrimary')}
              </a>
              <a href="tel:+4796684393" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all">
                {t('ctaBanner.buttonSecondary')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
