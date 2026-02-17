export interface ImpactMetric {
    value: string;
    label: string;
    description: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
    {
        value: "50K+",
        label: "Farmers empowered",
        description: "Farmers empowered through Nourish training, advisory, and input support."
    },
    {
        value: "2.0M+",
        label: "Tons produced",
        description: "Tons of quality poultry, cattle, and fish feed produced and delivered nationwide."
    },
    {
        value: "20+",
        label: "Years of innovation",
        description: "Years of innovation driving food security and sustainable farming in Bangladesh."
    }
];
