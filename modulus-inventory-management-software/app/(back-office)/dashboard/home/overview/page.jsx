import CurrentStock from "@/components/dashboard/CurrentStock";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";
import { getData } from "@/lib/getData";
import React from "react";
import { Warehouse } from "lucide-react";

export default async function Dashboard() {
  const items = await getData("items");
  const warehouses = await getData("warehouse");

  return (
    <div>
      <DashboardBanner />
      <SalesOverview />
      <CurrentStock items={items} title="Available Stock Items" />
      <h2 className="p-8 text-xl">Warehouse base Stock Items</h2>
      {warehouses?.map((warehouse, i) => {
        return <CurrentStock items={warehouse.items} title={warehouse.title} />;
      })}
    </div>
  );
}
