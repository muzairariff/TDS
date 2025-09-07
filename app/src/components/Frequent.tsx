"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Techdirect Support provide?",
    answer:
      "We offer end-to-end IT solutions including web & app development, UI/UX design, cloud services, AI solutions, and IT consultancy.",
  },
  {
    question: "How can I contact your support team?",
    answer:
      "You can reach us via our website contact form, email, or phone. Our team is available 24/7 to assist you.",
  },
  {
    question: "Do you provide custom software solutions?",
    answer:
      "Yes! We specialize in developing custom-built applications tailored to your specific business needs.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our headquarters are located globally with remote support available for clients worldwide.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`rounded-xl border transition-colors duration-300 ${
        isOpen ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-white"
      } shadow-sm`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35 }}
          className={`p-1 rounded-full ${
            isOpen ? "bg-blue-500 text-white" : "bg-gray-100 text-blue-500"
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden px-6 pb-4"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our services, support, and
            solutions. If you have more questions, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
