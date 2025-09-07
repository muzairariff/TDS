"use client";

import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, User } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (loading) return;
  setLoading(true);

  const form = e.currentTarget;
  const payload = {
    firstName: (form.elements.namedItem("firstName") as HTMLInputElement)?.value,
    lastName: (form.elements.namedItem("lastName") as HTMLInputElement)?.value,
    email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to send email");
    }

    toast.success("✅ Email sent successfully!");
    form.reset();
  } catch (err: unknown) {
    if (err instanceof Error) {
      toast.error(`❌ ${err.message}`);
    } else {
      toast.error("❌ Something went wrong.");
    }
  } finally {
    setLoading(false);
  }
}


  return (
    <div className="text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center py-28"
        style={{
          backgroundImage: `url('/assets/images/contact.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#121820] opacity-90" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Let’s <span className="text-blue-400">Connect</span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Have an idea or a project in mind? Let’s build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6">
          {/* Left - Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps?q=200%20Gilchrist%20Drive%20Macarthur%20Square%20NSW%202560&output=embed"
              className="w-full h-full min-h-[500px] border-0"
              loading="lazy"
            />
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <div className="mt-1 h-[3px] w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </div>

            <form onSubmit={submitContact} className="p-6 space-y-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
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
                  <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
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
                  <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
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
                  <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="phone"
                      required
                      className="flex-1 bg-transparent px-1 py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-md hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
