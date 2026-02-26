'use client';

import { VideoBanner } from '@/components/ui/custom/video-banner';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  /** Video source path (e.g., /videos/nourish1-C8QCRO6v.mp4) */
  videoSrc: string;
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

/**
 * PageHero — video-background hero for main page headers.
 * Used by About, Businesses, etc.
 * For solid-color banners (Contact, Careers) use BannerHero instead.
 */
export const PageHero = ({
  videoSrc,
  title,
  subtitle,
  description,
  height = 'h-[75vh]',
  overlayClass = 'bg-black/30',
  children,
  className,
}: PageHeroProps) => {
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
};
