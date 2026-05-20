"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { MapPin } from '@phosphor-icons/react';

export default function Coverage() {
  const { t } = useLocale();
  const areas = t('coverage.areas') as string[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading badge={t('coverage.badge')} title={t('coverage.title')} />
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {t('coverage.desc')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin size={20} weight="duotone" className="text-accent shrink-0" />
                  <span className="font-medium text-primary">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden shadow-premium border border-slate-200">
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
