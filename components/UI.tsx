"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-accent-glow focus:ring-accent",
    secondary: "bg-white text-primary hover:bg-slate-50 shadow-md focus:ring-slate-200",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface SectionHeadingProps {
  badge: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 ${light ? 'bg-white/10 text-accent-light' : 'bg-accent/10 text-accent'}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1.5 rounded-full bg-accent mb-6`}
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${light ? 'text-text-inverse-muted' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
