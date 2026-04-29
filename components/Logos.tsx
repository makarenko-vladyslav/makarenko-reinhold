"use client";
import { useLocale } from "@/lib/i18n";

export default function Logos() {
  const { t } = useLocale();

  return (
    <section className="bg-bg-dark py-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <p className="text-white/40 text-sm font-medium uppercase tracking-widest text-center">
          {t("logos.title")}
        </p>
        <div className="flex items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Logos with text for clean look */}
          <div className="text-xl font-display font-bold text-white tracking-tight">Arbeidstilsynet</div>
          <div className="text-xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500" /> Svanemerket
          </div>
          <div className="text-xl font-display font-bold text-white tracking-tight">HMS-Kort</div>
        </div>
      </div>
    </section>
  );
}
