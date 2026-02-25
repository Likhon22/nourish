export interface TimelineEvent {
    id: string;
    title: string;
    bullets: string[];
}

export const TIMELINE_DATA: TimelineEvent[] = [
    {
        id: "event-1",
        title: "2000–2005: Laying the Foundations",
        bullets: [
            "Began operations with high-quality Day-Old Chicks (DOCs), earning early trust among rural farmers.",
            "Entered poultry feed production (2001), establishing a reputation for consistent feed conversion ratios (FCR) and dependable quality."
        ]
    },
    {
        id: "event-2",
        title: "2006–2015: Growth Through Trust",
        bullets: [
            "Expanded operations nationwide through partnerships with dealers and farmers.",
            "Introduced innovative feed solutions and strengthened hatchery and breeding facilities.",
            "Became known for reliability and service excellence."
        ]
    },
    {
        id: "event-3",
        title: "2016–2020: Integration & Innovation",
        bullets: [
            "Consolidated subsidiaries under 'Nourish Group' to form a fully integrated agribusiness.",
            "Entered aquaculture and cattle feed sectors.",
            "Invested in R&D, digital transformation, and rural empowerment."
        ]
    },
    {
        id: "event-4",
        title: "2021–Present: Future-Ready Leadership",
        bullets: [
            "Achieved top positions in national feed rankings (1st in broiler, 2nd in layer, 3rd in aqua & cattle).",
            "Expanded into poultry processing, food branding, and fast-food retail franchises.",
            "Embarked on renewable energy projects and circular economy innovations (solar power, Black Soldier Fly waste-to-protein)."
        ]
    }
];
