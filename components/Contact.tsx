
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Contact() {
  const { t } = useLocale();
  const info = t('contact.info') as any;
  const formText = t('contact.form') as any;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Info & Map */}
        <div>
          <SectionHeading 
            badge={t('contact.badge')}
            title={t('contact.title')}
          />
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Telefon</p>
                <a href={`tel:${info.phone}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{info.phone}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">E-post</p>
                <a href={`mailto:${info.email}`} className="text-lg font-bold text-primary hover:text-accent transition-colors">{info.email}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Adresse</p>
                <p className="text-lg font-bold text-primary">{info.address}</p>
                <p className="text-sm text-text-muted mt-1">{info.hours}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{formText.success}</h3>
              <Button variant="outline" onClick={() => setStatus('idle')} className="mt-8">Send ny melding</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main">{formText.name}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main">{formText.phone}</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main">{formText.email}</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main">{formText.service}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                  <option>Flyttevask</option>
                  <option>Regelmessig vask</option>
                  <option>Kontorvask</option>
                  <option>Annet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main">{formText.message}</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" />
              </div>

              <Button type="submit" className="w-full" variant="primary">
                {status === 'loading' ? 'Sender...' : formText.submit}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
