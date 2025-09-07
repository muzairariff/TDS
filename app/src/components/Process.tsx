// src/components/Process.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    step: "Discovery",
    desc: "Understanding your goals, users, and unique challenges.",
    Icon: FaLightbulb,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    step: "Design",
    desc: "Wireframes, prototypes, and a beautiful UI/UX.",
    Icon: FaProjectDiagram,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    step: "Development",
    desc: "Agile sprints, clean code, and scalable architecture.",
    Icon: FaTools,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: "Launch & Growth",
    desc: "Deployment, monitoring, and continuous improvement.",
    Icon: FaRocket,
    gradient: "from-green-400 to-emerald-600",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* subtle background gradient shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Process
          </h2>
          <p className="mt-3 text-gray-600">
            How we take your project from idea to launch.
          </p>
        </div>

        {/* Vertical Line */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-500 h-full hidden md:block" />

          <div className="space-y-20">
            {steps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 items-center gap-12 ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    i % 2 === 0 ? "md:pr-12 md:col-start-1" : "md:pl-12 md:col-start-2"
                  }`}
                >
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full shadow">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{p.step}</h3>
                  <p className="mt-2 text-gray-600">{p.desc}</p>
                </div>

                {/* Icon Circle */}
                <div
                  className={`hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${p.gradient} shadow-lg border-4 border-white`}
                >
                  <p.Icon className="text-white text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
