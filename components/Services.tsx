
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { House, Calendar, Sparkle, Buildings, Drop, TreePine, ArrowRight } from '@phosphor-icons/react';

const iconMap: Record<string, any> = {
  House, Calendar, Sparkle, Buildings, Drop, TreePine
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as { title: string; desc: string; icon: string }[];
  const other = t('services.other') as string[];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('services.badge') as string} title={t('services.title') as string} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all group"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon size={28} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Services List */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-bg-light rounded-2xl p-8 border border-gray-100"
        >
          <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Flere Tjenester
          </h4>
          <div className="flex flex-wrap gap-3">
            {other.map((service, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-text-muted border border-gray-100 shadow-sm">
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
