"use client";
import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Fast renhold ukentlig / annenhver uke");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const kicker = String(t("contact.kicker"));
  const title = String(t("contact.title"));
  const lede = String(t("contact.lede"));

  const fName = String(t("contact.fields.name"));
  const fPhone = String(t("contact.fields.phone"));
  const fEmail = String(t("contact.fields.email"));
  const fService = String(t("contact.fields.service"));
  const fArea = String(t("contact.fields.area"));
  const fAddress = String(t("contact.fields.address"));
  const fDate = String(t("contact.fields.date"));
  const fMessage = String(t("contact.fields.message"));
  const fSubmit = String(t("contact.fields.submit"));
  const fSubmitting = String(t("contact.fields.submitting"));
  const fSuccess = String(t("contact.fields.success"));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!name.trim() || !phone.trim()) {
      form.dataset.invalid = "true";
      return;
    }

    delete form.dataset.invalid;
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section id="bestill" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* High-Contrast Solid Form Card */}
        <div className="bg-bg-light rounded-md border border-gray-200 p-6 sm:p-10 shadow-sm">
          {status === "success" ? (
            <div className="p-8 text-center bg-white rounded border border-accent/40">
              <span className="font-display font-extrabold text-2xl text-accent block mb-2">
                Bestilling mottatt
              </span>
              <p className="text-sm text-text-main max-w-lg mx-auto leading-relaxed mb-6">
                {fSuccess}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="py-2 px-5 rounded bg-primary text-white text-xs font-bold uppercase tracking-wider transition-colors duration-150 ease-out hover:bg-primary/90"
              >
                Send ny melding
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fName} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    name="Kundenavn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="f.eks. Ola Nordmann"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fPhone} *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    name="Telefonnummer"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+47 000 00 000"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fEmail}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="E-post"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din@epost.no"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fService}
                  </label>
                  <select
                    id="contact-service"
                    name="Tjeneste"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  >
                    <option value="Fast regelmessig boligrenhold">Fast regelmessig boligrenhold</option>
                    <option value="Flyttevask med overleveringsgaranti">Flyttevask med overleveringsgaranti</option>
                    <option value="Hyttevask / Sesongklargjøring">Hyttevask / Sesongklargjøring Telemark</option>
                    <option value="Hovedrengjøring / Byggvask">Hovedrengjøring / Byggvask</option>
                    <option value="Vinduspuss inn- og utvendig">Vinduspuss inn- og utvendig</option>
                    <option value="Kontor- eller klinikkrenhold">Kontor- eller klinikkrenhold</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="contact-area" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fArea}
                  </label>
                  <input
                    id="contact-area"
                    type="text"
                    name="Boligareal"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="f.eks. 85 m²"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-address" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fAddress}
                  </label>
                  <input
                    id="contact-address"
                    type="text"
                    name="Adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Gate og postnummer"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-date" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    {fDate}
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    name="Oppstartsdato"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  {fMessage}
                </label>
                <textarea
                  id="contact-message"
                  name="Beskjed"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Fortell oss om boligen, spesielle hensyn til parkett, kjæledyr eller nøkkelhåndtering..."
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 bg-white text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                />
              </div>

              {/* Hidden fields preserving selections */}
              <input type="hidden" name="Forespørselstype" value="Nettsidebestilling" />
              <input type="hidden" name="Valgt-tjeneste" value={service} />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 px-6 rounded font-display font-bold text-xs uppercase tracking-wider bg-accent hover:bg-accent-dark text-white shadow-md transition-colors duration-150 ease-out"
              >
                {status === "submitting" ? fSubmitting : fSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
