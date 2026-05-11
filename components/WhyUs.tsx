"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ShieldIcon, LeafIcon, KeyIcon, SparkleIcon } from './Icons';

const iconMap: Record<string, React.ReactNode> = {
  shield: <ShieldIcon className="w-8 h-8" />,
  leaf: <LeafIcon className="w-8 h-8" />,
  key: <KeyIcon className="w-8 h-8" />,
  sparkle: <SparkleIcon className="w-8 h-8" />
};

export default function WhyUs() {
  const { t } = useLocale();
  const cards = t('whyUs.cards');

  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light rounded-l-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('whyUs.badge')}
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card: { icon: string; title: string; description: string }, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_hsl(215_60%_15%/0.05)] border border-gray-100 hover:shadow-[0_8px_30px_hsl(215_60%_15%/0.1)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none z-10" />
              
              <div className="w-14 h-14 bg-bg-light rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}