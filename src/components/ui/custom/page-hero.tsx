'use client';

import { motion } from 'framer-motion';
import { VideoBanner } from '@/components/ui/custom/video-banner';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  /** Video source path */
  videoSrc: string;
  /** Small uppercase heading above the title */
  subtitle?: string;
  /** Main large heading */
  title: string;
  /** Prominent text below the title (e.g. tagline) */
  tagline?: string;
  /** Longer descriptive paragraph */
  description?: string;
  /** Height class (e.g. h-screen or h-[75vh]) */
  height?: string;
  /** Text and content alignment (default: center) */
  align?: 'center' | 'left';
  /** Custom overlay opacity (default: bg-black/40) */
  overlayClass?: string;
  /** Container positioning class (e.g. items-center or items-end) */
  containerClass?: string;
  /** Additional children */
  children?: React.ReactNode;
  /** Custom className for the content wrap */
  className?: string;
}

/**
 * PageHero — Standardized video-background hero for all main page headers.
 * Highly configurable to support Home, About, Businesses, and more.
 */
export const PageHero = ({
  videoSrc,
  subtitle,
  title,
  tagline,
  description,
  height = 'h-[75vh]',
  align = 'center',
  overlayClass = 'bg-black/40',
  containerClass,
  children,
  className,
}: PageHeroProps) => {
  const isLeft = align === 'left';

  return (
    <VideoBanner
      videoSrc={videoSrc}
      heightClass={height}
      overlayClass={overlayClass}
      containerClass={cn(
        isLeft ? 'items-end justify-start pb-20' : 'items-center justify-center pt-20',
        'px-6 lg:px-12',
        containerClass
      )}
    >
      <div
        className={cn(
          'relative z-20 max-w-5xl flex flex-col w-full',
          isLeft ? 'text-left items-start' : 'text-center items-center font-bold',
          className
        )}
      >
        {subtitle && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-lg md:text-xl uppercase tracking-[0.3em] font-bold mb-3 md:mb-6"
          >
            {subtitle}
          </motion.h1>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            "text-white font-bold tracking-tight leading-tight",
            isLeft ? "text-3xl md:text-5xl lg:text-6xl mb-0" : "text-3xl md:text-6xl lg:text-7xl mb-4 md:mb-8"
          )}
        >
          {title}
        </motion.h2>

        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white font-medium mb-3 md:mb-6"
          >
            {tagline}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white/90 max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {children}
      </div>
    </VideoBanner>
  );
};
