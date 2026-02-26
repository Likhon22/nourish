"use client";

import { motion } from "framer-motion";
import { PERKS } from "@/data/content/careers/careers-data";
import { SectionHeader } from "@/components/ui/custom/section-header";
import { Sprout, TrendingUp, Users, GraduationCap, Globe, HeartHandshake } from "lucide-react";

const IconMap: Record<string, React.ElementType> = {
    Sprout, TrendingUp, Users, GraduationCap, Globe, HeartHandshake
};

export function WhyWorkWithUs() {
    return (
        <section id="why-work-with-us" className="py-24 px-6 lg:px-12 bg-white">
            <SectionHeader
                className="mb-16"
                title="Why Work With Us"
                description="At Nourish, a career isn't just a job. It is a chance to be part of something larger — a mission to nourish people, places, and the planet."
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PERKS.map((perk, index) => {
                    const Icon = IconMap[perk.icon];
                    return (
                        <motion.div
                            key={perk.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#006837] to-[#e29e58] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="p-4 rounded-xl bg-slate-50 text-[#006837] w-fit mb-6 group-hover:bg-[#006837]/10 transition-colors">
                                {Icon && <Icon className="size-7" strokeWidth={1.5} />}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                                {perk.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                {perk.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
