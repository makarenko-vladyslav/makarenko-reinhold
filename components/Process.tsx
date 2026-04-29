
"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{title: string, description: string}>;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-bg-light relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          centered
        />

        <div className="relative mt-16">
          {/* Vertical Line Background */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[27px] md:left-1/2 top-0 w-1 bg-accent -translate-x-1/2 rounded-full origin-top"
          />

          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="hidden md:block w-1/2" /> {/* Spacer */}

                  {/* Number Node */}
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-bg-light shadow-lg flex items-center justify-center font-display font-bold text-xl text-primary relative z-20 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {idx + 1}
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`md:w-1/2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <h3 className="text-2xl font-display font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-text-muted">{step.description}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
