
"use client";
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,hsl(183_74%_35%),transparent_70%)]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a href="#contact" className="inline-block px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(183_74%_35%/0.4)] hover:-translate-y-1">
              {t('ctaBanner.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
