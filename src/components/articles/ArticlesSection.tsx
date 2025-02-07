import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const ArticlesSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          <H2 className="text-center mb-8">Nos articles</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Article Card */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/c067e6a08f_50169632_direction-assistee2.jpg"
                  alt="Eco-friendly travel"
                  width={600}
                  height={300}
                  className="object-cover w-full h-[300px]"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  ECOLOGIE
                </span>
              </div>
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <H3>Comment voyager écolo</H3>
                <Paragraph>
                  Voyager contribue grandement à la polution, car l'indusctrie ...
                </Paragraph>
                <Button variant="link" asChild>
                  <Link href="/articles/eco-travel" className="inline-flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Second Article Card */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/parc-national-des-arches-aux-etats-unis.jpg"
                  alt="National Parks"
                  width={600}
                  height={300}
                  className="object-cover w-full h-[300px]"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  PARCS NATIONAUX
                </span>
              </div>
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <H3>Les plus beaux parcs nationaux</H3>
                <Paragraph>
                  La société HERTZ possède des comtoirs dans plusieurs villes...
                </Paragraph>
                <Button variant="link" asChild>
                  <Link href="/articles/national-parks" className="inline-flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};