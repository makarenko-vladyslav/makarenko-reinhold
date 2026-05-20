"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from '@phosphor-icons/react';

export default function Guarantee() {
  const { t } = useLocale();
  const points = t('guarantee.points') as string[];

  return (
    <section id="garanti" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <ShieldCheck size={600} weight="duotone" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="font-display font-bold tracking-wider uppercase text-sm mb-3 block text-accent">
              {t('guarantee.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance">
              {t('guarantee.title')}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t('guarantee.desc')}
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex items-start gap-4">
              <ShieldCheck size={32} weight="duotone" className="text-accent shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1">100% Fornøydgaranti</h4>
                <p className="text-white/70 text-sm">Vi retter eventuelle mangler kostnadsfritt innen 48 timer etter overlevering.</p>
              </div>
            </div>
          </div>

          <div className="bg-bg-dark border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">✓</span>
              Flyttevask Sjekkliste
            </h3>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-white/90"
                >
                  <CheckCircle size={24} weight="fill" className="text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
