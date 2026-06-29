"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";
import InteractiveButton from "@/components/InteractiveButton";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-16 pb-12 border-t border-border-dark relative overflow-hidden bg-grid-dark">
      {/* Watermark blob glow */}
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[250px] bg-accent-orange/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Floating CTA Banner Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-neutral-950 border border-neutral-850 rounded-3xl p-8 md:p-12 mb-20 overflow-hidden group shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          {/* Subtle inner card glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Heading */}
          <div className="z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
              Explore. Develop. Prosper. <br className="hidden md:inline" />
              Engineering the Future.
            </h2>
          </div>

          {/* Circle arrow button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-10 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent-yellow active:bg-accent-yellow transition-colors group/btn shadow-xl self-start md:self-auto cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-black group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </motion.button>

          {/* Banner Watermark - drifting */}
          <div className="absolute bottom-0 inset-x-0 text-center select-none pointer-events-none translate-y-[35%] -z-10">
            <h3 className="text-[9vw] font-black text-white/[0.02] tracking-tight leading-none uppercase animate-watermark-drift">
              XDP technologies
            </h3>
          </div>
        </motion.div>

        {/* 5-Column Link Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16 border-b border-neutral-900 text-left">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/company-foundation/assets/logo v2.png" alt="XDP technologies Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-white font-bold text-base tracking-tight">XDP technologies</span>
            </a>
            <p className="text-xs text-text-dark-secondary leading-relaxed max-w-[240px]">
              Explore innovation. Develop impactful solutions. Prosper together. Building technology that empowers people worldwide.
            </p>
            <InteractiveButton label="Get started" avatarChar="X" className="mt-2" />
          </div>

          {/* Column 2: Home Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Home</h4>
            {["Overview", "Features", "Testimonials", "FAQs"].map((lnk) => (
              <a
                key={lnk}
                href={`#${lnk.toLowerCase()}`}
                className="text-xs text-text-dark-secondary hover:text-white transition-colors"
              >
                {lnk}
              </a>
            ))}
          </div>

          {/* Column 3: About Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">About</h4>
            {["Our Story", "Team", "Careers", "Blog", "Press Kit"].map((lnk) => (
              <a
                key={lnk}
                href="#"
                className="text-xs text-text-dark-secondary hover:text-white transition-colors"
              >
                {lnk}
              </a>
            ))}
          </div>

          {/* Column 4: Contact Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Contact</h4>
            {["Contact Us", "Support", "Live Chat", "Help Center", "Report Issue"].map((lnk) => (
              <a
                key={lnk}
                href="#"
                className="text-xs text-text-dark-secondary hover:text-white transition-colors"
              >
                {lnk}
              </a>
            ))}
          </div>

          {/* Column 5: Legal Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Legal</h4>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses", "Security"].map((lnk) => (
              <a
                key={lnk}
                href="#"
                className="text-xs text-text-dark-secondary hover:text-white transition-colors"
              >
                {lnk}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 text-xs text-text-dark-secondary">
          <div>© 2026 XDP technologies · All Rights Reserved</div>
          <div className="flex gap-4">
            {[
              { icon: Twitter, url: "#" },
              { icon: Linkedin, url: "#" },
              { icon: Instagram, url: "#" },
            ].map((soc, i) => {
              const Icon = soc.icon;
              return (
                <a
                  key={i}
                  href={soc.url}
                  className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
