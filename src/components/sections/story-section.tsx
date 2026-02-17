"use client";

import { STORY_DATA } from "@/data/story-data";
import { StoryCard } from "./story-card";

export function StorySection() {
    return (
        <section className="relative">
            {STORY_DATA.map((card, index) => (
                <StoryCard
                    key={card.id}
                    {...card}
                    index={index}
                    total={STORY_DATA.length}
                />
            ))}
        </section>
    );
}
