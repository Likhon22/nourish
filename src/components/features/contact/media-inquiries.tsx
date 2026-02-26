"use client";

import { motion } from "framer-motion";
import { MEDIA_CONTACT } from "@/data/content/contact/contact-data";
import { Megaphone, Mail, Phone, Download } from "lucide-react";
import Image from "next/image";

export function MediaInquiries() {
    return (
        <section id={MEDIA_CONTACT.id} className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">

                {/* Right Side (visually right, DOM order reverse) - Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-100 text-[#e29e58] text-[13px] font-bold tracking-wider uppercase mb-6">
                            <Megaphone className="size-4" />
                            Press Office
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                            {MEDIA_CONTACT.title}
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8">
                            {MEDIA_CONTACT.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <Mail className="size-8 text-[#006837] mb-4" />
                                <h4 className="font-bold text-slate-900 mb-2">Email Desk</h4>
                                <a href={`mailto:${MEDIA_CONTACT.email}`} className="text-slate-600 hover:text-[#006837] transition-colors">
                                    {MEDIA_CONTACT.email}
                                </a>
                            </div>

                            {MEDIA_CONTACT.phone && (
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <Phone className="size-8 text-[#006837] mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Press Hotline</h4>
                                    <span className="text-slate-600">
                                        {MEDIA_CONTACT.phone}
                                    </span>
                                </div>
                            )}
                        </div>


                    </motion.div>
                </div>

                {/* Left Side - Image/Visual */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/img/business/business5.jpg" // Placeholder for PR/Event image
                            alt="Nourish Press Event"
                            fill
                            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10 group-hover:from-black/80 transition-all duration-[1200ms]">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Shaping the Narrative</h3>
                                <p className="text-white/80">See Nourish making headlines across national news and media outlets.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
