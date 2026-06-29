"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Figma, Laptop, Smartphone, Tablet, ExternalLink, Layers } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  tags: string[];
  colSpan: string;
  heightClass: string;
  renderMockup: () => React.ReactNode;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: ProjectItem[] = [
    {
      title: "AI Agentic Workflow Portal",
      category: "AI Automation",
      tags: ["PYTHON", "OPENAI"],
      colSpan: "md:col-span-4",
      heightClass: "aspect-[4/3]",
      renderMockup: () => (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src="/Project1.png" alt="AI Agentic Workflow Portal" className="w-full h-full object-cover select-none" draggable={false} />
        </div>
      ),
    },
    {
      title: "Pulse DevOps Hub",
      category: "Cloud Infrastructure",
      tags: ["TERRAFORM", "AWS"],
      colSpan: "md:col-span-2",
      heightClass: "aspect-[16/9] md:aspect-[1638/2456]",
      renderMockup: () => (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0c]">
          <video
            src="/63e2fe6ee74c888e08a8922def28f1c1_720w.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "XDP technologies SaaS CRM",
      category: "SaaS Platforms",
      tags: ["NEXT.JS", "TAILWIND"],
      colSpan: "md:col-span-4 md:row-span-2",
      heightClass: "aspect-[736/670] md:aspect-auto md:h-full",
      renderMockup: () => (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src="/Project2.jpg" alt="XDP technologies SaaS CRM" className="w-full h-full object-cover select-none" draggable={false} />
        </div>
      ),
    },
    {
      title: "Data Insights Platform",
      category: "Analytics Engine",
      tags: ["D3.JS", "TYPESCRIPT"],
      colSpan: "md:col-span-2",
      heightClass: "aspect-square",
      renderMockup: () => (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src="/Project3.png" alt="Data Insights Platform" className="w-full h-full object-cover select-none" draggable={false} />
        </div>
      ),
    },
    {
      title: "Flow Commerce Protocol",
      category: "System Architecture",
      tags: ["SVG", "WEBGL"],
      colSpan: "md:col-span-2",
      heightClass: "aspect-[720/908]",
      renderMockup: () => (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src="/Project6.jpg" alt="Flow Commerce Protocol" className="w-full h-full object-cover select-none" draggable={false} />
        </div>
      ),
    },
    // {
    //   title: "Desert Horizon Dashboard",
    //   category: "Custom SaaS Integration",
    //   tags: ["NEXT.JS", "FRAMER"],
    //   colSpan: "md:col-span-6",
    //   heightClass: "aspect-[16/9]",
    //   renderMockup: () => (
    //     <div className="absolute inset-0 w-full h-full overflow-hidden">
    //       <img src="/p5.gif" alt="Desert Horizon Dashboard" className="w-full h-full object-cover select-none" draggable={false} />
    //     </div>
    //   ),
    // },
  ];

  return (
    <section ref={ref} className="relative bg-bg-light py-24 md:py-32 border-b border-border-light overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 inset-x-0 text-center select-none pointer-events-none z-0">
        <h2 className="text-[16vw] font-extrabold text-neutral-800/[0.03] leading-none tracking-tight -translate-y-[20%] font-sans select-none">
          Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98] as any,
              }}
              className={`${proj.colSpan} ${proj.heightClass} group relative rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl transition-all duration-400`}
            >
              {/* Custom Mockup Rendering */}
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                {proj.renderMockup()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
