"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered ? "text-center mx-auto" : "", className)}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "inline-block font-bold tracking-wider uppercase text-sm mb-4 px-3 py-1 rounded-full",
          light ? "bg-white/10 text-accent" : "bg-accent/10 text-accent"
        )}
      >
        {badge}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl font-display font-bold mb-6 leading-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={cn("h-1 bg-accent rounded-full mb-6", centered ? "mx-auto" : "")}
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className={cn(
            "text-lg max-w-2xl",
            light ? "text-white/80" : "text-text-muted",
            centered ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
