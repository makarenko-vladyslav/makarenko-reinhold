
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Broom, HouseLine, Buildings, Drop, Sparkle, Rug } from '@phosphor-icons/react';

export default function ServicesGrid() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{title: string, desc: string}>;
  
  const icons = [Broom, HouseLine, Buildings, Sparkle, HouseLine, Rug];

  return (
    <section id="services" className="py-24 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-2xl">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('services.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('services.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-bg-light hover:border-accent/30 hover:shadow-card transition-all duration-300 group bg-white"
              >
                <Icon size={40} weight="duotone" className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
                <a href="#calculator" className="text-sm font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                  Beregn pris <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="text-primary font-bold hover:text-accent transition-colors underline decoration-2 underline-offset-4">
            {t('services.moreBtn') as string}
          </button>
        </div>

      </div>
    </section>
  );
}
