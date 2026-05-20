"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { CheckCircle } from '@phosphor-icons/react';

export default function FlyttevaskSpotlight() {
  const { t } = useLocale();
  const spotlight = t('flyttevaskSpotlight') as { title: string, desc: string, points: string[] };

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {spotlight.title}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              {spotlight.desc}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {spotlight.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={24} weight="fill" className="text-accent shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://picsum.photos/seed/empty-clean-room/800/600" 
                alt="Clean empty room" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/80 uppercase tracking-wider font-semibold mb-1">Garanti</div>
                  <div className="text-xl font-bold">100% Godkjent</div>
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle size={28} weight="bold" className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}