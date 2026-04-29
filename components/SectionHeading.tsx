
"use client";
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-bold tracking-widest uppercase text-xs mb-4 block ${light ? 'text-accent-light' : 'text-accent'}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-display font-bold mb-6 leading-tight ${light ? 'text-white' : 'text-primary'}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={`h-1.5 rounded-full mb-6 ${light ? 'bg-accent-light' : 'bg-accent'}`} 
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
