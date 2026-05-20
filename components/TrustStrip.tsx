"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const { t } = useLocale();
  const items = t('trust.items') as { title: string; desc: string }[];

  return (
    <section className="bg-white py-12 border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`px-4 ${i === 0 ? 'pl-0' : ''} ${i === 3 ? 'pr-0' : ''}`}
            >
              <h4 className="font-display font-bold text-primary text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
