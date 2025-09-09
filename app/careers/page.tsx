"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";
import {
  FaUsers,
  FaGlobe,
  FaClock,
  FaHeart,
  FaHome,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
  FaGraduationCap,
  FaMoneyBillWave,
  FaUmbrellaBeach,
  FaBriefcase,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CareersPage() {
  const roles: Array<{
    title: string;
    team: string;
    location: string;
    type: "Full-time" | "Contract" | "Internship";
    tags: string[];
  }> = [
    {
      title: "Senior React Native Engineer",
      team: "Engineering",
      location: "Remote (APAC)",
      type: "Full-time",
      tags: ["React Native", "TypeScript", "CI/CD"],
    },
    {
      title: "Product Designer (UI/UX)",
      team: "Design",
      location: "Hybrid – Sydney, AU",
      type: "Full-time",
      tags: ["Figma", "Design Systems", "Prototyping"],
    },
    {
      title: "Backend Engineer (Node.js)",
      team: "Engineering",
      location: "Remote (Worldwide)",
      type: "Full-time",
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
  ];

  const perks = [
    { Icon: FaHome, title: "Remote-first", desc: "Work from anywhere with a flexible schedule." },
    { Icon: FaGraduationCap, title: "Learning budget", desc: "Yearly stipend for courses, books, and conferences." },
    { Icon: FaMoneyBillWave, title: "Competitive pay", desc: "Market-aligned salary with performance bonuses." },
    { Icon: FaUmbrellaBeach, title: "Time off", desc: "Ample PTO, local holidays, and mental-health days." },
    { Icon: FaShieldAlt, title: "Great benefits", desc: "Health cover, equipment, and home office support." },
    { Icon: FaChartLine, title: "Real impact", desc: "Ship to thousands of users and see results fast." },
  ];

  const process = [
    { step: "01", title: "Apply", desc: "Share your CV/portfolio—no long forms." },
    { step: "02", title: "Intro call", desc: "30-min culture & goals chat." },
    { step: "03", title: "Skills chat", desc: "Portfolio or tech deep-dive with the team." },
    { step: "04", title: "Practical", desc: "Light take-home or live pairing (paid)." },
    { step: "05", title: "Panel", desc: "Meet cross-functional teammates." },
    { step: "06", title: "Offer", desc: "Clear, competitive, and fast." },
  ];

  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO (bullet-proof responsive) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Build the future with{" "}
                <span className="text-cyan-300">TechDirectSupport</span>
              </h1>
              <p className="mt-3 sm:mt-5 text-base sm:text-lg text-blue-100 max-w-2xl">
                Join a friendly, ambitious team crafting world-class digital products for a global audience.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                <Link
                  href="#open-roles"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-7 py-3 text-sm font-semibold transition"
                >
                  View open roles <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/80 text-white hover:bg-white/10 px-6 sm:px-7 py-3 text-sm font-semibold transition"
                >
                  Meet the team
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Quick stats (wrap safely on small screens) */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { Icon: FaUsers, label: "Team", value: "40+" },
              { Icon: FaGlobe, label: "Countries", value: "12" },
              { Icon: FaClock, label: "Avg tenure", value: "3.2y" },
              { Icon: FaHeart, label: "eNPS", value: "+49" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="min-w-0 flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 p-4"
              >
                <s.Icon className="h-5 w-5 text-cyan-200 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-2xl font-extrabold leading-none">{s.value}</p>
                  <p className="text-xs uppercase tracking-wide text-blue-100 truncate">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS & BENEFITS */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why you’ll love working here</h2>
          <p className="mt-3 text-gray-600">People-first policies, modern tooling, and meaningful problems.</p>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <p.Icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-gray-600 text-sm sm:text-base">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Open roles</h2>
            <p className="mt-3 text-gray-600">
              Don’t see your role?{" "}
              <a
                href="mailto:hr@techdirectsupport.com?subject=Open%20application"
                className="text-blue-600 underline"
              >
                Introduce yourself
              </a>.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {roles.map((r, i) => (
              <motion.article
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900">{r.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <FaBriefcase className="h-3.5 w-3.5" /> {r.team}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaMapMarkerAlt className="h-3.5 w-3.5" /> {r.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaClock className="h-3.5 w-3.5" /> {r.type}
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`mailto:hr@techdirectsupport.com?subject=Application:%20${encodeURIComponent(
                      r.title
                    )}`}
                    className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition whitespace-nowrap"
                  >
                    Apply now <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE & CULTURE */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">How we work</h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base list-disc pl-5">
                <li>Async-friendly collaboration and documented decisions.</li>
                <li>Small, autonomous squads with clear ownership.</li>
                <li>Weekly demos, blameless retros, and continuous delivery.</li>
                <li>Design systems + strong engineering practices by default.</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl sm:text-3xl font-bold">Values we live by</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { Icon: FaLaptopCode, t: "Craft over hype" },
                  { Icon: FaHeart, t: "Empathy for users" },
                  { Icon: FaShieldAlt, t: "Own the outcome" },
                  { Icon: FaGlobe, t: "Diversity wins" },
                ].map((v) => (
                  <div key={v.t} className="flex items-start gap-3 rounded-xl border border-gray-100 p-4">
                    <v.Icon className="h-5 w-5 text-blue-600" />
                    <p className="font-medium text-gray-900">{v.t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our hiring process</h2>
          <p className="mt-3 text-gray-600">Respectful, transparent, and fast—typically 2–3 weeks.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {process.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7 shadow-sm"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-gray-600 text-sm sm:text-base">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">FAQs</h2>
          <div className="mt-10 space-y-6">
            {[
              { q: "Do you hire internationally?", a: "Yes. We are remote-friendly and support contractors in multiple countries." },
              { q: "Do you offer internships?", a: "We run paid internships twice a year across Engineering and Design." },
              { q: "What tools do you use?", a: "Figma, GitHub, Linear/Jira, Notion, Slack, and modern cloud infrastructure." },
            ].map((f, i) => (
              <motion.div
                key={f.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-xl border border-gray-100 p-5 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-14 sm:py-16 md:py-20 text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Didn’t see your role?</h2>
          <p className="mt-3 text-blue-100 text-base sm:text-lg">
            We’re always meeting great people. Send your CV and a short note.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="mailto:hr@techdirectsupport.com?subject=Open%20application"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              Introduce yourself
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
