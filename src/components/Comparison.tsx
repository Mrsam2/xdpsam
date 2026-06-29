"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, AlertTriangle, Compass, Activity, Sparkles, Cpu, MessageSquare, Layers, ShieldCheck, Zap } from "lucide-react";

interface ComparisonRow {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  aceternityValue: string;
  traditionalValue: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: "Approach",
    icon: Compass,
    aceternityValue: "Engineering craft & strategy in sync",
    traditionalValue: "Disconnected teams",
  },
  {
    category: "Process",
    icon: Activity,
    aceternityValue: "GitLab issues & written decision records",
    traditionalValue: "Endless calls, vague timelines",
  },
  {
    category: "Design Philosophy",
    icon: Sparkles,
    aceternityValue: "Modern, modular, and purposeful design",
    traditionalValue: "Trend-based and cluttered",
  },
  {
    category: "Development Stack",
    icon: Cpu,
    aceternityValue: "Next.js, AWS Cloud, IaC & Kubernetes",
    traditionalValue: "Outdated stacks, manually deployed",
  },
  {
    category: "Communication",
    icon: MessageSquare,
    aceternityValue: "Async-first public threads with full context",
    traditionalValue: "Multiple middlemen & fragmented emails",
  },
  {
    category: "Deliverables",
    icon: Layers,
    aceternityValue: "Production-ready, thoroughly tested code",
    traditionalValue: "Static mockups & unowned tech debt",
  },
  {
    category: "Support",
    icon: ShieldCheck,
    aceternityValue: "Long-term partnership & architectural advisory",
    traditionalValue: "One-and-done projects",
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  const popVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as any,
        stiffness: 260,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="bg-bg-light py-24 md:py-32 border-b border-border-light text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary mb-16 max-w-2xl font-heading">
          XDP technologies VS Traditional Agencies
        </h2>

        {/* Outer comparison Card */}
        <div className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Table Header (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-neutral-50 px-8 py-5 border-b border-border-light text-xs uppercase font-black tracking-widest text-text-light-secondary">
            <div className="col-span-4 flex items-center">Category</div>
            <div className="col-span-4 flex items-center text-emerald-800">✅ XDP technologies</div>
            <div className="col-span-4 flex items-center text-amber-800">⚠️ Traditional Agencies</div>
          </div>

          {/* Staggered Rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="divide-y divide-border-light"
          >
            {COMPARISON_DATA.map((row, index) => {
              const CategoryIcon = row.icon;
              return (
                <motion.div
                  key={row.category}
                  variants={rowVariants}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6 md:px-8 py-6 items-center hover:bg-neutral-50/50 transition-colors"
                >
                  {/* Category info */}
                  <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-text-light-primary text-sm md:text-base font-heading">
                      {row.category}
                    </span>
                  </div>

                  {/* Aceternity Value */}
                  <div className="col-span-1 md:col-span-4 flex items-start gap-2.5">
                    <motion.div variants={popVariants} className="mt-0.5 text-success-green flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                    </motion.div>
                    <span className="text-sm font-bold text-text-light-primary text-left">
                      {row.aceternityValue}
                    </span>
                  </div>

                  {/* Traditional Value */}
                  <div className="col-span-1 md:col-span-4 flex items-start gap-2.5">
                    <motion.div variants={popVariants} className="mt-0.5 text-warning-yellow flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 fill-amber-50" />
                    </motion.div>
                    <span className="text-sm text-text-light-secondary text-left">
                      {row.traditionalValue}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom CTA Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-8 py-6 bg-neutral-50/50 items-center">
              <div className="col-span-1 md:col-span-4 text-xs font-bold text-text-light-secondary uppercase tracking-wider">
                Ready to decide?
              </div>

              {/* Aceternity Call Action */}
              <div className="col-span-1 md:col-span-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-accent-yellow text-black font-extrabold text-xs shadow-md border border-accent-yellow hover:brightness-105 transition-all text-center"
                >
                  Book a Free Call
                </motion.button>
              </div>

              {/* Traditional Call Action */}
              <div className="col-span-1 md:col-span-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-neutral-900 text-white font-extrabold text-xs border border-neutral-800 hover:bg-black transition-all text-center"
                >
                  Book a Paid Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
