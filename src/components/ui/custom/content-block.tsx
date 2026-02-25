"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContentBlockData } from "@/data/content/about/content-blocks-data";

interface ContentBlockProps {
    block: ContentBlockData;
    index: number;
}

export function ContentBlock({ block, index }: ContentBlockProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.35, 0.72]);
    // Image starts shrinking earlier — from the very beginning, reaching 0.88 at exit
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

    return (
        <div className="w-full">
            {/* ── STICKY IMAGE SECTION ─────────────────────────────────── */}
            <div ref={containerRef} className="relative h-[200vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden px-4 md:px-8">
                    <motion.div
                        className="relative w-full h-full overflow-hidden rounded-2xl"
                        style={{ scale: imageScale, transformOrigin: "center center" }}
                    >
                        <Image
                            src={block.image}
                            alt={block.imageCaption}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority={index === 0}
                        />
                        <motion.div
                            className="absolute inset-0"
                            style={{ backgroundColor: "black", opacity: overlayOpacity }}
                        />
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
                            style={{ y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
                        >
                            {block.imageSubheading && (
                                <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">
                                    {block.imageSubheading}
                                </p>
                            )}
                            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                {block.imageCaption}
                            </h2>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── TWO-COLUMN CONTENT ───────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-16">

                    {/* Left: Large title with thin underline */}
                    <div className="md:pt-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:sticky md:top-32"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug whitespace-pre-line">
                                {block.leftTitle}
                            </h2>
                            <div className="mt-4 w-10 h-[2px] bg-slate-300" />
                        </motion.div>
                    </div>

                    {/* Dynamic content groups  */}
                    <div className="space-y-8">
                        {block.contentGroups.map((group, gi) => (
                            <div key={gi} className="space-y-4">
                                {/* Optional section mini-label with divider */}
                                {group.sectionLabel && (
                                    <div className="pt-2">
                                        <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                            {group.sectionLabel}
                                        </span>
                                        <div className="mt-2 w-full h-[1px] bg-slate-200" />
                                    </div>
                                )}

                                {/* Optional prose paragraph */}
                                {group.paragraph && (
                                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                                        {group.paragraph}
                                    </p>
                                )}

                                {/* Optional bullet list — supports bold term prefix */}
                                {group.bullets && group.bullets.length > 0 && (
                                    <ul className="space-y-3 pt-1">
                                        {group.bullets.map((bullet, bi) => (
                                            <li key={bi} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-[0.6rem] flex-shrink-0" />
                                                <span className="text-base text-slate-700 leading-relaxed">
                                                    {bullet.term && (
                                                        <strong className="font-semibold text-lg text-slate-900">
                                                            {bullet.term}:{" "}
                                                        </strong>
                                                    )}
                                                    {bullet.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {/* Optional pull-quote box */}
                        {block.quote && (
                            <blockquote className="mt-4 px-6 py-5 bg-slate-50 border border-slate-200 rounded-xl">
                                <p className="text-slate-600 text-base md:text-lg italic leading-relaxed">
                                    &ldquo;{block.quote}&rdquo;
                                </p>
                            </blockquote>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
