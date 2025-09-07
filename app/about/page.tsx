"use client";

import { motion,Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { FaLightbulb, FaAward, FaHandshake, FaUsers } from "react-icons/fa";

// Reusable fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.42, 0, 0.58, 1] }, // ✅ safe easing
  }),
};

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
         <section className="relative overflow-hidden">
        {/* floating gradient blobs */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30 -z-10"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-28 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              About <span className="text-primary">TechDirectSupport</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              We are a passionate team of <span className="font-semibold">developers, designers, and innovators</span>,
              crafting world-class digital solutions. From apps to enterprise-grade platforms,
              we empower businesses to grow with technology.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow hover:bg-accent transition"
              >
                Let’s Work Together
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition"
              >
                Our Work
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
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
      </section>
     
    {/* OUR PROCESS */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Our Process</h2>
    <p className="mt-3 text-gray-600">A simple yet effective way we deliver success.</p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {[
        { step: "1", title: "Discovery", desc: "Understanding your needs deeply." },
        { step: "2", title: "Design", desc: "Crafting user-friendly experiences." },
        { step: "3", title: "Development", desc: "Agile coding with best practices." },
        { step: "4", title: "Delivery", desc: "Launching with quality assurance." },
      ].map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-white shadow hover:shadow-xl transition"
        >
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0}>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Empowering businesses through{" "}
              <span className="font-semibold">scalable, secure, and user-friendly</span> technology solutions.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1}>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a <span className="font-semibold">global leader in digital innovation</span>,
              pushing boundaries and delivering solutions that redefine industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="mt-3 text-gray-600">What drives us forward every day.</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Innovation", desc: "We embrace creativity and disruptive thinking.", Icon: FaLightbulb },
              { title: "Excellence", desc: "Delivering beyond expectations, every time.", Icon: FaAward },
              { title: "Integrity", desc: "Transparency, trust, and honesty in all actions.", Icon: FaHandshake },
              { title: "Collaboration", desc: "Working hand-in-hand with clients as partners.", Icon: FaUsers },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow hover:shadow-xl transition group border border-gray-100 hover:border-primary"
              >
                <v.Icon className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* OUR JOURNEY */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold">Our Journey</h2>
    <p className="mt-3 text-gray-600">Milestones that shaped who we are</p>
  </div>

  <div className="mt-16 space-y-20">
    {[
      { year: "2019", text: "Founded with a small but passionate team.", img: "/assets/images/about/about-1.jpg" },
      { year: "2020", text: "Delivered our first enterprise project.", img: "/assets/images/about/about-2.png" },
      { year: "2022", text: "Expanded globally with 50+ clients.", img: "/assets/images/about/about-3.png" },
      { year: "2024", text: "Recognized among top innovators.", img: "/assets/images/about/about-4.jpg" },
    ].map((m, i) => (
      <div
        key={m.year}
        className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto"
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`rounded-2xl overflow-hidden shadow-lg order-1 ${
            i % 2 === 0 ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={m.img}
            alt={m.year}
            width={600}
            height={400}
            className="object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`order-2 ${
            i % 2 === 0 ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="px-5 py-1 bg-primary text-white text-sm rounded-full shadow-md">
            {m.year}
          </span>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            {m.text}
          </p>
        </motion.div>
      </div>
    ))}
  </div>
</section>







      {/* TEAM SECTION */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      The passionate people who bring our vision to life.
    </p>

    <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { name: "Sarah Johnson", role: "CEO & Founder", img: "/assets/images/team/team-1.png" },
        { name: "Michael Lee", role: "CTO", img: "/assets/images/team/team-2.png" },
        { name: "Emily Davis", role: "Lead Designer", img: "/assets/images/team/team-3.png" },
        { name: "James Smith", role: "Full Stack Developer", img: "/assets/images/team/team-4.png" },
      ].map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-xl transition"
        >
          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={member.img}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-[90%]">
            <h3 className="text-lg font-semibold text-white drop-shadow-md">{member.name}</h3>
            <p className="text-sm text-gray-200">{member.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">Let’s Build the Future Together</h2>
          <p className="mt-4 text-lg text-blue-100">Your vision + our expertise = unstoppable growth.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
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
