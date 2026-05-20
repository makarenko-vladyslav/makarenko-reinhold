"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { House, CalendarCheck, Sparkle, Buildings, Drop, ShieldCheck, ArrowRight } from '@phosphor-icons/react';

const iconMap: Record<string, any> = {
  House, CalendarCheck, Sparkle, Buildings, Drop, ShieldCheck
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as { id: string; title: string; desc: string; icon: string }[];

  return (
    <section id="tjenester" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading badge={t('services.badge')} title={t('services.title')} />
          <a href="#kalkulator" className="hidden md:flex items-center gap-2 font-bold text-accent hover:text-primary transition-colors mb-6">
            Se alle priser <ArrowRight weight="bold" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || House;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-bg-muted rounded-xl p-8 hover:border-accent/30 hover:shadow-premium transition-all duration-300 bg-bg-light/50 hover:bg-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-bg-muted group-hover:border-accent/20">
                    <Icon size={24} weight="duotone" className="text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <ArrowRight size={20} weight="bold" className="text-text-muted/30 group-hover:text-accent transition-colors transform group-hover:translate-x-1" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
