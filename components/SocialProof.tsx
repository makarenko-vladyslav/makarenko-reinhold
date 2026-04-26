"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { CheckIcon } from "./Icons";

export default function SocialProof() {
  const { t } = useLocale();
  const items: string[] = t("socialProof.items");

  return (
    <div className="bg-primary-light py-6 border-b border-white/5 relative z-20 -mt-2 rounded-t-3xl overflow-hidden">
      <div className="flex overflow-hidden relative">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-light to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Double the items for seamless infinite scroll */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/80">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <CheckIcon className="w-3 h-3" />
              </div>
              <span className="font-medium text-sm tracking-wide">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
