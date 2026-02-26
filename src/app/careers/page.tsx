import { CareersHero } from "@/components/features/careers/careers-hero";
import { WhyWorkWithUs } from "@/components/features/careers/why-work-with-us";
import { CultureGrowth } from "@/components/features/careers/culture-growth";

export const metadata = {
    title: "Careers - Nourish",
    description: "Join the Nourish team. Build your future with purpose, growth, and a mission to nourish Bangladesh.",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <CareersHero />
            <WhyWorkWithUs />
            <CultureGrowth />
        </main>
    );
}
