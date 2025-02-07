import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import { Car, Banknote, Gauge, Fuel, Power } from "lucide-react";
import {Link} from "@/i18n/routing";
import {ROUTES} from "@/shared/config/routes";
import { Vehicle } from "../types/types";

export const VehicleCard = ({vehicle}: { vehicle: Vehicle }) => {
    return (
        <Card>
            <CardHeader className="relative p-6">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-md"
                />
                <span className="absolute top-8 left-8 bg-secondary/80 text-secondary-foreground px-4 py-1 rounded-full text-sm">
                    {vehicle.type}
                </span>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <H3 className="text-center">{vehicle.name}</H3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Car className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Type</span>
                        </div>
                        <span>{vehicle.vehicleType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Banknote className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Prix/jour</span>
                        </div>
                        <span>{vehicle.price.toLocaleString()} Ar</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Transmission</span>
                        </div>
                        <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Power className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Puissance</span>
                        </div>
                        <span>{vehicle.power}</span>
                    </div>
                </div>
                <Button className="w-full" size="lg">
                    <Link href={ROUTES.BOOKING.ROOT} className="text-white font-bold">
                        Reserver
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};
