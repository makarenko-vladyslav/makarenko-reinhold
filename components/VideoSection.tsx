"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
          {t("video.badge")}
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
          {t("video.title")}
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer aspect-video"
        >
          <img 
            src={t("video.posterUrl")} 
            alt="Video Poster" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-[0_0_40px_hsl(175_75%_35%/0.5)]">
            <svg className="w-10 h-10 text-white ml-2" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}