"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE_DATA } from "@/data/content/about/timeline-data";
import { TimelineCard } from "./timeline-card";

import { SectionHeader } from "@/components/ui/custom/section-header";

export function AboutTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    // Scroll progress for the animated spine line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });
    const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const handleScroll = () => {
            const center = window.innerHeight / 2;
            let closest = -1;
            let closestDist = Infinity;

            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                const dist = Math.abs(mid - center);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            });

            // Only activate if the closest card's node is within 40% of screen height from center
            const threshold = window.innerHeight * 0.4;
            setActiveIndex(closestDist < threshold ? closest : -1);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="story" className="py-24 bg-white overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <SectionHeader
                    className="mb-24"
                    title={
                        <>
                            Our Story & Evolution <span className="font-normal opacity-90">(2000–2025)</span>
                        </>
                    }
                    description="From humble beginnings to national leadership, Nourish's journey reflects Bangladesh's agricultural renaissance."
                />

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Static Background Spine */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200" />

                    {/* Animated Colored Spine */}
                    <motion.div
                        className="absolute left-[calc(50%-0.5px)] top-0 w-[1px] bg-[#e29e58] origin-top"
                        style={{ scaleY: spineHeight }}
                    />

                    {/* Timeline Events */}
                    <div className="relative z-10 py-12">
                        {TIMELINE_DATA.map((event, index) => (
                            <TimelineCard
                                key={event.id}
                                event={event}
                                index={index}
                                isActive={activeIndex === index}
                                ref={(el: HTMLDivElement | null) => {
                                    cardRefs.current[index] = el;
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
