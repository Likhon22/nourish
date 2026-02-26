"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CULTURE_VALUES } from "@/data/content/careers/careers-data";
import { SectionHeader } from "@/components/ui/custom/section-header";

export function CultureGrowth() {
    return (
        <section id="culture-growth" className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-100">
            <SectionHeader
                className="mb-16"
                title="Culture & Growth"
                description="Our culture is built on trust, ambition, and a shared sense of purpose. Here is how Nourish shapes careers and lives."
            />

            <div className="max-w-7xl mx-auto space-y-16">
                {CULTURE_VALUES.map((value, index) => {
                    const isImageLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
                        >
                            {/* Image Block */}
                            <div className="w-full lg:w-1/2">
                                <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={value.image}
                                        alt={value.title}
                                        fill
                                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                                    />
                                    {/* Stat Badge */}
                                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                                        <p className="text-3xl font-bold text-[#006837]">{value.stat}</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{value.statLabel}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="w-full lg:w-1/2 space-y-5">
                                <span className="inline-block px-5 py-2 rounded-full bg-[#006837]/10 text-[#006837] text-[13px] font-bold tracking-wider uppercase">
                                    Our Culture
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                                    {value.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed font-normal">
                                    {value.description}
                                </p>
                                {/* Divider line accent */}
                                <div className="w-16 h-1 bg-[#e29e58] rounded-full" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
