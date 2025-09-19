// app/service/operation/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import CountUp from "react-countup";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";
import Link from "next/link";

import {
  FaUserShield,
  FaBuilding,
  FaClipboardCheck,
  FaHeadset,
  FaRoute,
  FaTools,
  FaChartLine,
  FaUsers,
  FaTruck,
  FaRegClock,
  FaMedal,
  FaCheckCircle,
  FaQuoteLeft,
  FaCogs ,FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaCalendarCheck,
  FaUserTie,
} from "react-icons/fa";

// ✅ Type-safe reusable fade-up animation
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.42, 0, 1, 1], delay },
  viewport: { once: true, amount: 0.35 },
});

export default function OperationsPage() {
  // Testimonials slider
  const testimonials = [
    {
      quote:
        "Their operations team streamlined our multi-site rollout. Reporting is crisp and issues are resolved.",
      name: "Sarah Johnson",
      role: "COO, BrightWorks",
    },
    {
      quote:
        "Uptime, SLAs, and field performance improved within weeks. Communication is proactive and data-driven.",
      name: "Michael Smith",
      role: "Head of Ops, NorthBay",
    },
    {
      quote:
        "Rock-solid execution. Rosters, incident response, and analytics are best-in-class.",
      name: "Emily Carter",
      role: "Director, Meridian Group",
    },
  ];
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setTIndex((p) => (p + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const roles = [
    {
      icon: FaUserShield,
      title: "Security & Compliance",
      desc: "24/7 site security, audits, compliance tracking, incident management.",
    },
    {
      icon: FaBuilding,
      title: "Admin & Logistics",
      desc: "Permits, coordination, transport, asset movements, vendor liaising.",
    },
    {
      icon: FaClipboardCheck,
      title: "Scheduling & Rosters",
      desc: "Shift planning, automated rostering, attendance & leave management.",
    },
    {
      icon: FaHeadset,
      title: "Service Desk",
      desc: "Centralized ticketing, triage, escalation, and stakeholder comms.",
    },
    {
      icon: FaRoute,
      title: "Field Operations",
      desc: "Dispatch, GPS tracking, site-readiness checks, SOP adherence.",
    },
    {
      icon: FaTools,
      title: "Asset & Inventory",
      desc: "Procurement, lifecycle, maintenance windows, spares tracking.",
    },
    {
      icon: FaChartLine,
      title: "Reporting & Analytics",
      desc: "KPIs, SLA dashboards, performance trends, continuous insights.",
    },
    {
      icon: FaUsers,
      title: "Workforce Management",
      desc: "Hiring pipelines, onboarding, training, reviews, and compliance.",
    },
    {
      icon: FaTruck,
      title: "Vendor Management",
      desc: "MSAs, SLAs, audits, rate-cards, and multi-vendor coordination.",
    },
  ];

  const stats = [
    { label: "Sites Managed", value: 120 },
    { label: "Professionals Deployed", value: 650 },
    { label: "SLA Adherence", value: 99.2, suffix: "%" },
    { label: "Avg. Response Time", value: 12, suffix: "m" },
  ];

  const steps = [
    { title: "Discovery", desc: "Assess scope, risks, SLAs, compliance & site readiness." },
    { title: "Planning", desc: "Rosters, SOPs, comms matrix, success metrics, & runbooks." },
    { title: "Onboarding", desc: "Team allocation, training, vendor setup, tool access." },
    { title: "Execution", desc: "Live operations, ticketing, dispatch, & proactive monitoring." },
    { title: "Reporting", desc: "Daily/weekly reports, KPIs, incident deep-dives, insights." },
    { title: "Optimization", desc: "Continuous improvement, automation, cost & quality gains." },
  ];

  const capabilities = [
  { icon: FaRegClock, title: "24/7 Monitoring", desc: "NOC/SOC coverage with real-time alerts & dashboards." },
  { icon: FaMedal, title: "SLA Governance", desc: "Aggressive SLAs with transparent performance reviews." },
  { icon: FaCheckCircle, title: "Quality Audits", desc: "Monthly audits, checklists, and improvement playbooks." },
  { icon: FaCogs, title: "Process Automation", desc: "Streamlined workflows with automated escalation & reporting." },
];

  const leaders = [
    { name: "Jahanzaib Babar", role: "CEO", initials: "JB" },
    { name: "Aamir Khan", role: "Operational Support", initials: "AK" },
    { name: "Jamshed Ali", role: "Technical Lead", initials: "JA" },
  ];

  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-10 md:grid-cols-2 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <FaChartLine className="h-3.5 w-3.5" />
              Operations & Service Delivery
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Operational <span className="text-blue-600">Excellence</span> at Scale
            </h1>
            <p className="mt-4 max-w-xl text-gray-600">
              We plan, staff, execute, and continually optimize multi-site operations with
              strong governance, data-driven reporting, and proactive communication.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition bg-white"
                  >
                    <c.icon className="text-blue-600 text-2xl" />
                    <h3 className="mt-3 font-semibold">{c.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROLES GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <h2 className="text-3xl font-extrabold">
              Core <span className="text-blue-600">Operational Roles</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Everything from security and staffing to analytics and vendor management — tightly aligned to your SLAs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp(i * 0.05)}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <r.icon className="text-blue-600 text-3xl" />
                <h3 className="mt-3 text-lg font-semibold">{r.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
    <section className="py-20" style={{ background: "#eaf4ff" }}>
  <div className="mx-auto max-w-6xl px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((s, i) => (
        <motion.div key={s.label} {...fadeUp(i * 0.08)}>
          {/* Number */}
          <div className="text-5xl font-bold text-blue-700">
            <CountUp
              start={0}
              end={s.value}
              duration={2.5}
              decimals={s.suffix === "%" ? 1 : 0}
              suffix={s.suffix ?? ""}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>

          {/* Label */}
          <p className="mt-3 text-gray-700 font-medium">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* WORKFLOW */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <h2 className="text-3xl font-extrabold">Operational Workflow</h2>
            <p className="mt-3 text-gray-600">How we deliver consistent, high-quality outcomes.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-100 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...fadeUp(i * 0.05)}
                  className={`relative md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
                >
                  <div
                    className={`absolute left-0 md:left-auto top-2 h-3.5 w-3.5 rounded-full bg-blue-600 ${i % 2 ? "md:right-[-7px]" : "md:left-[-7px]"
                      }`}
                  />
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <h2 className="text-3xl font-extrabold">Leadership</h2>
            <p className="mt-3 text-gray-600">Seasoned operators driving outcomes and accountability.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {leaders.map((m, i) => (
              <motion.div
                key={m.name}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-bold text-gray-900">
                    {m.initials}
                  </div>
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div className="text-center mb-10" {...fadeUp(0)}>
            <h2 className="text-3xl font-extrabold">What Clients Say</h2>
          </motion.div>

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <FaQuoteLeft className="text-blue-600/70 text-2xl mb-3" />
                <p className="text-lg text-gray-800 leading-relaxed">
                  “{testimonials[tIndex].quote}”
                </p>
                <div className="mt-5">
                  <p className="font-semibold">{testimonials[tIndex].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[tIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${i === tIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

 {/* NDIS SPECIALIST SECTION */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
  <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <motion.div className="text-center mb-16" {...fadeUp(0)}>
      <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        NDIS Services
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Specialist <span className="text-blue-600">Solutions</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
        Expert support across <strong>Invoicing, Payroll, Rostering</strong> and <strong>Recruitment</strong>, 
        leveraging trusted tools like <span className="font-semibold text-blue-600">Xero</span> for accuracy and compliance.
      </p>
    </motion.div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          Icon: FaFileInvoiceDollar,
          title: "Invoicing",
          desc: "Seamless invoicing powered by Xero integration for compliance and speed.",
          delay: 0.05,
        },
        {
          Icon: FaMoneyCheckAlt,
          title: "Payroll",
          desc: "Automated payroll solutions ensuring accurate, timely staff payments.",
          delay: 0.1,
        },
        {
          Icon: FaCalendarCheck,
          title: "Rostering",
          desc: "Intelligent rostering tools that simplify scheduling and reduce errors.",
          delay: 0.15,
        },
        {
          Icon: FaUserTie,
          title: "Recruitment",
          desc: "Building reliable, compliant, and qualified teams through structured hiring.",
          delay: 0.2,
        },
      ].map(({ Icon, title, desc, delay }, i) => (
        <motion.div
          key={i}
          {...fadeUp(delay)}
          className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition transform text-center"
        >
          {/* Icon container */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
            <Icon className="text-2xl" />
          </div>

          <h3 className="mt-6 font-semibold text-lg text-gray-900">{title}</h3>
          <p className="mt-3 text-sm text-gray-600">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


     
      {/* CTA */}
      <section className="bg-blue-600 text-white py-14 sm:py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold [text-wrap:balance]">
  Reliable Operational Support for Your Business
</h2>
<p className="mt-3 sm:mt-4 text-blue-100 text-base sm:text-lg">
  Streamlining your operations with dedicated support that keeps everything running smoothly.
</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
            <Link href="/contact" className="w-full sm:w-auto rounded-lg bg-white px-7 sm:px-8 py-3 text-base font-semibold text-blue-600 hover:bg-gray-100 transition text-center">Contact Us</Link>
            {/* <Link href="/portfolio" className="w-full sm:w-auto rounded-lg border-2 border-white px-7 sm:px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition text-center">View Portfolio</Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
