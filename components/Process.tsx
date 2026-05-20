"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Process() {
  const { t } = useLocale();
  const process = t('process') as { badge: string, title: string, steps: Array<{title: string, desc: string}> };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{process.badge}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{process.title}</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-border" />
          
          <div className="grid md:grid-cols-4 gap-10">
            {process.steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-bg-light border-4 border-surface flex items-center justify-center text-2xl font-display font-bold text-primary relative z-10 mb-6 shadow-sm">
                  {i + 1}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}