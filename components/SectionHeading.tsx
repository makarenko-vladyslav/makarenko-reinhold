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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mb-6" />
    </motion.div>
  );
}
