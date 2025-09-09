"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaJava, FaPhp } from "react-icons/fa";
import { 
  SiNextdotjs, SiFlutter, SiAngular, 
  // comment these if your version doesn’t have them
   SiOpenai, 
  
  SiTailwindcss, SiTypescript, SiPrisma, SiVercel, SiPython, 
  SiHeroku
} from "react-icons/si";

const techStack = [
  { icon: FaReact, label: "React", color: "#61DBFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: FaNodeJs, label: "Node.js", color: "#68A063" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiVercel, label: "Vercel", color: "#000000" },
  { icon: SiPrisma, label: "Prisma", color: "#2D3748" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: FaJava, label: "Java", color: "#f89820" },
  { icon: FaPhp, label: "PHP", color: "#8892BF" },
  { icon: FaLaravel, label: "Laravel", color: "#FF2D20" },
  { icon: SiAngular, label: "Angular", color: "#DD0031" },
  { icon: SiFlutter, label: "Flutter", color: "#02569B" },
  
  { icon: SiHeroku, label: "Heroku", color: "#F38020" },
  { icon: SiOpenai, label: "OpenAI", color: "#10A37F" },
];

export default function TechStackSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Tech Stack</h2>
        <p className="mt-3 text-gray-600">
          We use cutting-edge tools to build scalable applications.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {techStack.map((t, i) => {
            const Icon = t.icon;
            if (!Icon) return null; // safety fallback
            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center p-5 rounded-xl bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
              >
                <Icon 
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: t.color }}
                />
                <span className="mt-3 text-sm font-medium">{t.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
