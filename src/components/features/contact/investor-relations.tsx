"use client";

import { motion } from "framer-motion";
import { INVESTOR_CONTACT } from "@/data/content/contact/contact-data";
import { SectionHeader } from "@/components/ui/custom/section-header";
import { Briefcase, Mail, Phone, FileText } from "lucide-react";
import { PrimaryButton } from "@/components/ui/custom/primary-button";

export function InvestorRelations() {
    return (
        <section id={INVESTOR_CONTACT.id} className="py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side - Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full bg-blue-600/10 text-blue-700 text-[13px] font-bold tracking-wider uppercase mb-6">
                            Financial Partnership
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                            {INVESTOR_CONTACT.title}
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed font-normal mb-10">
                            {INVESTOR_CONTACT.description}
                        </p>

                        <div className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                                <Briefcase className="size-6 text-[#006837]" />
                                Direct Contact
                            </h3>

                            <div className="space-y-4">
                                <a href={`mailto:${INVESTOR_CONTACT.email}`} className="flex items-center gap-4 text-slate-700 hover:text-[#006837] transition-colors font-medium">
                                    <div className="p-3 bg-white rounded-full shadow-sm"><Mail className="size-5 text-[#e29e58]" /></div>
                                    {INVESTOR_CONTACT.email}
                                </a>
                                {INVESTOR_CONTACT.phone && (
                                    <div className="flex items-center gap-4 text-slate-700 font-medium">
                                        <div className="p-3 bg-white rounded-full shadow-sm"><Phone className="size-5 text-[#e29e58]" /></div>
                                        {INVESTOR_CONTACT.phone}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Documents/Reports */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white border text-center border-slate-200 rounded-3xl p-10 md:p-14 shadow-xl shadow-slate-200/50"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
                            Key Resources
                        </h3>

                        <div className="space-y-4 mb-10 text-left">
                            {INVESTOR_CONTACT.documentLinks?.map((doc, i) => (
                                <a
                                    key={i}
                                    href={doc.href}
                                    className="group flex items-center justify-between p-5 rounded-xl bg-slate-50 hover:bg-[#006837] hover:text-white transition-all duration-300 border border-slate-100 hover:border-[#006837]"
                                >
                                    <div className="flex items-center gap-4">
                                        <FileText className="size-6 text-slate-400 group-hover:text-white transition-colors" />
                                        <span className="font-semibold">{doc.label}</span>
                                    </div>
                                    <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">PDF</span>
                                </a>
                            ))}
                        </div>


                    </motion.div>
                </div>

            </div>
        </section>
    );
}
