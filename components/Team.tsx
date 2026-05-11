"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item: { name: string; role: string; bio: string; imageUrl: string }, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">{item.name}</h3>
              <p className="text-accent font-medium mb-3">{item.role}</p>
              <p className="text-text-muted leading-relaxed">{item.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}