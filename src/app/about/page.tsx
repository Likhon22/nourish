import { VideoBanner } from "@/components/ui/custom/video-banner";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/features/about/about-hero";
import { AboutTimeline } from "@/components/features/about/about-timeline";
import { AboutContentBlocks } from "@/components/features/about/about-content-blocks";

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
