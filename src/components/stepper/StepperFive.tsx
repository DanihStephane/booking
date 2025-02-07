import React, {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {CheckCircle} from 'lucide-react';
import {User, Globe} from 'lucide-react';
import {Lock, HelpCircle} from 'lucide-react';
import {FileEdit, Wallet, Plus, AlertCircle} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Receipt } from "lucide-react"
  

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import {
    MapPin,
    Calendar,
    Clock,
    ChevronRight,
    Car,
    Fuel,
    Users,
    SquareAsterisk,
    Snowflake,
    Navigation,
    Briefcase,
    Shield,
    Coffee,
    Wifi,
    Music,
    Check,
    CreditCard,
    Phone,
    Mail,
    Star,
    Smartphone, // Added
    Store,      // Added
    Key,         // Added
    ShoppingCart,
    ChevronDown,
    Tag,
    Building,
    Umbrella,
    FileText,
    Landmark,
    Infinity,
    Pencil
} from 'lucide-react';

interface StepperFiveProps {
  onNextStep: () => void;
}

export const StepperFive: React.FC<StepperFiveProps> = ({ onNextStep }) => {
  return (
    <Card className="mb-8 shadow-xl">

      <CardHeader className="text-center relative pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-white h-32" />
      
        <div className="relative">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-105 transition-all animate-bounce">
            <Check size={40} className="text-black" />
          </div>
        
          <div className="space-y-4">
            <Badge className="bg-green-100 text-green-800 px-4 py-1">
              <Check size={14} className="mr-2" />
              Devis envoyé avec succès
            </Badge>
          
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Votre devis est prêt !
            </CardTitle>
          </div>
        </div>
      </CardHeader>
                              <CardContent>
                                  <div className="space-y-6">
                                  <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Merci de votre intérêt pour Hertz</h3>
          
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-medium">Votre numéro de devis est</div>
              <div className="text-2xl font-bold text-yellow-500 font-mono tracking-wider">#2135498456</div>
              <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                <Mail className="h-4 w-4" />
                Un e-mail contenant votre devis a été envoyé à test@test.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold flex items-center justify-center gap-2">
            <Plus className="h-5 w-5" />
            Nouveau devis
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="flex-1 font-bold flex items-center justify-center gap-2">
            <FileEdit className="h-5 w-5" />
            Modifier le devis
            <Pencil className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-center text-sm text-gray-500">
          Vous pouvez consulter et gérer vos devis à tout moment depuis votre espace client
        </div>
    
                                    
    
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                       
    
                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Documents requis - Section améliorée */}
                                            <div
                                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-yellow-400 transition-all">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="bg-yellow-100 p-2 rounded-full">
                                                        <SquareAsterisk className="text-yellow-600 h-6 w-6"/>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg">Documents requis</h4>
                                                        <p className="text-sm text-gray-500">À présenter lors de la prise du
                                                            véhicule</p>
                                                    </div>
                                                </div>
    
                                                <div className="space-y-4">
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <CreditCard className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Carte bancaire</p>
                                                            <p className="text-sm text-gray-600">Au nom du conducteur
                                                                principal pour la caution</p>
                                                        </div>
                                                    </div>
    
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <User className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Pièce d'identité</p>
                                                            <p className="text-sm text-gray-600">Passeport ou carte
                                                                d'identité en cours de validité</p>
                                                        </div>
                                                    </div>
    
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <Key className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Permis de conduire</p>
                                                            <p className="text-sm text-gray-600">Valide depuis plus de 2 ans
                                                                + International si nécessaire</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            {/* Assistance 24/7 - Section améliorée */}
                                            <div
                                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-yellow-400 transition-all">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="bg-yellow-100 p-2 rounded-full">
                                                        <HelpCircle className="text-yellow-600 h-6 w-6"/>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg">Assistance 24/7</h4>
                                                        <p className="text-sm text-gray-500">Nous sommes là pour vous
                                                            aider</p>
                                                    </div>
                                                </div>
    
                                                <div className="space-y-4">
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <Phone className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Assistance téléphonique</p>
                                                            <p className="text-sm text-gray-600">+33 1 XX XX XX XX</p>
                                                            <p className="text-xs text-green-600">Disponible 24h/24 et
                                                                7j/7</p>
                                                        </div>
                                                    </div>
    
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <Mail className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Support par email</p>
                                                            <p className="text-sm text-gray-600">assistance@hertz.fr</p>
                                                            <p className="text-xs text-gray-500">Réponse sous 2h en
                                                                moyenne</p>
                                                        </div>
                                                    </div>
    
                                                    <div
                                                        className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                                                        <div className="bg-white p-2 rounded-full mr-3">
                                                            <Store className="text-yellow-600 h-5 w-5"/>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Agences à proximité</p>
                                                            <p className="text-sm text-gray-600">Trouvez l'agence la plus
                                                                proche</p>
                                                            <a href="#" className="text-xs text-yellow-600 hover:underline">Voir
                                                                la carte des agences</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                    
    
                                    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-yellow-100 p-2 rounded-full">
                                                <Globe className="text-yellow-600 h-6 w-6"/>
                                            </div>
                                            <h3 className="text-lg font-bold">Conditions Générales de Location</h3>
                                        </div>
    
                                        <div className="space-y-4">
                                            {/* Accordéon 1: Conditions de location */}
                                            <div className="border rounded-lg">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="conditions-location">
                                                        <AccordionTrigger className="px-4 hover:bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <Key className="text-yellow-600 h-5 w-5"/>
                                                                <span>Conditions de location</span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pt-2 pb-4 space-y-2">
                                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                                <div>
                                                                    <h4 className="font-medium mb-2">Éligibilité du
                                                                        conducteur</h4>
                                                                    <ul className="space-y-1 text-gray-600">
                                                                        <li>• Âge minimum : 21 ans</li>
                                                                        <li>• Permis de conduire valide depuis 2 ans
                                                                            minimum
                                                                        </li>
                                                                        <li>• Carte d'identité ou passeport en cours de
                                                                            validité
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-medium mb-2">Restrictions
                                                                        kilométriques</h4>
                                                                    <ul className="space-y-1 text-gray-600">
                                                                        <li>• Kilométrage illimité inclus</li>
                                                                        <li>• Utilisation nationale autorisée</li>
                                                                        <li>• Trajets internationaux sur demande</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
    
                                            {/* Accordéon 2: Assurances et protections */}
                                            <div className="border rounded-lg">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="assurances">
                                                        <AccordionTrigger className="px-4 hover:bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <Shield className="text-yellow-600 h-5 w-5"/>
                                                                <span>Assurances et protections</span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pt-2 pb-4">
                                                            <div className="grid grid-cols-2 gap-6">
                                                                <div className="space-y-3">
                                                                    <div className="bg-green-50 p-3 rounded-lg">
                                                                        <h4 className="font-medium text-green-800">Inclus
                                                                            dans votre location</h4>
                                                                        <ul className="mt-2 space-y-1 text-sm text-green-600">
                                                                            <li className="flex items-center gap-2">
                                                                                <Check size={14}/>
                                                                                <span>Responsabilité civile</span>
                                                                            </li>
                                                                            <li className="flex items-center gap-2">
                                                                                <Check size={14}/>
                                                                                <span>Protection contre le vol</span>
                                                                            </li>
                                                                            <li className="flex items-center gap-2">
                                                                                <Check size={14}/>
                                                                                <span>Assistance 24/7</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-3">
                                                                    <div className="bg-blue-50 p-3 rounded-lg">
                                                                        <h4 className="font-medium text-blue-800">Options
                                                                            disponibles</h4>
                                                                        <ul className="mt-2 space-y-1 text-sm text-blue-600">
                                                                            <li className="flex items-center gap-2">
                                                                                <Plus size={14}/>
                                                                                <span>Protection conducteur</span>
                                                                            </li>
                                                                            <li className="flex items-center gap-2">
                                                                                <Plus size={14}/>
                                                                                <span>Rachat de franchise</span>
                                                                            </li>
                                                                            <li className="flex items-center gap-2">
                                                                                <Plus size={14}/>
                                                                                <span>Protection bris de glace</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
    
                                            {/* Accordéon 3: Carburant et charges */}
                                            <div className="border rounded-lg">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="carburant">
                                                        <AccordionTrigger className="px-4 hover:bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <Fuel className="text-yellow-600 h-5 w-5"/>
                                                                <span>Carburant et charges</span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pt-2 pb-4">
                                                            <div className="space-y-4">
                                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                                    <h4 className="font-medium mb-2">Politique
                                                                        carburant</h4>
                                                                    <ul className="space-y-2 text-sm text-gray-600">
                                                                        <li className="flex items-center gap-2">
                                                                            <Check size={14} className="text-green-500"/>
                                                                            <span>Véhicule fourni avec le plein</span>
                                                                        </li>
                                                                        <li className="flex items-center gap-2">
                                                                            <Check size={14} className="text-green-500"/>
                                                                            <span>À restituer avec le plein</span>
                                                                        </li>
                                                                        <li className="flex items-center gap-2">
                                                                            <AlertCircle size={14}
                                                                                         className="text-red-500"/>
                                                                            <span>Frais de service si non respecté</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
    
                                            {/* Accordéon 4: Modifications et annulations */}
                                            <div className="border rounded-lg">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="modifications">
                                                        <AccordionTrigger className="px-4 hover:bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <FileEdit className="text-yellow-600 h-5 w-5"/>
                                                                <span>Modifications et annulations</span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pt-2 pb-4">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="space-y-3">
                                                                    <h4 className="font-medium">Modifications</h4>
                                                                    <ul className="space-y-2 text-sm text-gray-600">
                                                                        <li>• Gratuites jusqu'à 48h avant</li>
                                                                        <li>• Frais de 30€ sous 48h</li>
                                                                        <li>• Sous réserve de disponibilité</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="space-y-3">
                                                                    <h4 className="font-medium">Annulations</h4>
                                                                    <ul className="space-y-2 text-sm text-gray-600">
                                                                        <li>• Remboursement 100% J-7</li>
                                                                        <li>• 50% entre J-7 et J-2</li>
                                                                        <li>• Non remboursable J-2</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
    
                                            {/* Accordéon 5: Caution et paiements */}
                                            <div className="border rounded-lg">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="caution">
                                                        <AccordionTrigger className="px-4 hover:bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                <Wallet className="text-yellow-600 h-5 w-5"/>
                                                                <span>Caution et paiements</span>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pt-2 pb-4">
                                                            <div className="space-y-4">
                                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                                    <h4 className="font-medium mb-3">Informations de
                                                                        caution</h4>
                                                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                                                        <div>
                                                                            <p className="font-medium text-gray-700">Montant
                                                                                de la caution</p>
                                                                            <p className="text-gray-600">5 000 000 Ar</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="font-medium text-gray-700">Méthode
                                                                                de paiement</p>
                                                                            <p className="text-gray-600">Pré-autorisation CB
                                                                                uniquement</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="text-center text-sm text-gray-500">
                                        Découvrez l'intégralité de nos conditions générales de vente : ~
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mt-2 text-sm group"
                                        >
                                            Consulter les CGV complètes
                                            <ChevronRight size={16}
                                                          className="ml-1 transform group-hover:translate-x-1 transition-transform"/>
                                        </a>
                                    </div>
    
                                </div>
                            </CardContent>
                        </Card>
  );
};
