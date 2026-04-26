
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function AboutOwner() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 opacity-20" />
            <img 
              src="https://picsum.photos/seed/anna-owner/800/1000" 
              alt="Anna Dizhenko" 
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 z-20 glass-panel p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="font-display font-bold text-primary text-lg">10+ År</div>
                  <div className="text-text-muted text-sm">Erfaring i bransjen</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('about.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary/80 font-medium mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <div className="space-y-6 text-text-muted leading-relaxed mb-10">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
            </div>
            
            <div className="border-t border-border pt-8 flex items-center gap-6">
              <div>
                <div className="font-display text-2xl font-bold text-primary italic mb-1">{t('about.signature')}</div>
                <div className="text-accent font-medium text-sm uppercase tracking-wider">{t('about.role')}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
