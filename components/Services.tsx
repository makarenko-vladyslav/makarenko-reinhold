"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { HouseLine, CalendarCheck, Buildings, FrameCorners, TreeEvergreen, Sparkle } from '@phosphor-icons/react';

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{id: string, title: string, desc: string, icon: string}>;
  
  const iconMap: Record<string, any> = {
    HouseLine, CalendarCheck, Buildings, FrameCorners, TreeEvergreen, Sparkle
  };

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('services.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('services.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkle;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-bg-light p-8 rounded-2xl overflow-hidden shadow-crisp hover:shadow-crisp-hover transition-all"
              >
                {/* Decorative background element */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out pointer-events-none" />
                
                <div className="relative z-10">
                  <Icon size={40} weight="duotone" className="text-primary mb-6 group-hover:text-accent transition-colors" />
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
                  
                  <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors">
                    {t('nav.cta') as string}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}