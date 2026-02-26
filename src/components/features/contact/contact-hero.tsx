"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/custom/section-header";

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center bg-[#006837]">
            {/* Very subtle Background Pattern for depth */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[13px] font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                        Support & Inquiries
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-normal">
                        Whether you have a question about our products, need farmer advisory support, or are looking for business partnerships, our team is here to help.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
