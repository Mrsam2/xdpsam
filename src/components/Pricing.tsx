"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Layers, MessageSquare, Check, HelpCircle, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Value-Driven Pricing",
      desc: "We price on value delivered, not hours burned, ensuring maximum ROI on your budget.",
    },
    {
      icon: Layers,
      title: "Sustainable Pace & Quality",
      desc: "Top-tier senior developers executing on well-defined scopes and modular architectures.",
    },
    {
      icon: MessageSquare,
      title: "Async Collaboration",
      desc: "Review design documents, codebase changes, and decision records on your schedule.",
    },
  ];

  const plan1Features = [
    "Time & Materials Model",
    "Flexible Scope & Discovery",
    "Weekly Sprint Reviews",
    "Modern Stack Engineering",
    "GitLab Repository Access",
    "Cloud Monolithic Architecture",
  ];

  const plan2Features = [
    "Fixed Price or Retainer Plan",
    "Defined Scope & Milestones",
    "Comprehensive Documentation",
    "CI/CD GitLab Pipelines",
    "Observability & Logs Setup",
    "Advanced Performance Auditing",
    "Dedicated Slack Coordination",
    "Priority Support Channels",
  ];

  const plan3Features = [
    "Enterprise SaaS / Platform",
    "Complex Database Architecture",
    "Custom AI Agent Workflows",
    "Multi-cloud Setup (AWS/GCP)",
    "Comprehensive Security Audit",
    "Load Testing & Quality Assurance",
    "Architectural Advisory Meetings",
    "24/7 Incident On-Call SLA",
    "Post-Launch Premium Support",
    "RAPID-lite Decision Alignment",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as any },
    },
  };

  return (
    <section ref={ref} className="bg-bg-light py-24 md:py-32 border-b border-border-light text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Part A: 3-Up Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white border border-border-light rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center mb-6 text-accent-orange">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-light-primary font-heading mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-text-light-secondary leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Part B: Pricing Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary font-heading">
              Extensive Pricing Plans
            </h2>
          </div>
          <div className="text-sm text-text-light-secondary font-medium leading-relaxed max-w-md lg:text-right">
            Doubts? Reach out to us at{" "}
            <a href="mailto:contact@xdptechnologies.dev" className="text-accent-orange underline font-semibold">
              contact@xdptechnologies.dev
            </a>{" "}
            or{" "}
            <span className="text-accent-orange underline font-semibold cursor-pointer">
              chat with us
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Card 1: Components (Light, col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 bg-white border border-border-light rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-light-secondary">
                  Discovery & MVP
                </span>
                <span className="text-[10px] font-extrabold bg-neutral-100 text-neutral-500 border border-neutral-200 px-2.5 py-1 rounded-full">
                  Booking for next sprint
                </span>
              </div>

              <h3 className="text-2xl font-bold text-text-light-primary font-heading mb-1">
                Time & Materials
              </h3>
              <p className="text-xs text-text-light-secondary mb-6">Flexible scope, rapid prototyping, and discovery phases.</p>

              <div className="text-4xl font-black text-text-light-primary mb-6 font-heading">
                $4,995<span className="text-sm font-semibold text-text-light-secondary">/mo</span>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 border-t border-neutral-100 pt-6">
                {plan1Features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs font-semibold text-text-light-primary">
                    <Check className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-100 pt-6">
              <button className="flex-1 py-3 rounded-xl bg-accent-yellow text-black font-extrabold text-xs shadow-md border border-accent-yellow hover:brightness-105 active:scale-98 transition-all text-center cursor-pointer">
                Select Plan
              </button>
              {/* Mini Client Review */}
              <div className="flex items-center gap-2.5 sm:max-w-[180px]">
                <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                  J
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-bold text-text-light-primary">Jason Ray, CEO</div>
                  <div className="text-[9px] text-text-light-secondary italic">"XDP's shipped our MVP in a single sprint!"</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Website Pages (Dark variant, col-span-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 bg-bg-dark-card border border-accent-orange/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl hover:shadow-accent-orange/5 transition-shadow relative"
          >
            {/* Glowing active glow ring */}
            <div className="absolute inset-0 border border-accent-orange/15 rounded-2xl pointer-events-none -z-10 blur-sm" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-orange">
                  Popular Plan
                </span>
                <span className="text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded-full">
                  1 Slot Available
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading mb-1">
                Fixed Price & Retainer
              </h3>
              <p className="text-xs text-text-dark-secondary mb-6">Defined roadmap, persistent deliverables, and continuous scaling.</p>

              <div className="text-4xl font-black text-white mb-6 font-heading">
                $6,995<span className="text-sm font-semibold text-text-dark-secondary">/mo</span>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 border-t border-neutral-800 pt-6">
                {plan2Features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Check className="w-3.5 h-3.5 text-accent-yellow flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800 pt-6">
              <button className="flex-1 py-3 rounded-xl bg-accent-orange text-white font-extrabold text-xs shadow-lg border border-accent-orange hover:bg-orange-700 active:scale-98 transition-all text-center cursor-pointer">
                Select Plan
              </button>
              {/* Mini Client Review */}
              <div className="flex items-center gap-2.5 sm:max-w-[180px]">
                <div className="w-8 h-8 rounded-full bg-accent-yellow text-black flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                  S
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-bold text-white">Steve Wozniak, CTO</div>
                  <div className="text-[9px] text-text-dark-secondary italic">"XDP's's engineering is robust and clean."</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 3: Multi Pages (Full width underneath) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          whileHover={{ y: -4 }}
          className="bg-white border border-border-light rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-light-secondary">
                Enterprise
              </span>
              <span className="text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded border border-neutral-250">
                Custom quotes available
              </span>
            </div>

            <h3 className="text-2xl font-bold text-text-light-primary font-heading mb-1">
              Enterprise SaaS & Platforms
            </h3>
            <p className="text-xs text-text-light-secondary mb-6">Bespoke software platforms, databases, and custom AI agents.</p>

            {/* Feature Checklist (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 border-t border-neutral-100 pt-6">
              {plan3Features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs font-semibold text-text-light-primary">
                  <Check className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Right Block */}
          <div className="md:w-[240px] flex-shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-neutral-100 pt-6 md:pt-0 md:pl-8">
            <div className="text-4xl font-black text-text-light-primary mb-2 font-heading text-left">
              $12,499<span className="text-xs font-medium text-text-light-secondary">/mo</span>
            </div>
            <p className="text-[10px] text-text-light-secondary mb-4 text-left">Flat monthly subscription, cancel anytime.</p>
            <button className="w-full py-3 rounded-xl bg-neutral-900 text-white font-extrabold text-xs hover:bg-black active:scale-98 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer">
              <span>Select Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
