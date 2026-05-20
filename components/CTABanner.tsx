"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Button } from './UI';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-text-inverse-muted mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#calculator">
                <Button variant="primary" className="text-lg px-10 py-5 w-full sm:w-auto">
                  {t('ctaBanner.button')}
                </Button>
              </a>
              <a href={`tel:${t('ctaBanner.phone').replace(/\s+/g, '')}`} className="text-white font-bold text-lg hover:text-accent transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                {t('ctaBanner.phone')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
