"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          light
          centered
        />

        <div className="mt-20 relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center md:text-left"
              >
                {/* Number Circle */}
                <div className="w-24 h-24 mx-auto md:mx-0 bg-bg-dark border-2 border-white/10 rounded-full flex items-center justify-center text-4xl font-display font-bold text-white mb-8 relative z-10 shadow-[0_0_30px_hsl(150_75%_38%_/_0.15)]">
                  0{i + 1}
                  {/* Active dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-bg-dark" />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
