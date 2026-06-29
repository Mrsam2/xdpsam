"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, MessageSquareCode } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm the XDP's Copilot. Let's explore, develop, and prosper together. Ask me anything about XDP technologies!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate Alex responding after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "That sounds awesome! Since this is a high-polish mockup, just know that we design websites that drive results. Want to book a call?",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip on Hover */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="bg-black/90 backdrop-blur-md text-white text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 shadow-xl pointer-events-none hidden md:block"
            >
              Chat with XDP's
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Wrapper with pulsing glow */}
        <motion.div
          animate={{
            scale: isOpen ? 1 : [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-14 h-14 rounded-full p-[2px] cursor-pointer shadow-lg hover:shadow-orange-500/20 transition-shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Pulsing Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10" />

          {/* Rotating Conic Gradient Border */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#0052e0,#38bdf8)] animate-spin-slow" />

          {/* Inner Button Content */}
          <div className="absolute inset-[1px] rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Bot className="w-6 h-6 text-accent-yellow" />}
          </div>
        </motion.div>
      </div>

      {/* Chat Dialogue Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 bg-neutral-900/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-accent-yellow flex flex-wrap items-center justify-center p-1 gap-[2px]">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-[2px] h-[2px] bg-black rounded-[0.5px]" />
                  ))}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">XDP's Copilot</h3>
                  <p className="text-[10px] text-accent-yellow font-medium">AI Engineering Partner</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === "user"
                      ? "bg-accent-yellow text-black rounded-tr-none font-medium"
                      : "bg-neutral-800 text-white rounded-tl-none"
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-neutral-800 bg-neutral-900/30 flex gap-2">
              <input
                type="text"
                placeholder="Ask XDP's Copilot a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-accent-yellow transition-colors"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-accent-yellow text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
