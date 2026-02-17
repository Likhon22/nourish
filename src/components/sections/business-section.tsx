"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { BUSINESSES, Business } from "@/data/business-data";
import { cn } from "@/lib/utils";

export function BusinessSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto mb-16 flex flex-col items-center justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                    Our Businesses
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed"
                >
                    From hatcheries and feed mills to farmer advisory services and food innovation,
                    Nourish stands as more than a business. We are a movement — a promise to nourish
                    People, Place, and Planet, and to build a food-secure Bangladesh for generations to come.
                </motion.p>
            </div>

            <LayoutGroup>
                <div className="flex flex-col md:flex-row gap-0 h-auto md:h-[500px] lg:h-[550px] w-full">
                    {BUSINESSES.map((business, index) => (
                        <BusinessCard
                            key={business.id}
                            business={business}
                            isHovered={hoveredIndex === index}
                            onHover={() => setHoveredIndex(index)}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </div>
            </LayoutGroup>
        </section>
    );
}

function BusinessCard({
    business,
    isHovered,
    onHover,
    onLeave
}: {
    business: Business;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    return (
        <motion.div
            layout
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={cn(
                "relative group cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                "h-[350px] md:h-full w-full",
                "flex-none md:flex-1",
                isHovered && "md:flex-[4]"
            )}
        >
            {/* Background Image */}
            <Image
                src={business.image}
                alt={business.title}
                fill
                className="object-cover"
            />

            {/* Bottom Text Overlay Strip */}
            <div className={cn(
                "absolute bottom-0 left-0 right-0 z-10 transition-all duration-500 bg-black/60 backdrop-blur-[2px]",
                isHovered ? "h-auto py-6" : "h-16 flex items-center"
            )}>
                <div className="px-5 w-full">
                    <motion.h3
                        layout="position"
                        className="text-[14px] md:text-[15px] font-semibold tracking-wide text-white"
                    >
                        {business.title}
                    </motion.h3>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.p
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/80 text-[13px] leading-relaxed line-clamp-2"
                            >
                                {business.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* General Image Overlay (for legibility) */}
            <div className={cn(
                "absolute inset-0 bg-black/20 transition-opacity duration-500",
                isHovered ? "opacity-0" : "opacity-100"
            )} />
        </motion.div>
    );
}
