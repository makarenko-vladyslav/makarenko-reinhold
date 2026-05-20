"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const form = t("contact.form") as Record<string, string>;
  const info = t("contact.info") as Record<string, string>;
  
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Info & Map */}
          <div>
            <SectionHeading 
              badge={t("contact.badge") as string}
              title={t("contact.title") as string}
              subtitle={t("contact.subtitle") as string}
            />
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white premium-shadow flex items-center justify-center text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium">Telefon</div>
                  <a href={`tel:${info.phone}`} className="text-lg font-bold text-primary hover:text-accent">{info.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white premium-shadow flex items-center justify-center text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium">E-post</div>
                  <a href={`mailto:${info.email}`} className="text-lg font-bold text-primary hover:text-accent">{info.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white premium-shadow flex items-center justify-center text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium">Adresse</div>
                  <div className="text-lg font-bold text-primary">{info.address}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden premium-shadow h-64 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 premium-shadow border border-gray-100"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-10 h-10"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Takk for din henvendelse!</h3>
                <p className="text-text-muted">Vi tar kontakt med deg så snart som mulig.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-accent font-bold">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{form.name}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{form.phone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{form.email}</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{form.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                    <option>Flyttevask</option>
                    <option>Regelmessig vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{form.message}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold text-lg transition-all shadow-lg flex justify-center items-center"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
