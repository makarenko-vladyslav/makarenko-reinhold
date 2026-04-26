
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  sparkles: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4"/></svg>,
  building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as any[];

  return (
    <section id="services" className="py-24 bg-surface-alt relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('services.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 relative inline-block">
            {t('services.title')}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full" />
          </h2>
          <p className="text-text-muted text-lg mt-6">{t('services.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Photo Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full group shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/professional-cleaner/800/1200" 
              alt="Professional Cleaner" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary">Premium Standard</h3>
                </div>
                <p className="text-text-muted text-sm">Vi bruker kun profesjonelt utstyr for å sikre et perfekt resultat.</p>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid Right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-3xl shadow-[0_8px_30px_hsl(215_30%_15%_/_0.04)] border border-border hover:shadow-[0_20px_40px_hsl(215_30%_15%_/_0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div className="w-14 h-14 rounded-2xl bg-surface-alt flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8">
                    {icons[item.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
                
                <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-accent font-semibold group/link">
                  Bestill nå 
                  <svg className="transition-transform group-hover/link:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
