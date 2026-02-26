export interface LocationData {
    id: string;
    city: string;
    type: string;
    address: string;
    phone: string;
    email: string;
    image: string;
}

export interface InquiryContact {
    id: string;
    title: string;
    description: string;
    email: string;
    phone?: string;
    icon: string;
}

export const CORPORATE_LOCATIONS: LocationData[] = [
    {
        id: "hq-dhaka",
        city: "Dhaka",
        type: "Corporate Headquarters",
        address: "Nourish Center, Bir Uttam Mir Shawkat Sarak, Tejgaon I/A, Dhaka-1208, Bangladesh",
        phone: "+880-2-2222-12345",
        email: "info@nourish-poultry.com",
        image: "/img/business/business_poultry.jpg" // We will use a placeholder or generic architectural image if not present
    },
    {
        id: "factory-gazipur",
        city: "Gazipur",
        type: "Primary Feed Mill & Processing",
        address: "Mawna, Sreepur, Gazipur, Bangladesh",
        phone: "+880-9612-345678",
        email: "operations@nourish-poultry.com",
        image: "/img/business/business_poultry.jpg"
    },
    {
        id: "hatchery-bogra",
        city: "Bogra",
        type: "Regional Hatchery Unit",
        address: "Sherpur Road, Bogra, Bangladesh",
        phone: "+880-51-67890",
        email: "hatchery.bogra@nourish-poultry.com",
        image: "/img/business/business3.jpg"
    }
];

export const INVESTOR_CONTACT = {
    id: "investor-relations",
    title: "Investor Relations",
    description: "Nourish is committed to transparency, corporate governance, and sustainable growth. Our Investor Relations team is dedicated to providing shareholders, analysts, and financial partners with timely and accurate information.",
    email: "investors@nourish-poultry.com",
    phone: "+880-2-2222-12345 Ext: 401",
    documentLinks: [
        { label: "Annual Report 2024", href: "/reports/annual-2024.pdf" },
        { label: "Corporate Governance Guidelines", href: "/reports/governance.pdf" }
    ]
};

export const MEDIA_CONTACT = {
    id: "media-inquiries",
    title: "Media & Press",
    description: "For press releases, interview requests, and corporate communications, please reach out to our media relations office. We are happy to provide journalists with the resources and insights they need.",
    email: "media@nourish-poultry.com",
    phone: "+880-2-2222-12345 Ext: 505",
    mediaKitLink: "/resources/media-kit.zip"
};

export const WHATSAPP_CONTACT = {
    id: "whatsapp-live-contact",
    headline: "Fast Support. Direct to You.",
    subtext: "Connect instantly with our support team on WhatsApp for product inquiries, farmer advisory, or general assistance.",
    number: "+880 17 0000 0000",
    link: "https://wa.me/8801700000000"
};
