"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({ children, variant = "primary", onClick, className = "", type = "button" }: ButtonProps) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-accent text-bg-white shadow-[0_0_20px_hsl(185_75%_40%/0.3)] hover:shadow-[0_0_30px_hsl(185_75%_40%/0.5)] hover:-translate-y-1",
    secondary: "bg-primary text-bg-white hover:bg-primary-light hover:-translate-y-1",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-bg-white",
    white: "bg-bg-white text-primary hover:bg-bg-light shadow-lg hover:-translate-y-1"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </button>
  );
}
