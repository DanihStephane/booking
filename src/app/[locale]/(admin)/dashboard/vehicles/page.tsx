import { VehiclesDataTable } from "../../components/vehicles/VehiclesDataTable";
import { AddVehicleButton } from "../../components/vehicles/AddVehicleModal"
import { useTranslations } from "next-intl";

export default function VehiclesPage() {
  const t = useTranslations("admin.vehicles");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <AddVehicleButton />
      </div>
      <VehiclesDataTable />
    </div>
  );
}
