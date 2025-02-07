"use client";
import React, {useState} from 'react';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
    Car,
    Fuel,
    Users,
    SquareAsterisk,
    Check,
    Minus,
    ShoppingCart,
    ChevronDown,
    Clock,
    Receipt,
    Shield,
    Coffee,
    Plus,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import {Badge} from "@/components/ui/badge";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {PickupReturnCard} from './PickupReturnCard';

export const StepperThree = ({ onNextStep, onPreviousStep }: { 
    onNextStep: () => void,
    onPreviousStep: () => void 
}) => {
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    // Add this to the extras array at the beginning of the component
    const extras = [
        {
            id: 'driver',
            title: 'Conducteur additionnel',
            description: 'Ajoutez un conducteur supplémentaire pour plus de flexibilité',
            price: '30€/jour',
            icon: Users
        },
        {
            id: 'insurance',
            title: 'Protection complète',
            description: 'Couverture totale en cas de dommages',
            price: '25€/jour',
            icon: Shield
        },
        {
            id: 'comfort',
            title: 'Pack Confort',
            description: 'GPS, siège bébé et wifi inclus',
            price: '20€/jour',
            icon: Coffee
        },
        {
            id: 'kilometers',
            title: 'Illimité',
            subtitle: 'Kilométrage', // Add this line
            description: 'Roulez sans vous soucier des kilomètres',
            price: '0€/jour',
            icon: Car
        }
    ];


    const toggleExtra = (extraId: string) => {
        setSelectedExtras(prev =>
            prev.includes(extraId)
                ? prev.filter(id => id !== extraId)
                : [...prev, extraId]
        );
    };

    return (
        <div className="grid grid-cols-[2fr,1fr] gap-8">
            {/* Left Column - Extras */}
            <Card className="mb-8 shadow-xl">
                <CardHeader>
                    <CardTitle>Suppléments disponibles</CardTitle>
                    <CardDescription>Personnalisez votre location avec nos options</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Add this title before the last extra */}

                        {extras.map((extra) => (
                            <div key={extra.id}>
                                <h3
                                    className={`font-semibold text-lg mt-6 mb-2 ${
                                        extra.id === 'kilometers' ? '' : 'hidden'
                                    }`}
                                >Kilomètres inclus</h3>
                                <div
                                    className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 ${
                                        extra.id === 'kilometers' ? 'bg-yellow-50 border-yellow-200 border-2 border-yellow-600' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-full ${
                                            extra.id === 'kilometers' ? 'bg-yellow-200' : 'bg-yellow-100'
                                        }`}>
                                            <extra.icon className="h-6 w-6 text-yellow-600"/>
                                        </div>
                                        <div>

                                            <h3 className="font-medium">{extra.title}</h3>
                                            <p className="text-sm text-gray-500">{extra.description}</p>
                                            <p className="text-sm font-semibold text-yellow-600">{extra.price}</p>
                                        </div>
                                    </div>
                                    {extra.id === 'kilometers' ? (

                                        <Button
                                            variant="default"
                                            className="bg-yellow-400 text-black border-yellow-500 cursor-default hover:bg-yellow-400 font-bold"
                                            disabled
                                        >
                                            <Check className="h-4"/> Sélectionné
                                        </Button>
                                    ) : (
                                            <Button
                                                variant={selectedExtras.includes(extra.id) ? "secondary" : "default"}
                                                className="font-bold"
                                                onClick={() => toggleExtra(extra.id)}
                                            >

                                            {selectedExtras.includes(extra.id) ? (
                                                <>
                                                    <Minus className="h-4"/> Retirer
                                                </>
                                            ) : (
                                                <>
                                                    <Plus className="h-4"/> Ajouter
                                                </>
                                            )}
                                        </Button>

                                    )}
                                </div>
                            </div>

                        ))}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 font-bold"
                                onClick={() => onPreviousStep()}
                            >
                                <ChevronLeft size={16}/>
                                Précédent
                            </Button>

                            <Button
                                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 font-bold"
                                onClick={() => onNextStep()}
                            >
                                Suivant
                                <ChevronRight size={16}/>
                            </Button>
                        </div>

                    </div>
                </CardContent>
            </Card>
            {/* Right Column - Summary */}
            <Card className="mb-8 shadow-xl h-fit top-4">
                <PickupReturnCard/>
                <CardContent className="space-y-6 mt-5">
                    <div>
                        {/* Price Header Section */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="bg-primary p-4 rounded-full">
                                        <ShoppingCart className="h-6 w-6 text-black"/>
                                        <span
                                            className="absolute -top-2 -right-2 bg-black text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            5
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total pour 5 jours</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">750 €</span>
                                        <span className="text-sm text-gray-500">(150 €/jour)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Badges Section */}
                        <div className="flex items-center gap-2 mb-4">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                                <Check size={14} className="mr-1"/>
                                Meilleur prix garanti
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                                <Clock size={14} className="mr-1"/>
                                Confirmation immédiate
                            </Badge>
                        </div>


                        {/* Selected Extras Section */}
                        {selectedExtras.length > 0 && (
                            <div className="border-t mt-4 pt-4">
                                <h3 className="font-semibold mb-2">Suppléments choisis</h3>
                                {extras
                                    .filter(extra => selectedExtras.includes(extra.id))
                                    .map(extra => (
                                        <div key={extra.id} className="flex items-center justify-between text-sm">
                                            <span>{extra.title}</span>
                                            <span className="text-primary">{extra.price}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                        {/* Selected Vehicle Section */}
                        <div className="border-t mt-4 pt-4">
                            {/* Title and Badge */}
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <Car size={24} className="text-yellow-400"/>
                                    <h3 className="text-xl font-bold">Mercedes Classe C 2024</h3>
                                </div>
                                <Badge className="bg-yellow-400 text-black">Premium</Badge>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mb-4">Une expérience de conduite exceptionnelle, alliant
                                confort, sécurité et performance pour des trajets inoubliables.</p>

                            {/* Images Section */}
                            <div className="space-y-4">
                                <div className="relative">
                                    <img
                                        src="/vehicles/duster44V2.png"
                                        alt="Mercedes Classe C 2024"
                                        className="rounded-lg w-full shadow-lg"
                                    />
                                    <Badge
                                        className="absolute top-4 right-4 bg-green-500 flex items-center gap-1 px-3 py-1">
                                        <CheckCircle size={16} className="animate-pulse"/>
                                        <span>Disponible immédiatement</span>
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <img src="/vehicles/front.png" alt="Vue avant" className="rounded"/>
                                    <img src="/vehicles/inside.png" alt="Vue intérieur" className="rounded"/>
                                    <img src="/vehicles/back.png" alt="Vue arrière" className="rounded"/>
                                </div>
                            </div>

                            {/* Specifications Grid */}
                            <div className="space-y-4 mt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center bg-gray-50 p-3 rounded">
                                        <Car className="text-yellow-500 mr-3"/>
                                        <div>
                                            <div className="font-medium">Transmission</div>
                                            <div className="text-sm text-gray-600">Automatique 9G-Tronic</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded">
                                        <Fuel className="text-yellow-500 mr-3"/>
                                        <div>
                                            <div className="font-medium">Carburant</div>
                                            <div className="text-sm text-gray-600">Diesel - 5.2L/100km</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded">
                                        <Users className="text-yellow-500 mr-3"/>
                                        <div>
                                            <div className="font-medium">Capacité</div>
                                            <div className="text-sm text-gray-600">5 passagers</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded">
                                        <SquareAsterisk className="text-yellow-500 mr-3"/>
                                        <div>
                                            <div className="font-medium">Portes</div>
                                            <div className="text-sm text-gray-600">4 portes</div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/* Quote Details Section */}
                            <div className="border-t mt-6 pt-4">
                                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Receipt className="text-yellow-500"/>
                                    Détails du devis
                                </h3>

                                <div className="space-y-3">
                                    {[
                                        {label: "Renonciation standard", amount: "0,00"},
                                        {label: "Renonciation à la protection contre le vol", amount: "0,00"},
                                        {label: "Super renonciation", amount: "0,00"},
                                        {label: "Supplément aéroportuaire", amount: "0,00"},
                                        {label: "T.V.A.", amount: "0,00"},
                                        {label: "5 x Tarif de location - Jours", amount: "750,00", highlight: true}
                                    ].map((item, index) => (
                                        <div key={index}
                                             className={`flex justify-between items-center ${item.highlight ? 'font-semibold' : ''}`}>
                                            <span className="text-gray-600">{item.label}</span>
                                            <span className="text-right">{item.amount} €</span>
                                        </div>
                                    ))}

                                    {/* Highlighted Supplements Section */}
                                    {selectedExtras.length > 0 && (
                                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-4">
                                            <h4 className="font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                                                <Plus size={16}/>
                                                Suppléments choisis
                                            </h4>
                                            {selectedExtras.map(extraId => {
                                                const extra = extras.find(e => e.id === extraId);
                                                return (
                                                    <div key={extraId}
                                                         className="flex justify-between items-center text-yellow-800">
                                                        <span>{extra?.title}</span>
                                                        <span>{extra?.price}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {[
                                        {label: "Conducteur supplémentaire", amount: "150,00"},
                                        {label: "T.V.A. (20%)", amount: "180,00"}
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-600">{item.label}</span>
                                            <span className="text-right">{item.amount} €</span>
                                        </div>
                                    ))}

                                    <div
                                        className="border-t pt-3 mt-3 flex justify-between items-center font-bold text-lg">
                                        <span>Total</span>
                                        <span className="text-yellow-600">1080,00 €</span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
