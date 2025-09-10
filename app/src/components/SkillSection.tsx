"use client";

import { motion, MotionProps } from "framer-motion";
import { Cpu, Database, Smartphone, Palette, Code, Brain } from "lucide-react";

const skills = [
  { label: "Software Development", desc: "Robust solutions for enterprises, startups, and everything in between.", Icon: Code },
  { label: "Web Development", desc: "Modern, responsive, and scalable websites tailored for your business.", Icon: Database },
  { label: "UX / UI Design", desc: "User-focused design ensuring seamless and engaging experiences.", Icon: Palette },
  { label: "App Development", desc: "Cross-platform mobile apps that combine performance and usability.", Icon: Smartphone },
  { label: "Internet of Things", desc: "IoT systems that connect devices, collect data, and create value.", Icon: Cpu },
  { label: "Artificial Intelligence", desc: "AI-driven solutions for automation, insights, and growth.", Icon: Brain },
];

const cardAnim = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

export default function SkillsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
          Our Capabilities
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-snug text-gray-900">
          Excellence in{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technology
          </span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We bring expertise across a wide range of modern technologies to help you scale, innovate, and lead.
        </p>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-left">
          {skills.map(({ label, desc, Icon }, idx) => (
            <motion.div
              key={label}
              {...cardAnim(idx * 0.15)}
              className="rounded-2xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl transition"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-5"
              >
                <Icon className="h-6 w-6" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
