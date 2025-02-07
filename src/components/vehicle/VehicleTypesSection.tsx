import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Car, Truck, CarFront } from "lucide-react";

const vehicleTypes = [
  {
    icon: Car,
    title: "Voitures légères",
    description: "Citadines et berlines compactes idéales pour la ville"
  },
  {
    icon: Truck,
    title: "Voitures utilitaires",
    description: "Véhicules adaptés au transport de marchandises"
  },
  {
    icon: CarFront,
    title: "4WD-SUV-Minivan-Monospace",
    description: "Véhicules spacieux et polyvalents"
  }
];

const VehicleTypesSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          <H2 className="text-center mb-12">Nos types de véhicules</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((type, index) => (
              <Card 
                key={index}
                className="p-12 flex flex-col items-center text-center space-y-6"
              >
                <type.icon className="w-20 h-20 text-primary stroke-[2]" />
                <H3>{type.title}</H3>
                <Paragraph className="text-muted-foreground mt-6">
                  {type.description}
                </Paragraph>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { VehicleTypesSection };