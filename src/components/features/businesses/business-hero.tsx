"use client";

import { VideoBanner } from "@/components/ui/custom/video-banner";
import { motion } from "framer-motion";

export function BusinessHero() {
    return (
        <VideoBanner
            videoSrc="/videos/nourish1-C8QCRO6v.mp4"
            heightClass="h-[75vh]"
            overlayClass="bg-black/40"
            containerClass="items-center justify-center px-6 lg:px-12 pt-20"
        >
            <div className="relative z-20 max-w-5xl text-center flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-lg md:text-xl uppercase tracking-[0.3em] font-bold mb-6"
                >
                    Our Businesses
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
                >
                    Building a Better Food Future – <br className="hidden md:block" />
                    From Farm to Family
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed"
                >
                    At Nourish, our strength lies in integration. Across the poultry, livestock, dairy,
                    aquaculture, and food sectors, we have built an ecosystem that connects farmers
                    to consumers through innovation, efficiency, and care. Each division contributes
                    to a shared mission — to nourish people, places, and the planet.
                </motion.p>
            </div>
        </VideoBanner>
    );
}
