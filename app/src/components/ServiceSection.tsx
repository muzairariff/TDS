"use client";

import Link from "next/link";
import { motion, MotionProps } from "framer-motion";
import {
  BsShieldLock,
  BsCloudFill,
  BsPeopleFill,
  BsPuzzleFill,
  BsDatabaseFill,
  BsRobot,
} from "react-icons/bs";

type Service = {
  title: string;
  desc: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  delay?: number;
};

const services: Service[] = [
  {
    title: "Information Security",
    desc: "Experience unmatched protection with our advanced information security services and solutions.",
    href: "/service-details",
    Icon: BsShieldLock,
    delay: 0.05,
  },
  {
    title: "Cloud Services",
    desc: "Explore robust cloud solutions for scalability, reliability, and secure business growth.",
    href: "/service-details",
    Icon: BsCloudFill,
    delay: 0.1,
  },
  {
    title: "Talent Partnerships",
    desc: "Engage top industry talent to refine your technology strategy and drive innovation.",
    href: "/service-details",
    Icon: BsPeopleFill,
    delay: 0.15,
  },
  {
    title: "Emerging Technologies",
    desc: "Adopt AI, ML, Blockchain, and Web 3.0 to accelerate digital transformation.",
    href: "/service-details",
    Icon: BsPuzzleFill,
    delay: 0.2,
  },
  {
    title: "Data Engineering",
    desc: "Streamlined data pipelines, management, and analytics for smarter decisions.",
    href: "/service-details",
    Icon: BsDatabaseFill,
    delay: 0.25,
  },
  {
    title: "AI, ML & Analytics",
    desc: "AI/ML-driven insights to empower data-driven business decisions and strategies.",
    href: "/service-details",
    Icon: BsRobot,
    delay: 0.3,
  },
];

const appear = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

export default function ServicesSection() {
  return (
    <section className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Title */}
        <motion.div {...appear(0)} className="text-center mb-14 sm:mb-16">
          <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow">
            Our Expertise
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Next-Gen{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technology Services
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Trusted by enterprises to build secure, scalable, and innovative digital ecosystems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, href, Icon, delay }) => (
            <motion.article
              key={title}
              {...appear(delay ?? 0)}
              className="group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-md p-7 sm:p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50" />

              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
              </div>

              <div className="relative flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>

                <div className="mt-auto pt-6">
                  <Link
                    href={href}
                    aria-label={`Learn more about ${title}`}
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-indigo-600 transition"
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
