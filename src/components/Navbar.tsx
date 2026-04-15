"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Rules", href: "#rules" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ocean-950/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-ocean-700/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center font-[family-name:var(--font-display)] text-ocean-950 text-2xl tracking-tight transition-transform group-hover:scale-110">
              ST
            </div>
            <div className="absolute -inset-1 rounded-lg bg-gold-500/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-[family-name:var(--font-display)] text-xl tracking-wider text-white hidden sm:block">
            SOCIALTANK
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold-500 transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
          <span className="ml-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-5 py-2.5 text-sm font-bold text-rose-200">
            Registrations Closed
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-ocean-700/30 bg-ocean-950/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-ocean-800/50 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <span className="mt-2 block rounded-lg border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-center text-sm font-bold text-rose-200">
            Registrations Closed
          </span>
        </div>
      </div>
    </nav>
  );
}
