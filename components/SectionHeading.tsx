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
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'} mb-16`}
    >
      <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 text-balance ${light ? 'text-surface-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`w-16 h-1 bg-accent rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-surface-white/80' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}