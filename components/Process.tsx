"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('process.badge')} title={t('process.title')} centered />
        
        <div className="mt-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-bg-muted -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white p-6 rounded-xl border border-bg-muted shadow-sm hover:shadow-premium transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-md group-hover:bg-accent transition-colors relative z-10">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
