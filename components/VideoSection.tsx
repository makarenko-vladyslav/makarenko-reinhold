
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { PlayIcon } from "./Icons";

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('video.badge') as string}
          title={t('video.title') as string}
          subtitle={t('video.description') as string}
          light
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-bg-dark border border-white/10"
        >
          {!isPlaying ? (
            <>
              <img 
                src={t('video.posterUrl') as string} 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center transition-transform hover:scale-110 animate-pulse-glow"
                >
                  <PlayIcon className="w-10 h-10 ml-2" />
                </button>
              </div>
            </>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls 
              autoPlay 
              src="" // Client will replace this
            >
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
}
