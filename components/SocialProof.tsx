"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-12 bg-bg-light border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-text-muted text-sm font-bold uppercase tracking-widest mb-8">
          {t('socialProof.title') as string}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-display font-bold text-primary"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
