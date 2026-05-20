"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as { value: string, label: string }[];

  return (
    <section className="bg-white border-b border-slate-100 py-12 relative z-20 -mt-8 rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {item.value}
              </span>
              <span className="text-sm font-medium text-text-muted uppercase tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
