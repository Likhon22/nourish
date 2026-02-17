"use client";

import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import logo from "../../../public/img/logo.png";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
    const isScrolled = useScroll(50);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out px-6 lg:px-12",
                isScrolled
                    ? "bg-white shadow-md border-b border-slate-100 py-0"
                    : "bg-transparent border-b border-white/0 py-2"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
                <Link
                    href="/"
                    className="relative z-[110] block"
                >
                    <img
                        src={logo.src}
                        alt="Nourish"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block h-full">
                    <DesktopNav isScrolled={isScrolled} />
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <MobileNav isScrolled={isScrolled} />
                </div>
            </div>
        </nav>
    );
}
