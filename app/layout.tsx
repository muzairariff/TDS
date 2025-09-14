// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Inter, Pacifico } from "next/font/google";
import "./globals.css";

// 👇 import for toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechDirectSupport",
  description: "We design and develop world-class digital solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${pacifico.variable}`}
    >
      <body className="bg-white text-gray-900 min-h-screen antialiased font-[var(--font-inter)]">
        {children}

        {/* 👇 Toast container (global) */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // can be "dark" or "colored"
        />
      </body>
    </html>
  );
}
