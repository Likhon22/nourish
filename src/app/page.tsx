import { Hero } from "@/components/features/home/hero";
import { ImpactSection } from "@/components/features/home/impact-section";
import { StorySection } from "@/components/features/home/story-section";
import { BusinessSection } from "@/components/features/home/business-section";
import { SustainabilitySection } from "@/components/features/home/sustainability-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactSection />
      <StorySection />
      <BusinessSection />
      <SustainabilitySection />
    </main>
  );
}
