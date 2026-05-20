"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Star, Quotes } from '@phosphor-icons/react';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{name: string, role: string, quote: string, avatar: string}>;

  return (
    <section id="reviews" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('testimonials.badge') as string} 
          title={t('testimonials.title') as string} 
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-subtle border border-border relative"
            >
              <Quotes size={40} weight="duotone" className="absolute top-6 right-6 text-surface-alt" />
              
              <div className="flex text-accent mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} weight="fill" />)}
              </div>
              
              <p className="text-text-main leading-relaxed mb-8 italic relative z-10">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface-alt"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">' + item.name.charAt(0) + '</div>'); }}
                />
                <div>
                  <h4 className="font-display font-bold text-primary text-sm">{item.name}</h4>
                  <p className="text-text-muted text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
