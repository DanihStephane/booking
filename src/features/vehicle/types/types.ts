export type Vehicle = {
    id: string;
    name: string;
    type: string;
    vehicleType: "Voitures légères" | "Voitures utilitaires" | "4WD-SUV-Minivan";
    transmission: "Manuelle" | "Automatique";
    price: number;
    power: string;
    agency: {
        id: string;
        name: string;
    };
    image: string;
    features: Array<{
        icon: string;
        text: string;
    }>;
};
