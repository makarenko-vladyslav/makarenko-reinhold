"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
        >
          {!isPlaying ? (
            <>
              <img 
                src="https://picsum.photos/seed/cleaning-video-poster/1200/675" 
                alt="Video Poster" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_hsl(185_80%_40%_/_0.5)] hover:scale-110 transition-transform"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <video 
              className="w-full h-full"
              controls 
              autoPlay 
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
