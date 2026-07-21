"use client";
import { useLocale } from '@/lib/i18n';

interface TrustCard {
  title: string;
  text: string;
}

export default function Trust() {
  const { t } = useLocale();
  const trustItems = t('trust.items') as TrustCard[];

  return (
    <section id="trust" className="py-12 lg:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('trust.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('trust.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* Elegant Grid without generic icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-bg-light p-8 rounded-2xl border border-primary-light flex items-start gap-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="text-accent font-display font-black text-2xl leading-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-text-main mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
