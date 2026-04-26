"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="heading-badge"
      >
        {badge}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl font-display font-bold mb-6 text-balance",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="heading-accent-line"
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={cn(
            "text-lg max-w-2xl text-balance",
            light ? "text-white/80" : "text-text-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}