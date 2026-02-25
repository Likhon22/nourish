"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/nav-data";

interface MobileNavProps {
    isScrolled: boolean;
}

export function MobileNav({ isScrolled }: MobileNavProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleAccordion = (label: string) => {
        setOpenAccordion(openAccordion === label ? null : label);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setOpenAccordion(null);
    };

    return (
        <>
            {/* TRIGGER BUTTON */}
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "p-2 z-[110] transition-colors duration-300 relative",
                    isScrolled ? "text-slate-900" : "text-white"
                )}
                aria-label="Open menu"
            >
                <Menu size={28} />
            </button>

            {/* OVERLAY */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/40 z-[1000] transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={closeMenu}
            />

            {/* SIDEBAR CONTENT */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white z-[1001] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* HEADER */}
                <div className="p-6 border-b flex items-center justify-between bg-white sticky top-0 z-20">
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/img/branding/logo.png"
                            alt="Nourish"
                            width={100}
                            height={35}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                    <button
                        onClick={closeMenu}
                        className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* NAVIGATION LINKS */}
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col w-full">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="border-b border-slate-50">
                                {link.megaMenu ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleAccordion(link.label)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-base font-semibold text-slate-800 hover:text-[#006837] transition-colors uppercase tracking-wider text-left bg-white"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                className={cn(
                                                    "size-4 transition-transform duration-300 text-slate-400",
                                                    openAccordion === link.label ? "rotate-180" : ""
                                                )}
                                            />
                                        </button>

                                        {/* ACCORDION CONTENT */}
                                        <div
                                            className={cn(
                                                "overflow-hidden transition-all duration-300 bg-slate-50/50",
                                                openAccordion === link.label ? "max-h-[500px]" : "max-h-0"
                                            )}
                                        >
                                            <div className="flex flex-col gap-1 py-2">
                                                {link.megaMenu.links.map((sublink) => (
                                                    <Link
                                                        key={sublink.label}
                                                        href={sublink.href}
                                                        onClick={closeMenu}
                                                        className="group relative px-8 py-3 w-fit text-sm font-medium text-slate-700 hover:text-slate-900 transition-all block"
                                                    >
                                                        {sublink.label}
                                                        <span className="absolute bottom-2 left-8 w-[calc(100%-4rem)] h-[2px] bg-slate-700 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="flex items-center px-6 py-4 text-base font-semibold text-slate-800 hover:text-[#006837] uppercase tracking-wider transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER ACTION */}
                <div className="p-6 bg-slate-50 mt-auto border-t">
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="w-full py-4 bg-[#0a2e2d] text-white rounded-lg font-bold text-center block hover:bg-[#0d3d3c] transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </>
    );
}
