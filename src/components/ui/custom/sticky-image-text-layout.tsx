/**
 * StickyImageTextLayout Component
 * Reusable layout with sticky image and scrolling text content
 * Used in business sections and similar layouts
 */

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface StickyImageTextLayoutProps {
  /** Image source path */
  image: string;
  /** Image position (left or right) */
  imagePosition: 'left' | 'right';
  /** Alt text for the image */
  imageAlt: string;
  /** Text content to display */
  children: React.ReactNode;
  /** Sticky offset from top (default: top-32) */
  stickyOffset?: string;
  /** Image container height (default: h-[500px]) */
  imageHeight?: string;
  /** Container className */
  className?: string;
  /** Image className */
  imageClassName?: string;
}

export const StickyImageTextLayout = ({
  image,
  imagePosition,
  imageAlt,
  children,
  stickyOffset = 'top-32',
  imageHeight = 'h-[500px]',
  className,
  imageClassName,
}: StickyImageTextLayoutProps) => {
  return (
    <div
      className={cn(
        'grid md:grid-cols-2 gap-8 md:gap-12 items-start',
        className
      )}
    >
      {/* Image column */}
      <div
        className={cn(
          'relative md:sticky',
          imageHeight,
          stickyOffset,
          imagePosition === 'right' && 'md:order-2'
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={cn('object-cover rounded-2xl', imageClassName)}
        />
      </div>

      {/* Text column */}
      <div className="space-y-6 md:space-y-8">{children}</div>
    </div>
  );
};
