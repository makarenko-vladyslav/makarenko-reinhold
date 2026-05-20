"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, FileText, Certificate } from '@phosphor-icons/react';

export default function TrustBar() {
  const { t } = useLocale();

  const badges = [
    { icon: Certificate, text: "Arbeidstilsynet" },
    { icon: FileText, text: "HMS-kort påkrevd" },
    { icon: ShieldCheck, text: "10 MNOK Forsikring" },
    { icon: Leaf, text: "Svanemerket Kjemi" },
  ];

  return (
    <section className="bg-white py-8 border-b border-bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-text-muted mb-6 uppercase tracking-widest">
          {t('trustBar.title')}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <badge.icon size={32} weight="duotone" className="text-accent" />
              <span className="font-display font-bold text-primary text-lg">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
