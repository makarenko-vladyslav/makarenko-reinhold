"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const companyPhone = String(t("company.phone"));

  return (
    <section id="kontakt" className="py-24 bg-bg-light text-text-main relative overflow-hidden border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Invitation & Direct Contacts */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("contact.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mt-2 leading-tight">
              {String(t("contact.invitationHeading"))}
            </h2>
            <p className="text-base text-text-muted mt-3 mb-8 leading-relaxed">
              {String(t("contact.subheading"))}
            </p>

            {/* Direct Contact Card (Light Surface Container) */}
            <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-border-light shadow-sm space-y-6 mb-6">
              <h4 className="font-display font-bold text-text-main text-lg">
                {String(t("contact.contactDirect"))}
              </h4>
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block mb-1">
                  {String(t("contact.phoneLabel"))}
                </span>
                <a
                  href={`tel:${companyPhone.replace(/\s+/g, "")}`}
                  className="font-display font-extrabold text-2xl text-primary hover:text-accent transition-colors"
                >
                  {companyPhone}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block mb-1">
                  {String(t("contact.emailLabel"))}
                </span>
                <a
                  href={`mailto:${String(t("company.email"))}`}
                  className="font-medium text-text-main hover:underline text-sm"
                >
                  {String(t("company.email"))}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block mb-1">
                  {String(t("contact.addressLabel"))}
                </span>
                <p className="font-medium text-text-main text-sm">
                  {String(t("company.address"))}
                </p>
              </div>

              {/* Structured Hours Mini-Table */}
              <div className="pt-4 border-t border-border-light">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block mb-2">
                  {String(t("contact.hoursLabel"))}
                </span>
                <div className="space-y-1 text-xs font-mono text-text-muted">
                  <div className="flex justify-between">
                    <span>Mandag - Fredag:</span>
                    <span>07:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag:</span>
                    <span>08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Søndag:</span>
                    <span className="text-accent font-bold">Etter avtale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Micro-line */}
            <div className="p-4 rounded-xl bg-accent-soft border border-accent/20 text-xs font-mono text-text-main">
              {String(t("contact.trustLine"))}
            </div>
          </div>

          {/* Right Column: Light Surface Form Container */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-3xl border border-border-light shadow-xl">
            {submitted ? (
              <div className="p-10 text-center bg-accent-soft rounded-2xl border border-accent/40">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Takk for din bestilling!</h3>
                <p className="text-sm text-text-muted">{String(t("contact.successMsg"))}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-primary mb-1">
                      {String(t("contact.formName"))} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-bg-light text-sm text-text-main focus:bg-surface focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Ola Nordmann"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-primary mb-1">
                      {String(t("contact.formPhone"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-bg-light text-sm text-text-main focus:bg-surface focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="+47 900 00 000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-primary mb-1">
                      {String(t("contact.formEmail"))}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-bg-light text-sm text-text-main focus:bg-surface focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="ola@eksempel.no"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-primary mb-1">
                      {String(t("contact.formService"))}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border-light bg-bg-light text-sm text-text-main focus:bg-surface focus:border-accent">
                      <option>Fast renhold i hjemmet</option>
                      <option>Flyttevask med garanti</option>
                      <option>Hyttevask Telemark</option>
                      <option>Hovedrengjøring / Storvask</option>
                      <option>Kontor- & Næringsrenhold</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-primary mb-1">
                    {String(t("contact.formMessage"))}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border-light bg-bg-light text-sm text-text-main focus:bg-surface focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Fortell oss litt om boligen, kvadratmeter eller spesielle ønsker..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  {String(t("contact.submitBtn"))} →
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}