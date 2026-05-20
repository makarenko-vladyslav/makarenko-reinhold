"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('video.badge')}
          title={t('video.title')}
          light
          centered
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto border border-white/10 group cursor-pointer"
        >
          <img 
            src={t('video.posterUrl')} 
            alt="Video Poster" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_hsl(150_75%_38%_/_0.5)] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
