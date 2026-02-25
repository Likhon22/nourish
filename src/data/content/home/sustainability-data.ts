export interface SustainabilityMetric {
    value: string;
    label: string;
    description: string;
}

export const SUSTAINABILITY_METRICS: SustainabilityMetric[] = [
    {
        value: "4",
        label: "core lines",
        description: "Poultry, Aquaculture, Cattle & Farmer Services"
    },
    {
        value: "3P",
        label: "impact framework",
        description: "People • Place • Planet"
    },
    {
        value: "24/7",
        label: "on-ground advisory",
        description: "on-ground advisory & support when farmers need it most"
    }
];
