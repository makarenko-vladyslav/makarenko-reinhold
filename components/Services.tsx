"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './UI';

// Custom SVG Icons based on ID
const ServiceIcons: Record<string, React.ReactNode> = {
  flyttevask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <path d="M12 2v4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 4l-2 2" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 4l2 2" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  regelmessig: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="3" strokeLinecap="round" stroke="var(--color-accent)" />
    </svg>
  ),
  kontor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeWidth="2" strokeLinecap="round" stroke="var(--color-accent)" />
    </svg>
  ),
  vindu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <path d="M15 13l3-3" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 17l4-4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  bygg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 22h20" />
      <path d="M17 2v20" />
      <path d="M7 12v10" />
      <path d="M12 7v15" />
      <path d="M4 17l3-3 5 5 5-5 3 3" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spesial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
      <circle cx="12" cy="12" r="3" fill="var(--color-accent)" stroke="none" />
      <path d="M4 4l2 2M20 4l-2 2M4 20l2-2M20 20l-2-2" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as { id: string, title: string, description: string, icon: string }[];
  const otherServices = t('services.otherServices') as string[];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        {/* Top 6 Services Grid - Pattern 5 (Minimal Icon Cards) adapted for premium feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-bg-light rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8">
                    {ServiceIcons[item.id] || ServiceIcons.spesial}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Services List - Clean Directory Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Andre Tjenester</h3>
              <p className="text-text-inverse-muted">Vi tilbyr også et bredt spekter av spesialiserte renholdstjenester.</p>
            </div>
            
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-3">
                {otherServices.map((service, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-accent hover:border-accent transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
