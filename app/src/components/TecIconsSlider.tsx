"use client";

import { 
  FaReact, FaNodeJs, FaLaravel, FaJava, FaPhp, FaPython, FaHtml5, FaCss3Alt, FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiFlutter, SiAngular, SiOpenai, SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiDjango 
} from "react-icons/si";
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
  { icon: <FaPython />, label: "Python", color: "#3776AB" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <SiMysql />, label: "MySQL", color: "#4479A1" },
  { icon: <FaHtml5 />, label: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#1572B6" },
  { icon: <SiTailwindcss />, label: "TailwindCSS", color: "#38BDF8" },
  { icon: <SiDjango />, label: "Django", color: "#092E20" },
  { icon: <FaGitAlt />, label: "Git", color: "#F1502F" },
];

export default function TechIconsSlider() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Outer draggable container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Inner auto-sliding row */}
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              {/* Icon */}
              <div
                className="text-6xl transition-transform duration-300 group-hover:scale-125"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              {/* Tooltip */}
              <span className="absolute -bottom-8 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
