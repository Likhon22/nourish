/**
 * ContentBlockList Component
 * Generic list renderer for content blocks
 * Eliminates duplicate content block mapping components
 */

import { ContentBlock } from '@/components/ui/custom/content-block';
import type { ContentBlockData } from '@/data/types';
import { cn } from '@/lib/utils';

interface ContentBlockListProps {
  /** Array of content blocks to render */
  blocks: ContentBlockData[];
  /** Optional className for the container */
  className?: string;
}

export const ContentBlockList = ({
  blocks,
  className,
}: ContentBlockListProps) => {
  return (
    <div className={cn('', className)}>
      {blocks.map((block, index) => (
        <ContentBlock key={block.id} block={block} index={index} />
      ))}
    </div>
  );
};
