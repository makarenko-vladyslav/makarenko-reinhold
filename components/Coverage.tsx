
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { MapPin } from '@phosphor-icons/react';

export default function Coverage() {
  const { t } = useLocale();
  const content = t('coverage') as any;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading badge={content.badge} title={content.title} />
            <p className="text-text-muted text-lg mb-8">{content.desc}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {content.areas.map((area: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-primary font-medium bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-50">
                  <MapPin size={20} weight="duotone" className="text-accent" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-premium h-[400px] bg-gray-200 relative"
          >
            {/* Minimal Map Placeholder - In real world use Google Maps iframe here */}
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
