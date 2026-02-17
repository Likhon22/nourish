"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { StoryCardData } from "@/data/story-data";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/primary-button";

interface StoryCardProps extends StoryCardData {
    index: number;
    total: number;
}

export function StoryCard({ headline, subheadline, image, rightBlocks, index, total }: StoryCardProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Scale down the card slightly as it gets covered by the next one
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const isLast = index === total - 1;

    return (
        <div
            ref={containerRef}
            className={cn(
                "h-screen overflow-hidden",
                !isLast && "sticky top-0"
            )}
        >
            <motion.div
                style={{ scale }}
                className="relative w-full h-full bg-slate-900"
            >
                {/* Background Image */}
                <Image
                    src={image}
                    alt={headline}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />

                {/* Dark Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10" />

                {/* Content Grid */}
                <div className="relative z-20 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center p-8 md:p-16 lg:p-24 pb-20 md:pb-32">

                    {/* Left: Main Story Info */}
                    <div className="flex flex-col justify-center text-left h-full">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 tracking-tight">
                            {headline}
                        </h2>
                        <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                            {subheadline}
                        </p>
                    </div>

                    {/* Right: Detailed Blocks */}
                    <div className="flex flex-col justify-center gap-8 lg:gap-12 h-full overflow-y-auto pr-4 custom-scrollbar max-h-[70vh] md:max-h-full">
                        <div className="space-y-6 w-full max-w-2xl">
                            {rightBlocks.map((block, i) => (
                                <div key={i} className="space-y-2 text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {block.title}
                                    </h3>
                                    {block.isBulletList ? (
                                        <ul className="space-y-2">
                                            {block.bullets?.map((bullet, bi) => (
                                                <li key={bi} className="flex gap-1 text-white font-medium text-[16px] md:text-[17px] leading-relaxed">
                                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-white font-medium text-[16px] md:text-[17px] leading-relaxed whitespace-pre-line">
                                            {block.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Centered Button across entire card width */}
                    <div className="md:col-span-2 flex justify-center pt-8">
                        <PrimaryButton text="Learn More" />
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
