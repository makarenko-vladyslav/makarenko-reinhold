
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Video() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("video.badge")}
          title={t("video.title")}
          centered
          light
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10 mt-12"
        >
          <img 
            src={t("video.posterUrl")} 
            alt="Video poster" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-accent/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_40px_hsl(185_80%_40%_/_0.5)] transition-transform group-hover:scale-110">
              <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
