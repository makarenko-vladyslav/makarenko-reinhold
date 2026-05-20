
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{title: string, desc: string}>;

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('process.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t('process.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent text-white font-display font-bold text-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg shadow-accent/20">
                  {i + 1}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
