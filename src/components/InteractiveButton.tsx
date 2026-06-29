"use client";

import React from "react";

interface InteractiveButtonProps {
  label: string;
  avatarChar?: string;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveButton({
  label,
  avatarChar = "X",
  className = "",
  onClick,
}: InteractiveButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight text-white select-none ${className}`}
    >
      {/* Sliding and rotating Box */}
      <div
        data-slot="button-box"
        className="absolute inset-y-0 left-1 z-40 my-auto flex h-8 w-8 flex-col items-center justify-center gap-px rounded-[5px] bg-neutral-900 border border-white/10 transition-all duration-400 ease-out group-hover:left-[calc(100%-2.3rem)] group-hover:rotate-180"
      >
        {/* Dotted Chevron (visible by default) */}
        <div className="group-hover:hidden flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/80"
          >
            {/* Row 0 */}
            <circle cx="2" cy="2" r="1" fill="currentColor" />
            <circle cx="4" cy="2" r="1" fill="currentColor" />
            <circle cx="6" cy="2" r="1" fill="currentColor" />
            <circle cx="8" cy="2" r="1" fill="currentColor" />

            {/* Row 1 */}
            <circle cx="4" cy="4" r="1" fill="currentColor" />
            <circle cx="6" cy="4" r="1" fill="currentColor" />
            <circle cx="8" cy="4" r="1" fill="currentColor" />
            <circle cx="10" cy="4" r="1" fill="currentColor" />

            {/* Row 2 */}
            <circle cx="6" cy="6" r="1" fill="currentColor" />
            <circle cx="8" cy="6" r="1" fill="currentColor" />
            <circle cx="10" cy="6" r="1" fill="currentColor" />
            <circle cx="12" cy="6" r="1" fill="currentColor" />

            {/* Row 3 */}
            <circle cx="8" cy="8" r="1" fill="currentColor" />
            <circle cx="10" cy="8" r="1" fill="currentColor" />
            <circle cx="12" cy="8" r="1" fill="currentColor" />
            <circle cx="14" cy="8" r="1" fill="currentColor" />

            {/* Row 4 */}
            <circle cx="6" cy="10" r="1" fill="currentColor" />
            <circle cx="8" cy="10" r="1" fill="currentColor" />
            <circle cx="10" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />

            {/* Row 5 */}
            <circle cx="4" cy="12" r="1" fill="currentColor" />
            <circle cx="6" cy="12" r="1" fill="currentColor" />
            <circle cx="8" cy="12" r="1" fill="currentColor" />
            <circle cx="10" cy="12" r="1" fill="currentColor" />

            {/* Row 6 */}
            <circle cx="2" cy="14" r="1" fill="currentColor" />
            <circle cx="4" cy="14" r="1" fill="currentColor" />
            <circle cx="6" cy="14" r="1" fill="currentColor" />
            <circle cx="8" cy="14" r="1" fill="currentColor" />
          </svg>
        </div>

        {/* Character Avatar (visible on hover) */}
        <div className="hidden group-hover:flex items-center justify-center w-full h-full text-xs font-bold text-accent-yellow rotate-180">
          {avatarChar}
        </div>
      </div>

      {/* Sheen Overlay effect */}
      <div className="absolute -inset-px rounded-lg bg-white/10 transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]" />

      {/* Button Text */}
      <span className="inline-block text-white transition-transform duration-400 group-hover:-translate-x-8">
        {label}
      </span>
    </button>
  );
}
