export interface StoryBlock {
    title: string;
    content: string;
    isBulletList?: boolean;
    bullets?: string[];
}

export interface StoryCardData {
    id: string;
    headline: string;
    subheadline: string;
    image: string;
    rightBlocks: StoryBlock[];
}

export const STORY_DATA: StoryCardData[] = [
    {
        id: "story",
        headline: "Our Story",
        subheadline: "Since 1999, Nourish has grown from a humble hatchery into one of Bangladesh’s most trusted and integrated agribusinesses — evolving from DOC and poultry feed into a full food ecosystem spanning poultry, fish, cattle, seeds, bio-fertilizers, and value-added foods.",
        image: "/img/content/story-home.jpg",
        rightBlocks: [
            {
                title: "Commitment in Action",
                content: "Beyond scale, Nourish is a story of responsibility — feeding people well, uplifting rural livelihoods, and protecting the planet we share. For over two decades, we’ve worked hand-in-hand with farmers, distributors, and partners so that nutritious, affordable protein reaches every table."
            },
            {
                title: "From Business to Movement",
                content: "From hatcheries and feed mills to advisory services and food innovation, Nourish is a promise to nourish People, Place, and Planet — building a food-secure Bangladesh for generations to come."
            }
        ]
    },
    {
        id: "values",
        headline: "Our Values",
        subheadline: "At the heart of Nourish lies a set of principles that guide every decision we make — our DNA.",
        image: "/img/content/values-home.jpg",
        rightBlocks: [
            {
                title: "Our Core Principles",
                content: "",
                isBulletList: true,
                bullets: [
                    "Trust & Integrity — relationships rooted in honesty and dependability.",
                    "Reliability & Affordability — products farmers and families can count on, at fair prices.",
                    "Innovation with Purpose — circular agriculture and climate-smart solutions for tomorrow’s problems, today.",
                    "Collaboration & Teamwork — partnering with farmers, distributors, and communities for shared prosperity.",
                    "Continuous Improvement — better every day in animal health, product quality, and farmer services."
                ]
            },
            {
                title: "The 3P Philosophy",
                content: "",
                isBulletList: true,
                bullets: [
                    "People — empowering farmers, employees, and consumers to thrive.",
                    "Place — respecting the land and resources that sustain us.",
                    "Planet — innovating for a greener, more sustainable future."
                ]
            },
            {
                title: "Lived, Not Stated",
                content: "Our DNA is not just what we say — it’s how we operate in every feed bag, every chick, every farmer meeting, and every shared meal."
            }
        ]
    },
    {
        id: "farmers",
        headline: "Farmers First",
        subheadline: "Farmers are the backbone of Bangladesh — and the heart of everything we do. We exist to make farming more productive, resilient, and rewarding.",
        image: "/img/content/farmer-home.jpg",
        rightBlocks: [
            {
                title: "How We Support Farmers",
                content: "",
                isBulletList: true,
                bullets: [
                    "High-quality DOC and feed for poultry, cattle, and fish that improve yields while controlling costs.",
                    "Advisory services on nutrition, biosecurity, disease prevention, and input planning.",
                    "Circular solutions: bio-fertilizers, insect protein, and waste-to-value innovations."
                ]
            },
            {
                title: "Inclusive Growth Targets",
                content: "By 2028, we aim to involve 50,000 people in our value chain, with at least 33% women’s participation — strengthening inclusivity across agriculture."
            },
            {
                title: "Partners in Prosperity",
                content: "Our role isn’t just to sell inputs — it’s to build partnerships. When farmers succeed, Bangladesh succeeds: healthier communities, resilient supply chains, and a stronger nation.\n\nEvery chick, every feed bag, every bag of fertilizer contributes to a bigger mission — to nourish lives, protect resources, and power a greener tomorrow."
            }
        ]
    }
];
