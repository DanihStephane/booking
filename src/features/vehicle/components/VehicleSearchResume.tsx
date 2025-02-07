import { useSearchParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

export const VehicleSearchResume = () => {
    const searchParams = useSearchParams();
    const pickupLocation = searchParams.get('pickupLocation');
    const dropoffLocation = searchParams.get('dropoffLocation');
    const departureDate = searchParams.get('departureDate');
    const returnDate = searchParams.get('returnDate');

    return (
        <Card className="p-4 bg-white shadow-sm mb-8">
            <div className="flex flex-wrap justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Lieu de prise en charge</p>
                        <p className="font-medium">{pickupLocation || 'Non spécifié'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Lieu de dépose</p>
                        <p className="font-medium">{dropoffLocation || pickupLocation || 'Non spécifié'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Date de départ</p>
                        <p className="font-medium">{departureDate || 'Non spécifiée'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Date de retour</p>
                        <p className="font-medium">{returnDate || 'Non spécifiée'}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

