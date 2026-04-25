"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{title: string, description: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('process.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('process.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center gap-8 md:justify-between ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-accent rounded-full flex items-center justify-center font-display font-bold text-xl text-primary md:-translate-x-1/2 z-10 shadow-[0_0_15px_hsl(185_80%_45%/0.3)]">
                  {i + 1}
                </div>
                
                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}