"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: ReactNode;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function SectionHeader({
    title,
    description,
    className,
    titleClassName,
    descriptionClassName
}: SectionHeaderProps) {
    return (
        <div className={cn("max-w-7xl mx-auto mb-16 flex flex-col items-center justify-center text-center", className)}>
            <h2
                className={cn(
                    "text-4xl md:text-5xl font-bold text-slate-900 mb-6",
                    titleClassName
                )}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed",
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
