
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-primary"
        >
          <img src={t('video.posterUrl')} alt="Video poster" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(185_80%_35%/0.5)] group-hover:scale-110 transition-transform duration-300 mb-6">
              <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 className="text-white text-2xl font-display font-bold tracking-tight">{t('video.title')}</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
