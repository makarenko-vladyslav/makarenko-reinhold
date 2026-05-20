"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{name: string, role: string, quote: string}>;

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('testimonials.badge') as string}</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('testimonials.title') as string}</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-6 px-3 group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <div 
              key={i}
              className="w-[350px] shrink-0 bg-bg-light p-8 rounded-2xl whitespace-normal border border-transparent hover:border-accent/20 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} weight="fill" className="text-accent" />
                ))}
              </div>
              <p className="text-text-main font-medium leading-relaxed mb-8 italic">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&backgroundColor=0a5cff`} 
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-xs text-text-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
