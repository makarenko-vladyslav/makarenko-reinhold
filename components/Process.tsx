"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as { title: string, description: string }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          centered
        />

        <div className="mt-20 relative">
          {/* Horizontal Line Desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col md:items-center md:text-center"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light shadow-md flex items-center justify-center text-xl font-display font-bold text-primary relative z-10 mb-6 shrink-0">
                  {idx + 1}
                </div>
                
                {/* Vertical line mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-16 left-8 w-0.5 h-full bg-gray-200 -ml-px" />
                )}

                <div className="pl-20 md:pl-0">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
