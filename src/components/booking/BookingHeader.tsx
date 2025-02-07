import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Car } from "lucide-react";
import { SearchFormSection } from "@/components/vehicle/SearchFormSection";

export const BookingHeader = () => {
  return (
    <Card className="mb-8 shadow-xl w-full bg-transparent border-0">
      <CardHeader className="text-center relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <CardTitle className="text-5xl font-extrabold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Réserver votre véhicule
          </CardTitle>

          <CardDescription className="text-xl font-medium text-white/90 leading-relaxed">
            Trouvez le véhicule parfait pour votre prochain voyage
            <span className="block mt-2 text-yellow-400">Une expérience de location sur mesure</span>
          </CardDescription>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 px-4 py-2">
              <Check size={16} className="mr-2 text-yellow-400"/>
              Service à Madagascar 
            </Badge>
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 px-4 py-2">
              <Car size={16} className="mr-2 text-yellow-400"/>
              Véhicules Haut de Gamme
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-20">
        <SearchFormSection/>
      </CardContent>
    </Card>
  );
};
