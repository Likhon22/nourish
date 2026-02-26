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
            { label: "Our Story", href: "/about#our-story" },
            { label: "Culture & Values", href: "/about#culture-values" },
            { label: "Leadership", href: "/about#leadership" },
            { label: "Quality & Traceability", href: "/about#quality-traceability" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Source Partner Selection", href: "/about#source-partner-selection" },
        ],
    },
    {
        heading: "Our Impact",
        links: [
            { label: "Farmer Success Stories", href: "/sustainability#farmer-stories" },
            { label: "Innovation", href: "/sustainability#innovation" },
            { label: "Community Initiatives", href: "/sustainability#community" },
            { label: "Our People", href: "/about#our-people" },
            { label: "Our Locations", href: "/contact#corporate-locations" },
            { label: "Our Partners", href: "/businesses#partnerships" },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Careers", href: "/careers" },
            { label: "News", href: "/news" },
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
