"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
    headline: string;
    subtext: string;
    image: string;
    links: { label: string; href: string }[];
}

export function MegaMenu({ headline, subtext, image, links }: MegaMenuProps) {
    return (
        <div className="flex w-full h-full bg-white rounded-lg overflow-hidden">
            {/* Left Pane: Featured Content - Full Bleed */}
            <div className="relative w-[35%] h-full flex flex-col justify-end text-white">
                <Image
                    src={image}
                    alt={headline}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Dark Teal Overlay */}
                <div className="absolute inset-0 bg-[#0a2e2d]/80 z-10" />

                <div className="relative z-20 text-left p-6">
                    <h3 className="text-xl font-bold mb-1">{headline}</h3>
                    <p className="text-white/90 text-[15px] leading-snug mb-3 line-clamp-2">
                        {subtext}
                    </p>
                    <Link
                        href="/learn-more"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium hover:gap-2 transition-all underline underline-offset-4"
                    >
                        Learn more <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Right Pane: Links Grid */}
            <div className="flex-1 p-6 bg-white overflow-y-auto">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="group flex flex-col gap-0.5 transition-all text-left w-fit"
                        >
                            <span className="text-slate-800 text-sm font-semibold group-hover:text-slate-800 transition-colors">
                                {link.label}
                            </span>
                            <div className="h-[2px] w-full bg-slate-700 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
