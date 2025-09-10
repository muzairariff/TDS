"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedIcon from "../../src/components/AnimatedIcons";
import TechBadge from "../../src/components/TechBadge";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";
import Process from "@/app/src/components/Process";

import {
  FaRocket,
  FaSearch,
  FaBolt,
  FaShieldAlt,
  FaSitemap,
  FaCubes,
  FaChartLine,
  FaMobileAlt,
  FaPython,
  FaPhp,
  FaJava,
} from "react-icons/fa";
import { BsBrowserChrome, BsSpeedometer2 } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import TechStackSection from "@/app/src/components/techStack";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />


      {/* HERO */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/web-bg.jpg"
            alt="Web Dev Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Building <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen
              </span>{" "}
              Web Solutions
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
              We design and develop scalable, secure, and lightning-fast web
              applications that empower startups and enterprises to grow faster.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold transition shadow-lg hover:shadow-blue-500/40"
              >
                Get a Proposal
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-full border border-gray-400 hover:border-blue-400 font-semibold transition"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/images/web-hero-illustration.png"
              alt="Hero Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>





      {/* WHAT WE DELIVER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">What We Deliver</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our services are designed to help you scale, adapt, and thrive in the digital era.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: FaBolt, title: "Lightning Performance", desc: "Optimized with Next.js, caching strategies, and edge rendering." },
              { Icon: FaShieldAlt, title: "Enterprise Security", desc: "OWASP best practices, modern authentication, and data safety." },
              { Icon: FaSitemap, title: "Scalable Architecture", desc: "Solutions that grow with your business." },
              { Icon: FaCubes, title: "CMS & E-commerce", desc: "Integrations with headless CMS, Shopify, Contentful, and more." },
              { Icon: BsBrowserChrome, title: "Quality Assurance", desc: "Testing suites (Cypress/Playwright) & performance monitoring." },
              { Icon: FaChartLine, title: "Analytics & Growth", desc: "Data dashboards, tracking funnels, and A/B experiments." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-xl transition group"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white mx-auto shadow-md group-hover:scale-110 transition">
                  <f.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PROCESS STEPS */}
      <Process />
      <TechStackSection />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <p className="mt-3 text-gray-600">See how we’ve helped businesses transform digitally.</p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`/assets/images/project-${i}.jpg`}
                  alt={`Project ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link href="/case-studies" className="px-5 py-2 bg-white text-primary rounded-full font-medium shadow">
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-white py-20 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">Let’s Build the Future Together</h2>
          <p className="mt-4 text-lg text-blue-100">We don’t just code, we craft solutions that empower businesses.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition">
              Contact Us
            </Link>
            <Link href="/portfolio" className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
