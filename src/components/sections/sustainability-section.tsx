"use client";

import { SUSTAINABILITY_METRICS } from "@/data/sustainability-data";
import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/primary-button";
import Image from "next/image";

export function SustainabilitySection() {
    return (
        <section className="relative min-h-[520px] flex items-center py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/home/impact.jpg"
                    alt="Sustainability & Impact"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[10px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Sustainability & Impact
                    </h2>
                    <p className="max-w-3xl mx-auto text-base md:text-lg  text-white/95 mb-12 leading-relaxed font-medium">
                        At Nourish, Impact means stronger livelihoods and a more food-secure Bangladesh. From
                        science-backed nutrition to practical field support, we help farmers raise healthier birds and
                        animals, improve yields, and reduce waste—sustainably and affordably.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
                    {SUSTAINABILITY_METRICS.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col items-start text-left"
                        >
                            <div className="w-full h-[1.5px] bg-white/40 mb-5" />
                            <h3 className="text-4xl md:text-5xl font-bold mb-3">
                                {metric.value}
                            </h3>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-2">
                                {metric.label}
                            </h4>
                            <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-white/85 italic mb-8 text-base font-light leading-relaxed">
                        These aren&apos;t just metrics—they reflect farmers empowered, supply chains strengthened,
                        and communities moving toward lasting food security.
                    </p>
                    <div className="flex justify-center">
                        <PrimaryButton
                            text="Learn more about our Impact"
                            className="scale-100"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
