export interface Business {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const BUSINESSES: Business[] = [
    {
        id: "poultry",
        title: "Poultry (DOC & Feed)",
        description: "Day-old chicks and complete nutrition for poultry, fish, and cattle.",
        image: "/img/home/business_poultry.jpg"
    },
    {
        id: "aquaculture",
        title: "Aquaculture (Fish Feed)",
        description: "Specialized nutrition for high-yield aquaculture and balanced solutions.",
        image: "/img/home/business_2.jpg"
    },
    {
        id: "cattle",
        title: "Cattle & Dairy Nutrition",
        description: "High-quality nutrition solutions for cattle and dairy farming success.",
        image: "/img/home/business3.jpg"
    },
    {
        id: "farmer-services",
        title: "Farmer Services & Advisory",
        description: "Advisory, technical support, and bio-security training for rural partners.",
        image: "/img/home/business_farmers.jpg"
    },
    {
        id: "circular",
        title: "Circular Solutions",
        description: "Sustainable waste-to-value solutions and bio-fertilizer for healthy soil.",
        image: "/img/home/business5.jpg"
    },
    {
        id: "food",
        title: "Food & Value-Added Products",
        description: "Value-added protein and processed foods for the modern consumer.",
        image: "/img/home/business_processed.jpg"
    }
];
