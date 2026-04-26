
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function TrustBadges() {
  const { t } = useLocale();
  const badges = t('trustBadges') as string[];

  return (
    <section className="bg-surface py-8 border-b border-border relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-text-muted font-medium text-sm md:text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
