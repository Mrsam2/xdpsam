"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Maximize2, Search, Globe, CloudLightning, ArrowUpRight, Cloud, Server, Shield, Database } from "lucide-react";
import { Map } from "@/components/ui/map";

// Custom map visuals for multi-cloud deployments

const CardCornerIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      strokeWidth="1.5"
      stroke="currentColor"
      className={`text-neutral-400 size-6 absolute transition-transform duration-500 group-hover:rotate-90 pointer-events-none ${className}`}
    >
      <title>Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const CardCornerIcons = () => (
  <>
    <CardCornerIcon className="-top-3 -left-3" />
    <CardCornerIcon className="-top-3 -right-3" />
    <CardCornerIcon className="-bottom-3 -left-3" />
    <CardCornerIcon className="-bottom-3 -right-3" />
  </>
);

interface CircuitNode {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: React.ReactNode;
}

interface CircuitConnection {
  from: string;
  to: string;
  animated?: boolean;
}

interface CircuitBoardProps {
  nodes: CircuitNode[];
  connections: CircuitConnection[];
  width: number;
  height: number;
}

function getCircuitPath(ax: number, ay: number, bx: number, by: number): string {
  const dx = bx - ax;
  const dy = Math.abs(by - ay);
  if (dy === 0) {
    return `M ${ax} ${ay} L ${bx} ${by}`;
  }
  if (dx > dy) {
    const startX = ax + (dx - dy) / 2;
    const endX = startX + dy;
    return `M ${ax} ${ay} L ${startX} ${ay} L ${endX} ${by} L ${bx} ${by}`;
  }
  const midX = (ax + bx) / 2;
  return `M ${ax} ${ay} L ${midX} ${ay} L ${midX} ${by} L ${bx} ${by}`;
}

