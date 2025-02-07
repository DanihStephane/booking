import { Vehicle } from "@/features/vehicle/types/types";

export const vehicles: Vehicle[] = [
    {
        id: "urvan",
        name: "NISSAN URVAN",
        type: "Van",
        vehicleType: "Voitures utilitaires",
        transmission: "Manuelle",
        price: 150000,
        power: "130 ch",
        agency: {
            id: "ag1",
            name: "Hertz Antananarivo"
        },
        image: "/vehicles/urvanV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "patrol",
        name: "NISSAN PATROL SW",
        type: "Offroad",
        vehicleType: "4WD-SUV-Minivan",
        transmission: "Automatique",
        price: 200000,
        power: "200 ch",
        agency: {
            id: "ag2",
            name: "Hertz Majunga"
        },
        image: "/vehicles/patrolV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "pudc",
        name: "NISSAN PATROL SW",
        type: "Pickup",
        vehicleType: "Voitures utilitaires",
        transmission: "Manuelle",
        price: 180000,
        power: "180 ch",
        agency: {
            id: "ag1",
            name: "Hertz Antananarivo"
        },
        image: "/vehicles/pudcV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "duster44",
        name: "RENAULT DUSTER",
        type: "SUV",
        vehicleType: "4WD-SUV-Minivan",
        transmission: "Manuelle",
        price: 170000,
        power: "170 ch",
        agency: {
            id: "ag3",
            name: "Hertz Tamatave"
        },
        image: "/vehicles/duster44V2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "duster",
        name: "RENAULT DUSTER ",
        type: "SUV",
        vehicleType: "4WD-SUV-Minivan",
        transmission: "Manuelle",
        price: 160000,
        power: "160 ch",
        agency: {
            id: "ag2",
            name: "Hertz Majunga"
        },
        image: "/vehicles/dusterV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "logan",
        name: "RENAULT LOGAN",
        type: "Berline",
        vehicleType: "Voitures légères",
        transmission: "Manuelle",
        price: 120000,
        power: "120 ch",
        agency: {
            id: "ag1",
            name: "Hertz Antananarivo"
        },
        image: "/vehicles/loganV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "kwid",
        name: "RENAULT K WID",
        type: "Citadine",
        vehicleType: "Voitures légères",
        transmission: "Manuelle",
        price: 100000,
        power: "100 ch",
        agency: {
            id: "ag3",
            name: "Hertz Tamatave"
        },
        image: "/vehicles/kwidV2.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "trafic",
        name: "RENAULT TRAFIC",
        type: "Berline",
        vehicleType: "Voitures légères",
        transmission: "Automatique",
        price: 130000,
        power: "130 ch",
        agency: {
            id: "ag2",
            name: "Hertz Majunga"
        },
        image: "/vehicles/MADAUTOCAR_FLUENCE-1.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    },
    {
        id: "mercedes",
        name: "MERCEDES AMG-GT4",
        type: "Berline",
        vehicleType: "Voitures légères",
        transmission: "Automatique",
        price: 200000,
        power: "200 ch",
        agency: {
            id: "ag2",
            name: "Hertz Antananarivo"
        },
        image: "/vehicles/mercedes.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    }
];
