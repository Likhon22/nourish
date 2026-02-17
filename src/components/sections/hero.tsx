"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end justify-start pb-20 px-6 lg:px-12">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/nourish1-C8QCRO6v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content - Bottom Left Aligned */}
            <div className="relative z-20 max-w-4xl text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                >
                    From Bangladesh to the World,<br />
                    Nourishing People, Place, & Planet
                </motion.h1>
            </div>
        </section>
    );
}
