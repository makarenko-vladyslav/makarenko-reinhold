
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { IdentificationCard, Leaf, ShieldCheck, Buildings } from '@phosphor-icons/react';

export default function TrustStrip() {
  const { t } = useLocale();

  const items = [
    { icon: Buildings, label: t('trust.approved') as string },
    { icon: IdentificationCard, label: t('trust.hms') as string },
    { icon: Leaf, label: t('trust.eco') as string },
    { icon: ShieldCheck, label: t('trust.insurance') as string },
  ];

  return (
    <section className="bg-white border-b border-bg-light py-8 relative z-20 -mt-8 mx-6 lg:mx-auto max-w-7xl rounded-2xl shadow-xl">
      <div className="px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-bg-light/50">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <item.icon size={32} weight="duotone" className="text-accent mb-3" />
              <span className="text-sm font-semibold text-primary">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
