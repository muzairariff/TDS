"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaJava,
  FaPhp,
  FaApple,
  FaAndroid,
  FaCheckCircle,
} from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiNextdotjs } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Mobile App Development{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tailored for You
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We craft seamless mobile experiences across platforms. From iOS
              and Android to cross-platform solutions, our apps are designed to
              scale with your business.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold transition shadow-lg"
              >
                Get a Proposal
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-full border border-white/70 hover:border-white font-semibold transition"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/images/mobile-hero.png"
              alt="Mobile Development"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TECH ICONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Tech Stack</h2>
          <p className="mt-3 text-gray-600">
            We use cutting-edge tools to build high-performance apps.
          </p>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
            {[FaReact, SiFlutter, SiSwift, SiKotlin, FaJava, FaPhp].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-5 rounded-xl bg-white shadow hover:shadow-lg transition cursor-pointer"
                >
                  <Icon className="h-12 w-12 text-blue-600" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Experienced Team",
                desc: "5+ years of expertise in building mobile-first solutions.",
              },
              {
                title: "End-to-End Service",
                desc: "From idea to launch, we manage the full lifecycle.",
              },
              {
                title: "Scalable Solutions",
                desc: "Apps designed to scale with your business growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-8 rounded-xl bg-gray-50 shadow hover:shadow-lg transition"
              >
                <FaCheckCircle className="h-10 w-10 text-blue-500 mx-auto" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                plan: "Starter",
                price: "$4999",
                features: ["Basic App", "UI/UX Design", "1 Platform"],
              },
              {
                plan: "Pro",
                price: "$9999",
                features: [
                  "Custom Features",
                  "Cross-Platform",
                  "3 Months Support",
                ],
              },
              {
                plan: "Enterprise",
                price: "Custom",
                features: [
                  "Advanced Integrations",
                  "Dedicated Team",
                  "Ongoing Support",
                ],
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{pkg.plan}</h3>
                <p className="text-3xl font-bold mt-2">{pkg.price}</p>
                <ul className="mt-6 space-y-2 text-gray-600">
                  {pkg.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-14 space-y-8">
            {[
              {
                q: "How long does it take to build a mobile app?",
                a: "Depends on complexity. Typically 8–16 weeks for MVPs.",
              },
              {
                q: "Do you provide support after launch?",
                a: "Yes, all plans include post-launch support.",
              },
              {
                q: "Can you handle both iOS and Android?",
                a: "Yes, we specialize in cross-platform and native solutions.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold">
          Ready to Build Your Next App?
        </h2>
        <p className="mt-3 text-blue-100">
          Partner with us to turn your vision into a reality.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-100"
          >
            Contact Us
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
