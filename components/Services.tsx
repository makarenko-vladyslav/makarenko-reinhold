"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

// Custom illustration SVGs for services
const serviceIcons: Record<string, JSX.Element> = {
  move: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /><path d="M2 10h20" strokeDasharray="2 2" opacity="0.5" /></svg>,
  calendar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="3" strokeLinecap="round" /></svg>,
  camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /><path d="M12 9v.01" strokeWidth="2" strokeLinecap="round" /></svg>,
  office: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeWidth="2" strokeLinecap="round" /></svg>,
  window: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" /><path d="M15 6l3 3" opacity="0.5" /><path d="M6 15l3 3" opacity="0.5" /></svg>,
  cabin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22h20M12 2L2 12h3v8h14v-8h3L12 2z" /><path d="M10 20v-6h4v6" /><path d="M14 8l2-2" opacity="0.5" /><path d="M15 5l1-1" opacity="0.5" /></svg>
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as { title: string; desc: string; icon: string }[];

  return (
    <section id="services" className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        {/* Pattern 5: Minimal Icon Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-bg-tint border border-gray-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8">{serviceIcons[item.icon] || serviceIcons.move}</div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors">
                {t('nav.cta')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
