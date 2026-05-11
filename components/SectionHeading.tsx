"use client";
import React from 'react';
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      <span className="heading-badge">{badge}</span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`heading-line ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}