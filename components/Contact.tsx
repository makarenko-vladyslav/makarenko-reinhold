
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info */}
          <div>
            <SectionHeading 
              badge={t('contact.badge')}
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
            />

            <div className="space-y-8 mt-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">Adresse</div>
                  <div className="text-text-muted">{t('contact.address')}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">E-post</div>
                  <a href={`mailto:${t('contact.emailAddress')}`} className="text-text-muted hover:text-accent transition-colors">{t('contact.emailAddress')}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">Telefon</div>
                  <a href={`tel:${t('contact.phoneNumber')}`} className="text-text-muted hover:text-accent transition-colors">{t('contact.phoneNumber')}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-10 relative">
            {status === "success" ? (
              <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Takk for din melding!</h3>
                <p className="text-text-muted">Vi kontakter deg så snart som mulig.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-accent font-bold">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.name')}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-bg-light" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.phone')}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-bg-light" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.email')}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-bg-light" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.message')}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-bg-light resize-none"></textarea>
                </div>
                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary-light active:scale-95 disabled:opacity-70"
                >
                  {status === "loading" ? "Sender..." : t('contact.submit')}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
