"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function CoverageArea() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('coverage.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('coverage.title')}
          </h2>
          <p className="text-text-light/70 text-lg leading-relaxed mb-8">
            {t('coverage.description')}
          </p>
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className="font-display font-bold text-xl">Notodden, Telemark</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-white/10 relative"
        >
          <div className="absolute inset-0 bg-primary/20 pointer-events-none z-10 mix-blend-overlay"></div>
          <iframe 
            src={`https://www.google.com/maps?q=${encodeURIComponent(t('coverage.mapQuery'))}&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}