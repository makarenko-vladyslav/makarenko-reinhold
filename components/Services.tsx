"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from '@/components/SectionHeading';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'flyttevask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-accent" />
        </svg>
      );
    case 'daglig':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10M12 8v.01" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4l2-2M20 8l2-2" className="text-accent" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'kontor':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <rect x="4" y="2" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'bygg':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-accent" />
        </svg>
      );
    case 'vindu':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15l3-3" className="text-accent" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as any[];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="section-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-bg-light rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 card-hover-effect"
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:text-accent group-hover:scale-110 transition-all">
                {getServiceIcon(item.id)}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {item.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-primary">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors">
                {t('nav.cta')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}