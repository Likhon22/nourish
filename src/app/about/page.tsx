import { VideoBanner } from "@/components/ui/video-banner";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/sections/about/about-hero";

export const metadata = {
    title: "About Us - Nourish",
    description: "Learn about Nourish's journey, purpose, and impact in Bangladesh.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />

        </main>
    );
}
