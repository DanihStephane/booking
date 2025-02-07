"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChevronRight, ShoppingCart, Check, Clock, Receipt, ChevronDown, Car, Fuel, Users, SquareAsterisk, CheckCircle, User, Mail, Phone, Globe, CreditCard,
    Lock,Shield
 } from 'lucide-react';
 import {Checkbox} from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { useState } from "react";
import { LoginFormData } from "@/features/auth/schemas/loginSchema";

import Link from "next/link";

import {PickupReturnCard} from './PickupReturnCard';



export const StepperFour = ({ onNextStep }: { onNextStep: () => void }) => {
    const [showLoginDialog, setShowLoginDialog] = useState(true);
const { login, isLoading } = useLogin();

const handleLogin = async (formData: LoginFormData) => {
  await login({
    email: formData.email,
    password: formData.password
  });
  setShowLoginDialog(false);
};

// Add this state at the top of the component
const [isTermsExpanded, setIsTermsExpanded] = useState(false);

// Add this state alongside the existing one
const [isPrivacyExpanded, setIsPrivacyExpanded] = useState(false);



    return (

        
        <div className="grid grid-cols-[2fr,1fr] gap-8">
           <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
  <DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
      <div className="flex flex-col items-center space-y-2">
        <img 
          src="/logo_hertz_app.png" 
          alt="Hertz Logo" 
          className="h-12 w-auto"
        />
        <div className="text-center">
          <DialogTitle className="text-xl font-bold">Madagascar</DialogTitle>
          <p className="text-sm text-gray-500">Location de voitures</p>
        </div>
      </div>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          className="transition-all border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
        />
      </div>
      <div className="space-y-2">
        <Input
          id="password"
          type="password"
          placeholder="Mot de passe"
          className="transition-all border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
        />
      </div>
      <Button 
        onClick={() => handleLogin({ email: "", password: "" })}
        disabled={isLoading}
        className="bg-yellow-400 hover:bg-yellow-500 text-black"
      >
        {isLoading ? "Connexion..." : "Se connecter"}
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        Pas encore de compte ?{" "}
        <Link href="/auth/register" className="text-yellow-600 hover:underline font-medium">
          Créer un compte
        </Link>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300"/>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Ou</span>
        </div>
      </div>

      <Button 
        variant="outline"
        onClick={() => setShowLoginDialog(false)}
        className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
      >
        Je souhaite juste faire un devis
      </Button>
    </div>
  </DialogContent>
</Dialog>

            {/* Left Column - Personal Information */}
            <Card className="mb-8 shadow-xl">
                <CardContent className="p-6">
                    <div className="bg-white rounded-xl space-y-6 border-2 border-yellow-400 p-5">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Informations pour les locataires</h3>
                                <p className="text-sm text-gray-500">Remplissez vos coordonnées pour finaliser la devis</p>
                            </div>
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <Users size={24} className="text-yellow-600"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 group">
                            <label className="text-sm font-medium text-gray-700 flex items-center justify-between group-hover:text-yellow-600 transition-colors">
    <div className="flex items-center">
        <User size={16} className="mr-2"/>
        Nom
    </div>
    <span className="text-red-500 text-xs">*requis</span>
</label>
                                <Input
                                    placeholder="Votre nom"
                                    className="transition-all border-2 border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300"

/>
                            </div>

                            <div className="space-y-2 group">
                            <label className="text-sm font-medium text-gray-700 flex items-center justify-between group-hover:text-yellow-600 transition-colors">
    <div className="flex items-center">
        <User size={16} className="mr-2"/>
        Prénom
    </div>
    <span className="text-red-500 text-xs">*requis</span>
</label>
                                <Input
                                    placeholder="Votre prénom"
                                    className="transition-all border-2 border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300"

 />
                            </div>

<div className="space-y-2 group col-span-2">
<label className="text-sm font-medium text-gray-700 flex items-center justify-between group-hover:text-yellow-600 transition-colors">
    <div className="flex items-center">
        <Mail size={16} className="mr-2"/>
        Email
    </div>
    <span className="text-red-500 text-xs">*requis</span>
</label>
    <div className="relative">
        <Input
            placeholder="votre.email@exemple.com"
            type="email"
            className="transition-all border-2 border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 pl-10"
        />
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
    </div>
</div>

<div className="space-y-2 group col-span-2">
<label className="text-sm font-medium text-gray-700 flex items-center justify-between group-hover:text-yellow-600 transition-colors">
    <div className="flex items-center">
        <Phone size={16} className="mr-2"/>
        Téléphone
    </div>
    <span className="text-red-500 text-xs">*requis</span>
</label>
    <div className="flex gap-2">
    <select className="h-10 w-24 rounded-md border-2 border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 focus-visible:ring-yellow-400 focus-visible:ring-2 px-3 text-sm transition-all">
    <option value="+33">🇫🇷 +33</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+49">🇩🇪 +49</option>
</select>

        <div className="relative flex-1">
            <Input
                placeholder="XX XX XXX XX"
                
className="transition-all border-2 border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300"
/>
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
        </div>
    </div>
</div>


                

                        
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg space-y-6 mt-5">
                                    <div className="space-y-4">
                                        {/* Title section */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Lock className="text-yellow-600" size={20}/>
                                            <h4 className="font-medium text-gray-900">Conditions de réservation</h4>
                                        </div>


                                        {/* Terms checkbox */}
                                        <div
                                            className="flex items-start space-x-3 p-3 bg-white rounded-md hover:bg-gray-50 transition-colors">
                                            <Checkbox
                                                id="terms"
                                                className="mt-1 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                                                required
                                            />
                                            <div className="space-y-1">
                                                <label htmlFor="terms"
                                                       className="text-sm font-medium text-gray-700 cursor-pointer">
                                                    J'accepte les conditions générales
                                                </label>
                                                <p className="text-xs text-gray-500">
                                                    En cochant cette case, j'accepte les{' '}
                                                    <a href="#" className="text-yellow-600 hover:underline">conditions générales de devis</a>
                                                    {' '}et la{' '}
                                                    <a href="#" className="text-yellow-600 hover:underline">politique de confidentialité</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-3 bg-white rounded-md hover:bg-gray-50 transition-colors">
    <Checkbox
        id="remember"
        className="mt-1 border-gray-300 text-yellow-600 focus:ring-yellow-500"
    />
    <div className="space-y-1">
        <label htmlFor="remember"
               className="text-sm font-medium text-gray-700 cursor-pointer">
            Abonnez-vous à nos dernières offres
        </label>
        <p className="text-xs text-gray-500">
            Recevez nos meilleures offres et promotions directement dans votre boîte mail
        </p>
    </div>
</div>

                                    </div>
                                </div>


                                <Button
  onClick={onNextStep}
  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black h-12 text-lg font-bold flex items-center justify-center gap-2 mt-5"
>
  <CheckCircle className="h-5 w-5" />
  Demander mon devis
  <ChevronRight className="h-5 w-5" />
</Button>


<div className="mt-6 space-y-4">
<div className="bg-gray-50 rounded-lg p-4 border-2 border-yellow-400">

    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Lock className="text-yellow-600 h-5 w-5" />
        <h4 className="font-semibold text-gray-900">Conditions générales de location</h4>
      </div>
      
      <p className="text-sm text-gray-600">
        En effectuant cette demande de devis, vous acceptez nos conditions générales de location, incluant nos politiques de protection des données et d'assurance.
      </p>
      
      <div className={`overflow-hidden transition-all duration-300 ${isTermsExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="space-y-3 pt-3 text-sm text-gray-600">
          <p>• Tous les conducteurs doivent être âgés d'au moins 21 ans et posséder un permis de conduire valide depuis plus de 2 ans</p>
          <p>• Une caution sera demandée lors de la prise du véhicule via carte bancaire</p>
          <p>• Le véhicule doit être restitué avec le même niveau de carburant qu'à la prise en charge</p>
          <p>• L'assurance tous risques est incluse dans le tarif de base</p>
          <p>• Les modifications de réservation sont possibles jusqu'à 48h avant le début de la location</p>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        onClick={() => setIsTermsExpanded(!isTermsExpanded)}
        className="w-full flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
      >
        {isTermsExpanded ? 'Afficher moins' : 'Afficher plus'}
        <ChevronDown className={`h-4 w-4 transition-transform ${isTermsExpanded ? 'rotate-180' : ''}`} />
      </Button>
    </div>
  </div>
</div>

<div className="mt-4 bg-gray-50 rounded-lg p-4 border-2 border-yellow-400">
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <Shield className="text-yellow-600 h-5 w-5" />
      <h4 className="font-semibold text-gray-900">Politique de confidentialité</h4>
    </div>
    
    <p className="text-sm text-gray-600">
      Nous accordons une importance capitale à la protection de vos données personnelles et à la transparence de leur utilisation.
    </p>
    
    <div className={`overflow-hidden transition-all duration-300 ${isPrivacyExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
      <div className="space-y-3 pt-3 text-sm text-gray-600">
        <p>• Vos données personnelles sont stockées de manière sécurisée et ne sont jamais vendues à des tiers</p>
        <p>• Nous utilisons vos informations uniquement pour traiter votre location et améliorer nos services</p>
        <p>• Vous disposez d'un droit d'accès, de modification et de suppression de vos données</p>
        <p>• Les paiements sont sécurisés via un système de cryptage SSL</p>
        <p>• Nous conservons vos données pendant la durée légale requise</p>
      </div>
    </div>
    
    <Button 
      variant="ghost" 
      onClick={() => setIsPrivacyExpanded(!isPrivacyExpanded)}
      className="w-full flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
    >
      {isPrivacyExpanded ? 'Afficher moins' : 'Afficher plus'}
      <ChevronDown className={`h-4 w-4 transition-transform ${isPrivacyExpanded ? 'rotate-180' : ''}`} />
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
