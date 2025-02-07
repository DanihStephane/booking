"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { SearchFormSection } from "@/components/vehicle/SearchFormSection"
import { VehicleTypesSection } from "@/components/vehicle/VehicleTypesSection"
import { FleetSection } from "@/components/sections/FleetSection"
import { ServicesSection } from "@/components/services/ServicesSection"
import { ArticlesSection } from "@/components/articles/ArticlesSection"


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchFormSection />
      <VehicleTypesSection />
      <FleetSection />
      <ServicesSection />
      <ArticlesSection />
    </div>
  )
}

