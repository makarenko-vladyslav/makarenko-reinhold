"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as { name: string; role: string; quote: string; stars: number }[];

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeading badge={t('testimonials.badge')} title={t('testimonials.title')} />
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-premium transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    size={16} 
                    weight="fill" 
                    className={starIdx < item.stars ? "text-accent" : "text-bg-muted"} 
                  />
                ))}
              </div>
              <p className="text-text-main italic mb-6 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&backgroundColor=0f172a`} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
