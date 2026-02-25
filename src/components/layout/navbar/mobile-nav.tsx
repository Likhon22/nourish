"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/nav-data";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/primitives/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/primitives/accordion";

interface MobileNavProps {
    isScrolled: boolean;
}

export function MobileNav({ isScrolled }: MobileNavProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    className={cn(
                        "p-2 z-[110] transition-colors duration-300",
                        isScrolled ? "text-slate-900" : "text-white"
                    )}
                >
                    <Menu size={28} />
                </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l-0">
                <SheetHeader className="p-6 border-b text-left">
                    <SheetTitle asChild>
                        <Link href="/" onClick={() => setOpen(false)}>
                            <Image
                                src="/img/logo.png"
                                alt="Nourish"
                                width={100}
                                height={35}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {NAV_LINKS.map((link) => (
                            <AccordionItem key={link.label} value={link.label} className="border-b-0">
                                {link.megaMenu ? (
                                    <>
                                        <AccordionTrigger className="px-6 py-4 text-base font-semibold text-slate-800 hover:text-[#006837] hover:no-underline transition-colors uppercase tracking-wider">
                                            <Link href={link.href} onClick={() => setOpen(false)} className="w-full text-left">
                                                {link.label}
                                            </Link>
                                        </AccordionTrigger>
                                        <AccordionContent className="bg-slate-50/50 pb-2">
                                            {/* Sub-links with hover underline */}
                                            <div className="flex flex-col gap-1 py-2">
                                                {link.megaMenu.links.map((sublink) => (
                                                    <Link
                                                        key={sublink.label}
                                                        href={sublink.href}
                                                        onClick={() => setOpen(false)}
                                                        className="group relative px-8 py-3 w-fit text-sm font-medium text-slate-700 hover:text-slate-900 transition-all"
                                                    >
                                                        {sublink.label}
                                                        <span className="absolute bottom-2 left-8 w-full h-[2px] bg-slate-700 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center px-6 py-4 text-base font-semibold text-slate-800 hover:text-[#006837] border-b border-slate-100 uppercase tracking-wider transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Mobile Footer/CTA Actions */}
                    <div className="mt-auto p-6 bg-slate-50">
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="w-full py-4 bg-[#0a2e2d] text-white rounded-lg font-bold text-center block hover:bg-[#0d3d3c] transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
