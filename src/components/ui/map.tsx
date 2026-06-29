"use client"

import { motion } from "framer-motion"
import { Server } from "lucide-react"

interface MarkerProps {
  src?: string
  isServer?: boolean
  top: string
  left: string
  delay: number
  borderColor?: string
}

function Marker({
  src,
  isServer,
  top,
  left,
  delay,
  borderColor = "border-white/10"
}: MarkerProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      style={{ top, left }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
    >
      {isServer ? (
        <div className="w-7 h-7 rounded-full border border-neutral-800 bg-[#151518]/95 flex items-center justify-center shadow-lg backdrop-blur-sm hover:border-neutral-500 hover:scale-110 transition-all duration-300">
          <Server className="w-3.5 h-3.5 text-neutral-400" />
        </div>
      ) : (
        <div className={`w-8 h-8 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 ${borderColor}`}>
          <img
            alt="User avatar"
            src={src}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </motion.div>
  )
}

export function Map() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-transparent">
      {/* Centered Map Wrapper (retains aspect ratio of the map image) */}
      <div className="relative h-full aspect-[530/300] max-w-full">
        {/* Background Map Image */}
        <div 
          className="absolute inset-0 bg-[url(https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/map.png)] bg-no-repeat bg-contain bg-center opacity-[0.25]"
        />
        
        {/* Markers Container */}
        <div className="absolute inset-0 z-10">
          {/* Avatars */}
          {/* US West - Red shirt woman */}
          <Marker
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
            top="32%"
            left="18%"
            delay={0.1}
            borderColor="border-2 border-red-900/60"
          />
          
          {/* South America - Blue bg woman */}
          <Marker
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
            top="68%"
            left="33%"
            delay={0.3}
            borderColor="border-2 border-white"
          />
          
          {/* Africa / Middle - Brown hair woman */}
          <Marker
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
            top="52%"
            left="53%"
            delay={0.2}
            borderColor="border-2 border-neutral-300"
          />
          
          {/* India / Asia - Blue bg man */}
          <Marker
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
            top="42%"
            left="68%"
            delay={0.4}
            borderColor="border-2 border-blue-500"
          />
          
          {/* Southeast Asia - Dark shirt man */}
          <Marker
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
            top="58%"
            left="82%"
            delay={0.5}
            borderColor="border-2 border-neutral-400"
          />

          {/* Server Nodes */}
          {/* US East Server */}
          <Marker
            isServer
            top="38%"
            left="25%"
            delay={0.15}
          />
          
          {/* Greenland / Iceland Server */}
          <Marker
            isServer
            top="22%"
            left="44%"
            delay={0.25}
          />
          
          {/* Central Europe Server */}
          <Marker
            isServer
            top="30%"
            left="53%"
            delay={0.35}
          />
          
          {/* East Asia Server */}
          <Marker
            isServer
            top="38%"
            left="78%"
            delay={0.45}
          />
          
          {/* Australia Server */}
          <Marker
            isServer
            top="78%"
            left="88%"
            delay={0.55}
          />
        </div>
      </div>
    </div>
  )
}
