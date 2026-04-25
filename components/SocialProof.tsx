"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('socialProof.stats') as Array<{value: string, label: string}>;

  return (
    <section className="py-12 bg-bg-light relative z-30 -mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel-light rounded-3xl p-8 md:p-12 shadow-xl flex flex-wrap justify-between items-center gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 min-w-[150px] text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}