export interface BusinessFeature {
    title: string;
    text: string;
}

export interface BusinessSegmentData {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imagePosition: 'left' | 'right';
    featuresHeading?: string;
    features: BusinessFeature[];
}

export const BUSINESS_SEGMENTS: BusinessSegmentData[] = [
    {
        id: "poultry-division",
        badge: "Poultry Division",
        title: "The Pink Revolution",
        subtitle: "Feeding the Nation, Empowering Farmers",
        description: "The Nourish Poultry Division forms the heart of our operations — driving Bangladesh’s Pink Revolution through excellence in breeding, nutrition, and technology.",
        image: "/img/home/business_poultry.jpg",
        imagePosition: "left",
        features: [
            {
                title: "Day-Old Chicks (DOCs)",
                text: "From the world’s top genetic lines — Cobb-500, Hubbard, and Arbor Acres — we produce superior-quality DOCs that ensure optimal growth, feed efficiency, and farm profitability. Currently, our breed is Arbor Acres from Aviagen, recognized as one of the finest broiler breeds in the world."
            },
            {
                title: "Feed Production",
                text: "With a robust nationwide distribution network and a reputation for high Feed Conversion Ratio (FCR), Nourish Feed ranks #1 in Broiler Feed, #2 in Layer Feed, and #3 in Aqua & Cattle Feed in Bangladesh."
            },
            {
                title: "Integrated Commercial Farming",
                text: "Our modern broiler farms serve as live demonstration units showcasing biosecurity, welfare standards, and productivity benchmarks for farmers nationwide."
            },
            {
                title: "Processing & Value Chain",
                text: "Nourish is investing in advanced poultry processing facilities, ensuring food safety, traceability, and halal compliance from farm to fork."
            }
        ]
    },
    {
        id: "livestock-dairy",
        badge: "Livestock & Dairy",
        title: "The White Revolution",
        subtitle: "Innovation, Genetics, and Sustainable Farming",
        description: "Building upon our success in feed and farming, Nourish’s Dairy & Livestock Division is spearheading Bangladesh’s White Revolution through technological advancement.",
        image: "/img/home/business3.jpg",
        imagePosition: "right",
        features: [
            {
                title: "Cattle Feed & Nutrition",
                text: "Formulated to meet the precise dietary needs of high-yield dairy and beef cattle, our feeds enhance productivity, fertility, and overall herd health."
            },
            {
                title: "Upcoming Bull Station & Genetic Advancement (2026)",
                text: "We are establishing a dedicated bull station and dairy enterprise to drive indigenous breed improvement, ensure semen self-sufficiency, and elevate milk productivity nationwide."
            },
            {
                title: "Milk Production & Processing",
                text: "Through smallholder partnerships, we are laying the groundwork for integrated milk collection and processing — producing hygienic, nutritious, and affordable dairy for Bangladeshi families."
            }
        ]
    },
    {
        id: "agriculture-aquaculture",
        badge: "Agriculture & Aquaculture",
        title: "The Green Revolution",
        subtitle: "Sustaining Growth Through Diversity",
        description: "Nourish’s Green Revolution represents our deep connection to Bangladesh’s soil and water. By empowering rural communities with technology, training, and sustainable inputs, we are shaping a future of nutrition-sensitive agriculture.",
        image: "/img/home/business_2.jpg",
        imagePosition: "left",
        features: [
            {
                title: "Diversified Crops",
                text: "Leading in tilapia hatchery development and shrimp culture, with Southeast Asian technology partnerships that raise quality and productivity."
            },
            {
                title: "Agro Inputs & Ecosystem Support",
                text: "Supplying high-quality seeds, bio-fertilizers, and sustainable soil enhancers — including nutrient-rich fertilizers derived from circular waste-to-value systems."
            },
            {
                title: "Aquaculture & Fisheries",
                text: "Leading in tilapia hatchery development and shrimp culture, with Southeast Asian technology partnerships that raise quality and productivity."
            }
        ]
    },
    {
        id: "eggs",
        badge: "Eggs",
        title: "The Orange Identity",
        subtitle: "Affordable Nutrition for Every Family",
        description: "Eggs are one of the simplest answers to nutrition security — rich in protein, vitamins, and everyday affordability. Through our Orange Identity initiative, Nourish is making quality eggs accessible, nutritious, and proudly Bangladeshi.",
        image: "/img/home/business_eggs.jpg",
        imagePosition: "right",
        features: [
            {
                title: "Affordable Protein Security",
                text: "Ensuring that quality eggs remain within the reach of every household."
            },
            {
                title: "Brand Portfolio",
                text: "Orange Yolk Eggs, Vitamin D Enriched Eggs, and Economy Packs for all."
            },
            {
                title: "Sustainability Focus",
                text: "Sourced from compliant farms with high animal welfare and traceability."
            }
        ]
    },
    {
        id: "processed-packaged-foods",
        badge: "Processed & Packaged Foods",
        title: "Processed & Packaged Foods",
        subtitle: "From Farm-Fresh to Family Table",
        description: "Our Processed & Packaged Foods division bridges the gap between farms and families. Through modern, halal-certified processing, we’re redefining convenience with food that’s nutritious, trusted, and proudly made in Bangladesh.",
        image: "/img/home/business5.jpg",
        imagePosition: "left",
        featuresHeading: "Our Portfolio Includes:",
        features: [
            {
                title: "Ready-to-Cook Chicken",
                text: "Freshly processed, hygienic, and packed for modern lifestyles."
            },
            {
                title: "Natural Products",
                text: "Premium honey varieties and enriched fortified rice for health-conscious consumers."
            },
            {
                title: "Sauces & Condiments",
                text: "Hot Tomato, Sweet Chili, and Tamarind sauces crafted for everyday meals."
            },
            {
                title: "Pickles",
                text: "Olive, Mango, and Garlic pickles with authentic home-style flavor."
            },
            {
                title: "Traditional Essentials",
                text: "Ghee and Mustard Oil made with care for purity and taste."
            },
            {
                title: "Local Favorites",
                text: "Jhola Gur and Mango Pulp celebrating Bangladesh’s natural sweetness."
            }
        ]
    },
    {
        id: "retail-consumer-brands",
        badge: "Retail & Consumer Brands",
        title: "Retail & Consumer Brands",
        subtitle: "Bringing Nourish Closer to You",
        description: "We’re expanding into retail and quick-service ventures to connect directly with consumers under the Nourish brand.",
        image: "/img/home/business_chickenstreet-BbWKc7C_.jpg",
        imagePosition: "right",
        features: [
            {
                title: "Specialty Outlets",
                text: "Niche stores offering eggs, poultry and dairy - bridging trust and taste."
            },
            {
                title: "Chicken Street",
                text: "Quick-service and ready-to-cook brand redefining everyday chicken with halal, traceable offerings."
            },
            {
                title: "Brand Promise",
                text: "Consistent quality, transparency, and affordability in every experience."
            }
        ]
    },
    {
        id: "rd-digital-transformation",
        badge: "R&D & Digital Transformation",
        title: "R&D & Digital Transformation",
        subtitle: "Innovation at the Core",
        description: "At Nourish, innovation isn’t a department — it’s a mindset. Research and technology power everything we do, from smarter farming to safer food.",
        image: "/img/home/business_rnd-CrWEBcoc.jpg",
        imagePosition: "left",
        featuresHeading: "Our Focus Areas:",
        features: [
            {
                title: "AI Forecasting",
                text: "Predicting market demand, optimizing feed efficiency, and reducing waste."
            },
            {
                title: "Traceability Systems",
                text: "Ensuring farm-to-fork transparency and consumer trust across every product."
            },
            {
                title: "Farmer Empowerment Apps",
                text: "Equipping smallholders with training, health insights, and real-time intel."
            }
        ]
    }
];
