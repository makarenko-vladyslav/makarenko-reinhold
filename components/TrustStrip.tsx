"use client";
import { useLocale } from '@/lib/i18n';
import { IconShield, IconLeaf, IconCheck } from './Icons';

export default function TrustStrip() {
  const { t } = useLocale();
  
  const items = [
    { icon: <IconShield />, text: t('trustStrip.item1') },
    { icon: <IconCheck />, text: t('trustStrip.item2') },
    { icon: <IconLeaf />, text: t('trustStrip.item3') },
    { icon: <IconShield />, text: t('trustStrip.item4') },
  ];

  return (
    <section className="bg-primary py-8 border-b border-white/10 relative z-20 -mt-6 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 group">
              <div className="text-accent/80 group-hover:text-accent transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
