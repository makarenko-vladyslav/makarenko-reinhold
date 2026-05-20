
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './Shared';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as any[];

  return (
    <section className="py-24 bg-bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
          centered={true}
        />

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Node */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-white shadow-[0_0_0_2px_hsl(185_75%_40%)] flex items-center justify-center text-2xl font-display font-bold text-accent mb-6 relative z-10">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
