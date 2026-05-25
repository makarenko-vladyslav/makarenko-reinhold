"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const getIcon = (id: string) => {
  switch(id) {
    case 'flyttevask':
    case 'move':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-4-4" />
          <circle cx="15" cy="5" r="1" fill="currentColor" />
        </svg>
      );
    case 'regelmessig':
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'visning':
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.485-7.071l-1.414 1.414M6.929 18.385l-1.414 1.414M18.385 18.385l-1.414-1.414M6.929 6.929L5.515 5.515" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'kontor':
    case 'building':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'vindu':
    case 'window':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <path d="M15 6l3 3M15 9l3-3" opacity="0.5" />
        </svg>
      );
    case 'hytte':
    case 'cabin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 10l10-8 10 8v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 10v-4h-2v2" />
          <line x1="4" y1="10" x2="20" y2="10" />
        </svg>
      );
    default:
      return <circle cx="12" cy="12" r="10" />;
  }
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as { id: string, title: string, description: string, icon: string }[];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              
              <div className="w-14 h-14 rounded-xl bg-bg-light text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <div className="w-7 h-7">
                  {getIcon(item.icon)}
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
              
              <a href="#calculator" className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:text-primary transition-colors">
                {t('nav.cta')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
