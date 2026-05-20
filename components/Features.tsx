"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, FileText, Clock } from '@phosphor-icons/react';

export default function Features() {
  const { t } = useLocale();
  const items = t('features.items') as { title: string; desc: string }[];
  
  const icons = [ShieldCheck, Leaf, FileText, Clock];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('features.badge')} title={t('features.title')} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="bg-white p-8 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                
                <div className="w-14 h-14 bg-bg-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon size={32} weight="duotone" className="text-primary group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
