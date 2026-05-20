"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

const icons: Record<string, JSX.Element> = {
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>,
  leaf: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
  map: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
};

export default function WhyUs() {
  const { t } = useLocale();
  const cards = t('whyUs.cards') as { title: string; desc: string; icon: string }[];

  return (
    <section id="about" className="py-24 bg-bg-tint relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('whyUs.badge')}
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-bg-tint text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <div className="w-7 h-7">{icons[card.icon]}</div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
