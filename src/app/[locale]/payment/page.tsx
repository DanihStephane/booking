"use client";

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreditCard,
  Shield,
  Lock,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar,
  User,
  MapPin,
  Car,
  Receipt,
  Info,
  AlertCircle
} from 'lucide-react';

const PaymentPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header with Floating Effect */}
            <div className="text-center space-y-4 animate-fade-in">
              <Badge className="bg-yellow-400/90 text-black px-6 py-2 text-sm rounded-full">
                Devis #2135498456
              </Badge>
              <h1 className="text-5xl font-black text-white drop-shadow-lg">
                Finalisation de votre réservation
              </h1>
              <p className="text-white/80 text-lg">
                Plus qu'une étape pour obtenir votre véhicule
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Résumé de la réservation avec effet verre */}
              <Card className="lg:col-span-1 bg-white/95 backdrop-blur-xl shadow-2xl border-0">
                <CardHeader className="border-b border-gray-100 pb-6">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Receipt className="text-yellow-500" />
                    Détails de la réservation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Car className="text-yellow-600" size={24} />
                        <div>
                          <div className="font-semibold">Mercedes Classe C</div>
                          <div className="text-sm text-gray-600">Premium Sedan</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-yellow-500" size={20} />
                          <span>Date de début</span>
                        </div>
                        <span className="font-medium">15 Mars 2024</span>
                      </div>

                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <Clock className="text-yellow-500" size={20} />
                          <span>Durée</span>
                        </div>
                        <span className="font-medium">5 jours</span>
                      </div>

                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <MapPin className="text-yellow-500" size={20} />
                          <span>Agence</span>
                        </div>
                        <span className="font-medium">Antananarivo</span>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Location du véhicule</span>
                        <span className="font-medium">1000 €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Assurance premium</span>
                        <span className="font-medium">150 €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Options</span>
                        <span className="font-medium">100 €</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                        <span>Total</span>
                        <span className="text-yellow-600">1250 €</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Formulaire de paiement avec effet verre */}
              <Card className="lg:col-span-2 bg-white/95 backdrop-blur-xl shadow-2xl border-0">
                <CardHeader>
                  <div className="flex justify-between items-center mb-6">
                    <CardTitle className="text-xl">Paiement sécurisé</CardTitle>
                    <div className="flex gap-3">
                      {['visa', 'mastercard', 'amex'].map((card) => (
                        <div key={card} className="group transition-all duration-300 hover:scale-110">
                          <div className="bg-white/80 p-2 rounded-lg shadow-sm">
                            <img src={`/payment/${card}.svg.png`} alt={card} className="h-8" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <div>
                        <Label className="flex items-center gap-2">
                          <User size={16} className="text-yellow-500" />
                          Titulaire de la carte
                        </Label>
                        <Input 
                          className="mt-1 bg-white/50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <Label className="flex items-center gap-2">
                          <CreditCard size={16} className="text-yellow-500" />
                          Numéro de carte
                        </Label>
                        <Input 
                          className="mt-1 bg-white/50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Date d'expiration</Label>
                          <Input 
                            className="mt-1 bg-white/50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label>CVV</Label>
                          <Input 
                            className="mt-1 bg-white/50 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                            type="password"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Payer 1250 €
                        <ArrowRight className="ml-2" size={20} />
                      </Button>

                      <div className="flex justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Shield className="text-green-500" size={18} />
                          <span>Paiement sécurisé</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Lock className="text-green-500" size={18} />
                          <span>Cryptage SSL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
