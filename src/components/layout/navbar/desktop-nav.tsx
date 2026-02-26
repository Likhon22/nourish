"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./mega-menu";
import { NAV_LINKS } from "@/data/nav-data";

interface DesktopNavProps {
    isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150); // Small grace period for moving to the dropdown
    };

    return (
        <div className="relative flex items-center h-full">
            <nav className="flex items-center gap-2 h-full">
                {NAV_LINKS.map((link) => (
                    <div
                        key={link.label}
                        className="h-full flex items-center"
                        onMouseEnter={() => link.megaMenu && handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href={link.href}
                            className={cn(
                                "h-full inline-flex items-center justify-center px-4 transition-colors duration-300 relative group/item",
                                "text-md font-semibold",
                                isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"
                            )}
                        >
                            <span className="flex items-center gap-1">
                                {link.label}
                                {link.megaMenu && (
                                    <ChevronDownIcon
                                        className={cn(
                                            "size-3 transition-transform duration-300",
                                            activeMenu === link.label ? "rotate-180" : ""
                                        )}
                                        aria-hidden="true"
                                    />
                                )}
                            </span>

                            {/* Underline logic */}
                            <span
                                className={cn(
                                    "absolute bottom-[24px] left-0 right-0 h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover/item:scale-x-100",
                                    activeMenu === link.label && "scale-x-100",
                                    isScrolled ? "bg-slate-700 mx-4 w-[calc(100%-2rem)]" : "bg-white mx-4 w-[calc(100%-2rem)]"
                                )}
                            />
                        </Link>
                    </div>
                ))}
            </nav>

            {/* SHARED VIEWPORT (DROPDOWN CONTAINER) */}
            <div
                className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-0 transition-all duration-300 z-[100]",
                    activeMenu ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-[768px] h-[220px] bg-white   shadow-xl rounded-lg overflow-hidden">
                    {NAV_LINKS.map((link) => (
                        link.megaMenu && activeMenu === link.label && (
                            <div key={link.label} className="h-full">
                                <MegaMenu {...link.megaMenu} />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
