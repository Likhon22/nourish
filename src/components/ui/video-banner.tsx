"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface VideoBannerProps {
    videoSrc: string;
    children: ReactNode;
    heightClass?: string;
    overlayClass?: string;
    containerClass?: string;
}

export function VideoBanner({
    videoSrc,
    children,
    heightClass = "h-[75vh]",
    overlayClass = "bg-black/30",
    containerClass,
}: VideoBannerProps) {
    return (
        <section className={cn("relative w-full overflow-hidden flex", heightClass, containerClass)}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay for Contrast */}
            <div className={cn("absolute inset-0 z-10", overlayClass)} />

            {/* Content Layer */}
            {children}
        </section>
    );
}
