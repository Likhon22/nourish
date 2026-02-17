import { Hero } from "@/components/sections/hero";
import { ImpactSection } from "@/components/sections/impact-section";
import { StorySection } from "@/components/sections/story-section";
import { BusinessSection } from "@/components/sections/business-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";

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
