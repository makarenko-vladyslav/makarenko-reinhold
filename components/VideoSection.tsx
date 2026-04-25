"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('video.title')}
          </h2>
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            {t('video.description')}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
        >
          <img 
            src={t('video.posterUrl')} 
            alt="Video poster" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white pl-1 shadow-[0_0_30px_hsl(185_80%_45%/0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}