"use client";

import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";

// Icons
import { FaUsers, FaLaptopCode, FaUniversalAccess, FaPalette, FaSitemap, FaBookOpen, FaCheckCircle, FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";
import { SiFigma, SiSketch, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiStorybook, SiNotion } from "react-icons/si";
import type { IconType } from "react-icons";

// Motion utility
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
});

export default function UIDesignPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* HERO (text left, image right) */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
      {/* Left */}
      <motion.div {...fadeUp(0)} className="order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight [text-wrap:balance]">
          Human-Centered <span className="text-blue-600">UI/UX</span> That Drives Results
        </h1>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
          We create human-centered designs that are visually stunning, intuitive, and optimized for real-world performance.
        </p>
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold transition shadow-lg hover:shadow-blue-200 text-center"
          >
            Start Your Project
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition text-center"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-2 relative rounded-xl overflow-hidden mx-auto w-full max-w-2xl
                   h-[260px] sm:h-[340px] md:h-[440px] lg:h-[500px]"
      >
        {/* If you already use next/image on this page, you can swap <img> with <Image> */}
        <img
          src="/assets/images/uiux-hero.png"
          alt="UI/UX Design"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
        />
      </motion.div>
    </div>
  </div>
</section>


      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our UI/UX Design Services?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We focus on creating meaningful, interactive, and user-first experiences.</p>
          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎯", title: "User-Centered Design", desc: "We design with real users in mind, ensuring maximum usability." },
              { icon: "✨", title: "Modern Visuals", desc: "Aesthetic and consistent design systems that elevate your brand." },
              { icon: "🤝", title: "Collaboration", desc: "We work closely with stakeholders for perfect alignment." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)} className="p-6 sm:p-8 rounded-lg bg-white shadow hover:shadow-md transition text-center">
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
                <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN TOOLS */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Design Tools We Use</h2>
          <p className="mt-3 text-gray-600">We master the industry’s most powerful tools to deliver top-class designs.</p>
          <div className="mt-12 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10">
            {[
              { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
              { Icon: SiSketch, label: "Sketch", color: "#F7B500" },
              { Icon: SiAdobexd, label: "Adobe XD", color: "#FF61F6" },
              { Icon: SiAdobephotoshop, label: "Photoshop", color: "#31A8FF" },
              { Icon: SiAdobeillustrator, label: "Illustrator", color: "#FF9A00" },
            ].map((tool, i) => (
              <motion.div key={tool.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.12 }} className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition cursor-pointer">
                <tool.Icon className="h-10 w-10 sm:h-12 sm:w-12" style={{ color: tool.color }} />
                <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium">{tool.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — UX PRINCIPLES */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core UX Principles</h2>
            <p className="mt-3 text-gray-600">Foundational beliefs that shape every interface we craft.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { Icon: FaUniversalAccess, title: "Accessibility", desc: "Color contrast, keyboard navigation, and screen-reader semantics." },
              { Icon: FaPalette, title: "Consistency", desc: "Design tokens & components ensure predictable, delightful UI." },
              { Icon: FaSitemap, title: "Information Architecture", desc: "Clear hierarchy and flows reduce cognitive load." },
              { Icon: FaBookOpen, title: "Guided Learning", desc: "Empty states & microcopy help users succeed faster." },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)} className="p-6 sm:p-7 bg-white rounded-2xl shadow border border-gray-100">
                <p.Icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Design Process</h2>
          <p className="mt-3 text-gray-600">A structured and transparent workflow ensures beautiful and usable results.</p>
          <div className="mt-12 md:mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 relative z-10">
              {[
                { icon: SiFigma as IconType, title: "Research", color: "#F24E1E" },
                { icon: SiSketch as IconType, title: "Wireframes", color: "#F7B500" },
                { icon: SiAdobexd as IconType, title: "UI Design", color: "#FF61F6" },
                { icon: FaUsers as IconType, title: "Testing", color: "#2563EB" },
                { icon: FaLaptopCode as IconType, title: "Handoff", color: "#16A34A" },
              ].map((step, i) => (
                <motion.div key={step.title} {...fadeUp(i * 0.15)} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-md" style={{ background: `${step.color}22` }}>
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: step.color }} />
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW — DELIVERABLES */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What You Get</h2>
            <p className="mt-3 text-gray-600">Clear, production-ready outputs at each milestone.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Research Pack",
                items: ["Personas", "Journey Maps", "Competitive Analysis"],
              },
              {
                title: "Design System",
                items: ["Tokens", "Components", "Patterns (Storybook)"],
              },
              {
                title: "Handoff Kit",
                items: ["Specs in Figma", "Clickable Prototypes", "Notion Docs"],
              },
            ].map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.1)} className="p-6 sm:p-7 bg-white rounded-2xl shadow border border-gray-100">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {card.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3 text-gray-500">
                  <SiStorybook className="h-5 w-5" />
                  <SiFigma className="h-5 w-5" />
                  <SiNotion className="h-5 w-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <p className="mt-3 text-gray-600">A showcase of our most impactful UI/UX projects.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {["uiux1.jpg", "uiux2.jpg", "uiux3.jpg"].map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative w-full aspect-[4/3]">
                  <img src={`/assets/images/${img}`} alt="UI/UX Project" className="absolute inset-0 w-full h-full object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — TESTIMONIALS */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { name: "Sarah K.", role: "Product Lead", quote: "They turned messy requirements into a clean, scalable design system that shipped on time." },
              { name: "Ahmed R.", role: "Founder", quote: "User testing insights were spot on—our conversion rate jumped within two weeks." },
            ].map((t, i) => (
              <motion.figure key={t.name} {...fadeUp(i * 0.1)} className="p-6 sm:p-7 bg-white rounded-2xl shadow border border-gray-100">
                <FaQuoteLeft className="h-6 w-6 text-blue-600" />
                <blockquote className="mt-3 text-gray-700">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">{t.name} — {t.role}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — FAQ */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">FAQs</h2>
          <div className="mt-8 divide-y divide-gray-200">
            {[
              { q: "How long does a typical UI/UX project take?", a: "Small MVPs: 2–4 weeks. Full product revamps: 6–12 weeks depending on scope and rounds of testing." },
              { q: "Do you handoff assets to developers?", a: "Yes. We provide Figma specs, redlines, tokens, Storybook-ready components, and Notion docs." },
              { q: "Can you work with our existing design system?", a: "Absolutely—either extend your system or help refactor it with minimal disruption." },
            ].map((f, i) => (
              <motion.div key={f.q} {...fadeUp(i * 0.05)} className="py-5">
                <div className="flex items-start gap-3">
                  <FaQuestionCircle className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">{f.q}</h3>
                    <p className="mt-1 text-gray-600 text-sm sm:text-base">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-14 sm:py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold [text-wrap:balance]">Let’s Design an Exceptional Experience</h2>
          <p className="mt-3 sm:mt-4 text-blue-100 text-base sm:text-lg">Transform your ideas into user experiences people love.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
            <Link href="/contact" className="w-full sm:w-auto rounded-lg bg-white px-7 sm:px-8 py-3 text-base font-semibold text-blue-600 hover:bg-gray-100 transition text-center">Contact Us</Link>
            <Link href="/portfolio" className="w-full sm:w-auto rounded-lg border-2 border-white px-7 sm:px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition text-center">View Portfolio</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
