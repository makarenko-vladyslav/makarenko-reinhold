"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as { url: string; alt: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative group overflow-hidden rounded-xl ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-square w-full h-full">
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    {item.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
