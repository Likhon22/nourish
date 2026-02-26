import { VideoBanner } from "@/components/ui/custom/video-banner";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/features/about/about-hero";
import { AboutTimeline } from "@/components/features/about/about-timeline";
import { ContentBlockList } from "@/components/ui/custom/content-block-list";
import { ABOUT_CONTENT_BLOCKS } from "@/data/content/about/content-blocks-data";

export const metadata = {
    title: "About Us - Nourish",
    description: "Learn about Nourish's journey, purpose, and impact in Bangladesh.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <AboutTimeline />
            <ContentBlockList blocks={ABOUT_CONTENT_BLOCKS} />
        </main>
    );
}
