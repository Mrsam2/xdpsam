'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  usePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from 'framer-motion'

import {
  Bot,
  Code,
  Smartphone,
  Globe,
  Server,
  Cloud,
  BarChart,
  ShieldCheck,
  Palette,
  TrendingUp,
  TestTube,
  Rocket
} from 'lucide-react'

interface CardData {
  title: string
  image: string
  icon: React.ElementType
  label?: string
}

const CARDS: CardData[] = [
  {
    title: 'Artificial Intelligence',
    icon: Bot,
    label: 'Explore',
    image: '/images/tech/tech_ai_bot.png',
  },
  {
    title: 'Full Stack Development',
    icon: Code,
    label: 'Explore',
    image: '/images/tech/tech_fullstack_bot.png',
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    label: 'Explore',
    image: '/images/tech/tech_mobile_bot.png',
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    label: 'Explore',
    image: '/images/tech/tech_fullstack_bot.png',
  },
  {
    title: 'Backend Development',
    icon: Server,
    label: 'Explore',
    image: '/images/tech/tech_data_bot.png',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    label: 'Explore',
    image: '/images/tech/tech_cloud_bot.png',
  },
  {
    title: 'Data Science',
    icon: BarChart,
    label: 'Explore',
    image: '/images/tech/tech_data_bot.png',
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    label: 'Explore',
    image: '/images/tech/tech_cyber_bot.png',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    label: 'Explore',
    image: '/images/tech/tech_mobile_bot.png',
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    label: 'Explore',
    image: '/images/tech/tech_ai_bot.png',
  },
  {
    title: 'Software Testing',
    icon: TestTube,
    label: 'Explore',
    image: '/images/tech/tech_cyber_bot.png',
  },
  {
    title: 'Product Management',
    icon: Rocket,
    label: 'Explore',
    image: '/images/tech/tech_cloud_bot.png',
  },
]

const VISIBLE = 4
const SLOT_Y = [0, 12, 24, 36]
const SLOT_SCALE = [1, 0.95, 0.9, 0.86]
const SLOT_OPACITY = [1, 1, 0.92, 0.82]

const SPRING = { type: 'spring' as const, stiffness: 300, damping: 30 }

function CardFace({ card, isTop }: { card: CardData; isTop: boolean }) {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        boxShadow: isTop
          ? '0 30px 60px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.10)'
          : '0 14px 30px rgba(0,0,0,0.05)',
      }}
    >
      <div className="relative w-full" style={{ flex: 1, minHeight: 0 }}>
        <img
          src={card.image}
          alt={card.title}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {card.title && (
        <div
          className="flex items-center justify-between"
          style={{ flexShrink: 0, gap: 12, padding: '12px 12px 12px 16px', backgroundColor: '#FFFFFF' }}
        >
          <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0">
            <card.icon className="w-4 h-4 text-neutral-600 shrink-0" />
            <h3
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: '#111111',
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {card.title}
            </h3>
          </div>
          {card.label && (
            <motion.button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
              whileHover={{ scale: 1.06, backgroundColor: '#2C2825' }}
              whileTap={{ scale: 0.93, backgroundColor: '#000000' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                flexShrink: 0,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#141312',
                color: '#F5F1E8',
                borderRadius: 9999,
                padding: '6px 14px',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              {card.label}
            </motion.button>
          )}
        </div>
      )}
    </div>
  )
}

function FlickCard({
  card,
  slot,
  isTop,
  onFlick,
}: {
  card: CardData
  slot: number
  isTop: boolean
  onFlick: () => void
}) {
  const [isPresent, safeToRemove] = usePresence()
  const x = useMotionValue(0)
  const y = useMotionValue(SLOT_Y[slot])
  const scale = useMotionValue(SLOT_SCALE[slot])
  const opacity = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-18, 18], { clamp: true })
  const flickVel = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!isPresent) return
    const controls = [
      animate(y, SLOT_Y[slot], SPRING),
      animate(scale, SLOT_SCALE[slot], SPRING),
      animate(opacity, SLOT_OPACITY[slot], { duration: 0.3, ease: 'easeOut' }),
    ]
    if (!isTop) controls.push(animate(x, 0, SPRING))
    return () => controls.forEach((c) => c.stop())
  }, [slot, isTop, isPresent, x, y, scale, opacity])

  useEffect(() => {
    if (isPresent) return
    const v = flickVel.current
    const mag = Math.hypot(v.x, v.y) || 1
    animate(x, (v.x / mag) * 1500, { duration: 0.5, ease: 'easeOut' })
    animate(y, (v.y / mag) * 1500, { duration: 0.5, ease: 'easeOut' })
    animate(opacity, 0, { duration: 0.45, ease: 'easeOut' })
    const last = animate(scale, 0.85, {
      duration: 0.5,
      ease: 'easeOut',
      onComplete: () => safeToRemove?.(),
    })
    return () => last.stop()
  }, [isPresent, safeToRemove, x, y, scale, opacity])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const speed = Math.hypot(info.velocity.x, info.velocity.y)
    const dist = Math.hypot(info.offset.x, info.offset.y)
    if (speed > 500 || dist > 130) {
      flickVel.current =
        speed > 220
          ? { x: info.velocity.x, y: info.velocity.y }
          : { x: info.offset.x * 9, y: info.offset.y * 9 }
      onFlick()
    } else {
      animate(x, 0, SPRING)
      animate(y, SLOT_Y[0], SPRING)
    }
  }

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
        rotate,
        position: 'absolute',
        inset: 0,
        zIndex: 100 - slot,
        cursor: isTop ? 'grab' : 'auto',
        touchAction: isTop ? 'none' : 'auto',
      }}
      drag={isTop}
      onDragEnd={isTop ? handleDragEnd : undefined}
      whileTap={isTop ? { cursor: 'grabbing' } : undefined}
    >
      <CardFace card={card} isTop={isTop} />
    </motion.div>
  )
}

interface DeckCard {
  key: number
  content: number
}

export default function ProductCardDeck() {
  const [deck, setDeck] = useState<DeckCard[]>(() =>
    Array.from({ length: VISIBLE }, (_, i) => ({ key: i, content: i })),
  )
  const nextKey = useRef(VISIBLE)

  const handleFlick = () => {
    setDeck((prev) => {
      const rest = prev.slice(1)
      const lastContent = prev[prev.length - 1].content
      const newCard = {
        key: nextKey.current++,
        content: (lastContent + 1) % CARDS.length,
      }
      return [...rest, newCard]
    })
  }

  return (
    <div className="relative flex w-full items-center justify-center p-8">
      <div className="flex flex-col items-center gap-10">
        <div
          className="relative"
          style={{
            width: 'clamp(200px, 72vw, 260px)',
            height: 'calc(clamp(200px, 72vw, 260px) + 56px)',
          }}
        >
          <AnimatePresence>
            {deck.map((item, i) => (
              <FlickCard
                key={item.key}
                card={CARDS[item.content % CARDS.length]}
                slot={i}
                isTop={i === 0}
                onFlick={handleFlick}
              />
            ))}
          </AnimatePresence>
        </div>

        <p className="text-xs font-medium tracking-wide text-neutral-400">
          Grab the top card and flick it away
        </p>
      </div>
    </div>
  )
}
