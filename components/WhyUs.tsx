
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as any[];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(var(--color-surface) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('whyUs.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('whyUs.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel-dark p-8 rounded-3xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <span className="font-display font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
