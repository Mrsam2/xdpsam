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
    brand: "EduNova",
    quote: "The XDPS Teach team transformed our vision into a modern learning platform. Their professionalism, communication, and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    role: "Founder, EduNova",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
  },
  {
    id: 2,
    brand: "Advex AI",
    quote: "Quick to respond, highly professional, and delivered a complete platform ahead of schedule. Looking forward to our next collaboration.",
    name: "Priya Patel",
    role: "Founder & CTO, Advex AI",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
  },
  {
    id: 3,
    brand: "LearnHub Academy",
    quote: "From planning to deployment, every step was smooth. Their team genuinely understands the needs of educational institutions.",
    name: "Michael Brown",
    role: "Director, LearnHub Academy",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png",
  },
  {
    id: 4,
    brand: "Future Skills Institute",
    quote: "The platform is fast, intuitive, and scalable. Students and faculty adapted to it immediately.",
    name: "Rahul Sharma",
    role: "CEO, Future Skills Institute",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png",
  },
  {
    id: 5,
    brand: "BrightPath Education",
    quote: "Excellent communication, transparent workflow, and outstanding attention to detail throughout the project.",
    name: "Emily Wilson",
    role: "Operations Manager, BrightPath Education",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png",
  },
  {
    id: 6,
    brand: "SkillForge",
    quote: "Their AI-powered solutions helped us automate repetitive tasks and improve the overall learning experience.",
    name: "David Miller",
    role: "Product Manager, SkillForge",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png",
  },
  {
    id: 7,
    brand: "Aspire College",
    quote: "The online assessment system has significantly reduced our administrative workload while improving the student experience.",
    name: "Neha Verma",
    role: "Academic Coordinator, Aspire College",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_7.png",
  },
  {
    id: 8,
    brand: "LearnSync",
    quote: "Reliable, innovative, and incredibly easy to work with. They consistently deliver high-quality software.",
    name: "James Carter",
    role: "Co-Founder, LearnSync",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png",
  },
  {
    id: 9,
    brand: "NextGen Academy",
    quote: "XDPS Teach combines technical excellence with a deep understanding of education. The final product exceeded our expectations.",
    name: "Anjali Mehta",
    role: "Director, NextGen Academy",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png",
  },
  {
    id: 10,
    brand: "Digital Campus",
    quote: "Their ability to understand our business goals and translate them into technology solutions was impressive.",
    name: "Kevin Anderson",
    role: "CEO, Digital Campus",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png",
  },
  {
    id: 11,
    brand: "TechBridge Institute",
    quote: "Students love the new learning experience. Performance tracking and analytics have become effortless.",
    name: "Sneha Kulkarni",
    role: "Training Head, TechBridge Institute",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_11.png",
  },
  {
    id: 12,
    brand: "CloudMentor",
    quote: "Highly skilled team with exceptional project management. Every milestone was delivered on time.",
    name: "Daniel Roberts",
    role: "Founder, CloudMentor",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_12.png",
  },
  {
    id: 13,
    brand: "Inspire Education",
    quote: "Professional, responsive, and committed to delivering quality. Their support after launch has been outstanding.",
    name: "Aisha Khan",
    role: "Principal, Inspire Education",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_13.png",
  },
  {
    id: 14,
    brand: "EduSphere",
    quote: "The platform is secure, scalable, and beautifully designed. A great long-term technology partner.",
    name: "Robert Wilson",
    role: "Director of Technology, EduSphere",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_14.png",
  },
  {
    id: 15,
    brand: "Smart Learning Hub",
    quote: "Their innovative approach and technical expertise helped us modernize our entire digital ecosystem.",
    name: "Vikram Singh",
    role: "Managing Director, Smart Learning Hub",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_15.png",
  },
  {
    id: 16,
    brand: "Future Minds",
    quote: "Working with XDPS Teach felt like working with an in-house team. Their dedication and commitment were exceptional.",
    name: "Olivia Martinez",
    role: "Founder, Future Minds",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_16.png",
  },
  {
    id: 17,
    brand: "KnowledgeX",
    quote: "Excellent UI, powerful backend, and seamless deployment. We couldn't have asked for a better development partner.",
    name: "Arjun Desai",
    role: "CEO, KnowledgeX",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_17.png",
  },
  {
    id: 18,
    brand: "BrightLearn",
    quote: "Their AI features have improved student engagement and simplified everyday operations.",
    name: "Sophia Green",
    role: "Learning Experience Manager, BrightLearn",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png",
  },
  {
    id: 19,
    brand: "CareerLaunch",
    quote: "Beyond software development, they truly care about creating meaningful educational impact and student success.",
    name: "Harsh Gupta",
    role: "Founder, CareerLaunch",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_19.png",
  },
  {
    id: 20,
    brand: "Global EdTech",
    quote: "Outstanding collaboration from start to finish. Their passion for innovation and education is reflected in every detail.",
    name: "Jennifer Lee",
    role: "Program Director, Global EdTech",
    avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_20.png",
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
            duration: 50,
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
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary font-heading text-left mb-6 leading-tight">
              See Insights Straight from Our Users
            </h2>
            <p className="text-text-light-secondary text-lg leading-relaxed text-left">
              Discover how XDPS Teach is helping educational institutions, businesses, and learners build smarter digital experiences. Here's what our clients and partners have to say.
            </p>
          </div>
          <InteractiveButton label="Chat with us" avatarChar="X" className="self-start md:self-auto shrink-0" />
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
