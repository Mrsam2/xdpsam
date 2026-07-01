'use client'

import { useState, useEffect, useRef } from 'react'

// ── Pixel face data (matches reference image) ──────────────────────────────

// Each eye is an X shape: 4 corners + 1 center = 5 pixels
const LEFT_EYE = [
  { x: -28, y: -8 },
  { x: -20, y: -8 },
  { x: -24, y: -4 },
  { x: -28, y: 0 },
  { x: -20, y: 0 },
]

const RIGHT_EYE = [
  { x: 20, y: -8 },
  { x: 28, y: -8 },
  { x: 24, y: -4 },
  { x: 20, y: 0 },
  { x: 28, y: 0 },
]

// Smile is a V / checkmark shape
const SMILE_NORMAL = [
  { x: -14, y: 12 },
  { x: -8, y: 18 },
  { x: -2, y: 24 }, { x: 2, y: 24 },
  { x: 8, y: 18 },
  { x: 14, y: 12 },
]

const SMILE_WIDE = [
  { x: -20, y: 10 },
  { x: -14, y: 16 },
  { x: -8, y: 22 },
  { x: -2, y: 26 }, { x: 2, y: 26 },
  { x: 8, y: 22 },
  { x: 14, y: 16 },
  { x: 20, y: 10 },
]

// ── XDPSRobot Component ─────────────────────────────────────────────────────

export default function XDPSRobot({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false)
  const [smileWide, setSmileWide] = useState(false)
  const [showXDPS, setShowXDPS] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Removed smile widening — keep face static

  // Show "XDPS" text every 10 seconds for 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowXDPS(true)
      setTimeout(() => setShowXDPS(false), 3000)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // Mouse tracking for head tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setMousePos({
        x: Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2))),
        y: Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2))),
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const tiltX = -mousePos.y * 8
  const tiltY = mousePos.x * 12
  const smilePixels = SMILE_NORMAL
  const px = 6

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center cursor-pointer ${className ?? ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Robot wrapper with float + tilt + hover */}
      <div
        className="relative w-full max-w-[320px] animate-robot-float"
        style={{
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s ease',
          transform: `
            perspective(800px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            translateY(${hovered ? -10 : 0}px)
            scale(${hovered ? 1.03 : 1})
          `,
          filter: hovered
            ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            : 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
        }}
      >
        {/* Bot image */}
        <img
          src="/blanck bot.png"
          alt="XDPS Robot Assistant"
          draggable={false}
          className="w-full h-auto block select-none"
        />

        {/* Face overlay on the screen — centered on black display */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '8%',
            left: '14%',
            width: '72%',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* XDPS Text Mode */}
          {(showXDPS || hovered) && (
            <div
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{
                transition: 'opacity 0.5s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                  color: '#ffffff',
                  textShadow: '0 0 8px rgba(255,255,255,0.3)',
                }}
              >
                XDPS
              </span>
            </div>
          )}

          {/* Face pixels (hidden when XDPS text is showing) */}
          <div
            className="relative w-full h-full"
            style={{
              opacity: (showXDPS || hovered) ? 0 : 1,
              transition: 'opacity 0.5s ease',
            }}
          >
            {/* Left Eye */}
            {LEFT_EYE.map((p, i) => (
              <div
                key={`le-${i}`}
                className="absolute"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: px,
                  height: px,
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}

            {/* Right Eye */}
            {RIGHT_EYE.map((p, i) => (
              <div
                key={`re-${i}`}
                className="absolute"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: px,
                  height: px,
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}

            {/* Smile */}
            {smilePixels.map((p, i) => (
              <div
                key={`sm-${i}`}
                className="absolute"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: px - 1,
                  height: px - 1,
                  backgroundColor: '#fff',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            ))}
          </div>

          {/* Moving screen reflection */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div
              className="absolute animate-screen-reflection"
              style={{
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)',
              }}
            />
          </div>
        </div>

        {/* Status LED */}
        <div
          className="absolute animate-led-breathe rounded-full"
          style={{
            top: '52%',
            right: '22%',
            width: 5,
            height: 5,
            backgroundColor: '#fff',
            boxShadow: '0 0 4px #fff, 0 0 8px rgba(255,255,255,0.4)',
          }}
        />
      </div>
    </div>
  )
}
