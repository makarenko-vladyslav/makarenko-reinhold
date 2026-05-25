"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoData = t('video') as { badge: string, title: string, posterUrl: string };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={videoData.badge}
          title={videoData.title}
          centered
          light
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl mt-12 bg-black"
        >
          {!isPlaying ? (
            <>
              <img 
                src={videoData.posterUrl} 
                alt="Video thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_40px_hsl(175_80%_35%/0.6)] hover:scale-110 transition-transform"
              >
                <svg className="w-10 h-10 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          ) : (
            <video 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
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
