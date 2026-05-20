"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display font-bold tracking-wider uppercase text-sm mb-3 block ${light ? 'text-accent' : 'text-accent'}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-display font-bold mb-6 text-balance ${light ? 'text-white' : 'text-primary'}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {!centered && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 bg-accent rounded-full" 
        />
      )}
    </div>
  );
}
