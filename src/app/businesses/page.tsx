import { BusinessHero } from "@/components/sections/businesses/business-hero";
import { BusinessSections } from "@/components/sections/businesses/business-sections";
import { BUSINESS_SEGMENTS } from "@/data/businesses/business-segments-data";

export const metadata = {
    title: "Our Businesses - Nourish",
    description: "Explore Nourish's integrated agrifood ecosystem, from poultry and livestock to food innovation.",
};

export default function BusinessesPage() {
    return (
        <main className="min-h-screen bg-white">
            <BusinessHero />
            <BusinessSections segments={BUSINESS_SEGMENTS} />
        </main>
    );
}
