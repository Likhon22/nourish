import { ContactHero } from "@/components/features/contact/contact-hero";
import { ContactForm } from "@/components/features/contact/contact-form";
import { CorporateLocations } from "@/components/features/contact/corporate-locations";
import { InvestorRelations } from "@/components/features/contact/investor-relations";
import { MediaInquiries } from "@/components/features/contact/media-inquiries";
import { WhatsAppBanner } from "@/components/features/contact/whatsapp-banner";

export const metadata = {
    title: "Contact Us - Nourish",
    description: "Get in touch with Nourish for business inquiries, farmer support, investor relations, and media requests.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactForm />
            <CorporateLocations />
            <InvestorRelations />
            <MediaInquiries />
            <WhatsAppBanner />
        </main>
    );
}

