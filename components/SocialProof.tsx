"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-widest mb-8">
          {t("socialProof.title")}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Logos using styled text for robustness, representing real Norwegian certs */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs">AT</div>
            Arbeidstilsynet
          </div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">SM</div>
            Svanemerket
          </div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-xs">IF</div>
            If Forsikring
          </div>
        </div>
      </div>
    </section>
  );
}
