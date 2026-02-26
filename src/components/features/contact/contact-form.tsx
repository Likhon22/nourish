"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/custom/primary-button";

export function ContactForm() {
    return (
        <section id="contact-form" className="relative bg-white border-t border-slate-100">
            {/* ── SHARED STICKY IMAGE LAYER (Overlay) ───────────────────── */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div className="max-w-[94rem] mx-auto h-full relative">
                        <motion.div
                            className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8"
                        >
                            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/business/business_poultry.jpg" // Using an existing high-quality image placeholder
                                    alt="Nourish Support"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SCROLLING FORM CONTENT ─────────────────────────────────── */}
            <div className="relative z-10 max-w-[94rem] mx-auto">
                <div className="flex flex-col lg:flex-row min-h-[80vh]">

                    {/* Image Column - Visible only on Mobile */}
                    <div className="lg:hidden w-full relative min-h-[300px] flex items-center justify-center p-6 bg-slate-50">
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/img/business/business_poultry.jpg"
                                alt="Nourish Support"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="w-full lg:w-1/2 px-6 py-16 lg:py-24 flex flex-col justify-center lg:ml-[50%] lg:pl-20 bg-white">
                        <div className="max-w-xl mx-auto lg:mx-0 w-full">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
                                Send us a Message
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Fill out the form below and a representative from the appropriate division will respond shortly.
                            </p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-900">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-900">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="division" className="text-sm font-semibold text-slate-900">Inquiry Division</label>
                                    <select
                                        id="division"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none"
                                    >
                                        <option value="">Select a specific division...</option>
                                        <option value="poultry">Poultry & DOC</option>
                                        <option value="feed">Feed Products</option>
                                        <option value="foods">Processed Foods (Chicken Street, etc.)</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-900">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                                        placeholder="How can we help you today?"
                                    />
                                </div>

                                <div className="pt-2">
                                    <PrimaryButton text="Send Message" className="w-full justify-center" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
