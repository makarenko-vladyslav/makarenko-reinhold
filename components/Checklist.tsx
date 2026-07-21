"use client";
import { useLocale } from '@/lib/i18n';

interface ChecklistZone {
  name: string;
  items: string[];
}

export default function Checklist() {
  const { t } = useLocale();
  const zones = t('checklist.zones') as ChecklistZone[];

  return (
    <section id="checklist" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('checklist.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('checklist.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('checklist.subtitle')}
          </p>
        </div>

        {/* Dynamic Checklist Accordion / Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {zones.map((zone, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-primary-light shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-3 mb-6 border-b border-primary-light/50 pb-4">
                  <span className="font-display font-black text-2xl text-accent/30 tracking-tight">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-bold text-lg text-text-main uppercase tracking-tight">
                    {zone.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {zone.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-accent text-xs font-bold select-none mt-1">—</span>
                      <span className="text-text-main/80 text-sm font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
