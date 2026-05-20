"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="bg-accent py-20 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
        >
          {t('cta.title')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          {t('cta.desc')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="#kalkulator" className="inline-flex items-center gap-2 bg-primary hover:bg-bg-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
            {t('cta.btn')}
            <ArrowRight size={20} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
