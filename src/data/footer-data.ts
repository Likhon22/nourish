// ─── Footer Data Layer ─────────────────────────────────────────
// Mirrors the architectural pattern of nav-data.ts

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    heading: string;
    links: FooterLink[];
}

export interface SocialLink {
    label: string;
    href: string;
    icon: "linkedin" | "twitter" | "youtube" | "instagram" | "facebook";
}

// ─── Three link columns (matching the reference image) ────────

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        heading: "About Nourish",
        links: [
            { label: "Our Story & Evolution", href: "/about#story" },
            { label: "Leadership & Governance", href: "/about#leadership" },
            { label: "Our Contribution", href: "/about#contribution" },
            { label: "The Nourish DNA", href: "/about#dna" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Global Recognition", href: "/about#awards" },
        ],
    },
    {
        heading: "Our Impact",
        links: [
            { label: "Circular Economy", href: "/sustainability#circular-economy" },
            { label: "Smallholder Empowerment", href: "/sustainability#empowerment" },
            { label: "Animal Welfare & Ethics", href: "/sustainability#animal-welfare" },
            { label: "Our People", href: "/about#contribution" },
            { label: "Our Partners", href: "/businesses" },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Careers", href: "/careers" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
];

// ─── Bottom Bar ───────────────────────────────────────────────

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
];

export const FOOTER_COPYRIGHT = "© 2025 Nourish. All rights reserved.";
