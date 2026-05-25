
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-bold tracking-wider uppercase text-sm mb-3 block ${light ? 'text-accent-light' : 'text-accent'}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-display font-bold mb-5 tracking-tight ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className={`h-1 rounded-full mb-6 ${light ? 'bg-accent-light' : 'bg-accent'}`}
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${light ? 'text-white/80' : 'text-text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button' }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1";
  
  const variants = {
    primary: "bg-accent text-white shadow-[0_8px_20px_hsl(185_80%_35%/0.25)] hover:shadow-[0_12px_25px_hsl(185_80%_35%/0.35)] hover:bg-accent-hover",
    secondary: "bg-primary text-white shadow-lg hover:bg-primary-light",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      type={href ? undefined : type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C16 4 8 12 8 19C8 23.4183 11.5817 27 16 27C20.4183 27 24 23.4183 24 19C24 12 16 4 16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 18L15.5 20.5L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="12" r="1" fill="currentColor"/>
  </svg>
);
