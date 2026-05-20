"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{num: string, title: string, desc: string}>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge') as string} 
          title={t('process.title') as string} 
          centered
        />

        <div className="mt-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-bg-light shadow-card flex items-center justify-center mb-8 mx-auto lg:mx-0 relative group">
                  <span className="text-3xl font-display font-bold text-primary group-hover:text-accent transition-colors">{step.num}</span>
                  {/* Decorative dot on line */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 bg-accent rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-text-muted text-center lg:text-left leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
