"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import {
  FaLightbulb,
  FaAward,
  FaHandshake,
  FaUsers,
  FaQuoteLeft,
  FaBuilding,
  FaGlobe,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";


// Reusable fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.42, 0, 0.58, 1] },
  }),
};


export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

{/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
  {/* floating gradient blobs */}
  <motion.div
    animate={{ y: [0, -25, 0] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    className="pointer-events-none absolute top-10 left-4 w-40 h-40 sm:w-56 sm:h-56 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"
  />
  <motion.div
    animate={{ y: [0, 25, 0] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
    className="pointer-events-none absolute bottom-10 right-4 w-52 h-52 sm:w-72 sm:h-72 bg-cyan-200 rounded-full blur-3xl opacity-30 -z-10"
  />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* TEXT */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="text-center lg:text-left"
      >
        <h1 className="text-[60px] font-extrabold leading-[1.2] tracking-tight text-gray-900 mt-5 ">
  About <span className="text-primary">TechDirectSupport</span>
</h1>

        <p className="mt-8 text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          We are a passionate team of{" "}
          <span className="font-bold text-gray-900">developers, designers, and innovators</span>, 
          crafting <span className="text-primary font-bold">world-class digital solutions</span>.  
        
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-10 py-5 text-lg sm:text-xl font-semibold text-white shadow-xl hover:bg-accent transition"
          >
            Let’s Work Together
          </Link>
          {/* <Link
            href="/portfolio"
            className="rounded-full border-2 border-primary px-10 py-5 text-lg sm:text-xl font-semibold text-primary hover:bg-primary/10 transition"
          >
            Our Work
          </Link> */}
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden"
      >
        <Image
          src="/assets/images/hero-about.png"
          alt="Our team"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>



     {/* QUICK STATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            {[
              { Icon: FaBuilding, label: "Projects", value: "+120" },
              { Icon: FaUsers, label: "Clients", value: "+50" },
              { Icon: FaGlobe, label: "Countries", value: "12" },
              { Icon: FaClock, label: "Years", value: "6+" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.Icon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-2xl font-extrabold tracking-tight">{s.value}</p>
                  <p className="text-xs text-gray-500 uppercase">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-3 text-gray-600">A simple yet effective way we deliver success.</p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your needs deeply." },
              { step: "2", title: "Design", desc: "Crafting user-friendly experiences." },
              { step: "3", title: "Development", desc: "Agile coding with best practices." },
              { step: "4", title: "Delivery", desc: "Launching with quality assurance." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 rounded-xl bg-white shadow hover:shadow-xl transition border border-gray-100">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0} className="bg-white p-6 sm:p-8 rounded-2xl shadow border border-gray-100">
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Empowering businesses through <span className="font-semibold">scalable, secure, and user-friendly</span> technology solutions.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} className="bg-white p-6 sm:p-8 rounded-2xl shadow border border-gray-100">
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To be a <span className="font-semibold">global leader in digital innovation</span>, pushing boundaries and delivering solutions that redefine industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="mt-3 text-gray-600">What drives us forward every day.</p>

          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Innovation", desc: "We embrace creativity and disruptive thinking.", Icon: FaLightbulb },
              { title: "Excellence", desc: "Delivering beyond expectations, every time.", Icon: FaAward },
              { title: "Integrity", desc: "Transparency, trust, and honesty in all actions.", Icon: FaHandshake },
              { title: "Collaboration", desc: "Working hand-in-hand with clients as partners.", Icon: FaUsers },
            ].map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }} className="rounded-xl bg-white p-7 sm:p-8 shadow hover:shadow-xl transition group border border-gray-100 hover:border-primary text-left sm:text-center">
                <v.Icon className="mx-auto h-9 w-9 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="mt-3 text-gray-600">Milestones that shaped who we are</p>
          </div>

          <div className="mt-12 md:mt-16 space-y-14">
            {[
              { year: "2019", text: "Founded with a small but passionate team.", img: "/assets/images/about/about-1.jpg" },
              { year: "2020", text: "Delivered our first enterprise project.", img: "/assets/images/about/about-2.png" },
              { year: "2022", text: "Expanded globally with 50+ clients.", img: "/assets/images/about/about-3.png" },
              { year: "2024", text: "Recognized among top innovators.", img: "/assets/images/about/about-4.jpg" },
            ].map((m, i) => (
              <div key={m.year} className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* IMAGE */}
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className={`rounded-2xl overflow-hidden shadow-lg order-1 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <Image src={m.img} alt={m.year} width={1000} height={700} className="object-cover w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px]" />
                </motion.div>
                {/* TEXT */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className={`order-2 ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <span className="inline-block px-5 py-1 bg-primary text-white text-xs sm:text-sm rounded-full shadow-md">{m.year}</span>
                  <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">{m.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGE / SECURITY */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl border border-gray-100 p-5 sm:p-6 bg-white shadow-sm">
            <FaShieldAlt className="h-7 w-7 text-primary" />
            <p className="text-sm sm:text-base text-gray-700">
              We follow strict security and privacy practices (code reviews, least-privilege access, encrypted secrets) to keep your data safe.
            </p>
          </div>
        </div>
      </section>


{/* CEO MESSAGE SECTION */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
    
    {/* Left: CEO Image */}
    <div className="flex justify-center">
      <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/assets/images/boss.png"
          alt="CEO"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        {/* Caption */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-md">
            Jahanzaib Babar
          </h3>
          <p className="text-sm text-gray-200">CEO & Founder</p>
        </div> */}
      </div>
    </div>

    {/* Right: CEO Message */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        A Message from Our CEO
      </h2>
      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        “At <span className="font-semibold text-blue-600">TECH DIRECT SUPPORT</span>, 
        we believe in building solutions that empower businesses and individuals alike. 
        Our journey has been fueled by passion, innovation, and a relentless pursuit of 
        excellence. I am proud of our dedicated team that works tirelessly to bring our 
        vision to life and create a lasting impact.”
      </p>
      <p className="mt-8 text-gray-600 font-medium italic">
      Jahanzaib Babar, CEO & Founder
      </p>
    </motion.div>
  </div>
</section>



      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { name: "Ayesha K.", role: "Product Lead", quote: "They shaped our chaotic ideas into a clean product experience. The team is fast and collaborative." },
              { name: "Omar S.", role: "Founder", quote: "Great communication and solid execution—launched on time with metrics trending up from week one." },
            ].map((t, i) => (
              <motion.figure key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-6 sm:p-7 bg-gray-50 rounded-2xl border border-gray-200">
                <FaQuoteLeft className="h-6 w-6 text-primary" />
                <blockquote className="mt-3 text-gray-700">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">{t.name} — {t.role}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-blue-600 to-cyan-500 text-white py-14 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold [text-wrap:balance]">Let’s Build the Future Together</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-blue-100">Your vision + our expertise = unstoppable growth.</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3.5 sm:gap-4">
            <Link href="/contact" className="w-full sm:w-auto rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition text-center">
              Contact Us
            </Link>
            {/* <Link href="/portfolio" className="w-full sm:w-auto rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition text-center">
              View Portfolio
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
