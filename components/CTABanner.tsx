"use client";
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a 
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_hsl(185_80%_40%_/_0.4)] hover:-translate-y-1"
            >
              {t('ctaBanner.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
