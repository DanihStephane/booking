import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Clock, MapPin, Calendar, Store, ChevronDown } from 'lucide-react';

export const PickupReturnCard = () => {
  return (
      <div>
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-yellow-50 to-transparent p-4 rounded-lg border-l-4 border-yellow-400">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-full shadow-lg">
              <Car className="h-6 w-6 text-black"/>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Ramassage / Retour
              </h3>
              <p className="text-sm text-gray-500">Détails de vos points de prise et retour du véhicule</p>
            </div>
          </div>
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors">
            <Clock size={14} className="mr-1"/>
            Horaires confirmés
          </Badge>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-yellow-600"/>
            </div>
            <div>
              <div className="font-medium">Antananarivo</div>
              <div className="text-sm text-gray-600">Tana 101 Andraharo</div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Calendar size={14}/>
                <span>15 Feb 2025</span>
                <Clock size={14}/>
                <span>09:00</span>
                <Store size={14}/>
                <span className="text-green-600">Ouvert</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-0.5 bg-yellow-400"></div>
            <ChevronDown className="text-yellow-400" size={20}/>
            <div className="flex-1 h-0.5 bg-yellow-400"></div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-yellow-600"/>
            </div>
            <div>
              <div className="font-medium">Tamatave</div>
              <div className="text-sm text-gray-600">15 Rue de la Miamie</div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Calendar size={14}/>
                <span>20 Feb 2025</span>
                <Clock size={14}/>
                <span>18:00</span>
                <Store size={14}/>
                <span className="text-orange-600">Ferme à 19:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
