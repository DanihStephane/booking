"use client";
import { useState, useMemo} from "react";
import { Container } from "@/components/layout/Container";
import { H2 } from "@/components/ui/typography";
import { VehicleCard } from "./VehicleCard";
import { VehicleFilters } from "./VehicleFilters";
import { VehiclePagination } from "./VehiclePagination";
import { vehicles } from "../constants/vehicleData";
import { useSearchParams } from 'next/navigation';
import {VehicleSearchResume} from "@/features/vehicle/components/VehicleSearchResume";
const ITEMS_PER_PAGE = 6;

export const VehicleCatalog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const searchParams = useSearchParams();
    const location = searchParams.get('pickupLocation');
    const dropoffLocation = searchParams.get('dropoffLocation');
    const departureDate = searchParams.get('departureDate');
    const returnDate = searchParams.get('returnDate');
    const [filters, setFilters] = useState({
        vehicleType: 'all',
        maxPrice: 'all',
        transmission: 'all'
    });

    const filteredVehicles = useMemo(() => {
        return vehicles.filter(vehicle => {
            const typeMatch = filters.vehicleType === 'all' || vehicle.vehicleType === filters.vehicleType;
            const priceMatch = filters.maxPrice === 'all' || vehicle.price <= parseInt(filters.maxPrice);
            const transmissionMatch = filters.transmission === 'all' || vehicle.transmission === filters.transmission;
            const locationMatch = !location || vehicle.agency.name.toLowerCase().includes(location.toLowerCase());

            return typeMatch && priceMatch && transmissionMatch && locationMatch;
        });
    }, [filters, location]);

    const paginatedVehicles = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredVehicles, currentPage]);

    const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        setCurrentPage(1);
    };
    const hasSearchParams = Boolean(
        searchParams.get('pickupLocation') ||
        searchParams.get('dropoffLocation') ||
        searchParams.get('departureDate') ||
        searchParams.get('returnDate')
    );
    return (
        <section className="py-16 bg-muted/30">
            <Container>
                <div className="max-w-7xl mx-auto space-y-12">
                    {hasSearchParams && <VehicleSearchResume />}
                    <H2 className="text-center mb-8">Notre flotte de véhicules</H2>
                    <VehicleFilters
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                        {paginatedVehicles.map(vehicle => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle}/>
                        ))}
                    </div>
                    <VehiclePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </Container>
        </section>
    );
};
