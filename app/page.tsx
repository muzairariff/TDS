"use client";

import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import FAQSection from "./src/components/Frequent";


import HeroSplitCarousel from "./src/components/HeroSplitCarousel";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaPlug, FaBug, FaHeadset } from "react-icons/fa";
import TechIconsSlider from "./src/components/TecIconsSlider";
import ServicesSection from "./src/components/ServiceSection";
import TestimonialCarousel from "./src/components/TestimonialCarousel";
import SkillsSection from "./src/components/SkillSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />


      <HeroSplitCarousel />
      <section>
        <TechIconsSlider />
      </section>

      <ServicesSection />
      <SkillsSection />

      <TestimonialCarousel />
      <FAQSection />


      <Footer />
    </main>
  );
}
