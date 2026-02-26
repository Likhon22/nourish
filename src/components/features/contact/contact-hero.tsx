"use client";

import { BannerHero } from "@/components/ui/custom/banner-hero";

export function ContactHero() {
    return (
        <BannerHero
            badge="Support & Inquiries"
            title="Get in Touch"
            description="Whether you have a question about our products, need farmer advisory support, or are looking for business partnerships, our team is here to help."
            bgClassName="bg-gradient-to-br from-[#006837] via-[#005a2f] to-[#004d29]"
        />
    );
}
