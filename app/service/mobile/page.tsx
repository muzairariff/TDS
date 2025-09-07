"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

import {
  FaApple, FaAndroid, FaReact, FaCheckCircle,
} from "react-icons/fa";
import {
  SiFlutter, SiSwift, SiKotlin, SiFirebase, SiExpo,
} from "react-icons/si";
import { 
  FaBell, FaMapMarkedAlt, FaCreditCard, FaBolt, FaVrCardboard, FaFingerprint, FaComments ,FaChartBar 
} from "react-icons/fa";
import { FaSearch, FaPencilRuler, FaCode, FaVial, FaCloudUploadAlt, FaHeadset } from "react-icons/fa";

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Extraordinary{" "}
              <span className="text-blue-600">Mobile App Development</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create impactful, scalable, and innovative mobile apps for iOS, Android, and cross-platform needs.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold transition shadow-lg hover:shadow-blue-200">
                Get a Proposal
              </Link>
              <Link href="/portfolio" className="px-7 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Animated Phones */}
          <motion.div className="relative flex justify-center items-center">
            <motion.img
              src="/assets/images/iphone-mockup1.png"
              className="w-56 md:w-72 absolute rotate-6 drop-shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: [0, -15, 0], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/assets/images/iphone-mockup2.png"
              className="w-56 md:w-72 absolute -rotate-6 drop-shadow-2xl"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: [0, 20, 0], opacity: 1 }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We combine technology, design, and strategy to deliver world-class apps.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Native & Cross-Platform", desc: "Expertise in iOS, Android, Flutter, and React Native." },
              { title: "End-to-End Delivery", desc: "From strategy to deployment, everything handled by us." },
              { title: "Secure & Scalable", desc: "Enterprise-grade performance for apps that grow with you." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow hover:shadow-lg border border-blue-100 transition">
                <FaCheckCircle className="h-10 w-10 text-blue-600 mx-auto" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* TECH STACK */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Tech Stack</h2>
    <p className="mt-3 text-gray-600">We use cutting-edge tools to deliver high-performance mobile apps.</p>

    <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
      {[
        { Icon: FaApple, label: "iOS", color: "#000000" },
        { Icon: FaAndroid, label: "Android", color: "#3DDC84" },
        { Icon: FaReact, label: "React Native", color: "#61DAFB" },
        { Icon: SiFlutter, label: "Flutter", color: "#02569B" },
        { Icon: SiSwift, label: "Swift", color: "#FA7343" },
        { Icon: SiKotlin, label: "Kotlin", color: "#7F52FF" },
        { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
        { Icon: SiExpo, label: "Expo", color: "#000020" },
        { Icon: SiFirebase, label: "Java", color: "#E76F00" }, // replace with Java icon if available
        { Icon: FaReact, label: "Node.js", color: "#339933" }, // replace with Node.js icon if available
        { Icon: FaReact, label: "GraphQL", color: "#E10098" }, // replace with GraphQL icon if available
        { Icon: FaReact, label: "MongoDB", color: "#47A248" }, // replace with MongoDB icon if available
      ].map((tech, i) => (
        <motion.div
          key={tech.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-5 rounded-lg bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
        >
          <tech.Icon className="h-12 w-12" style={{ color: tech.color }} />
          <span className="mt-3 text-sm font-medium text-gray-900">{tech.label}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* EXTRA FEATURES */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Extraordinary Features</h2>
    <p className="mt-3 text-gray-600">Enhancing your apps with powerful features users love.</p>

    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { Icon: FaBell, title: "Push Notifications", color: "#3B82F6" },   // Blue
        { Icon: FaMapMarkedAlt, title: "GPS & Maps", color: "#22C55E" },  // Green
        { Icon: FaCreditCard, title: "Payment Gateways", color: "#F59E0B" }, // Yellow/Gold
        { Icon: FaBolt, title: "Offline Mode", color: "#EF4444" },        // Red
        { Icon: FaVrCardboard, title: "AR / VR Support", color: "#7C3AED" }, // Purple
        { Icon: FaFingerprint, title: "Biometric Login", color: "#0EA5E9" }, // Cyan
        { Icon: FaComments, title: "In-App Chat", color: "#2563EB" },     // Blue
        { Icon: FaChartBar, title: "Analytics Dashboard", color: "#10B981" },
      ].map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.08 }}
          className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition"
        >
          {/* Realistic Icon Style */}
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full shadow-md"
               style={{ background: `linear-gradient(135deg, ${f.color}22, ${f.color}44)` }}>
            <f.Icon className="h-10 w-10" style={{ color: f.color }} />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">{f.title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h2>
    <p className="mt-3 text-gray-600">A transparent, structured workflow ensuring quality and timely delivery.</p>

    {/* Timeline */}
    <div className="mt-16 relative">
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 relative z-10">
        {[
          { Icon: FaSearch, title: "Discovery" },
          { Icon: FaPencilRuler, title: "Design" },
          { Icon: FaCode, title: "Development" },
          { Icon: FaVial, title: "Testing" },
          { Icon: FaCloudUploadAlt, title: "Deployment" },
          { Icon: FaHeadset, title: "Support" },
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
            {/* Step Circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
              <step.Icon className="h-7 w-7" />
            </div>
            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-3 text-gray-600">Our proven work across industries.</p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {["health-app.jpg", "ecommerce-app.jpg", "education-app.jpg"].map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img src={`/assets/images/${img}`} alt="Mobile App Project" className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      {/* <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-10 grayscale hover:grayscale-0 transition">
            {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map((logo, i) => (
              <img key={i} src={`/assets/logos/${logo}`} alt="Client Logo" className="h-12 object-contain" />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Let’s Build Your Mobile App</h2>
        <p className="mt-4 text-blue-100 text-lg">Your vision, our expertise.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 hover:bg-gray-100 transition">
            Contact Us
          </Link>
          <Link href="/portfolio" className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition">
            View Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
