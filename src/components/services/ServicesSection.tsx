import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Car, CarFront, Plane, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Location de Véhicules",
    description: "Plus de 90 véhicules de marques réputées comme RENAULT et NISSAN, disponibles pour la location courte ou longue durée"
  },
  {
    icon: Plane,
    title: "Services de transport",
    description: "Transfert aéroport et service door inclus dans nos prestations pour votre confort"
  },
  {
    icon: Users,
    title: "Equipe Professionnelle",
    description: "Une équipe de 50 employés qualités, incluant des chauffeurs et superviseurs formés à la conduite sécuritaire et aux langues étrangères"
  },
  {
    icon: CarFront,
    title: "Maintenance",
    description: "Service de contrôle et de maintenance des véhicules du parc HERTZ, assurant la fiabilité de notre flotte"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          <H2 className="text-center mb-8">Nos services</H2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 flex flex-col items-center text-center space-y-6"
              >
                <service.icon className="w-16 h-16 text-primary stroke-[2]" />
                <H3>{service.title}</H3>
                <Paragraph className="text-muted-foreground">
                  {service.description}
                </Paragraph>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
