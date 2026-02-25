/**
 * PageHero Component
 * Generic hero section that can be reused across all pages
 * Supports both video and image backgrounds
 */

'use client';

import { VideoBanner } from '@/components/ui/custom/video-banner';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface PageHeroProps {
  /** Video source path (e.g., /videos/nourish1-C8QCRO6v.mp4) */
  videoSrc?: string;
  /** Image source path (fallback if no video) */
  imageSrc?: string;
  /** Main heading */
  title: string;
  /** Optional subtitle/overline above title */
  subtitle?: string;
  /** Optional description below title */
  description?: string;
  /** Height class (default: h-[75vh]) */
  height?: string;
  /** Custom overlay opacity (default: bg-black/30) */
  overlayClass?: string;
  /** Additional children to render */
  children?: React.ReactNode;
  /** Custom className for content wrapper */
  className?: string;
}

export const PageHero = ({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  description,
  height = 'h-[75vh]',
  overlayClass = 'bg-black/30',
  children,
  className,
}: PageHeroProps) => {
  // If video is provided, use VideoBanner
  if (videoSrc) {
    return (
      <VideoBanner
        videoSrc={videoSrc}
        heightClass={height}
        overlayClass={overlayClass}
      >
        <div
          className={cn(
            'relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full',
            className
          )}
        >
          {subtitle && (
            <p className="text-lg md:text-xl font-medium mb-4 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 max-w-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </VideoBanner>
    );
  }

  // If image is provided, use static image background
  if (imageSrc) {
    return (
      <section className={cn('relative w-full overflow-hidden flex', height)}>
        {/* Image Background */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="absolute inset-0 object-cover z-0"
          priority
        />

        {/* Dark Overlay for Contrast */}
        <div className={cn('absolute inset-0 z-10', overlayClass)} />

        {/* Content Layer */}
        <div
          className={cn(
            'relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full',
            className
          )}
        >
          {subtitle && (
            <p className="text-lg md:text-xl font-medium mb-4 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 max-w-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }

  // Fallback: solid color background
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden flex bg-slate-900',
        height
      )}
    >
      <div
        className={cn(
          'relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full',
          className
        )}
      >
        {subtitle && (
          <p className="text-lg md:text-xl font-medium mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 max-w-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
