"use client";

import Link from "next/link";
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import {
    FOOTER_COLUMNS,
    FOOTER_SOCIAL_LINKS,
    FOOTER_COPYRIGHT,
    type SocialLink,
} from "@/data/footer-data";

// ─── Social Icon Map ─────────────────────────────────────────
const IconMap: Record<SocialLink["icon"], React.ElementType> = {
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube,
    instagram: Instagram,
    facebook: Facebook,
};

// ─── Footer Component ─────────────────────────────────────────
export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">

            {/* ── Main Link Columns ─────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-base font-bold text-[#006837] tracking-wider mb-5">
                                {col.heading}
                            </h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[15px] text-slate-500 hover:text-[#006837] transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Bottom Bar ────────────────────────────────── */}
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-slate-500 order-2 sm:order-1">
                        {FOOTER_COPYRIGHT}{" "}
                        <span className="text-[#006837] font-semibold">Nourish.</span>{" "}
                        All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 order-1 sm:order-2">
                        {FOOTER_SOCIAL_LINKS.map((social) => {
                            const Icon = IconMap[social.icon];
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2.5 bg-slate-900 text-white rounded-full hover:bg-[#006837] transition-colors duration-300"
                                >
                                    <Icon className="size-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

        </footer>
    );
}
