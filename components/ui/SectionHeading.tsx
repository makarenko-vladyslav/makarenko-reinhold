"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
}

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  theme = "light",
  align = "left" 
}: SectionHeadingProps) {
  const isCenter = align === "center";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 md:mb-20 ${isCenter ? "text-center flex flex-col items-center" : ""}`}
    >
      <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight ${
        theme === "dark" ? "text-white" : "text-primary"
      }`}>
        {title}
      </h2>
      <div className={`w-20 h-1.5 bg-accent rounded-full mb-6 ${isCenter ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${
          theme === "dark" ? "text-text-main/80" : "text-text-muted"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
