"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const bgImages = [
  "/assets/images/hero/slide-1.jpg",
  "/assets/images/hero/slide-2.jpg",
  "/assets/images/hero/slide-3.jpg",
];


// Floating items: improved positions for balance + responsive
const FLOATERS = [
  {
    id: "team",
    label: "Dedicated Team",
    title: "Our Dedicated Team",
    desc: "Collaborative, committed, and always aligned with your goals.",
    pos: "top-[18%] left-[28%] md:top-[20%] md:left-[32%]", // shifted right
    tooltip: "bottom",
  },
  {
    id: "devs",
    label: "Developers",
    title: "Expert Developers",
    desc: "Skilled across modern stacks, building scalable web & mobile apps.",
    pos: "top-[42%] left-[55%] md:top-[45%] md:left-[52%]", // moved closer to center
    tooltip: "bottom",
  },
  {
    id: "design",
    label: "Designers",
    title: "Designs That Speak",
    desc: "User-centric, visually stunning interfaces that elevate your brand.",
    pos: "bottom-[28%] left-[30%] md:bottom-[32%] md:left-[35%]", // lifted upwards
    tooltip: "top",
  },
];

export default function HeroSplitCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % bgImages.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={`${syne.className} relative text-white overflow-hidden min-h-[120vh]`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#121820]" />
        <AnimatePresence initial={false}>
          <motion.div
            key={bgImages[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[index]}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "#121820cc" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-12 py-28">
        {/* LEFT */}
        <div className="relative flex items-center justify-center">
          <div className="w-full lg:min-h-[420px] flex items-center">
            <div className="bg-black/40 rounded-2xl p-10 space-y-6 backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Driving Businesses Forward <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  IT Solutions
                </span>
              </h1>
              <p className="text-gray-100/90 text-xl leading-relaxed">
                We specialize in crafting innovative IT solutions tailored to
                your business needs. Let’s build something exceptional together.
              </p>
              <button className="px-8 py-4 rounded-full border-2 border-cyan-300 text-white font-medium hover:bg-cyan-300/20 transition">
                Let’s Talk
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[520px] md:h-[700px] lg:h-[850px]">

          <AnimatePresence initial={false}>
            <motion.div
              key={bgImages[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-3xl overflow-hidden"
            >
              <Image
                src={bgImages[index]}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(min-width: 1024px) 850px, (min-width: 768px) 700px, 520px"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* FLOATING ITEMS */}
          <div className="absolute inset-0 z-20">
            {FLOATERS.map((f, i) => {
              const showCard = hovered === f.id;
              return (
                <motion.div
                  key={f.id}
                  className={`absolute ${f.pos} flex items-center gap-3`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => setHovered(f.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ pointerEvents: "auto" }}
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-white text-white text-xl font-bold bg-black/30 backdrop-blur-sm">
                    +
                  </span>
                  <span className="text-white font-medium select-none">
                    {f.label}
                  </span>

                  {/* Tooltip card */}
                  <AnimatePresence>
                    {showCard && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: f.tooltip === "top" ? 8 : -8,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: f.tooltip === "top" ? 8 : -8,
                        }}
                        transition={{ duration: 0.25 }}
                        className={`absolute ${
                          f.tooltip === "top" ? "bottom-[140%]" : "top-[140%]"
                        } left-1/2 -translate-x-1/2 w-72 bg-white text-gray-800 rounded-xl shadow-xl p-5`}
                      >
                        <h4 className="text-lg font-semibold text-gray-900">
                          {f.title}
                        </h4>
                        <div className="h-[2px] w-12 bg-blue-500 my-2" />
                        <p className="text-sm text-gray-600">{f.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
