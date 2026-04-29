"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Icons } from "./Icons";

export default function CTABanner() {
  const { t } = useLocale();
  const data = t('ctaBanner') as any;

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-accent/20 rotate-12 blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                {data.title}
              </h2>
              <p className="text-white/80 text-lg">
                {data.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a 
                href="#contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_hsl(173_80%_40%/0.3)] hover:-translate-y-1"
              >
                {data.button}
              </a>
              <a 
                href={`tel:${data.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors px-4 py-4"
              >
                <Icons.Phone className="w-5 h-5" />
                {data.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
