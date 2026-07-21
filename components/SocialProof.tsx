"use client";

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-bg-light/80 py-8 overflow-hidden relative z-20">
      {/* Infinite scrolling ticker */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-1">
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            ARBEIDSTILSYNET GODKJENT BEDRIFT
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            1 000 000 NOK ANSVARSFORSIKRING HOS GJENSIDIGE
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            48-TIMERS UTBEDRINGSGARANTI
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            SVANEMERKET PRODUKTSORTIMENT
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            LOVPÅLAGT HMS-KORT PÅ ALLE ANSATTE
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-1" aria-hidden="true">
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            ARBEIDSTILSYNET GODKJENT BEDRIFT
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            1 000 000 NOK ANSVARSFORSIKRING HOS GJENSIDIGE
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            48-TIMERS UTBEDRINGSGARANTI
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            SVANEMERKET PRODUKTSORTIMENT
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            LOVPÅLAGT HMS-KORT PÅ ALLE ANSATTE
          </span>
          <span className="text-text-muted/20 text-lg select-none">•</span>
        </div>
      </div>
    </section>
  );
}
