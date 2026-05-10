"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { getIconByName } from './Icons';

export default function Advantages() {
  const { t } = useLocale();
  const items = t('advantages.items') as {title: string, desc: string, icon: string}[];

  return (
    <section id="about" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('advantages.badge')}
          title={t('advantages.title')}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-border-light hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                {getIconByName(item.icon, "w-8 h-8")}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
