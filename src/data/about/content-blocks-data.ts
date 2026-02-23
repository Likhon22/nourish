// ─── Types ───────────────────────────────────────────────────────────────────

/** A single bullet — term (optional, bold) + body text */
export interface BulletItem {
    term?: string;   // e.g. "Food Security" — rendered bold, followed by a colon
    text: string;    // The rest of the bullet text
}

/** A content group in the right column */
export interface ContentGroup {
    /** Small uppercase label with a thin divider line below it, like "KEY CONTRIBUTIONS" */
    sectionLabel?: string;
    /** A prose paragraph */
    paragraph?: string;
    /** Optional list of bullet items */
    bullets?: BulletItem[];
}

/** One full content block (image banner + two-column text below) */
export interface ContentBlockData {
    id: string;
    /** Image path e.g. /img/home/business_farmers.jpg */
    image: string;
    /** Optional small uppercase text ABOVE the heading on the image */
    imageSubheading?: string;
    /** Large heading shown over the image */
    imageCaption: string;
    /** Large bold title in the LEFT column, with a thin underline */
    leftTitle: string;
    /** Ordered list of content groups in the RIGHT column */
    contentGroups: ContentGroup[];
    /** Optional pull-quote box at the bottom of the right column */
    quote?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const ABOUT_CONTENT_BLOCKS: ContentBlockData[] = [
    {
        id: "block-1",
        image: "/img/home/business_farmers.jpg",
        imageCaption: "The Nourish DNA",
        leftTitle: "Our Vision: Nourishing People, Places, and the Planet",
        contentGroups: [
            {
                paragraph: "We believe nourishment goes beyond food — it encompasses physical, emotional, and spiritual well-being."
            },
            {
                bullets: [
                    { term: "People", text: "Enhancing human capital through accessible, nutritious food and personal growth." },
                    { term: "Places", text: "Revitalizing rural economies through agro-industrial development and inclusive growth." },
                    { term: "Planet", text: "Protecting our shared home by adopting renewable energy, sustainable ingredients, and eco-friendly production methods." },
                ]
            },
            {
                sectionLabel: "Our Mission",
                paragraph: "We strive to make quality, affordable, and sustainable agro-based products accessible for all — empowering farmers, enriching communities, and protecting the environment."
            },
            {
                paragraph: "To excel in competency, credibility, and prosperity while advancing social, economic, and environmental sustainability."
            },
            {
                paragraph: "Nourish promotes a shift in perspective from \"the world is responsible for me\" to \"I am responsible for the world\", emphasizing that prosperity and sustainability are intrinsically linked. The organisation is guided by four principal pillars:"
            },
            {
                bullets: [
                    { term: "Reliability", text: "Ensuring consistent quality and trustworthiness." },
                    { term: "Availability", text: "Making essential agricultural products and solutions accessible." },
                    { term: "Affordability", text: "Offering cost-effective options for small and large-scale farmers." },
                    { term: "Sustainability", text: "Integrating environmentally responsible practices into all operations." },
                ]
            },
            {
                paragraph: "Through these principles, Nourish invites collaboration in tackling global challenges such as food security, poverty alleviation, and environmental sustainability. By integrating values, fairness, and long-term impact into its business practices, Nourish strives to create a meaningful difference in the agriculture sector while ensuring financial and ethical success."
            },
            {
                sectionLabel: "Our Core Values",
                paragraph: "Our Values guide every decision we make:"
            },
            {
                bullets: [
                    { term: "Integrity", text: "Doing the right thing, even when no one is watching." },
                    { term: "Trustworthiness", text: "Keeping our promises and building lasting partnerships." },
                    { term: "Mutual Respect", text: "Recognising the value of others in all interactions." },
                    { term: "Teamwork", text: "Achieving collective success through respect and collaboration." },
                    { term: "Continuous Improvement", text: "Embracing the Kaizen spirit of learning and innovation." },
                ]
            },
            {
                paragraph: "These values are lived daily through guiding principles such as Contribution over Consumption, Purpose beyond Profit, Prevention over Cure, Momentum over Metrics, People at the Center, and First Things First."
            }
        ],
    },
    {
        id: "block-2",
        image: "/img/home/farmer-home.jpg",
        imageCaption: "Leadership & Governance",
        leftTitle: "Our Philosophy",
        contentGroups: [
            {
                paragraph: "At Nourish, leadership is defined not by authority, but by accountability. Our leaders are guided by humility, creativity, and a steadfast commitment to the collective good. Governance is rooted in transparency and ethics — ensuring that every decision balances prosperity with purpose."
            },
            {
                sectionLabel: "A Unified Team",
                paragraph: "Our leaders put people first — empowering teams to think boldly, act responsibly, and grow continuously. This spirit of shared leadership drives Nourish toward becoming a trusted name in South Asian agribusiness."
            }
        ],
    },
    {
        id: "block-3",
        image: "/img/home/business_2.jpg",
        imageCaption: "Our Contribution",
        leftTitle: "Feeding a Nation, Empowering a Generation",
        contentGroups: [
            {
                paragraph: "For over two decades, Nourish has played a pivotal role in strengthening Bangladesh's food security and rural economy. Our impact extends beyond profits — it's about people, purpose, and progress."
            },
            {
                sectionLabel: "Key Contributions",
                bullets: [
                    { term: "Food Security", text: "Making essential animal proteins — chicken, eggs, and fish — accessible and affordable nationwide." },
                    { term: "Rural Empowerment", text: "Creating livelihoods for thousands of farmers, traders, and workers, with a target of engaging 50,000 people by 2028, including 33% women." },
                    { term: "Sustainability", text: "Championing circular farming practices — converting organic waste into bio-fertilizers and renewable energy." },
                    { term: "Innovation", text: "Driving feed efficiency and climate-responsible production to reduce resource use and carbon footprint." },
                ]
            }
        ],
        quote: "Every meal is a shared responsibility — to nourish bodies, uplift lives, and sustain futures."
    },
    {
        id: "block-4",
        image: "/img/home/values-home.jpg",
        imageCaption: "Global Recognition",
        leftTitle: "Recognitions & Global Excellence",
        contentGroups: [
            {
                paragraph: "Our journey of excellence has been acknowledged globally through numerous awards and certifications that demonstrate our commitment to quality, safety, and sustainability:"
            },
            {
                bullets: [
                    { term: "HACCP Certification", text: "Ensuring absolute food safety through proactive hazard prevention." },
                    { term: "ISO 9001:2015 Certification", text: "Upholding international quality management standards." },
                    { term: "Emerging Poultry Integrator of Asia (2011)", text: "Recognition for pioneering leadership at the Livestock Asia Expo, Kuala Lumpur." },
                ]
            },
            {
                paragraph: "These milestones represent more than achievements — they symbolize the trust we’ve earned from farmers, consumers, and partners worldwide."
            }
        ],
        quote: "Rooted in Bangladesh. Growing for the World."
    }
];
