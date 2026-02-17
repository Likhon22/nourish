"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
}

export function PrimaryButton({ text = "LEARN MORE", className, onClick }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn("group relative inline-block transition-transform active:scale-95 cursor-pointer", className)}
        >
            {/* The White Base/Shadow */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white rounded-lg" />

            {/* The Green Top Layer */}
            <motion.div
                whileHover={{ y: -4, x: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative flex items-center gap-3 bg-[#006837] text-white px-8 py-4 rounded-lg font-bold tracking-wider"
            >
                <span className="text-[15px]">{text}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.div>
        </button>
    );
}
