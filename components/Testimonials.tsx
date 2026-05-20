
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { Star, Quotes } from '@phosphor-icons/react';

export default function Testimonials() {
  const { t } = useLocale();
  const content = t('testimonials') as any;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={content.badge} title={content.title} centered />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {content.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quotes size={40} weight="duotone" className="text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-text-main italic mb-8 relative z-10">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
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
