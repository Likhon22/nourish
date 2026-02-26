"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CORPORATE_LOCATIONS } from "@/data/content/contact/contact-data";
import { cn } from "@/lib/utils";
import { ExpandingGrid } from "@/components/ui/custom/expanding-grid";
import { SectionHeader } from "@/components/ui/custom/section-header";
import { MapPin, Phone, Mail } from "lucide-react";

export function CorporateLocations() {
    return (
        <section id="corporate-locations" className="py-24 px-6 lg:px-12 bg-slate-50 overflow-hidden">
            <SectionHeader
                className="mb-16"
                title="Corporate Locations"
                description="With headquarters in Dhaka and regional facilities across Bangladesh, Nourish maintains a robust nationwide presence."
            />

            <ExpandingGrid
                items={CORPORATE_LOCATIONS}
                containerClassName="h-auto md:h-[450px] lg:h-[500px] max-w-7xl mx-auto"
                itemClassName="h-[350px] md:h-full"
                renderItem={(location, isHovered) => (
                    <>
                        {/* Background Image */}
                        <Image
                            src={location.image}
                            alt={location.city}
                            fill
                            className="object-cover"
                        />

                        {/* Top Badge */}
                        <div className="absolute top-6 left-5 z-20">
                            <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                {location.type}
                            </span>
                        </div>

                        {/* Bottom Text Overlay Strip */}
                        <div className={cn(
                            "absolute bottom-0 left-0 right-0 z-10 transition-all duration-500 bg-black/70 backdrop-blur-md",
                            isHovered ? "h-auto py-6" : "h-20 flex items-center"
                        )}>
                            <div className="px-6 w-full">
                                <motion.h3
                                    layout="position"
                                    className="text-2xl font-bold tracking-tight text-white mb-1"
                                >
                                    {location.city}
                                </motion.h3>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-3"
                                        >
                                            <div className="flex items-start gap-3 text-white/90">
                                                <MapPin className="size-5 shrink-0 text-[#e29e58]" />
                                                <p className="text-[14px] leading-relaxed">
                                                    {location.address}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 text-white/90">
                                                <Phone className="size-5 shrink-0 text-[#e29e58]" />
                                                <p className="text-[14px]">
                                                    {location.phone}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 text-white/90">
                                                <Mail className="size-5 shrink-0 text-[#e29e58]" />
                                                <p className="text-[14px]">
                                                    {location.email}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* General Image Overlay */}
                        <div className={cn(
                            "absolute inset-0 transition-all duration-500",
                            isHovered ? "bg-black/40" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        )} />
                    </>
                )}
            />
        </section>
    );
}
