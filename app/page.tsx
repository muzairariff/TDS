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
      {/* NAVBAR */}
      <Navbar />

      {/* HERO (sync split carousel: left text + right image) */}
      <HeroSplitCarousel />
<section>
  <TechIconsSlider />
</section>
      {/* SERVICES */}
     <ServicesSection />
     <SkillsSection />
<TestimonialCarousel />
<FAQSection />

      {/* (Optional) FOOTER */}
      {/* <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer> */}
      <Footer />
    </main>
  );
}
