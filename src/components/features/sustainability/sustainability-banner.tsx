"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { THREE_PILLARS } from "@/data/content/sustainability/sustainability-content";
import { cn } from "@/lib/utils";
import { ExpandingGrid } from "@/components/ui/custom/expanding-grid";

export function SustainabilityBanner() {
    return (
        <section className="h-screen w-full bg-white overflow-hidden">
            <ExpandingGrid
                items={THREE_PILLARS}
                containerClassName="h-full"
                renderItem={(pillar, isHovered) => (
                    <>
                        <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Subtle overlay for text clarity */}
                        <div className={cn(
                            "absolute inset-0 bg-black/10 transition-opacity duration-500",
                            isHovered ? "bg-black/20" : "bg-black/10"
                        )} />

                        {/* Centered Text */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 px-2">
                            <motion.h2
                                layout="position"
                                className={cn(
                                    "text-white font-bold tracking-tight text-center transition-all duration-500 break-words max-w-[90%]",
                                    isHovered
                                        ? "text-4xl md:text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                        : "text-xl md:text-5xl drop-shadow-md"
                                )}
                            >
                                {pillar.title}
                            </motion.h2>
                        </div>
                    </>
                )}
            />
        </section>
    );
}
