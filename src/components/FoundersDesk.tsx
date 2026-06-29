"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Twitter, Linkedin, Instagram, Quote, Star, MessageSquare } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

interface TestimonialDark {
  id: number;
  brand: string;
  quote: string;
  name: string;
  role: string;
  colorClass: string;
}

const DARK_TESTIMONIALS: TestimonialDark[] = [
  {
    id: 1,
    brand: "Raycast",
    quote: "XDP technologies shipped our CI pipeline extension in a weekend. Their engineering quality is standard-setting.",
    name: "Thomas Paul",
    role: "Core Engineer, Raycast",
    colorClass: "from-red-500 to-rose-600",
  },
  {
    id: 2,
    brand: "Microsoft",
    quote: "Highly modular systems that integrated effortlessly with our Azure stack. Truly phenomenal cloud support.",
    name: "Sophia Vance",
    role: "Dev Lead, MS Teams",
    colorClass: "from-blue-500 to-sky-600",
  },
  {
    id: 3,
    brand: "Adobe",
    quote: "Clean React dashboards that integrated seamlessly with our creative cloud metadata platform.",
    name: "Marcus Aurelius",
    role: "Product Lead, Adobe",
    colorClass: "from-purple-500 to-indigo-600",
  },
  {
    id: 4,
    brand: "Linear",
    quote: "GitLab task tracking syncs in real-time meant zero friction. A premium team that coordinates efforts smoothly.",
    name: "James Kirk",
    role: "Founder, Enterprise CRM",
    colorClass: "from-amber-500 to-orange-600",
  },
];

function getBrandLogo(brand: string) {
  switch (brand.toLowerCase()) {
    case "raycast":
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z" fill="#FF6363" />
        </svg>
      );
    case "microsoft":
      return (
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" preserveAspectRatio="xMidYMid">
          <path fill="#F1511B" d="M121.666 121.666H0V0h121.666z"/>
          <path fill="#80CC28" d="M256 121.666H134.335V0H256z"/>
          <path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z"/>
          <path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z"/>
        </svg>
      );
    case "adobe":
      return (
        <svg viewBox="0 0 91 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <g clipPath="url(#clip0_906_1839_brand)">
            <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000"/>
            <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000"/>
            <path d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z" fill="#EB1000"/>
          </g>
          <defs>
            <clipPath id="clip0_906_1839_brand">
              <rect width="90.4318" height="80" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "linear":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className="w-3.5 h-3.5">
          <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"/>
        </svg>
      );
    default:
      return <MessageSquare className="w-3.5 h-3.5 text-accent-yellow" />;
  }
}

export default function FoundersDesk() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const duplicatedTestimonials = [...DARK_TESTIMONIALS, ...DARK_TESTIMONIALS, ...DARK_TESTIMONIALS];

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [-100 * DARK_TESTIMONIALS.length, 0], // Scroll in reverse direction
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section className="bg-bg-dark text-white py-24 md:py-32 border-b border-border-dark bg-grid-dark relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-accent-orange/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* H2 Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-left font-heading">
          The Founder's Desk
        </h2>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-24">
          {/* Left Column: Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[400px]"
          >
            <ProfileCard
              name="Sam"
              title="Founder & Lead Builder"
              handle="sam_xdp"
              status="Online"
              contactText="Chat with Sam"
              avatarUrl="/sam_avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const chatbotButton = document.querySelector('[aria-label="Chatbot toggle"]') || document.querySelector('.chat-btn') || document.querySelector('button');
                if (chatbotButton && (chatbotButton as HTMLElement).click) {
                  (chatbotButton as HTMLElement).click();
                } else {
                  alert("Opening Chatbot...");
                }
              }}
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(0,82,224,0.15) 0%, rgba(56,189,248,0.2) 100%)"
              behindGlowColor="rgba(56, 189, 248, 0.45)"
            />
          </motion.div>

          {/* Right Column: Bio paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-bg-dark-card border border-border-dark rounded-2xl p-8 flex flex-col justify-between shadow-xl relative"
          >
            <div>
              {/* Social links row */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-accent-yellow">Founder's Story</span>
                <div className="flex gap-2.5">
                  {[
                    { icon: Twitter, url: "https://twitter.com/manu" },
                    { icon: Linkedin, url: "https://linkedin.com" },
                    { icon: Instagram, url: "https://instagram.com" },
                  ].map((soc, i) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={i}
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:border-white transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-sm md:text-base text-text-dark-secondary text-left leading-relaxed">
                <p>
                  Hi, <strong className="text-white">I'm Sam.</strong> I founded XDP technologies to empower people and businesses worldwide by exploring innovative ideas and developing world-class digital solutions.
                </p>
                <p>
                  We treat our company itself as a product — meaning our playbooks, engineering standards, and governance policies are versioned, reviewed, and improved continuously.
                </p>
                <p>
                  Whether we are architecting multi-cloud deployments, configuring GitLab CI/CD pipelines, or deploying AI agentic workflows, our goal is the same: to help our partners <strong className="text-accent-yellow font-bold">explore, develop, and prosper.</strong>
                </p>
              </div>
            </div>

            {/* Testimonial Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-neutral-800">
              {/* Chip 1 */}
              <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs">J</div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-white">Jason Ray, CEO</div>
                  <div className="text-[10px] text-text-dark-secondary truncate">"Sam and XDP's are standard-setting!"</div>
                </div>
              </div>
              {/* Chip 2 */}
              <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">S</div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-white">Steve Wozniak</div>
                  <div className="text-[10px] text-text-dark-secondary truncate">"Robust engineering craft indeed."</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part B: What people have been saying (Dark Carousel running in reverse) */}
        <div>
          <h3 className="text-lg font-bold text-white font-heading text-left mb-8 uppercase tracking-widest text-neutral-400">
            What people have been saying
          </h3>

          <div
            className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fading side gradients */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

            {/* Scrolling Row (Right scrolling, reverse) */}
            <motion.div animate={controls} className="flex gap-6 w-max" style={{ x: -100 * DARK_TESTIMONIALS.length }}>
              {duplicatedTestimonials.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[280px] md:w-[350px] flex-shrink-0 bg-neutral-950 border border-neutral-850 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative"
                >
                  <div className="absolute top-6 right-6 text-neutral-800">
                    <Quote className="w-8 h-8 fill-current opacity-10" />
                  </div>

                  <div>
                    {/* Brand */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-neutral-900 flex items-center justify-center border border-neutral-850 overflow-hidden p-1">
                        {getBrandLogo(item.brand)}
                      </div>
                      <span className="font-extrabold text-xs tracking-tight text-white">
                        {item.brand}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs md:text-sm italic text-neutral-300 leading-relaxed mb-6 text-left">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.colorClass} text-white flex items-center justify-center font-bold text-xs shadow`}>
                      {item.name[0]}
                    </div>
                    <div className="text-left">
                      <h5 className="text-xs font-bold text-white leading-none">{item.name}</h5>
                      <p className="text-[10px] text-text-dark-secondary mt-1">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
