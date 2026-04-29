
"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('video.badge')}
          title={t('video.title')}
          centered
          light
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl mt-12 group cursor-pointer"
        >
          <img src={t('video.posterUrl')} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_hsl(183_74%_35%/0.5)] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white ml-2" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
