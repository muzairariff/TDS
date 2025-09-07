    "use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  label?: string;
};

export default function TechBadge({ src, alt, label }: Props) {
  return (
    <motion.div
      className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-4 py-3"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative h-7 w-7">
        {/* grayscale → color on hover */}
        <Image src={src} alt={alt} fill className="object-contain grayscale group-hover:grayscale-0 transition" />
      </div>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </motion.div>
  );
}
