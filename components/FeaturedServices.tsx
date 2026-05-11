"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function FeaturedServices() {
  const { t } = useLocale();
  const items = t('featuredServices.items');

  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('featuredServices.badge')}
          title={t('featuredServices.title')}
          subtitle={t('featuredServices.subtitle')}
        />

        {/* Layout Pattern 8: Action Photo Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item: { title: string; description: string; image: string }, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
                <div className="mt-4 w-10 h-1 bg-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}