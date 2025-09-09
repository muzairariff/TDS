"use client";

import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Mail, Phone, User, MessageSquare, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    // Honeypot (simple spam trap)
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    if (company) {
      setStatus({ type: "error", message: "Submission rejected." });
      setLoading(false);
      return;
    }

    const payload = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)?.value?.trim(),
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement)?.value?.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value?.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send email");

      setStatus({ type: "success", message: "Email sent successfully! We'll be in touch soon." });
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-gray-900">
      <Navbar />

      {/* HERO (image removed; fully responsive) */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold [text-wrap:balance]">
            Let’s <span className="text-white">Connect</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-blue-100 max-w-2xl mx-auto text-base sm:text-lg">
            Have an idea or a project in mind? Let’s build something amazing together.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/90 text-blue-700 hover:bg-white px-6 sm:px-7 py-3 text-sm font-semibold transition"
            >
              Start a conversation
            </a>
            <a
              href="#info"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/70 text-white hover:bg-white/10 px-6 sm:px-7 py-3 text-sm font-semibold transition"
            >
              See contact details
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO STRIP */}
      <section id="info" className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { Icon: Mail, label: "Email", value: "hello@techdirectsupport.com", href: "mailto:hello@techdirectsupport.com" },
              { Icon: Phone, label: "Phone", value: "+61 2 5555 1234", href: "tel:+61255551234" },
              { Icon: MapPin, label: "Address", value: "200 Gilchrist Dr, Macarthur Square NSW 2560" },
              { Icon: Clock, label: "Hours", value: "Mon–Fri, 9:00–18:00" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <c.Icon className="mt-0.5 h-5 w-5 text-blue-600" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-gray-600 hover:text-blue-700 break-words">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 break-words">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 items-stretch">
          {/* Left - Map (full height on lg, ratio on mobile) */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full">
            {/* Desktop/tablet: fill full card height */}
            <div className="hidden lg:block relative w-full h-full" style={{ minHeight: 560 }}>
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=200%20Gilchrist%20Drive%20Macarthur%20Square%20NSW%202560&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            {/* Mobile: maintain a clean 16:9 ratio */}
            <div className="block lg:hidden relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=200%20Gilchrist%20Drive%20Macarthur%20Square%20NSW%202560&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <div className="mt-1 h-[3px] w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </div>

            {/* Status (accessible) */}
            <div aria-live="polite" className="px-6 pt-4">
              {status?.type === "success" && (
                <p className="rounded-md bg-green-50 text-green-700 text-sm px-3 py-2 border border-green-200">{status.message}</p>
              )}
              {status?.type === "error" && (
                <p className="rounded-md bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-200">{status.message}</p>
              )}
            </div>

            <form onSubmit={submitContact} className="p-6 space-y-6">
              {/* Honeypot */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <div className="mt-1 flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-0">
                    <User className="h-4 w-4 text-gray-400 mx-3" />
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <div className="mt-1 flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-0">
                    <User className="h-4 w-4 text-gray-400 mx-3" />
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <div className="mt-1 flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-0">
                    <Mail className="h-4 w-4 text-gray-400 mx-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone *</label>
                  <div className="mt-1 flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-0">
                    <Phone className="h-4 w-4 text-gray-400 mx-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="tel"
                      pattern="[+0-9()\\-\\s]{6,}"
                      className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <div className="mt-1 flex items-start rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-0">
                  <MessageSquare className="h-4 w-4 text-gray-400 mx-3 mt-2" />
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none resize-y min-h-[120px]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  We typically reply within one business day. Your information is kept private.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* OPTIONAL FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8">
            {[
              { q: "How soon do you respond?", a: "Within one business day for most inquiries." },
              { q: "Do you sign NDAs?", a: "Yes, we can sign your NDA or provide ours before discussing details." },
              { q: "Which industries do you serve?", a: "We work across e-commerce, healthcare, fintech, SaaS, and more." },
            ].map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-100 p-5 bg-gray-50">
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
