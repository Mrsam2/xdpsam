import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BentoGrids01Props {
  primary: {
    title: string;
    description: string;
    cta?: {
      ctaEnabled: boolean;
      text: string;
      link: string;
      variant: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
      size: 'default' | 'sm' | 'lg' | 'icon';
    };
    media?: {
      title: string;
      src: string;
    };
  };
  items: Array<{
    title: string;
    description: string;
    media?: {
      title: string;
      src: string;
    };
  }>;
}

export function BentoGrids01({ primary, items }: BentoGrids01Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  };

  const renderMedia = (media: { src: string; title: string }, className: string) => {
    const isVideo = media.src.endsWith('.mp4') || media.src.endsWith('.webm');
    if (isVideo) {
      return (
        <video
          src={media.src}
          title={media.title}
          autoPlay
          loop
          muted
          playsInline
          className={className}
        />
      );
    }
    return (
      <img
        src={media.src}
        alt={media.title}
        className={className}
      />
    );
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[300px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Primary Card */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-white border border-border-light shadow-sm hover:shadow-md transition-all relative group flex flex-col min-h-[400px] md:min-h-0"
      >
        <div className="p-8 md:p-10 flex flex-col z-10 w-full md:w-1/2 relative bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none h-full justify-between">
          <div>
            <h3 className="text-3xl font-bold text-text-light-primary font-heading mb-4 leading-tight">{primary.title}</h3>
            <p className="text-text-light-secondary text-base leading-relaxed max-w-md">{primary.description}</p>
          </div>
          {primary.cta?.ctaEnabled && (
            <div className="mt-8">
              <a href={primary.cta.link} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm font-semibold shadow-sm w-fit group/btn">
                {primary.cta.text}
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          )}
        </div>
        {primary.media && (
          <div className="absolute inset-0 md:left-1/3 md:right-0 z-0 overflow-hidden rounded-r-2xl pointer-events-none border-l border-neutral-100/50">
            {renderMedia(primary.media, "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700")}
            {/* Gradient overlay for text readability on mobile/tablet */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-white md:via-white/50 md:to-transparent" />
          </div>
        )}
      </motion.div>

      {/* Item Cards */}
      {items.map((item, i) => (
        <motion.div 
          key={i}
          variants={itemVariants}
          className="col-span-1 rounded-2xl overflow-hidden bg-white border border-border-light shadow-sm hover:shadow-md transition-all relative group flex flex-col h-full"
        >
          {item.media && (
            <div className="h-[140px] w-full overflow-hidden border-b border-border-light bg-neutral-50 shrink-0">
              {renderMedia(item.media, "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700")}
            </div>
          )}
          <div className="p-6 flex-grow flex flex-col justify-center">
            <h4 className="text-lg font-bold text-text-light-primary font-heading mb-2 leading-tight">{item.title}</h4>
            <p className="text-sm text-text-light-secondary leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
