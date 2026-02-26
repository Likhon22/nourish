"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BannerHeroProps {
    badge: string;
    title: string;
    description: string;
    /** Tailwind bg class — e.g. "bg-[#006837]" or "bg-slate-900" */
    bgClassName?: string;
    /** Optional CTA slot rendered below the description */
    cta?: React.ReactNode;
}

/**
 * BannerHero — solid-color full-width page banner.
 * Use for inner pages like Contact, Careers, etc.
 * For video/image backgrounds use PageHero instead.
 */
export function BannerHero({
    badge,
    title,
    description,
    bgClassName = "bg-[#006837]",
    cta,
}: BannerHeroProps) {
    return (
        <section className={cn(
            "relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center",
            bgClassName
        )}>
            {/* Subtle radial glow for depth */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[13px] font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                        {badge}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal">
                        {description}
                    </p>
                    {cta && <div className="mt-10">{cta}</div>}
                </motion.div>
            </div>
        </section>
    );
}
