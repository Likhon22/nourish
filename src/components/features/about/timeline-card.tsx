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
                "relative w-full mb-32 flex justify-center md:justify-between items-center",
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            )}>
                {/* Spacer on the opposite side */}
                <div className="hidden md:block w-[45%]" />

                {/* Central Node — driven entirely by isActive prop */}
                <div
                    className={cn(
                        "absolute left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full z-10 transition-all duration-500",
                        isActive
                            ? "bg-[#e29e58] border-[4px] border-[#e29e58] shadow-[0_0_20px_rgba(226,158,88,0.8)] scale-150"
                            : "bg-white border-[3px] border-[#e29e58]/50 shadow-sm scale-100"
                    )}
                />

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={cn(
                        "w-[85%] md:w-[45%] bg-white border border-slate-200 rounded-2xl p-8 transition-shadow duration-500 relative",
                        isActive ? "shadow-lg shadow-neutral-200/50" : "shadow-sm"
                    )}
                >
                    {/* Connector Arrow */}
                    <div className={cn(
                        "absolute top-8 w-0 h-0 border-y-[10px] border-y-transparent hidden md:block",
                        isEven
                            ? "right-full border-r-[14px] border-r-neutral-200"
                            : "left-full border-l-[14px] border-l-neutral-200"
                    )} />
                    <div className={cn(
                        "absolute top-8 w-0 h-0 border-y-[9px] border-y-transparent hidden md:block",
                        isEven
                            ? "-left-[13px] border-r-[13px] border-r-white"
                            : "-right-[13px] border-l-[13px] border-l-white"
                    )} />

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 pb-5 border-b border-slate-100">
                        {event.title}
                    </h3>

                    <ul className="space-y-4">
                        {event.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                                <span className="text-sm md:text-base text-slate-800 leading-relaxed font-medium">
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
