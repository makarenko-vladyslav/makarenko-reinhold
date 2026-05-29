
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
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block font-bold tracking-wider uppercase text-xs md:text-sm mb-4 px-3 py-1 rounded-full ${
          light ? "bg-white/10 text-accent-light" : "bg-accent/10 text-accent"
        }`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1.5 rounded-full mb-6 ${centered ? "mx-auto" : ""} ${
          light ? "bg-accent-light" : "bg-accent"
        }`}
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-text-muted"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
