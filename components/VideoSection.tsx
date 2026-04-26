"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527515637-ed2e60d70318?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12 text-balance">
            Se Hvordan Vi Jobber
          </h2>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-bg-dark border border-white/10 group">
            {!isPlaying ? (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-[0_0_30px_hsl(185_80%_40%/0.5)] hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/50">
                <p>Client video placeholder</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
