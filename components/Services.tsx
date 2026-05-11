
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

// Custom SVGs for services
const icons = {
  move: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 18l2-2 2 2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16v6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  office: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22v-4h6v4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 3l.765 2.325a1 1 0 00.66.66L8.75 6.75l-2.325.765a1 1 0 00-.66.66L5 10.5l-.765-2.325a1 1 0 00-.66-.66L1.25 6.75l2.325-.765a1 1 0 00.66-.66L5 3z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{id: keyof typeof icons, title: string, description: string}>;

  return (
    <section id="services" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* L-Shape Image (Left) */}
          <div className="lg:col-span-5 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={t('services.image')} 
              alt="Cleaning Service" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-panel-dark p-6 rounded-2xl">
                <div className="text-accent-light font-bold mb-1">10+ Års Erfaring</div>
                <div className="text-white text-sm">Lokalt forankret i Telemark</div>
              </div>
            </div>
          </div>

          {/* Cards Grid (Right) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Decorative hover gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors" />
                
                <div className="w-14 h-14 rounded-2xl bg-bg-light text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {icons[item.id]}
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {item.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-6 flex items-center text-accent font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Les mer 
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
