"use client";
import { IconSparkle } from "./Icons";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col mb-12 ${centered ? "items-center text-center" : "items-start"}`}>
      <span className={`font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2 ${light ? "text-accent-light" : "text-accent"}`}>
        <IconSparkle className="w-4 h-4" />
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${light ? "text-text-inverse" : "text-primary"}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 rounded-full mb-6 ${light ? "bg-accent-light" : "bg-gradient-to-r from-accent to-accent-light"}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? "text-text-inverse-muted" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
