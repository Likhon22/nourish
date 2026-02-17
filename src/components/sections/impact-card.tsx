"use client";

import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface ImpactCardProps {
    value: string;
    label: string;
    description: string;
    index: number;
}

export function ImpactCard({ value, label, description, index }: ImpactCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Parse the value string (e.g., "50K+" -> numeric: 50, suffix: "K+")
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    const isDecimal = value.includes(".");

    const count = useMotionValue(0);

    const displayCount = useTransform(count, (latest) => {
        const val = latest as number;
        if (isDecimal) {
            return val.toFixed(1);
        }
        return Math.floor(val).toString();
    });

    useEffect(() => {
        if (isInView) {
            animate(count, numericPart, {
                duration: 2,
                ease: "easeOut",
            });
        }
    }, [isInView, count, numericPart]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center p-6"
        >
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight flex items-baseline">
                <motion.span>{displayCount}</motion.span>
                <span className="text-4xl md:text-5xl ml-0.5">{suffix}</span>
            </h3>
            <h4 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wider">
                {label}
            </h4>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-[280px]">
                {description}
            </p>
        </motion.div>
    );
}
