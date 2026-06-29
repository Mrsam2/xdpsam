"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, Quote } from "lucide-react";
import InteractiveButton from "@/components/InteractiveButton";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does XDP technologies do?",
    answer: "We are a global technology company that builds custom digital products, configures enterprise cloud/DevOps infrastructures, and implements custom AI automation workflows.",
  },
  {
    question: "What is your development and review process?",
    answer: "We treat our processes like code. All decisions, specifications, and issues live in our GitLab repository. We use a written-down decision-making framework and operate async-first.",
  },
  {
    question: "What pricing models do you support?",
    answer: "We support three primary engagement models: Time & Materials for rapid prototyping/discovery, Fixed Price for defined projects, and retainers for ongoing managed engineering services.",
  },
  {
    question: "Do we own the intellectual property and code?",
    answer: "Yes. From day one, all code, configurations, documentation, and assets are fully owned by your company. We establish legal IP assignments before starting any work.",
  },
  {
    question: "How do we stay updated on project status?",
    answer: "We provide full transparency. You get direct access to our GitLab repository to see pipelines, merge requests, issues, and written decision records in real-time.",
  },
];

const FEEDBACKS = [
  {
    quote: "Working with Sam and the XDP technologies team was a masterclass in software craftsmanship. They didn’t just write code, they built a highly observable, scale-ready infrastructure.",
    author: "Jack Hudson",
    role: "VP of Engineering, Cal.com",
  },
  {
    quote: "Sam's team rapidly iterated on our requirements, delivered a robust product with solid documentation, and managed our transition seamlessly.",
    author: "Priya Singh",
    role: "Product Manager, Google",
  },
  {
    quote: "The collaboration, transparency, and clarity from XDP technologies made a significant impact on our engineering roadmap.",
    author: "Liam O'Connor",
    role: "Head of Infrastructure, Raycast",
  },
  {
    quote: "Technical excellence paired with a solid decision-making framework. Highly recommended for scaling startups.",
    author: "Sara Williams",
    role: "Engineering Manager, Microsoft",
  },
];

export default function FAQ() {
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeedbackIndex((prev) => (prev + 1) % FEEDBACKS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-bg-light py-24 md:py-32 border-b border-border-light text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-medium text-text-light-secondary">
            Have more doubts? Reach out to us at{" "}
            <a
              href="mailto:contact@xdptechnologies.dev"
              className="text-emerald-600 hover:text-emerald-700 underline font-semibold transition-colors"
            >
              contact@xdptechnologies.dev
            </a>
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border-light rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-text-light-primary font-heading mb-3">
                  Need a fast moving team of engineers?
                </h3>
                <p className="text-sm text-text-light-secondary leading-relaxed mb-8">
                  XDP technologies is your single partner for software, cloud, and AI engineering needs.
                </p>
              </div>

              <InteractiveButton label="Chat with XDP's" avatarChar="X" className="w-full justify-center" />
            </motion.div>

            {/* Highlight Feedback Card Slider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 block mb-4">
                  Client Feedback
                </span>
                <div className="relative min-h-[90px] flex items-center">
                  <p className="text-xs italic text-text-light-primary/90 leading-relaxed text-left">
                    “{FEEDBACKS[feedbackIndex].quote}”
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 border-t border-neutral-100 pt-4">
                <div className="text-left">
                  <h5 className="text-xs font-bold text-text-light-primary">
                    {FEEDBACKS[feedbackIndex].author}
                  </h5>
                  <p className="text-[9px] text-text-light-secondary mt-0.5">
                    {FEEDBACKS[feedbackIndex].role}
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-1 flex-shrink-0">
                  {FEEDBACKS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFeedbackIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${feedbackIndex === idx ? "bg-accent-orange w-3.5" : "bg-neutral-200"
                        }`}
                      aria-label={`Show feedback ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <Accordion className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-neutral-100 py-1"
                >
                  <AccordionTrigger className="text-sm md:text-base font-bold text-text-light-primary py-4 hover:no-underline hover:text-accent-orange transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-text-light-secondary leading-relaxed pt-2 pb-4 text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
