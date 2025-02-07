import { Paragraph } from "@/components/ui/typography";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type VehicleFiltersProps = {
    filters: {
        vehicleType: string;
        maxPrice: string;
        transmission: string;
    };
    onFilterChange: (filterType: string, value: string) => void;
};

export const VehicleFilters = ({ filters, onFilterChange }: VehicleFiltersProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
                <Paragraph className="font-medium">Types de véhicules</Paragraph>
                <select
                    className="w-full p-2 border rounded-md bg-white"
                    value={filters.vehicleType}
                    onChange={(e) => onFilterChange('vehicleType', e.target.value)}
                >
                    <option value="all">Tous les types</option>
                    <option value="Voitures légères">Voitures légères</option>
                    <option value="Voitures utilitaires">Voitures utilitaires</option>
                    <option value="4WD-SUV-Minivan">4WD-SUV-Minivan</option>
                </select>
            </div>

            <div className="space-y-2">
                <Paragraph className="font-medium">Prix maximum</Paragraph>
                <select
                    className="w-full p-2 border rounded-md bg-white"
                    value={filters.maxPrice}
                    onChange={(e) => onFilterChange('maxPrice', e.target.value)}
                >
                    <option value="all">Tous les prix</option>
                    <option value="100000">100000Ar / jour</option>
                    <option value="150000">150000Ar / jour</option>
                    <option value="200000">200000Ar / jour</option>
                </select>
            </div>

            <div className="space-y-2">
                <Paragraph className="font-medium">Transmission</Paragraph>
                <select
                    className="w-full p-2 border rounded-md bg-white"
                    value={filters.transmission}
                    onChange={(e) => onFilterChange('transmission', e.target.value)}
                >
                    <option value="all">Toutes</option>
                    <option value="Manuelle">Manuelle</option>
                    <option value="Automatique">Automatique</option>
                </select>
            </div>
        </div>
    );
};
