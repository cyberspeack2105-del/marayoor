"use client";

import { useState } from "react";

export default function ContactPreview() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-[120px] bg-slate-900 text-white px-margin-mobile md:px-margin-desktop full-width">
      <div className="max-w-7xl mx-auto">
        {/* Google My Business Trust Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-2xl p-6 mb-12 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xl shrink-0 shadow-md">
              G
            </div>
            <div>
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                Kanthalur Tourism - cottage, Mud House
                <span className="text-xs bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-400/40">
                  Verified GMB Listing
                </span>
              </h3>
              <p className="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
                <span className="text-amber-400 font-bold">★ 4.8 Rating</span>
                <span>(14 Google Reviews)</span>
                <span>•</span>
                <span>Tour operator & Mud House Stays</span>
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Kanthalur+Tourism+-+cottage,+Mud+House/@10.2054794,77.1974776,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>View on Google Maps</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Information & Location */}
          <div className="flex flex-col space-y-6">
            <span className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-emerald-400 font-bold">
              PLAN YOUR VISIT
            </span>
            <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-white">
              Get in Touch with Local Desk
            </h2>
            <p className="font-body-lg text-slate-300 max-w-xl leading-relaxed">
              Ready to explore Kerala&apos;s hidden highland paradise? Contact our local tour operator directly for mud house stays, apple farm visits, and off-road jeep safari bookings.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <div>
                  <p className="font-label-sm text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Helpline Numbers</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a href="tel:+917012402897" className="text-base text-white hover:text-emerald-400 font-bold transition-colors">
                      +91 70124 02897
                    </a>
                    <span className="text-slate-600">|</span>
                    <a href="tel:+919495917208" className="text-base text-white hover:text-emerald-400 font-bold transition-colors">
                      +91 94959 17208
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                </div>
                <div>
                  <p className="font-label-sm text-xs text-slate-400 uppercase tracking-wider font-semibold">Instant WhatsApp Chat</p>
                  <a
                    href="https://wa.me/917012402897?text=Hi%20Kanthalloor%20Tourism,%20I%20want%20to%20plan%20a%20trip!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#25D366] hover:underline font-bold transition-colors"
                  >
                    +91 70124 02897 (Click to WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <p className="font-label-sm text-xs text-slate-400 uppercase tracking-wider font-semibold">Address & Location</p>
                  <p className="text-base text-white font-medium">
                    34/A, Thalachore kadavu, Kanthalloor, Kerala 685615
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Location */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-slate-700 h-64 w-full">
              <iframe
                title="Kanthalur Tourism Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.026138676057!2d77.1974776!3d10.2054794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b077991e087da6b%3A0x8d96b8e9456e!2sKanthalur%20Tourism%20-%20cottage%2C%20Mud%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Booking Inquiry
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Fill in your details below and our local travel team will reach out to you shortly.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 p-6 rounded-xl text-center space-y-3">
                <span className="material-symbols-outlined text-[48px] text-emerald-400">check_circle</span>
                <h4 className="text-xl font-bold">Thank You!</h4>
                <p className="text-sm text-emerald-200">
                  Your inquiry has been received. Our local trip guide will call you back shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-900 dark:text-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 70124 02897"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Travel Dates & Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us your travel dates, stay preference (Mud House / Cottage), or jeep safari requests..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-900 dark:text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

