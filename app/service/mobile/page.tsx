"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

// Font Awesome 5 (react-icons/fa)
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaCheckCircle,
  FaBell,
  FaMapMarkedAlt,
  FaCreditCard,
  FaBolt,
  FaVrCardboard,
  FaFingerprint,
  FaComments,
  FaChartBar,
  FaFlask,
  FaUpload,
  FaRulerCombined,
  FaSearch,
  FaCode,
  FaHeadset,
  FaJava,            // <-- add this
} from "react-icons/fa";

// remove SiJava from here:
import {
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiExpo,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiXcode
} from "react-icons/si";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number | undefined = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i || 0) * 0.12, ease: "easeOut" },
  }),
};






export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight [text-wrap:balance]">
              <span className="text-blue-600">Mobile App Development</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl">
              We create impactful, scalable, and innovative mobile apps for iOS, Android, and cross‑platform needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold transition shadow-lg hover:shadow-blue-200"
              >
                Get a Proposal
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

      {/* Right Phone Mockup */}
<div className="relative order-1 lg:order-2 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[650px] lg:min-h-[750px]">
  <div className="relative drop-shadow-2xl rotate-6">
    <Image
      src="/assets/images/mobile-hero-5.jpg"
      alt="Phone mockup"
      width={500}
      height={1000}
      className="w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] h-auto rounded-2xl"
      sizes="(max-width: 640px) 288px, (max-width: 768px) 352px, (max-width: 1024px) 416px, 480px"
      priority
    />
  </div>
</div>



        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We combine technology, design, and strategy to deliver world-class apps.
          </p>
          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Native & Cross-Platform",
                desc: "Expertise in iOS, Android, Flutter, and React Native.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From strategy to deployment, everything handled by us.",
              },
              {
                title: "Secure & Scalable",
                desc: "Enterprise-grade performance for apps that grow with you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                className="p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow hover:shadow-lg border border-blue-100 transition"
              >
                <FaCheckCircle className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600 mx-auto" />
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Tech Stack</h2>
          <p className="mt-3 text-gray-600">
            We use cutting-edge tools to deliver high-performance mobile apps.
          </p>

          <div className="mt-12 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-5 sm:gap-6 md:gap-8">
            {[
              { Icon: FaApple, label: "iOS", color: "#000000" },
              { Icon: FaAndroid, label: "Android", color: "#3DDC84" },
              { Icon: FaReact, label: "React Native", color: "#61DAFB" },   // React Cyan
              { Icon: SiFlutter, label: "Flutter", color: "#02569B" },      // Flutter Blue
              { Icon: SiSwift, label: "Swift", color: "#FA7343" },          // Swift Orange
              { Icon: SiKotlin, label: "Kotlin", color: "#7F52FF" },        // Kotlin Purple
              { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
              { Icon: SiExpo, label: "Expo", color: "#000000" },
              { Icon: FaJava, label: "Java", color: "#E76F00" },
              { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
              { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
              { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
              { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
              { Icon: SiRedux, label: "Redux", color: "#764ABC" },
              { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
              { Icon: SiXcode, label: "Xcode", color: "#147EFB" }
            ].map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.12 }}
                className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
              >
                {/* Use inline style for brand colors */}
                <tech.Icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: tech.color }} />
                <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-900">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* EXTRA FEATURES */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Extraordinary Features</h2>
          <p className="mt-3 text-gray-600">Enhancing your apps with powerful features users love.</p>

          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { Icon: FaBell, title: "Push Notifications", color: "#3B82F6" },
              { Icon: FaMapMarkedAlt, title: "GPS & Maps", color: "#22C55E" },
              { Icon: FaCreditCard, title: "Payment Gateways", color: "#F59E0B" },
              { Icon: FaBolt, title: "Offline Mode", color: "#EF4444" },
              { Icon: FaVrCardboard, title: "AR / VR Support", color: "#7C3AED" },
              { Icon: FaFingerprint, title: "Biometric Login", color: "#0EA5E9" },
              { Icon: FaComments, title: "In-App Chat", color: "#2563EB" },
              { Icon: FaChartBar, title: "Analytics Dashboard", color: "#10B981" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.06 }}
                className="p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-md"
                  style={{ background: `linear-gradient(135deg, ${f.color}22, ${f.color}44)` }}
                >
                  <f.Icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: f.color }} />
                </div>
                <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900">{f.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h2>
          <p className="mt-3 text-gray-600">
            A transparent, structured workflow ensuring quality and timely delivery.
          </p>

          <div className="mt-12 md:mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 relative z-10">
              {[
                { Icon: FaSearch, title: "Discovery" },
                { Icon: FaRulerCombined, title: "Design" },
                { Icon: FaCode, title: "Development" },
                { Icon: FaFlask, title: "Testing" },
                { Icon: FaUpload, title: "Deployment" },
                { Icon: FaHeadset, title: "Support" },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  whileHover={{ scale: 1.04 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <step.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CASE STUDIES */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-3 text-gray-600">Our proven work across industries.</p>
          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {["health-app.jpg", "ecommerce-app.jpg", "education-app.jpg"].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`/assets/images/${img}`}
                    alt="Mobile App Project"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold [text-wrap:balance]">Let’s Build Your Mobile App</h2>
          <p className="mt-3 sm:mt-4 text-blue-100 text-base sm:text-lg">Your vision, our expertise.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-3 text-base font-semibold text-blue-600 hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="rounded-lg border-2 border-white px-7 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
