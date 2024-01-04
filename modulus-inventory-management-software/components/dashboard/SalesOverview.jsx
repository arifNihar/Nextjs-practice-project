import InventorySummaryCard from "./InventorySummaryCard";
import SalesActivityCard from "./SalesActivityCard";
import { CheckCircle2, Truck, PackageCheck, BadgeCent } from "lucide-react";
export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      title: "To be Shipped",
      number: 5,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
      icon: <Truck className="w-4 h-4" />,
    },
    {
      title: "To be Delevered",
      number: 10,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
      icon: <PackageCheck className="w-4 h-4" />,
    },
    {
      title: "To be Invoiced",
      number: 8,
      unit: "Pkgs",
      href: "#",
      color: "text-amber-600",
      icon: <BadgeCent className="w-4 h-4" />,
    },
  ];

  const inventorySummary = [
    {
      title: "QUANTITY IN HAND",
      number: 0,
    },
    {
      title: "QUANTITY TO BE RECEIVED",
      number: 0,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 border-b bg-indigo-50 border-slate-200">
      <div className="p-8 py-16 border-r lg:py-8 col-span-full lg:col-span-8 border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="grid gap-3 pr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {salesActivity.map((item, idx) => {
            return <SalesActivityCard item={item} key={idx} />;
          })}
        </div>
      </div>

      <div className="p-8 col-span-full lg:col-span-4">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="flex flex-col gap-3">
          {inventorySummary.map((item, idx) => {
            return <InventorySummaryCard item={item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
