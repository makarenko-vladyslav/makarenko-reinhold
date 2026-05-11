"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          centered
        />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-100">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent origin-left"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step: { title: string; description: string }, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative text-center"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 mx-auto bg-white border-4 border-bg-light rounded-full flex items-center justify-center text-xl font-display font-bold text-primary mb-6 relative z-10 shadow-sm">
                  {idx + 1}
                  {/* Active dot */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent opacity-0 animate-pulse-slow" />
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