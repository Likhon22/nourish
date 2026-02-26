"use client";

import { motion } from "framer-motion";
import { WHATSAPP_CONTACT } from "@/data/content/contact/contact-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppBanner() {
    return (
        <section id={WHATSAPP_CONTACT.id} className="relative py-24 bg-[#006837] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <div className="p-5 bg-white/10 rounded-full text-white mb-8 backdrop-blur-sm">
                        <MessageCircle className="size-12" strokeWidth={1.5} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                        {WHATSAPP_CONTACT.headline}
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mx-auto mb-12">
                        {WHATSAPP_CONTACT.subtext}
                    </p>

                    <motion.a
                        href={WHATSAPP_CONTACT.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-[#006837] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all"
                    >
                        <MessageCircle className="size-6 fill-[#006837]" />
                        Chat on WhatsApp
                    </motion.a>

                    <p className="mt-6 text-white/70 font-medium">
                        or add us directly: {WHATSAPP_CONTACT.number}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
