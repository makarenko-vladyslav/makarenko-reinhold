"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const getTrustIcon = (icon: string) => {
  switch(icon) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-4.5-3.5-8-8-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-4.5 3.5-8 8-8" />
        </svg>
      );
    case 'umbrella':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a9 9 0 0 0-9-9h18a9 9 0 0 0-9 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v-2" />
        </svg>
      );
    case 'key':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="15" r="4" />
          <line x1="10.85" y1="12.15" x2="19" y2="4" />
          <line x1="18" y1="5" x2="20" y2="7" />
          <line x1="15" y1="8" x2="17" y2="10" />
        </svg>
      );
    default:
      return <circle cx="12" cy="12" r="10" />;
  }
};

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as { title: string, description: string, icon: string }[];

  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('trust.badge')}
          title={t('trust.title')}
          subtitle={t('trust.subtitle')}
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                  <div className="w-7 h-7">
                    {getTrustIcon(item.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
