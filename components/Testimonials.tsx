"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Star } from '@phosphor-icons/react';

export default function Testimonials() {
  const { t } = useLocale();
  const testData = t('testimonials') as { badge: string, title: string, reviews: any[] };
  const containerRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section className="py-24 bg-surface overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{testData.badge}</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{testData.title}</h2>
        <div className="w-16 h-1 bg-accent rounded-full" />
      </div>

      {/* Desktop Marquee-style Scroll */}
      <div className="hidden md:block w-full overflow-hidden px-6">
        <motion.div style={{ x }} className="flex gap-6 w-max">
          {testData.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </motion.div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden px-6 grid gap-6">
        {testData.reviews.slice(0, 4).map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-bg-light p-8 rounded-2xl shadow-crisp w-full md:w-[400px] shrink-0 border border-border/50">
      <div className="flex gap-1 text-accent mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} weight={i < Math.floor(review.stars) ? "fill" : "regular"} />
        ))}
      </div>
      <p className="text-text-main text-lg italic mb-8 leading-relaxed">"{review.quote}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={`https://picsum.photos/seed/${review.name.replace(/\s/g, '')}/100/100`} 
          alt={review.name} 
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div>
          <div className="font-bold text-primary">{review.name}</div>
          <div className="text-sm text-text-muted">{review.role}</div>
        </div>
      </div>
    </div>
  );
}