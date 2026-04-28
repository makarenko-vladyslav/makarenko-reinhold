
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group"
        >
          {!isPlaying ? (
            <>
              <img 
                src={t("video.posterUrl")} 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white shadow-[0_0_0_0_hsl(185_75%_45%/0.4)] animate-pulse-glow hover:scale-110 transition-transform"
                >
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls 
              autoPlay 
              poster={t("video.posterUrl")}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
}
