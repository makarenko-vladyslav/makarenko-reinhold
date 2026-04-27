
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('contact.badge') as string}
          title={t('contact.title') as string}
          subtitle={t('contact.subtitle') as string}
        />

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-bg-light p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8">Kontaktinformasjon</h3>
              
              <div className="space-y-6">
                <a href={`tel:${t('contact.info.phone')}`} className="flex items-center gap-4 text-text-main hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-accent">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{t('contact.info.phone') as string}</span>
                </a>
                
                <a href={`mailto:${t('contact.info.email')}`} className="flex items-center gap-4 text-text-main hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-accent">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{t('contact.info.email') as string}</span>
                </a>
                
                <div className="flex items-center gap-4 text-text-main">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-accent">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{t('contact.info.address') as string}</span>
                </div>
                
                <div className="flex items-center gap-4 text-text-main">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-accent">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{t('contact.info.hours') as string}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t('contact.form.success') as string}</h3>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.name') as string}</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.phone') as string}</label>
                      <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.email') as string}</label>
                      <input required type="email" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.service') as string}</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                      <option>Fast Vask</option>
                      <option>Hovedrengjøring</option>
                      <option>Kontorvask</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.message') as string}</label>
                    <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
                  </div>
                  
                  <button 
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg transition-all hover:bg-primary-light disabled:opacity-70"
                  >
                    {status === 'loading' ? '...' : t('contact.form.submit') as string}
                  </button>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
