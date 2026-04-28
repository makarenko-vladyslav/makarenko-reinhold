
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
      className={`mb-16 relative z-10 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}
    >
      <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-text-inverse' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`w-16 h-1 bg-accent rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
