"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-700 border-t border-gray-200">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 relative z-10">
        {/* Logo & About */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center">
            <Image
              src="/assets/images/logo.png"
              alt="TechDirectSupport Logo"
              width={260}
              height={260}
              className="rounded-md w-32 sm:w-36 md:w-40 lg:w-44 h-auto"
            />
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0">
            We design, develop, and deliver world-class digital solutions. Helping
            businesses scale with innovative products and services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 relative inline-block">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-600 rounded"></span>
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service/operation" className="hover:text-blue-600 transition-colors">
                Operations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 relative inline-block">
            Services
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-600 rounded"></span>
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/service/webdevelopment" className="hover:text-blue-600 transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/service/mobile" className="hover:text-blue-600 transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/service/uiux" className="hover:text-blue-600 transition-colors">
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 relative inline-block">
            Connect With Us
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-600 rounded"></span>
          </h3>
<div className="flex justify-center sm:justify-start space-x-4 mb-6">
  {/* Facebook */}
  <Link
    href="https://www.facebook.com/techdirectsupport"
    target="_blank"
    className="p-3 rounded-full bg-blue-100 text-blue-600 transition transform hover:scale-110 hover:shadow-lg hover:bg-[#1877F2] hover:text-white"
  >
    <LuFacebook size={18} />
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/techdirectsupport/"
    target="_blank"
    className="p-3 rounded-full bg-pink-100 text-pink-600 transition transform hover:scale-110 hover:shadow-lg hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white"
  >
    <LuInstagram size={18} />
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://linkedin.com"
    target="_blank"
    className="p-3 rounded-full bg-blue-100 text-blue-600 transition transform hover:scale-110 hover:shadow-lg hover:bg-[#0A66C2] hover:text-white"
  >
    <LuLinkedin size={18} />
  </Link>

  {/* Twitter */}
  <Link
    href="https://twitter.com"
    target="_blank"
    className="p-3 rounded-full bg-sky-100 text-sky-600 transition transform hover:scale-110 hover:shadow-lg hover:bg-[#1DA1F2] hover:text-white"
  >
    <LuTwitter size={18} />
  </Link>
</div>


          <p className="text-sm sm:text-base text-gray-600">
            200 Gilchrist Drive, Macarthur Square, NSW 2560
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            operations@techdirectsupport.com.au
          </p>
          <p className="text-sm sm:text-base text-gray-600">0450-424-786</p>
        </div>
      </div>

      {/* Divider + Bottom Bar */}
      <div className="border-t border-gray-200 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800"> Tech Direct Support.</span> All rights reserved.
      </div>
    </footer>
  );
}
