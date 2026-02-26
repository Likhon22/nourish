import Image from "next/image";
import Link from "next/link";

// ─── Perks / Reasons to Work Here ──────────────────────────────
export interface Perk {
    icon: string;
    title: string;
    description: string;
}

export const PERKS: Perk[] = [
    {
        icon: "Sprout",
        title: "Purpose-Driven Work",
        description: "Every role at Nourish contributes directly to Bangladesh's food security. Your work feeds families, empowers farmers, and builds a more resilient nation."
    },
    {
        icon: "TrendingUp",
        title: "Rapid Career Growth",
        description: "We are a fast-growing organization. High performers are recognized quickly and given increasing responsibility, leadership roles, and market-leading compensation."
    },
    {
        icon: "Users",
        title: "Collaborative Teams",
        description: "From hatcheries to R&D labs, our teams are collaborative, cross-functional, and driven by shared goals. You will work alongside some of the best minds in agrifood."
    },
    {
        icon: "GraduationCap",
        title: "Learning & Development",
        description: "Nourish invests heavily in training. Whether it's on-site workshops, international partnherships, or certification programs, we help you grow professionally."
    },
    {
        icon: "Globe",
        title: "International Exposure",
        description: "Our partnerships with global genetics companies (Aviagen, etc.) and technology partners mean our team gets access to international industry trends."
    },
    {
        icon: "HeartHandshake",
        title: "Employee Wellbeing",
        description: "We offer competitive salaries, health benefits, transport allowances, and a respectful, ethics-first workplace culture."
    },
];

// ─── Culture Values ────────────────────────────────────────────
export interface CultureValue {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    image: string;
}

export const CULTURE_VALUES: CultureValue[] = [
    {
        title: "Rooted in Purpose",
        description: "We believe business can be a force for good. Every decision at Nourish—from farm policies to hiring—is guided by our commitment to people, place, and planet.",
        stat: "25+",
        statLabel: "Years of Impact",
        image: "/img/business/business_poultry.jpg"
    },
    {
        title: "A Culture of Excellence",
        description: "We set the bar high—not because we have to, but because we care. Our teams take pride in their work, constantly seeking better ways to serve our farmers and consumers.",
        stat: "5000+",
        statLabel: "Team Members Nationwide",
        image: "/img/business/business3.jpg"
    },
    {
        title: "Growth Mindset",
        description: "At Nourish, learning never stops. We celebrate curiosity, encourage experimentation, and build systems that let people own and grow in their roles.",
        stat: "30%",
        statLabel: "Internal Promotions Annually",
        image: "/img/business/business_rnd-CrWEBcoc.jpg"
    },
];
