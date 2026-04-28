"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({ children, variant = "primary", href, onClick, className = "", type = "button" }: ButtonProps) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-accent text-white shadow-[0_0_20px_hsl(175_70%_40%/0.3)] hover:shadow-[0_0_30px_hsl(175_70%_40%/0.5)] hover:-translate-y-1",
    secondary: "bg-primary text-white hover:bg-primary-light shadow-lg hover:-translate-y-1",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
