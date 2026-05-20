"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { ShieldCheck, Umbrella, Leaf, MapPin } from '@phosphor-icons/react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Umbrella, Leaf, MapPin
};

export default function WhyUs() {
  const { t } = useLocale();
  const cards = t('whyUs.cards') as Array<{title: string, desc: string, icon: string}>;

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-alt clip-diagonal opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('whyUs.badge') as string} 
          title={t('whyUs.title') as string} 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => {
            const Icon = iconMap[card.icon] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="bg-white p-8 rounded-2xl shadow-subtle hover:shadow-hover transition-all duration-300 group border border-border/50"
              >
                <div className="w-14 h-14 bg-surface-alt rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-primary">
                  <Icon size={32} weight="duotone" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
