"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InteractiveButton from "@/components/InteractiveButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = React.useRef(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.scrollTop !== undefined) {
        const currentScrollTop = target.scrollTop;

        setIsScrolled(currentScrollTop > 20);

        // Hide when scrolling down, show when scrolling up
        if (currentScrollTop > lastScrollTop.current && currentScrollTop > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        lastScrollTop.current = currentScrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full -mb-20 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full pointer-events-auto transition-colors duration-300 ${isScrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/company-foundation/assets/logo v2.png" alt="XDP technologies Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">XDP technologies</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Work", "Products", "Blog"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group py-2"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <InteractiveButton label="Contact XDP's" avatarChar="X" />
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
