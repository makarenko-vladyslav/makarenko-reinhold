"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const info = t('contact.info') as {phone: string, email: string, address: string, hours: string};
  const formText = t('contact.form') as {name: string, email: string, phone: string, service: string, message: string, submit: string};

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('contact.badge')}
          title={t('contact.title')}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-sm text-text-muted mb-1">Telefon</div>
                <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="font-bold text-primary hover:text-accent transition-colors">{info.phone}</a>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-sm text-text-muted mb-1">E-post</div>
                <a href={`mailto:${info.email}`} className="font-bold text-primary hover:text-accent transition-colors">{info.email}</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">Adresse</div>
                  <div className="font-bold text-primary">{info.address}</div>
                </div>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-10 h-10">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Takk for din henvendelse!</h3>
                <p className="text-text-muted">Vi kontakter deg så snart som mulig.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-bold hover:underline">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{formText.name}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{formText.phone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.email}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.message}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : formText.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
