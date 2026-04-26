"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { CheckIcon } from "./Icons";

export default function SocialProof() {
  const { t } = useLocale();
  const items: string[] = t("socialProof.items");

  return (
    <div className="bg-bg-dark py-8 border-y border-white/10 relative z-20">
      <div className="flex overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-white/90">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <CheckIcon className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg tracking-wide">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}