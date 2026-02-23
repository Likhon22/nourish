"use client";

import { ABOUT_CONTENT_BLOCKS } from "@/data/about/content-blocks-data";
import { ContentBlock } from "@/components/ui/content-block";

export function AboutContentBlocks() {
    return (
        <section className="w-full bg-white">
            {ABOUT_CONTENT_BLOCKS.map((block, index) => (
                <ContentBlock key={block.id} block={block} index={index} />
            ))}
        </section>
    );
}
