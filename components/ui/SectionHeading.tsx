
"use client";
import { motion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, align = "left", light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center flex flex-col items-center" : ""}`}
    >
      <span className={`font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block ${light ? "text-accent-light" : "text-accent"}`}>
        {badge}
      </span>
      <h2 className={`text-3xl md:text-5xl font-display font-bold mb-5 leading-tight ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      <div className={`w-16 h-1.5 rounded-full mb-6 ${light ? "bg-accent-light" : "bg-accent"}`} />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${light ? "text-white/80" : "text-text-muted"} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
