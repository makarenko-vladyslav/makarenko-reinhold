
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('video.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('video.title')}</h2>
          <p className="text-white/70 text-lg">{t('video.description')}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-surface-dark group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src={t('video.posterUrl')} 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-[0_0_40px_hsl(185_75%_40%_/_0.5)] group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-2"><path d="M5 3l14 9-14 9V3z"/></svg>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-surface-dark">
              [Video Player Placeholder - Client adds src]
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
