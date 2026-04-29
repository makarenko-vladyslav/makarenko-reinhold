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

export const SectionHeading = ({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center mx-auto" : ""} max-w-3xl`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4
          ${light ? "bg-accent/20 text-accent-light" : "bg-accent/10 text-accent"}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight
          ${light ? "text-text-inverse" : "text-primary"}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-accent rounded-full mb-6 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg ${light ? "text-text-inverse/80" : "text-text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  children: ReactNode;
  className?: string;
}

export const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/30 hover:shadow-accent/50",
    secondary: "bg-primary text-white hover:bg-primary-light shadow-lg",
    outline: "border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5",
    white: "bg-white text-primary hover:bg-bg-light shadow-lg"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
