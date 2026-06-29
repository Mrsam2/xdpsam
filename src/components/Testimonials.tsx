"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MessageSquare, Quote, Heart } from "lucide-react";
import InteractiveButton from "@/components/InteractiveButton";

interface Testimonial {
  id: number;
  brand: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    brand: "Creme Digital",
    quote: "Excellent communication and professionalism: open to ideas, humble when views differ. We'll re-engage; can't wait for the next job together.",
    name: "Aarav Sharma",
    role: "CTO, Creme Digital",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
  },
  {
    id: 2,
    brand: "Advex AI",
    quote: "Quick to respond, very professional, and shipped a site within a week. Looking forward to the next collaboration.",
    name: "Priya Patel",
    role: "Founder / CTO, Advex AI",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
  },
  {
    id: 3,
    brand: "Moonbeam",
    quote: "The best front-end developer I've worked with. He took the requirements and ran with them. We're delighted with the product.",
    name: "Ishaan Gupta",
    role: "Founder, Moonbeam",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png",
  },
  {
    id: 4,
    brand: "Procol",
    quote: "Their subscription service is a game-changer. It gives our team top-tier design capability without the headcounts.",
    name: "Neha Reddy",
    role: "CTO, Procol",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png",
  },
  {
    id: 5,
    brand: "Kearney",
    quote: "Delivered clean code, gorgeous micro-animations, and outstanding UX advice. Worth every single penny.",
    name: "Ananya Rao",
    role: "Partner, Kearney",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png",
  },
];

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // We duplicate the list to make a seamless infinite horizontal loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [0, -100 * TESTIMONIALS.length], // Scroll exactly one full set
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, controls]);

  // Handle pagination dots linking to time-based active items
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-bg-light py-24 md:py-32 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary font-heading text-left max-w-xl">
            See Insights straight from our users
          </h2>
          <InteractiveButton label="Chat with us" avatarChar="X" className="self-start md:self-auto" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fading side gradients for premium look */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <motion.div
            animate={controls}
            className="flex gap-6 w-max"
            style={{ x: 0 }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] md:w-[380px] flex-shrink-0 bg-white border border-border-light rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Quote Bubble icon */}
                <div className="absolute top-6 right-6 text-neutral-200">
                  <Quote className="w-8 h-8 fill-current opacity-20" />
                </div>

                <div>
                  {/* Brand name */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded bg-neutral-900 flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-accent-orange fill-current" />
                    </div>
                    <span className="font-extrabold text-sm tracking-tight text-text-light-primary">
                      {item.brand}
                    </span>
                  </div>

                  {/* Quote text */}
                  <p className="text-sm md:text-base italic text-text-light-primary/90 leading-relaxed mb-8 text-left">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={`${item.name} avatar`}
                    className="w-10 h-10 rounded-full shadow-sm object-cover bg-neutral-100"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h5 className="text-sm font-bold text-text-light-primary leading-none">
                      {item.name}
                    </h5>
                    <p className="text-xs text-text-light-secondary mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              className={`h-2 rounded-full transition-all duration-350 ${
                activeDot === i ? "w-6 bg-text-light-primary" : "w-2 bg-neutral-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
