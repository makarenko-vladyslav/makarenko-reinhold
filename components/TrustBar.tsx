"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Certificate, IdentificationCard, Leaf, ShieldCheck } from '@phosphor-icons/react';

export default function TrustBar() {
  const { t } = useLocale();
  const items = t('trust.items') as Array<{title: string, desc: string}>;
  
  const icons = [Certificate, IdentificationCard, Leaf, ShieldCheck];

  return (
    <section className="py-12 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full bg-bg-light flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Icon size={32} weight="duotone" className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-text-muted mt-1">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}