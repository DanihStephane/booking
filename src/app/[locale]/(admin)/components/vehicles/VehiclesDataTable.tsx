"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Edit, Trash, Car } from "lucide-react";
import Image from "next/image";

const columns = [
  { key: "image", sortable: false },
  { key: "name", sortable: true },
  { key: "brand", sortable: true },
  { key: "model", sortable: true },
  { key: "price", sortable: true },
  { key: "available", sortable: true },
  { key: "actions", sortable: false },
];

const sampleData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800&auto=format&fit=crop&q=60",
    name: "SUV Premium",
    brand: "Toyota",
    model: "RAV4",
    price: "€45,000",
    available: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
    name: "Berline Luxe",
    brand: "Mercedes",
    model: "Classe C",
    price: "€55,000",
    available: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop&q=60",
    name: "Sport Car",
    brand: "BMW",
    model: "M4",
    price: "€75,000",
    available: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60",
    name: "Coupé Sport",
    brand: "Audi",
    model: "RS5",
    price: "€68,000",
    available: true,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop&q=60",
    name: "Citadine",
    brand: "Volkswagen",
    model: "Golf",
    price: "€32,000",
    available: true,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1570733117311-d990c3816c47?w=800&auto=format&fit=crop&q=60",
    name: "SUV Compact",
    brand: "Peugeot",
    model: "3008",
    price: "€38,000",
    available: true,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60",
    name: "Break",
    brand: "Volvo",
    model: "V60",
    price: "€48,000",
    available: false,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
    name: "Berline Premium",
    brand: "Lexus",
    model: "IS",
    price: "€52,000",
    available: true,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop&q=60",
    name: "Sportive",
    brand: "Porsche",
    model: "Cayman",
    price: "€85,000",
    available: true,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=60",
    name: "SUV Luxe",
    brand: "Range Rover",
    model: "Evoque",
    price: "€62,000",
    available: true,
  },
];

export function VehiclesDataTable() {
  const t = useTranslations("admin.vehicles.table");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-4">
      <Input
        placeholder={t("search")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>
                  {t(`columns.${column.key}`)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    {/*   <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    /> */}
                    <Car className="h-10 w-10 text-gray-500" />
                  </div>
                </TableCell>
                <TableCell>{vehicle.name}</TableCell>
                <TableCell>{vehicle.brand}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.price}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      vehicle.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {vehicle.available ? "Disponible" : "Indisponible"}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
