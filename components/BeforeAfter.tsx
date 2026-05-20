"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowsLeftRight } from '@phosphor-icons/react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => isDragging && handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Resultater som Taler for Seg Selv</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-crisp-hover select-none cursor-ew-resize"
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
          {/* After (Bottom Layer) */}
          <img 
            src="https://picsum.photos/seed/clean-kitchen-after/1200/800" 
            alt="Clean" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          
          {/* Before (Top Layer, Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://picsum.photos/seed/dirty-kitchen-before/1200/800" 
              alt="Dirty" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100vw', minWidth: '100%' }} // Ensure image doesn't shrink
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Dark overlay to simulate "dirty" if picsum fails to provide good contrast */}
            <div className="absolute inset-0 bg-yellow-900/20 mix-blend-multiply" />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
              <ArrowsLeftRight size={20} weight="bold" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded text-sm font-semibold pointer-events-none">Før</div>
          <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur text-white px-3 py-1 rounded text-sm font-semibold pointer-events-none">Etter</div>
        </motion.div>
      </div>
    </section>
  );
}