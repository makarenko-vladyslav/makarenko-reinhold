"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { PlayIcon } from './Icons';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('video.badge')}
          title={t('video.title')}
          centered
          light
        />

        <div className="max-w-5xl mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-black"
          >
            {!isPlaying ? (
              <>
                <img 
                  src={t('video.posterUrl')} 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-accent hover:bg-accent-light text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 pl-1 shadow-[0_0_30px_hsl(185_80%_40%/0.5)]"
                  >
                    <PlayIcon className="w-8 h-8" />
                  </button>
                </div>
              </>
            ) : (
              <video 
                className="w-full h-full object-cover"
                controls 
                autoPlay 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}