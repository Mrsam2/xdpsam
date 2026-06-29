"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-left">
        Explore our Operating Pillars
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ExploreContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-left">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Explore relentlessly. Curiosity is a job requirement.
        </span>{" "}
        We question assumptions and run small, structured experiments before placing big bets. We treat the company itself as a product, continuously versioning and improving.
      </p>
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600"
        alt="Explore Relentlessly"
        className="w-full max-w-xl mx-auto rounded-2xl object-cover h-64 shadow-md"
      />
    </div>
  );
};

const DevelopContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-left">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Develop with craft. We ship quality.
        </span>{" "}
        Speed without quality is debt; quality without speed is irrelevance. We focus on tested, maintainable work, clean architectures, and clear interfaces.
      </p>
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
        alt="Develop with Craft"
        className="w-full max-w-xl mx-auto rounded-2xl object-cover h-64 shadow-md"
      />
    </div>
  );
};

const ProsperContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-left">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Prosper together. Alignment of interest.
        </span>{" "}
        Customer success, team growth, and company health are one goal, not three. We share context, default to open communication, and share wins together.
      </p>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
        alt="Prosper Together"
        className="w-full max-w-xl mx-auto rounded-2xl object-cover h-64 shadow-md"
      />
    </div>
  );
};

const GovernanceContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-left">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Disagree, then commit. RAPID-lite roles.
        </span>{" "}
        Decisions are written down. We split them into reversible choices made fast, and irreversible ones involving founder agreement. Every major option is weighted by trade-offs.
      </p>
      <img
        src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600"
        alt="Governance and Deciders"
        className="w-full max-w-xl mx-auto rounded-2xl object-cover h-64 shadow-md"
      />
    </div>
  );
};

const PeopleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-left">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Hire for slope, not just intercept.
        </span>{" "}
        Trajectory and learning rate beat current snapshot. We look for core values fit, high agency, and default to small, senior, generalist teams early on.
      </p>
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
        alt="Hiring for Slope"
        className="w-full max-w-xl mx-auto rounded-2xl object-cover h-64 shadow-md"
      />
    </div>
  );
};

const data = [
  {
    category: "Explore Slogan",
    title: "relentless curiosity and active R&D.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    content: <ExploreContent />,
  },
  {
    category: "Develop Slogan",
    title: "engineering craft with zero compromise.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    content: <DevelopContent />,
  },
  {
    category: "Prosper Slogan",
    title: "building client success and alignment.",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    content: <ProsperContent />,
  },
  {
    category: "Governance",
    title: "async coordination and written decisions.",
    src: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200",
    content: <GovernanceContent />,
  },
  {
    category: "Hiring & People",
    title: "slope over intercept in recruitment.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    content: <PeopleContent />,
  },
];
