"use client";

import { motion } from "framer-motion";
import { VideoBanner } from "@/components/ui/custom/video-banner";

export function Hero() {
    return (
        <VideoBanner
            videoSrc="/videos/nourish1-C8QCRO6v.mp4"
            heightClass="h-screen"
            containerClass="items-end justify-start pb-20 px-6 lg:px-12"
        >
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
        </VideoBanner>
    );
}
