
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

export const SectionHeading = ({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4 px-3 py-1 rounded-full border ${light ? 'border-accent/20 bg-accent/5' : 'border-accent/20 bg-accent/10'}`}
      >
        ✦ {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight ${light ? 'text-text-inverse' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-0.5 w-16 bg-accent mb-6 ${centered ? 'mx-auto' : ''} origin-left`}
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-text-inverse/70' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-accent text-white shadow-[0_4px_14px_0_hsl(185_75%_40%/0.39)] hover:shadow-[0_6px_20px_hsl(185_75%_40%/0.23)] hover:bg-accent-dark",
    secondary: "bg-primary text-white shadow-[0_4px_14px_0_hsl(220_40%_12%/0.39)] hover:shadow-[0_6px_20px_hsl(220_40%_12%/0.23)] hover:bg-primary-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
