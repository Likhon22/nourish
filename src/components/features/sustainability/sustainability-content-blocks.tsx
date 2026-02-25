"use client";

import { SUSTAINABILITY_CONTENT_BLOCKS } from "@/data/content/sustainability/sustainability-blocks-data";
import { ContentBlock } from "@/components/ui/custom/content-block";

export function SustainabilityContentBlocks() {
    return (
        <section className="w-full bg-white">
            {SUSTAINABILITY_CONTENT_BLOCKS.map((block, index) => (
                <ContentBlock key={block.id} block={block} index={index} />
            ))}
        </section>
    );
}
