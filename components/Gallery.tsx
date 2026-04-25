"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as Array<{url: string, alt: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('gallery.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('gallery.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}