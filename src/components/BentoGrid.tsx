"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { BentoGrids01, type BentoGrids01Props } from "./bento-grids-01";

const coreCapabilitiesValues: BentoGrids01Props = {
  primary: {
    title: "Building Technology. Creating Careers. Empowering the Next Generation.",
    description:
      "At XDPS Teach, we go beyond software development. We build innovative educational platforms, empower institutions with digital transformation, and create real-world internship and career opportunities that help students become industry-ready.",
    cta: {
      ctaEnabled: true,
      text: "Explore Our Solutions",
      link: "#",
      variant: "default",
      size: "sm",
    },
    media: {
      title: "Tech Education Collaboration",
      src: "https://i.pinimg.com/736x/c0/33/c0/c033c0ac8273b0e2c25e7228d3fcecb8.jpg",
    },
  },
  items: [
    {
      title: "Education Technology Solutions",
      description: "We design and develop modern learning platforms, assessment systems, and digital tools that enhance teaching, learning, and institutional management.",
      media: {
        title: "EdTech Platforms",
        src: "/images/bento/p1.jpg",
      },
    },
    {
      title: "AI-Powered Innovation",
      description:
        "We leverage Artificial Intelligence to build smarter educational experiences through personalized learning, intelligent automation, and data-driven insights.",
      media: {
        title: "AI Education",
        src: "https://v1.pinimg.com/videos/iht/expMp4/62/a7/4f/62a74fcf4a67eb7b5a3ccb74e00189e0_720w.mp4",
      },
    },
    {
      title: "Industry-Focused Skill Development",
      description:
        "Our platforms bridge the gap between education and industry by helping students gain practical skills, hands-on experience, and exposure to real-world projects.",
      media: {
        title: "Skill Development",
        src: "/images/bento/item3.png",
      },
    },
    {
      title: "Career Opportunities",
      description:
        "We connect students with live projects, mentorship, and employment opportunities, enabling them to build strong portfolios.",
      media: {
        title: "Career Mentorship",
        src: "/images/bento/item4.png",
      },
    },
  ],
};

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-bg-light py-24 md:py-32 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary mb-6 font-heading leading-tight">
            Building Technology. Shaping Careers.
          </h2>
          <p className="text-text-light-secondary text-lg leading-relaxed">
            Empowering students and institutions through innovative digital platforms, industry-focused learning, and career opportunities that prepare the workforce of tomorrow.
          </p>
        </div>

        {/* Bento Grid Implementation */}
        <BentoGrids01 primary={coreCapabilitiesValues.primary} items={coreCapabilitiesValues.items} />
      </div>
    </section>
  );
}
