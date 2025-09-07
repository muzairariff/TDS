"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    rating: 4.5,
    review:
      "Techdirect Support transformed our IT infrastructure. Their professionalism and expertise gave us confidence to scale quickly.",
    author: "Sarah Johnson",
    role: "CEO, BrightTech",
    verified: true,
  },
  {
    rating: 4.0,
    review:
      "Working with Techdirect Support has been a game-changer. Their team is reliable, responsive, and truly understands business needs.",
    author: "Michael Smith",
    role: "CTO, InnovateX",
    verified: true,
  },
  {
    rating: 4.5,
    review:
      "The level of dedication and quality delivered by Techdirect Support is unmatched. I highly recommend them.",
    author: "Emily Carter",
    role: "Founder, NextWave",
    verified: true,
  },
];

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center justify-center gap-1 text-yellow-400">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStar className="opacity-50" />}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-sm font-semibold tracking-[4px] uppercase text-blue-600 mb-2">
          Client Testimonials
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          What Our <span className="text-blue-600">Clients Say</span>
        </h3>

        {/* Slider */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute -top-5 left-8 text-4xl text-blue-100" />

              <Stars rating={testimonials[index].rating} />

              <p className="mt-6 text-lg leading-relaxed text-gray-700 italic">
                “{testimonials[index].review}”
              </p>

              <div className="mt-8">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[index].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
                {testimonials[index].verified && (
                  <p className="mt-2 text-xs text-green-600 font-medium">
                    ✔ Verified Client
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition ${
                  index === i ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
