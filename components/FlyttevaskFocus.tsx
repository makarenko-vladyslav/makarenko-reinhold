
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

export default function FlyttevaskFocus() {
  const { t } = useLocale();
  const features = t('flyttevask.features') as string[];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/flyttevask/800/1000" 
                alt="Flyttevask" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-white font-display font-bold text-2xl mb-2">100% Garanti</div>
                <p className="text-white/80 text-sm">Vi retter opp eventuelle feil kostnadsfritt innen 48 timer.</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('flyttevask.badge') as string}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t('flyttevask.title') as string}</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              {t('flyttevask.desc') as string}
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={24} weight="fill" className="text-accent shrink-0 mt-0.5" />
                  <span className="text-text-main font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <a href="#calculator" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-colors shadow-lg">
              Beregn pris for flyttevask
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
