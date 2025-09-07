"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

// Realistic icons
import {
  FaUsers, FaVial, FaLaptopCode
} from "react-icons/fa";
import {
  SiFigma, SiSketch, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function UIDesignPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Extraordinary{" "}
              <span className="text-blue-600">UI/UX Design</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create human-centered designs that are visually stunning,
              intuitive, and optimized for real-world results.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold transition shadow-lg hover:shadow-blue-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
          >
            <img
              src="/assets/images/uiux-hero.png"
              alt="UI/UX Design"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our UI/UX Design Services?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We focus on creating meaningful, interactive, and user-first experiences.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "User-Centered Design",
                desc: "We design with real users in mind, ensuring maximum usability.",
              },
              {
                icon: "✨",
                title: "Modern Visuals",
                desc: "Aesthetic and consistent design systems that elevate your brand.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "We work closely with stakeholders for perfect alignment.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-8 rounded-lg bg-white shadow hover:shadow-md transition text-center"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN TOOLS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Design Tools We Use
          </h2>
          <p className="mt-3 text-gray-600">
            We master the industry’s most powerful tools to deliver top-class designs.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {[
              { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
              { Icon: SiSketch, label: "Sketch", color: "#F7B500" },
              { Icon: SiAdobexd, label: "Adobe XD", color: "#FF61F6" },
              { Icon: SiAdobephotoshop, label: "Photoshop", color: "#31A8FF" },
              { Icon: SiAdobeillustrator, label: "Illustrator", color: "#FF9A00" },
            ].map((tool, i) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center p-5 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <tool.Icon className="h-12 w-12" style={{ color: tool.color }} />
                <span className="mt-3 text-sm font-medium text-gray-900">
                  {tool.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Design Process
          </h2>
          <p className="mt-3 text-gray-600">
            A structured and transparent workflow ensures beautiful and usable results.
          </p>

          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
              {[
                { icon: SiFigma, title: "Research", color: "#F24E1E" },
                { icon: SiSketch, title: "Wireframes", color: "#F7B500" },
                { icon: SiAdobexd, title: "UI Design", color: "#FF61F6" },
                { icon: FaUsers, title: "Testing", color: "#2563EB" },
                { icon: FaLaptopCode, title: "Handoff", color: "#16A34A" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full shadow-md"
                    style={{ background: `${step.color}22` }}
                  >
                    <step.icon className="h-7 w-7" style={{ color: step.color }} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Case Studies
          </h2>
          <p className="mt-3 text-gray-600">
            A showcase of our most impactful UI/UX projects.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {["uiux1.jpg", "uiux2.jpg", "uiux3.jpg"].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-lg overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={`/assets/images/${img}`}
                  alt="UI/UX Project"
                  className="w-full h-60 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s Design an Exceptional Experience
        </h2>
        <p className="mt-4 text-blue-100 text-lg">
          Transform your ideas into user experiences people love.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/portfolio"
            className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
