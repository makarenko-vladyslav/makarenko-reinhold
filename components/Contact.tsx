"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLocale();
  const form = t('contact.form') as Record<string, string>;
  const info = t('contact.info') as Record<string, string>;
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('contact.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-text-light/70 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-panel p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Telefon</h3>
              <a href={`tel:${info.phone}`} className="text-text-light/70 hover:text-accent transition-colors text-lg">{info.phone}</a>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">E-post</h3>
              <a href={`mailto:${info.email}`} className="text-text-light/70 hover:text-accent transition-colors text-lg">{info.email}</a>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Åpningstider</h3>
              <p className="text-text-light/70 text-lg">{info.hours}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-panel p-8 md:p-12 rounded-3xl">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Takk for din henvendelse!</h3>
                <p className="text-text-light/70">Vi tar kontakt med deg så snart som mulig.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">{form.name}</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">{form.phone}</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{form.email}</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{form.service}</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="fast">Fast Vaskehjelp</option>
                    <option value="flytte">Flyttevask</option>
                    <option value="hoved">Hovedrengjøring</option>
                    <option value="vindu">Vindusvask</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{form.message}</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-accent text-white font-bold text-lg hover:bg-accent-dark transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : form.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}