
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './Shared';
import { getIconByName } from './Icons';

export default function ServicesFeatured() {
  const { t } = useLocale();
  const items = t('servicesFeatured.items') as any[];

  return (
    <section id="services" className="py-24 bg-bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('servicesFeatured.badge')}
          title={t('servicesFeatured.title')}
          subtitle={t('servicesFeatured.subtitle')}
          centered={true}
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-16">
          {/* Left: Big Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={t('servicesFeatured.imageUrl')} 
              alt="Cleaning Professional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl">
              <p className="font-bold text-primary text-xl mb-1">Ekspertise i Praksis</p>
              <p className="text-text-muted text-sm">Vi bruker kun industrielt godkjent utstyr for optimalt resultat.</p>
            </div>
          </motion.div>

          {/* Right: 2x2 Grid of Core Services */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-light p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Decorative hover gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
                
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {getIconByName(item.icon, "w-7 h-7")}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
