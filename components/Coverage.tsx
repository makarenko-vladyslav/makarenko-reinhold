"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Coverage() {
  const { t } = useLocale();
  const coverageData = t('coverage') as { badge: string, title: string, subtitle: string, areas: string[] };

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge={coverageData.badge}
              title={coverageData.title}
              subtitle={coverageData.subtitle}
            />
            
            <div className="flex flex-wrap gap-3 mt-8">
              {coverageData.areas.map((area, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-semibold shadow-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
