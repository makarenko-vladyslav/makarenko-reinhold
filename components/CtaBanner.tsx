
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Button } from './Shared';

export default function CtaBanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-lg text-text-inverse/80 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a href="#contact">
              <Button variant="primary" className="text-lg px-10 py-4">
                {t('ctaBanner.button')}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
