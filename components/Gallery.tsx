"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as string[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          centered
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((url, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={url} 
                alt={`Gallery ${idx}`} 
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
