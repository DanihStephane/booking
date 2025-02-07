"use client";
import React from 'react';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
    Car,
    CheckCircle,
    ShoppingCart,
    Clock,
    ChevronRight,
    Check,
    MapPin,
    Calendar,
    Store,
    ChevronDown,
    Zap,
    Settings,
    CreditCard,
} from 'lucide-react';
import {vehicles} from "@/features/vehicle/constants/vehicleData";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import { PickupReturnCard } from './PickupReturnCard';



export const StepperTwo = ({onNextStep}: { onNextStep: () => void }) => {

// Inside component:
    const [vehicleType, setVehicleType] = useState('Tous les véhicules');

    const [priceRange, setPriceRange] = useState('all');
    const [transmission, setTransmission] = useState('all');
    return (
        <div className="grid grid-cols-[2fr,1fr] gap-8">
            <Card className="mb-8 shadow-xl">
                {/* Liste des vehicules disponible */}
                <CardContent>
                    <div className="bg-gray-50 p-6 rounded-xl mb-8 mt-5">
                        <div className="space-y-6">
                            {/* Vehicle Type Filters */}
                            <div>
                                <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
                                    <Car size={18} className="text-yellow-500"/>
                                    Type de véhicule
                                </h3>
                                <div className="flex items-center gap-3">
                                    {["Tous les véhicules", "Voitures légères", "Voitures utilitaires", "4WD-SUV-Minivan"].map((type) => (
                                        <Button
                                            key={type}
                                            variant={vehicleType === type ? "default" : "outline"}
                                            className={`
      rounded-full px-4 py-2 text-sm font-medium flex-1
      ${vehicleType === type
                                                ? 'bg-yellow-500 text-white hover:bg-yellow-600 border-2 border-yellow-600'
                                                : 'hover:bg-yellow-50 border-2 border-yellow-300'
                                            }
      transition-all duration-200 ease-in-out
    `}
                                            onClick={() => setVehicleType(type)}
                                        >
                                            {type}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Dropdowns in full width */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <CreditCard size={16} className="text-yellow-500"/>
                                        Budget
                                    </label>
                                    <Select onValueChange={(value) => setPriceRange(value)}>
                                        {/* For the Select components */}
                                        <SelectTrigger
                                            className="w-full border-2 border-yellow-300 hover:border-yellow-400 transition-colors focus:ring-yellow-500 focus:border-yellow-500">
                                            <SelectValue placeholder="Trier par prix"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hight">Prix le plus bas</SelectItem>
                                            <SelectItem value="down">Prix le plus haut</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Settings size={16} className="text-yellow-500"/>
                                        Transmission
                                    </label>
                                    <Select onValueChange={(value) => setTransmission(value)}>
                                        {/* For the Select components */}
                                        <SelectTrigger
                                            className="w-full border-2 border-yellow-300 hover:border-yellow-400 transition-colors focus:ring-yellow-500 focus:border-yellow-500">
                                            <SelectValue placeholder="Type de transmission"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Manuelle">Manuelle</SelectItem>
                                            <SelectItem value="Automatique">Automatique</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        {vehicles.map((vehicle) => (
                            <div key={vehicle.id}
                                 className="flex gap-6 p-4 border rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-1/3 relative">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="rounded-lg object-cover w-full h-48"
                                    />
                                    <span
                                        className="absolute top-2 left-2 bg-secondary/80 text-secondary-foreground px-4 py-1 rounded-full text-sm">
    {vehicle.type}
  </span>
                                </div>


                                <div className="w-2/3 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold">{vehicle.name}</h3>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Car size={16} className="text-yellow-500"/>
                                            <span className="text-sm">Type: {vehicle.vehicleType}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ShoppingCart size={16} className="text-yellow-500"/>
                                            <span className="text-sm">Prix/jour: {vehicle.price}€</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Settings size={16} className="text-yellow-500"/>
                                            <span className="text-sm">Transmission: {vehicle.transmission}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Zap size={16} className="text-yellow-500"/>
                                            <span className="text-sm">Puissance: 200CV </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button
                                            onClick={() => onNextStep()}
                                            className="bg-yellow-500 hover:bg-yellow-600 font-bold"
                                        >
                                            Sélectionner
                                            <ChevronRight className="ml-2 h-4 w-4"/>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>

            </Card>

            <Card className="mb-8 shadow-xl h-fit top-4">
            <PickupReturnCard />
            </Card>
        </div>

    );
};