const CircuitBoard = ({ nodes, connections, width, height }: CircuitBoardProps) => {
  return (
    <div className="w-full relative overflow-visible flex items-center justify-center p-2 select-none">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto max-h-[160px] overflow-visible"
        fill="none"
      >
        {/* Connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const pathD = getCircuitPath(fromNode.x, fromNode.y, toNode.x, toNode.y);

          return (
            <g key={`${conn.from}-${conn.to}-${idx}`}>
              {/* Background trace line */}
              <path
                d={pathD}
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Secondary trace glow */}
              <path
                d={pathD}
                stroke="#fdba74"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />
              {/* Animated pulse flow */}
              {conn.animated && (
                <motion.path
                  d={pathD}
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{
                    ease: "linear",
                    duration: 2.2,
                    repeat: Infinity,
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Soft background glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill="#fff"
              stroke="#fed7aa"
              strokeWidth="1.5"
            />
            {/* Pulse ring for active nodes */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="25"
              stroke="#ffedd5"
              strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <foreignObject
              x={node.x - 14}
              y={node.y - 14}
              width="28"
              height="28"
              className="overflow-visible"
            >
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-accent-orange shadow-xs border border-orange-100 hover:scale-110 transition-transform duration-300">
                {node.icon}
              </div>
            </foreignObject>
            <text
              x={node.x}
              y={node.y + 36}
              textAnchor="middle"
              className="text-[9px] font-extrabold uppercase tracking-wider fill-neutral-400 font-sans"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

const SlackIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.304 15.165a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.043z" fill="#E01E5A" />
    <path d="M8.824 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zM8.824 6.304a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.782a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.52h5.042z" fill="#36C5F0" />
    <path d="M18.958 8.824a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zM17.696 8.824a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.042z" fill="#2EB67D" />
    <path d="M15.176 18.958a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zM15.176 17.696a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.042a2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-5.042z" fill="#ECB22E" />
  </svg>
);

const notificationCardsData = [
  { id: 1, text: "Revision Completed" },
  { id: 2, text: "Design Finalized" },
  { id: 3, text: "Deploy: Production Cloud Hub" },
];

const stackVariants = {
  front: {
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 20,
    transition: { duration: 0.6, ease: "easeInOut" as any }
  },
  middle: {
    y: -12,
    scale: 0.95,
    opacity: 0.8,
    zIndex: 10,
    transition: { duration: 0.6, ease: "easeInOut" as any }
  },
  back: {
    y: [0, 45, -24],
    scale: [1, 0.92, 0.9],
    opacity: [1, 0.1, 0.4],
    zIndex: 0,
    transition: {
      duration: 0.65,
      times: [0, 0.45, 1],
      ease: "easeInOut" as any
    }
  }
};

export default function BentoGrid() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);


  // Card 2 Notifications Loops
  const [activeId, setActiveId] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Card 5 Circuit Path drawing
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" as any },
    },
  };

  // Staggered Container Animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as any },
    },
  };

  return (
    <section ref={ref} className="bg-bg-light py-24 md:py-32 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* H2 Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary mb-16 text-left max-w-2xl font-heading">
          Our Core Capabilities
        </h2>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[220px]"
        >
          {/* Card 1: Design & Development (Spans col 1, row 1-2) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#171717] to-black border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-black/25 relative group"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.06] pointer-events-none rounded-2xl" />

            {/* Mock browser Window UI */}
            <div className="w-full bg-[#f3f4f6] rounded-xl border border-neutral-200 p-2.5 mb-6 flex flex-col gap-2.5 shadow-sm relative z-10">
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                {/* Address bar */}
                <div className="w-1/2 h-3.5 bg-white rounded border border-neutral-200 flex items-center justify-center">
                  <div className="w-1/3 h-[2px] bg-neutral-100 rounded-full" />
                </div>
                {/* Right items */}
                <div className="flex gap-0.5 items-center">
                  <div className="w-3 h-0.5 bg-neutral-300 rounded-sm" />
                  <div className="w-3 h-0.5 bg-neutral-300 rounded-sm" />
                  <div className="w-3 h-0.5 bg-neutral-300 rounded-sm" />
                </div>
              </div>

              {/* Browser Body (White canvas) */}
              <div className="flex-grow bg-white border border-neutral-200/60 rounded-lg p-3 flex flex-col gap-2 relative min-h-[140px] justify-center">
                {/* Layout placeholders */}
                <div className="space-y-1.5">
                  <div className="h-1.5 w-1/4 bg-neutral-200 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-neutral-200 rounded-full" />
                </div>

                {/* Picture box placeholder */}
                <div className="flex-grow h-28 w-full bg-[#f9fafb] border border-neutral-200 rounded flex items-center justify-center relative">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-neutral-400/80"
                  >
                    {/* Focus / Crosshair Scan Corners */}
                    <path d="M 5 9 L 5 5 L 9 5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 15 5 L 19 5 L 19 9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 5 15 L 5 19 L 9 19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 15 19 L 19 19 L 19 15" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Center dot */}
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Design and Development
              </h3>
              <p className="text-sm text-text-dark-secondary mb-4 leading-relaxed">
                Designed to perfection, Aceternity helps you take your dream idea to reality through our expert design and development services.
              </p>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800 bg-[#0a0a0a] text-white hover:bg-neutral-900 transition-colors text-sm w-fit">
                <div className="w-6 h-6 rounded bg-accent-yellow flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-[2px]">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="w-[1.5px] h-[1.5px] rounded-full bg-white" />
                    ))}
                  </div>
                </div>
                <span className="font-semibold text-xs text-white">View pricing</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Regular Updates (col 2, row 1) */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-1 bg-white border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group h-[220px]"
          >
            {/* Diagonal Fade Grid Background - Top Right */}
            <div
              className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #d1d5db 1px, transparent 1px),
                  linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              }}
            />

            {/* Title */}
            <div className="relative z-10 pointer-events-none select-none">
              <h3 className="text-base font-bold text-text-light-primary font-heading leading-tight">
                Regular updates and progress tracking
              </h3>
            </div>

            {/* Donut Chart (Centered background) */}
            <div className="absolute top-[26%] left-1/2 -translate-x-1/2 opacity-[0.9] pointer-events-none select-none z-0">
              <svg className="w-28 h-28" viewBox="0 0 100 100">
                {/* Left Beige Segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#eae5d9"
                  strokeWidth="14"
                  strokeDasharray="83 226"
                  strokeDashoffset="96"
                  style={{ transformOrigin: "center" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                {/* Top Light-Grey Segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#f4f4f6"
                  strokeWidth="14"
                  strokeDasharray="30 226"
                  strokeDashoffset="9"
                  style={{ transformOrigin: "center" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                />
                {/* Right Beige Segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#eae5d9"
                  strokeWidth="14"
                  strokeDasharray="52 226"
                  strokeDashoffset="-22"
                  style={{ transformOrigin: "center" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* Stacked Notifications (At the bottom) */}
            <div className="relative w-full h-[85px] mt-auto flex justify-center items-end z-10 pointer-events-auto">
              {notificationCardsData.map((card, i) => {
                const position = (i - activeId + 3) % 3;

                let variantName = "back";
                if (position === 0) variantName = "front";
                if (position === 1) variantName = "middle";

                return (
                  <motion.div
                    key={card.id}
                    initial={false}
                    animate={variantName}
                    variants={stackVariants}
                    style={{ position: "absolute", width: "100%", transformOrigin: "bottom center" }}
                    className="bg-white border border-neutral-200 rounded-xl p-3 shadow-md flex flex-col gap-1"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono tracking-tight text-neutral-400">notification</span>
                      <SlackIcon />
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-800 leading-tight">
                      {card.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 3: Hosting, Deployment & Maintenance (col 3, row 1) - Dark */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-[#0b0b0c] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-lg transition-shadow relative group h-[220px]"
          >
            {/* Interactive Map Visual as Background */}
            <div className="absolute inset-0 z-0 pointer-events-auto">
              <Map />
            </div>

            <div className="relative z-10 pointer-events-none select-none">
              <h3 className="text-base font-bold text-white font-heading">
                Hosting, Deployment & Maintenance
              </h3>
              <p className="text-xs text-text-dark-secondary mt-1">Global scaling architecture</p>
            </div>
          </motion.div>

          {/* Card 4: Get found on Google (col 2, row 2) */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-white border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group h-[220px]"
          >
            {/* Background Grid of Rounded Squares */}
            <div className="absolute inset-0 z-0 grid grid-cols-6 gap-2.5 p-5 opacity-[0.35] pointer-events-none select-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-neutral-200/40 rounded-lg aspect-square bg-[#fafafa]/50" />
              ))}
            </div>

            {/* Title */}
            <div className="relative z-10 pointer-events-none select-none">
              <h3 className="text-base font-bold text-text-light-primary font-heading leading-none">
                Get found on Google
              </h3>
            </div>

            {/* Google Search Mockup Container */}
            <div className="relative z-10 mt-auto flex flex-col gap-2 pointer-events-auto">
              {/* Search Bar */}
              <div className="flex items-center justify-between bg-white border border-neutral-200/80 rounded-full px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="flex items-center flex-1 min-w-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-2 shrink-0">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-[10px] text-neutral-500 truncate">Best GTM tools for business operations</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 shrink-0">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </div>

              {/* Stacked Results */}
              <div className="relative w-full h-[88px] flex justify-center items-start">
                {/* Back Card */}
                <div className="absolute w-[92%] h-[80px] bg-white/70 border border-neutral-200/40 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] translate-y-4 scale-92 z-0" />

                {/* Middle Card */}
                <div className="absolute w-[96%] h-[80px] bg-white/90 border border-neutral-200/60 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.02)] translate-y-2 scale-96 z-10" />

                {/* Front Card */}
                <div className="absolute w-full bg-white border border-neutral-200/90 rounded-xl p-2.5 shadow-md z-20 flex flex-col gap-1.5 animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#1b5dfc] flex items-center justify-center text-white shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] font-bold text-neutral-800 leading-none">abce.io</span>
                      <span className="text-[7px] text-neutral-400 mt-0.5 truncate">www.abce.io &gt; outbound &gt; sales</span>
                    </div>
                  </div>

                  <div className="text-[9px] font-bold text-neutral-800 leading-none">
                    All in one outbound platform
                  </div>

                  {/* Shimmer skeleton lines */}
                  <div className="space-y-1 mt-0.5">
                    <div className="h-1 w-11/12 bg-neutral-100 rounded-full" />
                    <div className="h-1 w-2/3 bg-neutral-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Components, Dashboards and Everything else (col 3, row 2) */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-1 bg-white border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group h-[220px]"
          >
            <div>
              <h3 className="text-base font-bold text-text-light-primary font-heading leading-tight">
                Components, Dashboards and Everything else
              </h3>
            </div>

            {/* Circuit Paths + Board */}
            <div className="relative w-full h-[110px] mt-auto overflow-visible pointer-events-none select-none">
              {/* Circuit Lines SVG */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 320 110" fill="none">
                {/* Left Horizontal Lines with bends */}
                <path d="M 0 55 L 120 55 L 135 70 L 200 70" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 0 67 L 110 67 L 125 82 L 200 82" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 0 79 L 100 79 L 115 94 L 200 94" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 0 91 L 90 91 L 105 106 L 200 106" stroke="#e4e4e7" strokeWidth="1.5" />

                {/* Top Vertical Lines with bends */}
                <path d="M 220 0 L 220 20 L 235 35 L 235 50" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 232 0 L 232 15 L 247 30 L 247 50" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 244 0 L 244 10 L 259 25 L 259 50" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 256 0 L 256 5 L 271 20 L 271 50" stroke="#e4e4e7" strokeWidth="1.5" />
                <path d="M 268 0 L 268 0 L 283 15 L 283 50" stroke="#e4e4e7" strokeWidth="1.5" />
              </svg>

              {/* Chip (Salmon/Orange Rounded Square) */}
              <div className="absolute right-4 bottom-2 w-16 h-16 bg-[#ffab76] rounded-[20px] shadow-[0_8px_24px_rgba(255,171,118,0.45)] border-[3px] border-white z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
