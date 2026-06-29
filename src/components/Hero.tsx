"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InteractiveButton from "@/components/InteractiveButton";

const VIDEO_URL = "https://res.cloudinary.com/dxqaig2dc/video/upload/v1782734216/Untitled_design_1_yaaldg.mp4";
const DB_NAME = "VideoCacheDB";
const STORE_NAME = "videos";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject(new Error("IndexedDB is not supported on this environment"));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getCachedVideo(url: string): Promise<Blob | null> {
  return openDB().then((db) => {
    return new Promise<Blob | null>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(url);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  });
}

function cacheVideo(url: string, blob: Blob): Promise<void> {
  return openDB().then((db) => {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, url);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  });
}

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string>(VIDEO_URL);

  useEffect(() => {
    let objectUrl: string | null = null;

    async function loadVideo() {
      try {
        const cachedBlob = await getCachedVideo(VIDEO_URL);
        if (cachedBlob) {
          objectUrl = URL.createObjectURL(cachedBlob);
          setVideoSrc(objectUrl);
        } else {
          // Fetch and cache in background to avoid blocking the initial network stream
          fetch(VIDEO_URL)
            .then((response) => response.blob())
            .then((blob) => {
              cacheVideo(VIDEO_URL, blob).catch((err) =>
                console.error("Failed to store video in cache:", err)
              );
            })
            .catch((err) => console.error("Failed to download video for caching:", err));
        }
      } catch (error) {
        console.error("IndexedDB video caching error:", error);
      }
    }

    loadVideo();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  const headlineLines = [
    "Explore innovation.",
    "Develop solutions.",
    "Prosper together.",
  ];

  return (
    <section className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between overflow-hidden pt-32 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          key={videoSrc} // Force video element recreation when source changes to prevent display lock
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Main Hero Grid Content */}
      <div className="w-full px-8 md:px-12 flex-grow flex flex-col justify-center relative z-10">
        {/* Top Badge */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold tracking-wide"
          >
            <span className="text-white">XDP Technologies</span>
            <span className="h-3 w-[1px] bg-neutral-800" />
            <span className="text-text-dark-secondary">Explore • Develop • Prosper</span>
          </motion.div>
        </div>

        {/* Hero Content Stack */}
        <div className="max-w-4xl flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.05] text-left">
            {headlineLines.map((line, index) => (
              <span key={index} className="block overflow-hidden py-1">
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98] as any,
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-8 md:mt-10 self-start"
          >
            <InteractiveButton label="Chat with XDP" avatarChar="X" />
          </motion.div>
        </div>
      </div>

      {/* Watermark and Sunrise Horizon line */}
      <div className="relative w-full h-36 flex flex-col justify-end z-10">
        {/* Massive Watermark text */}
        <div className="w-full text-center relative select-none pointer-events-none">
          <h2 className="text-[14vw] font-extrabold text-white/[0.04] leading-none tracking-tight translate-y-[28%] font-sans select-none">
            XDP's
          </h2>
        </div>
      </div>
    </section>
  );
}
