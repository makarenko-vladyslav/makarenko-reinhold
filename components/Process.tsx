"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './UI';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as { title: string, description: string }[];

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
          <div className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 hidden md:block" style={{ width: '75%' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold mb-6 shadow-lg border-4 border-bg-light transition-colors duration-500 ${i < 3 ? 'bg-accent text-white' : 'bg-white text-primary'}`}>
                  {i + 1}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
