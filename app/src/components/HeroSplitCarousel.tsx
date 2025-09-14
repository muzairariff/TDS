"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const bgImages = [
  "/assets/images/hero/slide-1.jpg",
  "/assets/images/hero/slide-2.jpg",
  "/assets/images/hero/slide-3.jpg",
];



export default function HeroSplitCarousel() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % bgImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "#121820cc" }} />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-44 lg:pt-28 pb-12 md:pb-20">
        {/* LEFT */}
        <div className="flex justify-start">
          <div className="w-full max-w-xl md:max-w-2xl bg-black/40 rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 backdrop-blur-sm text-left">
            <h1
              className="font-[var(--font-montserrat)] font-extrabold tracking-tight leading-[1.05] 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-5xl"
            >
              Driving Businesses <br />
              Forward with{" "}
              <span className="font-[var(--font-pacifico)] text-cyan-300 block mt-4">
                IT Solutions
              </span>
            </h1>

            <p className="text-gray-100/90 font-[var(--font-inter)] text-base sm:text-lg md:text-xl leading-relaxed">
              From concept to launch, we design and build technology that drives real results for businesses worldwide.
            </p>
            <Link href="/contact">
              <button
                className="group flex items-center mt-5 gap-2 px-5 sm:px-8 py-3 sm:py-4
                rounded-full border-2 border-cyan-300 text-[#fff] font-medium
                text-sm sm:text-base md:text-lg transition-colors duration-200
                hover:!bg-[#36e0f7] hover:!text-white"
              >
                Let’s Build Together
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px]">
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
                sizes="(min-width: 1280px) 750px, (min-width: 1024px) 650px, (min-width: 768px) 500px, 100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          
        </div>
      </div>
    </section>
  );
}
