"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./mega-menu";
import { NAV_LINKS } from "@/data/nav-data";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
    isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
    return (
        <NavigationMenu className="max-w-none h-full">
            <NavigationMenuList className="gap-2 h-full">
                {NAV_LINKS.map((link) => (
                    <NavigationMenuItem key={link.label}>
                        {link.megaMenu ? (
                            <>
                                <NavigationMenuTrigger
                                    className={cn(
                                        "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent px-0 mx-4 cursor-pointer",
                                        "text-md font-semibold transition-colors duration-100 relative group/item",
                                        isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"
                                    )}
                                >
                                    <Link href={link.href} className="w-full h-full flex items-center">
                                        {link.label}
                                        <span
                                            className={cn(
                                                "absolute bottom-[2px] left-0 w-[calc(100%-1.25rem)] h-[2px] bg-slate-700 transition-transform duration-300 origin-left scale-x-0 group-hover/item:scale-x-100 group-data-[state=open]/item:scale-x-100",
                                                !isScrolled && "bg-white"
                                            )}
                                        />
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <MegaMenu {...link.megaMenu} />
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-transparent focus:bg-transparent px-0 mx-4 cursor-pointer",
                                        "text-md font-semibold transition-colors duration-300 relative group/item",
                                        isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    <span
                                        className={cn(
                                            "absolute bottom-[2px] left-0 w-full h-[2px] bg-slate-700 transition-transform duration-300 origin-left scale-x-0 group-hover/item:scale-x-100",
                                            !isScrolled && "bg-white"
                                        )}
                                    />
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 shadow-lg z-50 rounded-lg overflow-hidden">
                <NavigationMenuViewport className="w-[768px] h-[200px] border rounded-lg" />
            </div>
        </NavigationMenu>
    );
}
