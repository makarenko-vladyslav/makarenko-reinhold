"use client";
import { useLocale } from '@/lib/i18n';

export default function WhyUs() {
  const { t } = useLocale();

  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Kicker & Heading */}
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
          {t('whyUs.kicker')}
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-text-main mb-8 uppercase">
          {t('whyUs.title')}
        </h2>

        {/* 2-Photo Cluster & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Deep Editorial Copy, Stat Row, Person Caption */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
              {t('whyUs.description')}
            </p>

            {/* Elegant pull-quote statement line */}
            <blockquote className="border-l-2 border-accent pl-6 py-2 italic text-lg sm:text-xl font-display font-light text-primary">
              “{t('whyUs.quote')}”
            </blockquote>

            {/* Stat Row: 4 Real Numerals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-text-muted/10">
              <div>
                <span className="block font-display font-black text-3xl text-primary">{t('whyUs.stats.year')}</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-text-muted mt-1">Etableringsår</span>
              </div>
              <div>
                <span className="block font-display font-black text-3xl text-primary">{t('whyUs.stats.rate')}</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-text-muted mt-1">Overtakelsesrate</span>
              </div>
              <div>
                <span className="block font-display font-black text-3xl text-primary">{t('whyUs.stats.insurance')}</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-text-muted mt-1">Ansvarsforsikring</span>
              </div>
              <div>
                <span className="block font-display font-black text-3xl text-primary">{t('whyUs.stats.guarantee')}</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-text-muted mt-1">Garantiutbedring</span>
              </div>
            </div>

            {/* Named Person role caption */}
            <div className="pt-4">
              <p className="text-xs font-display font-bold text-text-main">
                {t('whyUs.founder')}
              </p>
            </div>
          </div>

          {/* Right Block: 2-Photo Overlapped/Framed Cluster */}
          <div className="lg:col-span-5 relative pt-12 sm:pt-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary-light/40 w-4/5">
                <img 
                  src="https://picsum.photos/seed/scandinavian-cleaning-service/800/600" 
                  alt="Anna og teamet utfører profesjonelt renhold i Notodden"
                  className="object-cover w-full h-[320px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 right-0 w-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-2">
                <img 
                  src="https://picsum.photos/seed/hms-card-cleaning/400/400" 
                  alt="Detaljfokusert renhold i tråd med Arbeidstilsynets standarder"
                  className="object-cover w-full aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-14 border-t border-accent/20 pt-4">
              <span className="text-[10px] tracking-wider font-semibold text-text-muted block">
                Fig. 1.1 — Kvalitetskontroll av detaljarbeid utført av godkjent personell i Notodden.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}