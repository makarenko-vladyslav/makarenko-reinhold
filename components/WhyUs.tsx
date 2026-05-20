
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Shield, Drop, FileText, MapPin } from '@phosphor-icons/react';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{title: string, desc: string}>;
  
  const icons = [Shield, Drop, FileText, MapPin];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('whyUs.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('whyUs.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div className="w-14 h-14 bg-bg-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon size={32} weight="duotone" className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
