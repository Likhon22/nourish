import { SustainabilityBanner } from "@/components/features/sustainability/sustainability-banner";

import { SectionHeader } from "@/components/ui/custom/section-header";
import { SustainabilityContentBlocks } from "@/components/features/sustainability/sustainability-content-blocks";

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen">
            <SustainabilityBanner />

            <section className="py-20 px-6 lg:px-12 bg-white">
                <SectionHeader
                    title="Sustainability"
                    description="From hatcheries and feed mills to farmer advisory services and food innovation, Nourish stands as more than a business. We are a movement — a promise to nourish People, Place, and Planet, and to build a food-secure Bangladesh for generations to come."
                />
            </section>

            <SustainabilityContentBlocks />
        </main>
    );
}
