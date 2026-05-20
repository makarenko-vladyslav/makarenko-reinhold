"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      <span className={`font-display font-bold tracking-wider uppercase text-sm mb-4 block ${light ? 'text-accent' : 'text-accent'}`}>
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1.5 bg-accent rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-white/80' : 'text-text-muted'} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
