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
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block"
      >
        {badge}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight ${light ? "text-white" : "text-primary"}`}
        style={{ whiteSpace: "pre-line" }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-accent rounded-full mb-6 ${centered ? "w-24 mx-auto" : "w-24 origin-left"}`}
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
