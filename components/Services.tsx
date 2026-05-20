"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { HouseLine, CalendarCheck, Sparkle, Buildings, SquareHalf, Broom } from '@phosphor-icons/react';

const iconMap: Record<string, React.ElementType> = {
  HouseLine, CalendarCheck, Sparkle, Buildings, SquareHalf, Broom
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{title: string, desc: string, icon: string}>;

  return (
    <section id="services" className="py-24 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge') as string} 
          title={t('services.title') as string} 
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || HouseLine;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-border bg-white hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="w-12 h-12 bg-bg-light rounded-lg flex items-center justify-center mb-6 text-primary group-hover:text-accent transition-colors">
                  <Icon size={28} weight="duotone" />
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
