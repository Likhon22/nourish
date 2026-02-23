import { VideoBanner } from "@/components/ui/video-banner";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutTimeline } from "@/components/sections/about/about-timeline";
import { AboutContentBlocks } from "@/components/sections/about/about-content-blocks";

export const metadata = {
    title: "About Us - Nourish",
    description: "Learn about Nourish's journey, purpose, and impact in Bangladesh.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <AboutTimeline />
            <AboutContentBlocks />
        </main>
    );
}
