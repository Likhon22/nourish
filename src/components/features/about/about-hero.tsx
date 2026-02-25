"use client";

import { VideoBanner } from "@/components/ui/custom/video-banner";
import { motion } from "framer-motion";

export function AboutHero() {
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
                    About Us
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
                >
                    Nourish: A Purpose <br className="hidden md:block" />
                    Beyond Profit
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white font-medium mb-8"
                >
                    Born in Bangladesh, inspired by the world.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-lg text-white/90 max-w-3xl  leading-relaxed"
                >
                    Since 1999, Nourish has been guided by a simple yet powerful belief — that feeding the world
                    is not just a business, but a sacred responsibility. Rooted in our nation’s soil and driven
                    by innovation, we have evolved from a small poultry enterprise into one of Bangladesh’s most
                    trusted and fully integrated agrifood companies. Our story is one of resilience, innovation,
                    and purpose — to nourish people, places, and the planet.
                </motion.p>
            </div>
        </VideoBanner>
    );
}
