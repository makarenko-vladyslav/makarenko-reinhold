"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("video.badge")}
          title={t("video.title")}
          subtitle={t("video.description")}
          centered
          light
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-12 relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img 
            src={t("video.posterUrl")} 
            alt="Video poster" 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(175_70%_40%/0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
