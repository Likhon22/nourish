"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { BusinessSegmentData } from "@/data/content/businesses/business-segments-data";
import { BusinessSegment } from "./business-segment";

interface BusinessSectionsProps {
    segments: BusinessSegmentData[];
}

export function BusinessSections({ segments }: BusinessSectionsProps) {
    const [activeId, setActiveId] = useState<string | null>(segments[0].id);

    const activeSegment = segments.find(s => s.id === activeId) || segments[0];
    const isImageLeft = activeSegment.imagePosition === "left";

    return (
        <div className="relative bg-white">
            {/* ── SHARED STICKY IMAGE LAYER (Overlay) ───────────────────── */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div className="max-w-[94rem] mx-auto h-full relative">
                        {/* Sliding Container - Vertically Centered */}
                        <motion.div
                            animate={{
                                x: isImageLeft ? "0%" : "100%",
                                opacity: activeId ? 1 : 0
                            }}
                            transition={{
                                x: { type: "spring", damping: 30, stiffness: 150, mass: 0.8 },
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8"
                        >
                            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.div
                                        key={activeSegment.image}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeSegment.image}
                                            alt={activeSegment.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SCROLLING TEXT CONTENT ─────────────────────────────────── */}
            <div className="relative z-10">
                {segments.map((segment, index) => (
                    <div
                        key={segment.id}
                        id={segment.id}
                        className={cn(
                            "flex flex-col justify-center",
                            "md:min-h-[80vh]",
                            index === 0 ? "pt-3 pb-8 md:pb-12" : "py-12 md:py-24"
                        )}
                    >
                        <SectionTracker
                            id={segment.id}
                            onActive={setActiveId}
                            isFirst={index === 0}
                        >
                            <BusinessSegment segment={segment} />
                        </SectionTracker>
                    </div>
                ))}
            </div>
        </div>
    );
}


function SectionTracker({
    id,
    onActive,
    children,
    isFirst
}: {
    id: string;
    onActive: (id: string) => void;
    children: React.ReactNode;
    isFirst?: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: isFirst ? 0.01 : 0.05, // Trigger much earlier for tall sections
        margin: "-10% 0px -45% 0px"
    });

    useEffect(() => {
        if (isInView) {
            onActive(id);
        }
    }, [isInView, id, onActive]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}
