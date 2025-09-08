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

export default function HeroSplitCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % bgImages.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={`${syne.className} relative text-white overflow-hidden min-h-screen`}
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
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 lg:px-12 py-20 md:py-28">
        {/* LEFT */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl md:max-w-2xl bg-black/40 rounded-2xl p-8 md:p-10 space-y-6 backdrop-blur-sm text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Driving Businesses Forward <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                IT Solutions
              </span>
            </h1>
            <p className="text-gray-100/90 text-lg sm:text-xl leading-relaxed">
              We specialize in crafting innovative IT solutions tailored to
              your business needs. Let’s build something exceptional together.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-cyan-300 text-white font-medium hover:bg-cyan-300/20 transition">
              Let’s Talk
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
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
                sizes="(min-width: 1280px) 800px, (min-width: 1024px) 700px, (min-width: 768px) 600px, 100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
