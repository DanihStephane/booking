import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Settings2,
    Radio,
    Lock,
    SlidersHorizontal
} from "lucide-react";
import { useState } from "react";

type Vehicle = {
    id: string;
    name: string;
    type: string;
    image: string;
    features: Array<{
      icon: keyof typeof iconComponents;
      text: string;
    }>;
};

const iconComponents = {
    settings2: Settings2,
    radio: Radio,
    lock: Lock,
    slidersHorizontal: SlidersHorizontal,
};

const vehicles: Vehicle[] = [
    {
        id: "urvan",
        name: "NISSAN URVAN",
        type: "Van",
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
        name: "RENAULT DUSTER SUV 4x4 DIESEL",
        type: "SUV",
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
        name: "RENAULT DUSTER SUV 4X2 ESS",
        type: "SUV",
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
        name: "Renault K WID",
        type: "Citadine",
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
        image: "/vehicles/MADAUTOCAR_FLUENCE-1.png",
        features: [
            {icon: "settings2", text: "Climatisé"},
            {icon: "radio", text: "Auto RadioCD"},
            {icon: "lock", text: "Vérouillage centralisé"},
            {icon: "slidersHorizontal", text: "Poste latérale droite coullissante"}
        ]
    }
];


const VehicleFeature = ({icon, text}: { icon: keyof typeof iconComponents; text: string }) => {
    const IconComponent = iconComponents[icon];
    return (
      <li className="flex items-center gap-2">
        <IconComponent className="w-5 h-5 text-primary"/>
        <span className="text-muted-foreground">{text}</span>
      </li>
    );
};

const VehicleCard = ({vehicle}: { vehicle: Vehicle }) => {
    return (
      <Card>
        <CardHeader className="relative p-6">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            width={400}
            height={300}
            className="w-full h-[200px] object-cover rounded-md"
          />
          <span className="absolute top-8 left-8 bg-secondary/80 text-secondary-foreground px-4 py-1 rounded-full text-sm">
            {vehicle.type}
          </span>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <H3 className="text-center">{vehicle.name}</H3>
          <ul className="space-y-3">
            {vehicle.features.map((feature, index) => (
              <VehicleFeature
                key={`${vehicle.id}-feature-${index}`}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </ul>
          <Button className="w-full" size="lg">
            Réserver
          </Button>
        </CardContent>
      </Card>
    );
};

const FleetSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="max-w-7xl mx-auto space-y-12">
            <H2 className="text-center">Notre flotte de véhicules</H2>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Paragraph className="font-medium">Types de véhicules</Paragraph>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les types"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="light">Voitures légères</SelectItem>
                    <SelectItem value="utility">Voitures utilitaires</SelectItem>
                    <SelectItem value="suv">4WD-SUV-Minivan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Paragraph className="font-medium">Prix maximum</Paragraph>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les prix"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="100">100€ / jour</SelectItem>
                    <SelectItem value="200">200€ / jour</SelectItem>
                    <SelectItem value="300">300€ / jour</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Paragraph className="font-medium">Transmission</Paragraph>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes</SelectItem>
                    <SelectItem value="manual">Manuelle</SelectItem>
                    <SelectItem value="automatic">Automatique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle}/>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                
              </Button>

              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 3}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
};

export { FleetSection };