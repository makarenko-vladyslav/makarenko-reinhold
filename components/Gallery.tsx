"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as any[];

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-2xl ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
