"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

export default function FlyttevaskFocus() {
  const { t } = useLocale();
  const data = t('flyttevaskFocus') as any;

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, var(--color-accent) 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              {data.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {data.desc}
            </p>

            <ul className="space-y-5">
              {data.points.map((point: string, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle size={24} weight="fill" className="text-accent shrink-0 mt-1" />
                  <span className="text-lg font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src={data.image} 
                alt="Flyttevask" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-primary-light'); }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white font-display font-bold text-xl mb-1">100% Garanti</p>
                <p className="text-white/80 text-sm">Godkjent av ledende meglere i Telemark</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
