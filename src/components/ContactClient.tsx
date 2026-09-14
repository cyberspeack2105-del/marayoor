"use client";

import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 1200));
    setBusy(false);
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#153420] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <span>🌿</span><span>Get In Touch</span><span>🌿</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">Contact Us</h1>
          <p className="text-gray-300 text-base">
            Ready to plan your Kanthalloor trip? We&apos;re here every day to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-black text-[#112918] mb-8">Contact Information</h2>
            <div className="space-y-4 mb-10">
              {[
                { icon: "fa-solid fa-phone", label: "Call Us", value: "+91 82811 41813", href: "tel:+918281141813", sub: "Mon–Sun 7 AM – 9 PM" },
                { icon: "fa-envelope", label: "Email", value: "info@ilovekanthalloor.com", href: "mailto:info@ilovekanthalloor.com", sub: "Reply within 2 hours" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", value: "+91 91882 11822", href: "https://wa.me/919188211822", sub: "Chat with us directly" },
                { icon: "fa-map-marker-alt", label: "Location", value: "Kanthalloor, Idukki", href: null, sub: "Kerala, India" },
              ].map(({ icon, label, value, href, sub }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-green-50 text-[#1a4329] flex items-center justify-center text-base flex-shrink-0">
                    <i className={`fas ${icon}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="font-bold text-[#112918] text-sm hover:text-[#2e7d32] transition-colors">{value}</a>
                    ) : (
                      <p className="font-bold text-[#112918] text-sm">{value}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-[2rem] overflow-hidden h-52 bg-gray-100 border border-gray-200">
              <img src="/jeep/jeep 9.png" alt="Kanthalloor Safari location and mountain trails" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.google.com/?q=Kanthalloor+Idukki+Kerala" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a4329] text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-[#112918] transition-colors">
                  <i className="fas fa-map-marker-alt text-[#4ade80]" />Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 text-[#1a4329] flex items-center justify-center text-3xl">
                  <i className="fas fa-check-circle" />
                </div>
                <h3 className="text-2xl font-black text-[#112918]">Message Sent!</h3>
                <p className="text-gray-500 max-w-xs text-sm">
                  Our team will reach out within 2 hours. We look forward to helping you plan your Kanthalloor trip!
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-[#112918] mb-2">Send a Message</h2>
                <p className="text-gray-500 text-sm mb-7">
                  Fill in your details and we&apos;ll get back to you soon.
                </p>
                <form onSubmit={submit} className="space-y-4" noValidate>
                  {[
                    { id: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email *", type: "email", placeholder: "you@email.com" },
                    { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                        {label}
                      </label>
                      <input
                        id={id} name={id} type={type} placeholder={placeholder}
                        required={label.includes("*")}
                        value={(form as Record<string, string>)[id]} onChange={handle}
                        className="w-full bg-[#fafbf9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 outline-none focus:border-[#2e7d32] focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Tell us about your trip plans..."
                      value={form.message} onChange={handle}
                      className="w-full bg-[#fafbf9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 outline-none focus:border-[#2e7d32] focus:ring-2 focus:ring-green-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit" disabled={busy}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95 disabled:opacity-60"
                  >
                    {busy ? (
                      "Sending..."
                    ) : (
                      <><i className="fas fa-paper-plane" /> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
