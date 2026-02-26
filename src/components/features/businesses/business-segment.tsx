"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { BusinessSegmentData } from "@/data/content/businesses/business-segments-data";
import { motion } from "framer-motion";

interface BusinessSegmentProps {
    segment: BusinessSegmentData;
}

export function BusinessSegment({ segment }: BusinessSegmentProps) {
    const isImageLeft = segment.imagePosition === "left";

    return (
        <div className="max-w-[94rem] mx-auto">
            <div className={cn(
                "flex flex-col lg:flex-row",
                "md:min-h-screen"
            )}>

                {/* Image Column - Only visible on Mobile */}
                <div className={cn(
                    "lg:hidden w-full relative flex items-center justify-center p-6 pb-2",
                    isImageLeft ? "order-1" : "order-1"
                )}>
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                        <Image
                            src={segment.image}
                            alt={segment.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content Column - Centered horizontally in its half */}
                <div className={cn(
                    "w-full lg:w-1/2 px-6 py-6 md:py-24 lg:py-32 flex flex-col justify-start lg:pt-32",
                    isImageLeft ? "lg:ml-[50%] lg:pl-20" : "lg:mr-[50%] lg:pr-20 lg:order-1"
                )}>
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        {/* Header Area */}
                        <div className="space-y-4">
                            <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-[13px] font-bold tracking-wider uppercase">
                                {segment.badge}
                            </span>

                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                                    {segment.title}
                                </h2>
                                {segment.subtitle && (
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {segment.subtitle}
                                    </h3>
                                )}
                            </div>

                            {segment.description && (
                                <p className="text-xl text-slate-900 leading-relaxed font-normal pt-1">
                                    {segment.description}
                                </p>
                            )}
                        </div>

                        {/* Optional Features Heading */}
                        {segment.featuresHeading && (
                            <div className="mt-10 mb-6">
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {segment.featuresHeading}
                                </h3>
                            </div>
                        )}

                        {/* Feature Boxes */}
                        <div className="space-y-3 mt-4">
                            {segment.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="border border-slate-300 rounded-lg p-4 bg-white/70 shadow-sm"
                                >
                                    <h4 className="text-xl font-semibold text-black mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-lg text-slate-700 leading-relaxed font-normal">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
