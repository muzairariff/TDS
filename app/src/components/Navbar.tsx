"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileCollapsibles, setMobileCollapsibles] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // ——— Scroll handling ———
  useEffect(() => {
    const el = (document.scrollingElement || document.documentElement) as HTMLElement;

    const readTop = () =>
      typeof window !== "undefined"
        ? (el?.scrollTop ?? 0) || window.scrollY || 0
        : 0;

    const onScroll = () => setScrolled(readTop() > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Close menus on outside click & Esc
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const navItems: Array<
    | { type: "link"; label: string; href: string }
    | { type: "menu"; id: string; label: string; items: { label: string; href: string }[] }
  > = [
    { type: "link", label: "Home", href: "/" },
    {
      type: "menu",
      id: "services",
      label: "Services",
      items: [
        { label: "Web Development", href: "/service/webdevelopment" },
        { label: "Operations", href: "/service/operation" },
        { label: "Mobile App Development", href: "/service/mobile" },
        { label: "UI/UX Design", href: "/service/uiux" },
      ],
    },
    {
      type: "menu",
      id: "company",
      label: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const solid = scrolled || !onHome;
  const navBg = !solid
    ? "bg-transparent"
    : "bg-white border-b border-gray-200 shadow-sm";

  const linkBase =
    "relative px-3 py-2 text-sm md:text-base font-medium rounded-xl transition focus:outline-none focus-visible:ring-2";
  const linkColors = solid
    ? "text-gray-800 hover:text-primary focus-visible:ring-primary"
    : "text-white hover:text-white/85 focus-visible:ring-white/70";

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="Company Logo"
              width={140}
              height={60}
              priority
              className={solid ? "" : "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${linkBase} ${linkColors} ${
                      isActive(item.href) ? (solid ? "text-primary" : "text-white") : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              const open = openMenu === item.id;
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setOpenMenu(open ? null : item.id)}
                    aria-haspopup="menu"
                    aria-expanded={open}
                    className={`${linkBase} ${linkColors} inline-flex items-center gap-1`}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`absolute top-full left-0 z-50 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl transition ${
                      open
                        ? "pointer-events-auto opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 -translate-y-1"
                    }`}
                    role="menu"
                  >
                    <div className="flex flex-col p-1">
                      {item.items.map((i) => (
                        <Link
                          key={i.label}
                          href={i.href}
                          className="rounded-lg px-3 py-2 text-sm md:text-base text-gray-700 hover:bg-primary/5"
                          onClick={() => setOpenMenu(null)}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-sm md:text-base font-semibold text-white transition hover:bg-accent"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                solid ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        />
        {/* Drawer */}
        <aside
          className={`fixed right-0 top-0 h-full w-[85%] max-w-xs transform bg-white p-6 shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/assets/images/logo.png" alt="Company Logo" width={140} height={40} priority />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="mt-6 space-y-2">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              const openCol = !!mobileCollapsibles[item.id];
              return (
                <div key={item.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setMobileCollapsibles((s) => ({ ...s, [item.id]: !s[item.id] }))}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-gray-800"
                  >
                    {item.label}
                    <svg className={`h-4 w-4 transition-transform ${openCol ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openCol ? "max-h-40" : "max-h-0"}`}>
                    <div className="space-y-1 p-2">
                      {item.items.map((i) => (
                        <Link
                          key={i.label}
                          href={i.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-primary/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/contact"
              className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-accent"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>

          <div className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} TDS. All rights reserved.
          </div>
        </aside>
      </div>
    </div>
  );
}
