"use client";

import { IMPACT_METRICS } from "@/data/impact-data";
import { ImpactCard } from "./impact-card";
import { motion } from "framer-motion";

export function ImpactSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-[20px] font-semibold tracking-[0.2em] text-slate-800 uppercase">
                        Better Feed. Better Farms. Better Futures.
                    </span>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {IMPACT_METRICS.map((metric, index) => (
                        <ImpactCard
                            key={metric.label}
                            {...metric}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
