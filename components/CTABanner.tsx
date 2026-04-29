"use client";
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(175_70%_35%/0.2)_0%,transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {t('ctaBanner.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#calculator" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold transition-colors">
                {t('ctaBanner.btn1')}
              </a>
              <a href="tel:+4796684393" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors backdrop-blur-sm border border-white/10">
                {t('ctaBanner.btn2')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
