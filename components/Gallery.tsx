
"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as Array<{url: string, alt: string}>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('gallery.badge')}
          title={t('gallery.title')}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group ${idx === 0 || idx === 3 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
