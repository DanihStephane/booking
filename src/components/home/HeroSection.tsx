import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { H1, Lead } from "@/components/ui/typography";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/renault-logan-design.jpg"
        alt="Renault Logan"
        fill
        priority
        className="object-cover brightness-125 object-bottom"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
        <div className="pl-8">
          <div className="max-w-2xl space-y-6 text-left">
            <H1 className="text-white">
              Trouvez la voiture de vos rêves
            </H1>
            <Lead className="text-white">
              Explorez nos meilleures options de location
            </Lead>
          </div>
        </div>
      </div>
    </section>
  );
};