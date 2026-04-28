"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Contact() {
  const { t } = useLocale();
  const form = t("contact.form") as any;
  const info = t("contact.info") as any;
  
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        <div>
          <SectionHeading 
            badge={t("contact.badge")}
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
          
          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-accent shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Telefon</p>
                <a href={`tel:${info.phone}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{info.phone}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-accent shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">E-post</p>
                <a href={`mailto:${info.email}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{info.email}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-accent shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Adresse</p>
                <p className="text-xl font-bold text-primary">{info.address}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{form.success}</h3>
              <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">Send ny melding</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{form.name}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{form.phone}</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">{form.email}</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">{form.service}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                  <option>Flyttevask</option>
                  <option>Regelmessig Vask</option>
                  <option>Kontorvask</option>
                  <option>Annet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">{form.message}</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                {status === "loading" ? "Sender..." : form.submit}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
