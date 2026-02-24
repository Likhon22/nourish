"use client";

import { useState, ReactNode } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandingGridProps<T> {
    items: T[];
    renderItem: (item: T, isHovered: boolean) => ReactNode;
    containerClassName?: string;
    activeFlexScale?: number;
    itemClassName?: string;
}

export function ExpandingGrid<T extends { id: string | number }>({
    items,
    renderItem,
    containerClassName,
    activeFlexScale = 4,
    itemClassName
}: ExpandingGridProps<T>) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <LayoutGroup>
            <div className={cn("flex flex-col md:flex-row gap-0 w-full", containerClassName)}>
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layout
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={cn(
                            "relative group cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                            "h-full w-full",
                            "flex-none md:flex-1",
                            itemClassName
                        )}
                        style={{
                            flexGrow: hoveredIndex === index ? activeFlexScale : 1
                        } as any}
                    >
                        {renderItem(item, hoveredIndex === index)}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    );
}
