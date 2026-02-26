"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { TimelineEvent } from "@/data/content/about/timeline-data";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
    event: TimelineEvent;
    index: number;
    isActive: boolean;
}

export const TimelineCard = forwardRef<HTMLDivElement, TimelineCardProps>(
    function TimelineCard({ event, index, isActive }, ref) {
        const isEven = index % 2 === 0;

        return (
            <div ref={ref} className={cn(
                "relative w-full mb-20 md:mb-48 flex items-center justify-between",
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            )}>
                {/* Desktop Spacer (45%) - Pushes the card to the other side */}
                <div className="hidden md:block w-[45%]" />

                {/* Node Dot — centered on desktop, left-aligned on mobile */}
                <div
                    className={cn(
                        "absolute left-[24px] md:left-1/2 -translate-x-1/2 w-[16px] h-[16px] md:w-[18px] md:h-[18px] rounded-full z-30 transition-all duration-500",
                        isActive
                            ? "bg-[#e29e58] border-[4px] border-[#e29e58] shadow-[0_0_15px_rgba(226,158,88,0.6)] scale-125 md:scale-150"
                            : "bg-white border-[3px] border-[#e29e58]/30 shadow-sm scale-100"
                    )}
                />

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                        "relative z-20 w-[calc(100%-60px)] ml-auto md:ml-0 md:w-[45%] bg-white border border-slate-200 rounded-2xl p-6 md:p-8 transition-shadow duration-500",
                        isActive ? "shadow-lg shadow-neutral-200/50" : "shadow-sm"
                    )}
                >
                    {/* Connector Arrow (Desktop Only) */}
                    <div className={cn(
                        "absolute top-8 w-0 h-0 border-y-[10px] border-y-transparent hidden md:block",
                        isEven
                            ? "right-full border-r-[14px] border-r-slate-200"
                            : "left-full border-l-[14px] border-l-slate-200"
                    )} />
                    <div className={cn(
                        "absolute top-8 w-0 h-0 border-y-[9px] border-y-transparent hidden md:block",
                        isEven
                            ? "-left-[13px] border-r-[13px] border-r-white"
                            : "-right-[13px] border-l-[13px] border-l-white"
                    )} />

                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 md:mb-5 pb-4 md:pb-5 border-b border-slate-100">
                        {event.title}
                    </h3>

                    <ul className="space-y-3 md:space-y-4">
                        {event.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3 md:gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                <span className="text-xs md:text-base text-slate-800 leading-relaxed font-medium">
                                    {bullet}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        );
    }
);
