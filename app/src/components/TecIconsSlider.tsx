"use client";

import { FaReact, FaNodeJs, FaLaravel, FaJava, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiAngular, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaJava />, label: "Java", color: "#f89820" },
  { icon: <FaPhp />, label: "PHP", color: "#8892BF" },
  { icon: <SiOpenai />, label: "OpenAI", color: "#10A37F" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
  { icon: <SiAngular />, label: "Angular", color: "#DD0031" },
  { icon: <SiFlutter />, label: "Flutter", color: "#02569B" },
  { icon: <FaLaravel />, label: "Laravel", color: "#FF2D20" },
  { icon: <FaReact />, label: "React", color: "#61DBFB" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#000000" },
];

export default function TechIconsSlider() {
  return (
    <section className="py-12 overflow-hidden">
      <motion.div
        className="flex gap-16"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <div
              className="text-6xl text-gray-400 transition-colors duration-500 group-hover:text-current"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
