"use client";
import { motion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false }: Props) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block"
      >
        {badge}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-accent rounded-full mb-6 ${centered ? 'mx-auto' : ''}`}
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${light ? 'text-white/80' : 'text-text-muted'} ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
