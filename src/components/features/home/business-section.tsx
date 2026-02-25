"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BUSINESSES, Business } from "@/data/content/home/business-data";
import { cn } from "@/lib/utils";
import { ExpandingGrid } from "@/components/ui/custom/expanding-grid";

import { SectionHeader } from "@/components/ui/custom/section-header";

export function BusinessSection() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
            <SectionHeader
                title="Our Businesses"
                description="From hatcheries and feed mills to farmer advisory services and food innovation, Nourish stands as more than a business. We are a movement — a promise to nourish People, Place, and Planet, and to build a food-secure Bangladesh for generations to come."
            />

            <ExpandingGrid
                items={BUSINESSES}
                containerClassName="h-auto md:h-[500px] lg:h-[550px]"
                itemClassName="h-[350px] md:h-full"
                renderItem={(business, isHovered) => (
                    <>
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
                    </>
                )}
            />
        </section>
    );
}
