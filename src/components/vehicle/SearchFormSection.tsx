import { MapPin, Calendar as CalendarIcon, Search, Clock } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from 'next/navigation';
import { ROUTES } from "@/shared/config/routes";
import { vehicles } from "@/features/vehicle/constants/vehicleData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from 'next/link';

export const SearchFormSection = () => {
  const router = useRouter();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [departureTime, setDepartureTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const params = useParams();
  const locale = params.locale as string;

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2).toString().padStart(2, '0');
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const handleSearch = () => {
    const searchData = {
      pickupLocation,
      dropoffLocation: isRoundTrip ? pickupLocation : dropoffLocation,
      departureDate: departureDate ? format(new Date(departureDate), "yyyy-MM-dd") : '',
      returnDate: returnDate ? format(new Date(returnDate), "yyyy-MM-dd") : '',
      departureTime,
      returnTime
    };

    const url = `/${locale}${ROUTES.VEHICLES}?` +
        `pickupLocation=${encodeURIComponent(searchData.pickupLocation)}&` +
        `dropoffLocation=${encodeURIComponent(searchData.dropoffLocation)}&` +
        `departureDate=${encodeURIComponent(searchData.departureDate)}&` +
        `departureTime=${encodeURIComponent(searchData.departureTime)}&` +
        `returnDate=${encodeURIComponent(searchData.returnDate)}&` +
        `returnTime=${encodeURIComponent(searchData.returnTime)}`;

    router.push(url);
  };

  const agencyNames = Array.from(new Set(vehicles.map(vehicle => vehicle.agency.name)));
  console.log(agencyNames);

  return (
    <section className="relative -mt-20">
      <Container>
        <Card className="p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-end">
            {/* Location section */}
            <div className="flex-1 md:w-4/12">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <Label>Lieu de prise en charge</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Label>Retour au même endroit</Label>
                  <Switch checked={isRoundTrip} onCheckedChange={setIsRoundTrip} />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={pickupLocation} onValueChange={setPickupLocation}>
                  <SelectTrigger className={`h-[40px] border-yellow-400 ${isRoundTrip ? 'w-full' : 'w-1/2'}`}>
                    <SelectValue placeholder="Sélectionnez un emplacement" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-slate-950">
                    {agencyNames.map((agency) => (
                      <SelectItem key={agency} value={agency}>
                        {agency}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {!isRoundTrip && (
                  <Select value={dropoffLocation} onValueChange={setDropoffLocation}>
                    <SelectTrigger className={`h-[40px] border-yellow-400 ${isRoundTrip ? 'w-full' : 'w-1/2'}`}>
                      <SelectValue placeholder="Ville ou aéroport de dépose" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-950">
                      {agencyNames.map((agency) => (
                        <SelectItem key={agency} value={agency}>
                          {agency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

            </div>

            {/* Departure section */}
            <div className="md:w-3/12">
              <div className="flex gap-2">
                <div className="w-[70%]">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <Label>Date de départ</Label>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full h-[40px] justify-start text-left font-normal", !departureDate && "text-muted-foreground")}>
                        {departureDate ? format(departureDate, "dd/MM/yyyy") : "Sélectionner une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white dark:bg-slate-950">
                      <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-[30%]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <Label>Heure</Label>
                  </div>
                  <Select value={departureTime} onValueChange={setDepartureTime}>
                  <SelectTrigger className="w-full border-yellow-400">

                      <SelectValue placeholder="Heure" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-950">
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Return section */}
            <div className="md:w-3/12">
              <div className="flex gap-2">
                <div className="w-[70%]">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <Label>Date de retour</Label>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full h-[40px] justify-start text-left font-normal", !returnDate && "text-muted-foreground")}>
                        {returnDate ? format(returnDate, "dd/MM/yyyy") : "Sélectionner une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white dark:bg-slate-950">
                      <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-[30%]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <Label>Heure</Label>
                  </div>
                  <Select value={returnTime} onValueChange={setReturnTime}>
                  <SelectTrigger className="w-full border-yellow-400">

                      <SelectValue placeholder="Heure" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-950">
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Search button */}
            <div className="md:w-2/12">
              <Button className="w-full h-[40px] text-sm whitespace-nowrap" onClick={handleSearch} asChild>
                <Link href={`/${locale}${ROUTES.BOOKING.ROOT}`}>
                  <Search className="w-4 h-4 mr-2" />
                  <span className="font-bold">Rechercher</span>
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};