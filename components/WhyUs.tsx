"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Drop, MapPin, ListChecks, CurrencyNok } from '@phosphor-icons/react';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{title: string, desc: string}>;
  const icons = [Drop, MapPin, ListChecks, CurrencyNok];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('whyUs.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('whyUs.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-crisp hover:shadow-crisp-hover transition-all group"
              >
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} weight="duotone" className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}