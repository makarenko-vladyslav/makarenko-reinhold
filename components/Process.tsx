
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as any[];

  return (
    <section id="process" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('process.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('process.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Number Node */}
                <div className="w-24 h-24 rounded-full bg-surface border-4 border-surface-alt shadow-[0_0_0_2px_var(--color-border)] flex items-center justify-center mb-8 relative group">
                  <div className="absolute inset-0 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <span className="font-display font-bold text-3xl text-primary group-hover:text-white relative z-10 transition-colors">0{i + 1}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
