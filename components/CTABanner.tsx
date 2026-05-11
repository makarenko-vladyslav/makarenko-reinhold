"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('cta.subtitle')}
            </p>
            <a 
              href="#pricing"
              className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_30px_hsl(185_80%_40%/0.4)] hover:shadow-[0_0_40px_hsl(185_80%_40%/0.6)] hover:-translate-y-1"
            >
              {t('cta.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}